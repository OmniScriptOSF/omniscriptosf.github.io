// File: app/playground/page.tsx
// What: Interactive OSF playground with Monaco editor
// Why: Allow users to experiment with OSF without installation
// Related: app/api/convert/, components/Playground.tsx

'use client';

import { useState } from 'react';
import dynamic from 'next/dynamic';
import { parse } from 'omniscript-parser';
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

  const handleParse = () => {
    try {
      const doc = parse(code);
      
      if (output === 'ast') {
        setResult(JSON.stringify(doc, null, 2));
      } else if (output === 'preview') {
        setResult(generatePreviewHTML(doc));
      }
    } catch (error: any) {
      setOutput('errors');
      setResult(error.message);
    }
  };

  const handleExport = async (format: 'pdf' | 'docx' | 'pptx' | 'xlsx') => {
    setIsExporting(true);
    try {
      const response = await fetch(`/api/convert/${format}`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ osfCode: code, theme: 'corporate' })
      });
      
      if (!response.ok) {
        throw new Error(`Export failed: ${response.statusText}`);
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
    } catch (error: any) {
      alert(`Export error: ${error.message}`);
    } finally {
      setIsExporting(false);
    }
  };

  return (
    <div className="h-screen flex flex-col bg-black text-white">
      {/* Header */}
      <div className="border-b-2 border-white p-4">
        <h1 className="text-2xl font-bold">OmniScript Playground</h1>
        <p className="text-sm text-gray-400">Experiment with OSF in your browser</p>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex overflow-hidden">
        {/* Editor Panel */}
        <div className="w-1/2 border-r-2 border-white">
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
        <div className="w-1/2 flex flex-col">
          {/* Controls */}
          <div className="border-b-2 border-white p-4 flex gap-4 items-center flex-wrap">
            <button
              onClick={handleParse}
              className="px-4 py-2 bg-white text-black hover:bg-gray-200 font-bold"
            >
              Parse & Preview
            </button>

            <select
              value={output}
              onChange={(e) => setOutput(e.target.value as any)}
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
          <div className="flex-1 overflow-auto p-4 bg-gray-900">
            {output === 'preview' && (
              <div
                className="prose prose-invert max-w-none"
                dangerouslySetInnerHTML={{ __html: result }}
              />
            )}
            {output === 'ast' && (
              <pre className="text-sm text-green-400 font-mono">{result}</pre>
            )}
            {output === 'errors' && (
              <div className="text-red-400 font-mono">
                <h3 className="text-xl font-bold mb-4">Parse Error:</h3>
                <pre className="bg-red-900 bg-opacity-20 p-4 rounded">{result}</pre>
              </div>
            )}
            {!result && (
              <div className="text-gray-500 text-center py-20">
                Click "Parse & Preview" to see output
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

function generatePreviewHTML(doc: any): string {
  let html = '';
  
  // Find metadata
  const metaBlock = doc.blocks.find((b: any) => b.type === 'meta');
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
  doc.blocks.forEach((block: any) => {
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
          html += convertMarkdownToHTML(block.content.map((c: any) => c.text || '').join('\n'));
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
      
      case 'osfcode':
        html += '<div class="mb-8">';
        if (block.caption) {
          html += `<p class="text-sm text-gray-400 italic mb-2">${block.caption}</p>`;
        }
        html += `<pre class="bg-gray-800 p-4 rounded overflow-x-auto text-sm"><code class="language-${block.language}">${escapeHTML(block.code)}</code></pre>`;
        html += '</div>';
        break;
    }
  });
  
  return html;
}

function convertMarkdownToHTML(text: string): string {
  let html = text;
  
  html = html.replace(/^### (.+)$/gm, '<h3 class="text-xl font-bold mt-4 mb-2">$1</h3>');
  html = html.replace(/^## (.+)$/gm, '<h2 class="text-2xl font-bold mt-6 mb-3">$1</h2>');
  html = html.replace(/^# (.+)$/gm, '<h1 class="text-3xl font-bold mt-8 mb-4">$1</h1>');
  
  html = html.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>');
  html = html.replace(/\*(.+?)\*/g, '<em>$1</em>');
  html = html.replace(/`(.+?)`/g, '<code class="bg-gray-800 px-1 rounded">$1</code>');
  
  html = html.replace(/^- (.+)$/gm, '<li>$1</li>');
  html = html.replace(/(<li>[\s\S]*<\/li>)/, '<ul class="list-disc pl-6 my-2">$1</ul>');
  
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
