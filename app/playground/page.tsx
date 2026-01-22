// File: app/playground/page.tsx
// What: Interactive OSF playground with Monaco editor
// Why: Allow users to experiment with OSF without installation
// Related: app/api/convert/, components/Playground.tsx

'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import {
  parse,
  type ContentBlock,
  type OSFDocument,
  type TextRun,
  type Image as OSFImage,
  type Link as OSFLink,
  type MetaBlock
} from 'omniscript-parser';
import Navigation from '@/components/Navigation';

const MonacoEditor = dynamic(() => import('@monaco-editor/react'), { ssr: false });

const DEFAULT_OSF = `@meta {
  title: "My First Document";
  author: "Your Name";
  date: "2025-10-15";
  theme: corporate;
}

@doc {
  # Welcome to OmniScript
  
  This is a **live playground**. Edit the code on the left and see results on the right.
  
  ## Features
  
  - Real-time parsing
  - Syntax validation
  - Multi-format export
  - 10+ professional themes
}

@slide {
  title: "Quick Start";
  layout: TitleAndContent;
  
  ## Try these features:
  
  - Edit this text
  - Add new blocks
  - Change the theme
  - Export to PDF/DOCX
}

@sheet {
  name: "Data";
  cols: [Item, Value];
  
  A1 = "Item";
  B1 = "Value";
  A2 = "Revenue";
  B2 = 100;
  A3 = "Costs";
  B3 = 60;
  A4 = "Profit";
  B4 = =B2-B3;
}

@chart {
  type: "bar";
  title: "Sample Chart";
  data: [
    { label: "Q1"; values: [100]; },
    { label: "Q2"; values: [150]; },
    { label: "Q3"; values: [200]; }
  ];
}`;

export default function PlaygroundPage() {
  const [code, setCode] = useState(DEFAULT_OSF);
  const [output, setOutput] = useState<'preview' | 'ast' | 'errors'>('preview');
  const [result, setResult] = useState('');
  const [isExporting, setIsExporting] = useState(false);
  const apiBase = (process.env.NEXT_PUBLIC_OSF_API_BASE || '').replace(/\/$/, '');

  const handleParse = () => {
    try {
      const doc = parse(code);
      
      if (output === 'ast') {
        setResult(JSON.stringify(doc, null, 2));
      } else if (output === 'preview') {
        setResult(generatePreviewHTML(doc));
      }
    } catch (error: unknown) {
      setOutput('errors');
      const message = error instanceof Error ? error.message : 'Unexpected error';
      setResult(message);
    }
  };

  const handleExport = async (format: 'pdf' | 'docx' | 'pptx' | 'xlsx') => {
    setIsExporting(true);
    try {
      const apiUrl = apiBase
        ? `${apiBase}/api/convert/${format}`
        : `/api/convert/${format}`;
      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ osfCode: code, theme: 'corporate' })
      });
      
      if (!response.ok) {
        let message = response.statusText;
        try {
          const data = await response.json();
          if (data?.error) {
            message = data.error;
          }
        } catch {
          // ignore parse errors
        }
        throw new Error(`Export failed: ${message}`);
      }
      
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `document.${format}`;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error: unknown) {
      const message = error instanceof Error ? error.message : 'Unexpected error';
      alert(`Export error: ${message}`);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-noir-white">
      <Navigation />

      {/* Page Title */}
      <div className="border-b-2 border-noir-black p-6 mt-16">
        <h1 className="text-3xl font-bold font-mono">OmniScript Playground</h1>
        <p className="text-sm text-gray-600 font-mono">Experiment with OSF syntax and see live preview</p>
      </div>

      {/* Export Status Banner */}
      <div className="bg-green-100 border-2 border-green-600 p-6 m-6">
        <h2 className="font-mono font-bold text-xl text-green-900 mb-3">
          ✅ Export Functionality: Enabled
        </h2>
        <p className="font-mono text-sm text-green-900 mb-3">
          Server-side export is live. You can now export OSF to PDF/DOCX/PPTX/XLSX directly from the playground.
        </p>
        <div className="bg-green-200 p-3 border border-green-700">
          <p className="font-mono text-xs text-green-900 font-bold mb-2">
            API Endpoint:
          </p>
          <pre className="font-mono text-xs bg-black text-green-400 p-2">
{apiBase || '/api/convert/{format}'}
          </pre>
          <Link
            href="/docs/getting-started/installation"
            className="font-mono text-xs text-blue-600 hover:underline font-bold"
          >
            → CLI still supported for batch exports
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden mx-6 mb-6 border-2 border-noir-black">
        {/* Editor Panel */}
        <div className="w-1/2 border-r-2 border-noir-black">
          <MonacoEditor
            height="100%"
            language="plaintext"
            theme="vs-dark"
            value={code}
            onChange={(value) => setCode(value || '')}
            options={{
              minimap: { enabled: false },
              fontSize: 14,
              fontFamily: 'JetBrains Mono, monospace',
              lineNumbers: 'on',
              renderWhitespace: 'selection',
              scrollBeyondLastLine: false
            }}
          />
        </div>

        {/* Output Panel */}
        <div className="w-1/2 flex flex-col bg-white">
          {/* Controls */}
          <div className="border-b-2 border-noir-black p-4 flex gap-4 items-center flex-wrap bg-gray-100">
            <button
              onClick={handleParse}
              className="px-4 py-2 bg-white text-black hover:bg-gray-200 font-bold"
            >
              Parse & Preview
            </button>

            <select
              value={output}
              onChange={(e) => setOutput(e.target.value as 'preview' | 'ast' | 'errors')}
              className="px-4 py-2 bg-white text-black border-2 border-black"
            >
              <option value="preview">HTML Preview</option>
              <option value="ast">AST JSON</option>
              <option value="errors">Errors</option>
            </select>

            <div className="flex gap-2">
              <button
                onClick={() => handleExport('pdf')}
                disabled={isExporting}
                className="px-3 py-2 bg-red-600 text-white hover:bg-red-700 disabled:opacity-50"
              >
                Export PDF
              </button>
              <button
                onClick={() => handleExport('docx')}
                disabled={isExporting}
                className="px-3 py-2 bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50"
              >
                Export DOCX
              </button>
              <button
                onClick={() => handleExport('pptx')}
                disabled={isExporting}
                className="px-3 py-2 bg-orange-600 text-white hover:bg-orange-700 disabled:opacity-50"
              >
                Export PPTX
              </button>
              <button
                onClick={() => handleExport('xlsx')}
                disabled={isExporting}
                className="px-3 py-2 bg-green-600 text-white hover:bg-green-700 disabled:opacity-50"
              >
                Export XLSX
              </button>
            </div>
          </div>

          {/* Output Display */}
          <div className="flex-1 overflow-auto p-4 bg-white text-black border-t-2 border-noir-black">
            {output === 'preview' && (
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: result }}
              />
            )}
            {output === 'ast' && (
              <pre className="text-sm text-blue-600 font-mono bg-gray-100 p-4 rounded">{result}</pre>
            )}
            {output === 'errors' && (
              <div className="text-red-600 font-mono">
                <h3 className="text-xl font-bold mb-4">Parse Error:</h3>
                <pre className="bg-red-50 border-2 border-red-400 p-4 rounded">{result}</pre>
              </div>
            )}
            {!result && (
              <div className="text-gray-400 text-center py-20 font-mono">
                Click &quot;Parse &amp; Preview&quot; to see output
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function generatePreviewHTML(doc: OSFDocument): string {
  let html = '';
  
  // Find metadata
  const metaBlock = doc.blocks.find((block): block is MetaBlock => block.type === 'meta');
  if (metaBlock) {
    html += '<div class="mb-8 pb-4 border-b-2 border-gray-700">';
    html += `<h1 class="text-4xl font-bold mb-2">${metaBlock.props.title || 'Untitled'}</h1>`;
    if (metaBlock.props.author) {
      html += `<p class="text-gray-400">By ${metaBlock.props.author}</p>`;
    }
    if (metaBlock.props.date) {
      html += `<p class="text-gray-400">${metaBlock.props.date}</p>`;
    }
    html += '</div>';
  }
  
  // Render other blocks
  doc.blocks.forEach((block) => {
    switch (block.type) {
      case 'doc':
        html += '<div class="mb-8 prose prose-invert max-w-none">';
        html += convertMarkdownToHTML(block.content);
        html += '</div>';
        break;
      
      case 'slide':
        html += '<div class="mb-8 p-6 border-2 border-blue-500 bg-blue-900 bg-opacity-20 rounded">';
        html += `<h2 class="text-2xl font-bold mb-4">${block.title || 'Slide'}</h2>`;
        if (block.content) {
          html += renderSlideContentHTML(block.content);
        } else if (block.bullets && block.bullets.length > 0) {
          html += '<ul class="list-disc pl-6 my-2">';
          html += block.bullets.map((item) => `<li>${escapeHTML(item)}</li>`).join('');
          html += '</ul>';
        }
        html += '</div>';
        break;
      
      case 'sheet':
        html += '<div class="mb-8 overflow-x-auto">';
        html += `<h3 class="text-xl font-bold mb-2">${block.name || 'Sheet'}</h3>`;
        html += '<p class="text-gray-400 text-sm mb-2">[Spreadsheet data preview not available in browser]</p>';
        html += '</div>';
        break;
      
      case 'chart':
        html += '<div class="mb-8 p-6 border-2 border-green-500 bg-green-900 bg-opacity-20 rounded">';
        html += `<h3 class="text-xl font-bold mb-4">${block.title}</h3>`;
        html += `<p class="text-gray-400">Chart Type: ${block.chartType}</p>`;
        html += `<p class="text-sm text-gray-500">[Interactive chart rendering requires full export]</p>`;
        html += '</div>';
        break;
      
      case 'diagram':
        html += '<div class="mb-8 p-6 border-2 border-purple-500 bg-purple-900 bg-opacity-20 rounded">';
        html += `<h3 class="text-xl font-bold mb-4">${block.title || 'Diagram'}</h3>`;
        html += `<pre class="text-sm bg-black bg-opacity-50 p-4 rounded overflow-x-auto">${block.code}</pre>`;
        html += '</div>';
        break;

      case 'table':
        html += '<div class="mb-8 overflow-x-auto">';
        if (block.caption) {
          html += `<p class="text-sm text-gray-400 italic mb-2">${block.caption}</p>`;
        }
        html += '<table class="min-w-full border border-gray-700 text-sm">';
        html += '<thead class="bg-gray-800"><tr>';
        block.headers.forEach((header) => {
          html += `<th class="px-3 py-2 text-left font-semibold border border-gray-700">${escapeHTML(
            header
          )}</th>`;
        });
        html += '</tr></thead><tbody>';
        block.rows.forEach((row, rowIndex) => {
          const rowClass =
            block.style === 'striped' && rowIndex % 2 === 1 ? ' bg-gray-800/60' : '';
          html += `<tr class="${rowClass}">`;
          row.cells.forEach((cell) => {
            html += `<td class="px-3 py-2 border border-gray-700">${escapeHTML(
              cell.text
            )}</td>`;
          });
          html += '</tr>';
        });
        html += '</tbody></table></div>';
        break;
      
      case 'osfcode':
        html += '<div class="mb-8">';
        if (block.caption) {
          html += `<p class="text-sm text-gray-400 italic mb-2">${block.caption}</p>`;
        }
        html += `<pre class="bg-gray-800 p-4 rounded overflow-x-auto text-sm"><code class="language-${block.language}">${escapeHTML(block.code)}</code></pre>`;
        html += '</div>';
        break;

      default:
        break;
    }
  });
  
  return html;
}

function convertMarkdownToHTML(text: string): string {
  const lines = text.split(/\r?\n/);
  let html = '';
  let paragraph: string[] = [];
  let listItems: string[] = [];
  let blockquoteLines: string[] = [];

  const flushParagraph = () => {
    if (paragraph.length > 0) {
      html += `<p class="my-2">${renderInlineMarkdown(paragraph.join(' '))}</p>`;
      paragraph = [];
    }
  };

  const flushList = () => {
    if (listItems.length > 0) {
      html += `<ul class="list-disc pl-6 my-2">${listItems
        .map((item) => `<li>${renderInlineMarkdown(item)}</li>`)
        .join('')}</ul>`;
      listItems = [];
    }
  };

  const flushBlockquote = () => {
    if (blockquoteLines.length > 0) {
      html += `<blockquote class="border-l-4 border-gray-600 pl-4 italic text-gray-300 my-3">${blockquoteLines
        .map((line) => `<p>${renderInlineMarkdown(line)}</p>`)
        .join('')}</blockquote>`;
      blockquoteLines = [];
    }
  };

  for (const rawLine of lines) {
    const line = rawLine.trim();
    if (!line) {
      flushParagraph();
      flushList();
      flushBlockquote();
      continue;
    }

    const headingMatch = /^(#{1,3})\s+(.+)$/.exec(line);
    if (headingMatch) {
      flushParagraph();
      flushList();
      flushBlockquote();
      const level = headingMatch[1].length;
      const size =
        level === 1 ? 'text-3xl' : level === 2 ? 'text-2xl' : 'text-xl';
      html += `<h${level} class="${size} font-bold mt-6 mb-3">${renderInlineMarkdown(
        headingMatch[2]
      )}</h${level}>`;
      continue;
    }

    const listMatch = /^[-*]\s+(.+)$/.exec(line);
    if (listMatch) {
      flushParagraph();
      flushBlockquote();
      listItems.push(listMatch[1]);
      continue;
    }

    const quoteMatch = /^>\s?(.+)$/.exec(line);
    if (quoteMatch) {
      flushParagraph();
      flushList();
      blockquoteLines.push(quoteMatch[1]);
      continue;
    }

    if (listItems.length > 0) {
      flushList();
    }
    if (blockquoteLines.length > 0) {
      flushBlockquote();
    }
    paragraph.push(line);
  }

  flushParagraph();
  flushList();
  flushBlockquote();

  return html;
}

function renderSlideContentHTML(contentBlocks: ContentBlock[]): string {
  let html = '';

  for (const block of contentBlocks) {
    if (block.type === 'unordered_list') {
      html += '<ul class="list-disc pl-6 my-2">';
      for (const item of block.items) {
        html += `<li>${renderRuns(item.content)}</li>`;
      }
      html += '</ul>';
    } else if (block.type === 'ordered_list') {
      html += '<ol class="list-decimal pl-6 my-2">';
      for (const item of block.items) {
        html += `<li>${renderRuns(item.content)}</li>`;
      }
      html += '</ol>';
    } else if (block.type === 'blockquote') {
      html += '<blockquote class="border-l-4 border-blue-500 pl-4 italic text-gray-300 my-3">';
      for (const paragraph of block.content) {
        html += `<p>${renderRuns(paragraph.content)}</p>`;
      }
      html += '</blockquote>';
    } else if (block.type === 'paragraph') {
      const rawText = runsToText(block.content).trim();
      const headingMatch = /^(#{1,3})\s+(.+)$/.exec(rawText);
      if (headingMatch) {
        const level = headingMatch[1].length;
        const size =
          level === 1 ? 'text-3xl' : level === 2 ? 'text-2xl' : 'text-xl';
        html += `<h${level} class="${size} font-bold mt-4 mb-2">${renderInlineMarkdown(
          headingMatch[2]
        )}</h${level}>`;
      } else {
        html += `<p class="my-2">${renderRuns(block.content)}</p>`;
      }
    } else if (block.type === 'code') {
      html += `<pre class="bg-gray-800 p-4 rounded overflow-x-auto text-sm">${escapeHTML(
        block.content
      )}</pre>`;
    } else if (block.type === 'image') {
      html += `<img class="inline-block max-h-64" src="${escapeHTML(
        block.url
      )}" alt="${escapeHTML(block.alt)}" />`;
    }
  }

  return html;
}

function renderRuns(runs: TextRun[]): string {
  return runs
    .map((run) => {
      if (typeof run === 'string') {
        return escapeHTML(run);
      }
      if (isLinkRun(run)) {
        const text = escapeHTML(run.text || '');
        const url = escapeHTML(run.url || '#');
        return `<a class="underline text-blue-400" href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`;
      }
      if (isImageRun(run)) {
        const alt = escapeHTML(run.alt || '');
        const url = escapeHTML(run.url || '');
        return `<img class="inline-block max-h-32" src="${url}" alt="${alt}" />`;
      }
      let content = escapeHTML(run.text || '');
      if (run.bold) content = `<strong>${content}</strong>`;
      if (run.italic) content = `<em>${content}</em>`;
      if (run.underline) content = `<span class="underline">${content}</span>`;
      if (run.strike) content = `<span class="line-through">${content}</span>`;
      return content;
    })
    .join('');
}

function runsToText(runs: TextRun[]): string {
  return runs
    .map((run) => {
      if (typeof run === 'string') return run;
      if (isLinkRun(run)) return run.text || '';
      if (isImageRun(run)) return run.alt || '';
      return run.text || '';
    })
    .join('');
}

function isLinkRun(run: TextRun): run is OSFLink {
  return typeof run === 'object' && run !== null && 'type' in run && run.type === 'link';
}

function isImageRun(run: TextRun): run is OSFImage {
  return typeof run === 'object' && run !== null && 'type' in run && run.type === 'image';
}

function renderInlineMarkdown(text: string): string {
  let html = escapeHTML(text);
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  html = html.replace(/`(.+?)`/g, '<code class="bg-gray-800 px-1 rounded">$1</code>');
  return html;
}

function escapeHTML(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
