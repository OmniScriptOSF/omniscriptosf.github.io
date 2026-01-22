'use client';

import { useMemo, useState } from 'react';
import Link from 'next/link';
import {
  parse,
  type ContentBlock,
  type Image as OSFImage,
  type Link as OSFLink,
  type MetaBlock,
  type OSFDocument,
  type TextRun
} from 'omniscript-parser';

import Terminal from '@/components/Terminal'
import CodeBlock from '@/components/CodeBlock'
import { FileText, Robot, ArrowsClockwise, ChartBar, PaintBrush, Lightning, FilePdf, PresentationChart, FileXls, PuzzlePiece } from 'phosphor-react';

export default function Home() {
  const exampleOSF = `@meta {
  title: "Q4 Business Review";
  author: "Your Team";
  date: "2025-10-16";
  theme: "Corporate";
}

@doc {
  # Executive Summary

  Our Q4 performance exceeded expectations with **20% revenue growth**
  and significant improvements in customer retention.
  
  ## NEW in v1.3 🎉
  - **@table export parity** - Tables render across PDF/DOCX/PPTX/XLSX
  - **Blockquote styling** - Consistent quotes in exports & preview
  - Playground export/preview alignment
}

@table {
  caption: "Regional Performance";
  style: "bordered";
  alignment: ["left", "right", "right", "center"];
  
  | Region | Q3 Revenue | Q4 Revenue | Growth |
  | --- | --- | --- | --- |
  | North America | $975K | $1,150K | +18% ↗ |
  | Europe | $748K | $880K | +17% ↗ |
  | Asia Pacific | $477K | $592K | +24% ↗ |
}

@slide {
  title: "Key Metrics";
  layout: TitleAndBullets;
  bullets {
    "💰 Revenue grew 20% to $2.6M";
    "👥 Customer churn decreased to 2%";
    "🚀 Launched @table and @include features";
  }
}

@include { path: "./sections/financial-details.osf"; }`

  const [exampleView, setExampleView] = useState<'editor' | 'preview'>('editor');
  const examplePreview = useMemo(() => {
    try {
      const document = parse(exampleOSF);
      return generatePreviewHTML(document);
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Preview error';
      return `<div class="text-red-600 font-mono">Preview error: ${escapeHTML(message)}</div>`;
    }
  }, [exampleOSF]);

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-noir-white border-b-2 border-noir-black px-8 py-4">
        <div className="container-noir flex items-center justify-between">
          <Link href="/" className="font-mono font-bold text-2xl tracking-tight">
            OmniScript_
          </Link>

          <ul className="flex items-center gap-8">
            <li><Link href="#features" className="font-mono text-sm hover:underline">Features</Link></li>
            <li><Link href="/playground" className="font-mono text-sm hover:underline">Playground</Link></li>
            <li><Link href="/docs" className="font-mono text-sm hover:underline">Docs</Link></li>
            <li><a href="https://github.com/OmniScriptOSF/omniscript-core" className="font-mono text-sm hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.npmjs.com/package/omniscript-cli" className="font-mono text-sm hover:underline" target="_blank" rel="noopener noreferrer">NPM</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-noir-white pt-20">
        <div className="container-noir text-center py-20">
          <div className="inline-block px-4 py-2 bg-green-100 border-2 border-green-600 mb-8">
            <span className="font-mono text-sm font-bold text-green-800">v1.3.0 • Table exports & blockquote styling</span>
          </div>

          <h1 className="font-sans text-display-xl mb-8 tracking-tight">
            OmniScript<span className="text-gray-400">_</span>
          </h1>

          <p className="font-mono text-body-lg text-gray-600 max-w-3xl mx-auto mb-4">
            The <span className="font-bold text-noir-black">universal document DSL</span> for LLMs, Agentic AI, and Git-native workflows.
          </p>

          <p className="font-mono text-body-md text-gray-500 max-w-2xl mx-auto mb-12">
            One format. Infinite outputs. Infinite possibilities.
            <br />
            Documents • Slides • Spreadsheets • <strong className="text-green-600">Tables</strong> • <strong className="text-green-600">Modular</strong> • Charts
          </p>

          <div className="flex items-center justify-center gap-4 mb-16">
            <a href="/docs/getting-started/quick-reference" className="btn-primary">
              Get Started
            </a>
            <a href="#features" className="btn-secondary">
              View Features
            </a>
          </div>

          {/* Terminal Preview */}
          <div className="max-w-4xl mx-auto">
            <Terminal title="installation">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">$</span>
                  <span>npm install -g omniscript-cli</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <span>&gt; Installing omniscript-cli...</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <span>&gt; ✓ Successfully installed</span>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <span className="text-gray-500">$</span>
                  <span>osf render document.osf --format pdf</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <span>&gt; Generating PDF... Done! ✓</span>
                </div>
              </div>
            </Terminal>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="container-noir">
          <h2 className="font-mono text-heading-xl mb-4 text-center">
            Why OmniScript?
          </h2>
          <p className="font-mono text-body-md text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Traditional document formats were built for humans. OmniScript was built for the AI era.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Git-Native',
                description: 'Plain text format that works beautifully with version control. Meaningful diffs, no binary conflicts, perfect for collaboration.',
                icon: <FileText size={48} weight="duotone" />
              },
              {
                title: 'LLM-Friendly',
                description: 'Designed for AI agents to read, write, and transform. Simple syntax that LLMs understand natively.',
                icon: <Robot size={48} weight="duotone" />
              },
              {
                title: 'Multi-Format Export',
                description: 'One source file exports to PDF, DOCX, PPTX, and XLSX. Write once, output everywhere.',
                icon: <ArrowsClockwise size={48} weight="duotone" />
              },
              {
                title: 'Live Formulas',
                description: 'Spreadsheet formulas that actually work. Dynamic calculations in a plain-text format.',
                icon: <ChartBar size={48} weight="duotone" />
              },
              {
                title: 'Rich Styling',
                description: '10 professional themes. Tables with alignment. Bold, italic, code formatting. Lists and more.',
                icon: <PaintBrush size={48} weight="duotone" />
              },
              {
                title: 'Developer-First',
                description: 'TypeScript types, CLI tools, comprehensive tests. Built by developers, for developers.',
                icon: <Lightning size={48} weight="duotone" />
              }
            ].map((feature, i) => (
              <div key={i} className="card-hover">
                <div className="mb-6">{feature.icon}</div>
                <h3 className="font-mono font-bold text-heading-md mb-4">
                  {feature.title}
                </h3>
                <p className="font-mono text-body-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Claude Code Plugin */}
      <section className="py-20 bg-noir-white">
        <div className="container-noir">
          <div className="border-2 border-noir-black p-8 bg-yellow-50">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
              <div>
                <div className="flex items-center gap-3 mb-3">
                  <PuzzlePiece size={32} weight="duotone" />
                  <h3 className="font-mono text-2xl font-bold">Claude Code Plugin</h3>
                </div>
                <p className="font-mono text-body-sm text-gray-700 max-w-2xl">
                  Install the OmniScript Claude Code plugin to generate, lint, and export OSF directly
                  inside Claude. Perfect for rapid document workflows and agent automation.
                </p>
              </div>
              <a
                href="https://github.com/OmniScriptOSF/omniscript-claude-plugin"
                className="btn-secondary"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Plugin →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Example Section */}
      <section className="py-24 bg-noir-white">
        <div className="container-noir">
          <h2 className="font-mono text-heading-xl mb-4 text-center">
            See It In Action
          </h2>
          <p className="font-mono text-body-md text-gray-600 text-center max-w-2xl mx-auto mb-16">
            One OSF file combines documents, slides, tables, and modular includes — all in plain text.
          </p>

          <div className="max-w-4xl mx-auto">
            <div className="flex items-center justify-between mb-4">
              <div className="font-mono text-sm text-gray-500">Example OSF</div>
              <div className="inline-flex border-2 border-black bg-white">
                <button
                  type="button"
                  onClick={() => setExampleView('editor')}
                  className={`px-4 py-2 font-mono text-xs uppercase tracking-wide ${
                    exampleView === 'editor'
                      ? 'bg-black text-white'
                      : 'bg-white text-black hover:bg-gray-100'
                  }`}
                >
                  Editor
                </button>
                <button
                  type="button"
                  onClick={() => setExampleView('preview')}
                  className={`px-4 py-2 font-mono text-xs uppercase tracking-wide ${
                    exampleView === 'preview'
                      ? 'bg-black text-white'
                      : 'bg-white text-black hover:bg-gray-100'
                  }`}
                >
                  Preview
                </button>
              </div>
            </div>

            {exampleView === 'editor' ? (
              <CodeBlock
                code={exampleOSF}
                title="business-report.osf"
                showLineNumbers={true}
              />
            ) : (
              <div className="border-2 border-black bg-white p-6">
                <div
                  className="prose max-w-none"
                  dangerouslySetInnerHTML={{ __html: examplePreview }}
                />
              </div>
            )}

            <div className="mt-12 grid md:grid-cols-3 gap-4">
              <div className="card text-center">
                <div className="flex justify-center mb-2">
                  <FilePdf size={32} weight="duotone" />
                </div>
                <div className="font-mono font-bold text-sm mb-2">PDF</div>
                <div className="font-mono text-xs text-gray-500">osf render --format pdf</div>
              </div>
              <div className="card text-center">
                <div className="flex justify-center mb-2">
                  <PresentationChart size={32} weight="duotone" />
                </div>
                <div className="font-mono font-bold text-sm mb-2">PPTX</div>
                <div className="font-mono text-xs text-gray-500">osf render --format pptx</div>
              </div>
              <div className="card text-center">
                <div className="flex justify-center mb-2">
                  <FileXls size={32} weight="duotone" />
                </div>
                <div className="font-mono font-bold text-sm mb-2">XLSX</div>
                <div className="font-mono text-xs text-gray-500">osf render --format xlsx</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-24 bg-gray-900 text-gray-100">
        <div className="container-noir">
          <h2 className="font-mono text-heading-xl mb-4 text-center text-noir-white">
            Quick Start
          </h2>
          <p className="font-mono text-body-md text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Get up and running in under a minute.
          </p>

          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <div className="font-mono text-sm text-gray-500 mb-2">01 / Install</div>
              <Terminal>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">$</span>
                  <span>npm install -g omniscript-cli@1.3.0</span>
                </div>
              </Terminal>
            </div>

            <div>
              <div className="font-mono text-sm text-gray-500 mb-2">02 / Create</div>
              <CodeBlock
                code={`@meta { title: "My First Doc"; }

@doc {
  # Hello OmniScript
  This is my first document!
}`}
                title="hello.osf"
              />
            </div>

            <div>
              <div className="font-mono text-sm text-gray-500 mb-2">03 / Convert</div>
              <Terminal>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">$</span>
                    <span>osf render hello.osf --format pdf</span>
                  </div>
                  <div className="text-gray-400">&gt; ✓ Generated hello.pdf</div>
                </div>
              </Terminal>
            </div>
          </div>

          <div className="text-center mt-16">
            <a
              href="/docs"
              className="inline-block px-8 py-4 bg-noir-white text-noir-black font-mono font-bold text-sm uppercase tracking-wide border-2 border-noir-white hover:bg-gray-900 hover:text-noir-white transition-all duration-200"
            >
              Read the Full Documentation
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-noir-black text-noir-white">
        <div className="container-noir">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="font-mono font-bold text-lg mb-4">OmniScript</div>
              <p className="font-mono text-sm text-gray-400">
                Universal Document DSL for the AI era.
              </p>
            </div>

            <div>
              <div className="font-mono font-bold text-sm mb-4">Links</div>
              <ul className="space-y-2 font-mono text-sm text-gray-400">
                <li><a href="https://github.com/OmniScriptOSF/omniscript-core" className="hover:text-noir-white" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://www.npmjs.com/package/omniscript-cli" className="hover:text-noir-white" target="_blank" rel="noopener noreferrer">NPM</a></li>
                <li><a href="https://github.com/OmniScriptOSF/omniscript-core/discussions" className="hover:text-noir-white" target="_blank" rel="noopener noreferrer">Discussions</a></li>
              </ul>
            </div>

            <div>
              <div className="font-mono font-bold text-sm mb-4">Packages</div>
              <ul className="space-y-2 font-mono text-sm text-gray-400">
                <li><span className="hover:text-noir-white">omniscript-parser@1.3.0</span></li>
                <li><span className="hover:text-noir-white">omniscript-cli@1.3.0</span></li>
                <li><span className="hover:text-noir-white">omniscript-converters@1.3.0</span></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t-2 border-gray-800 text-center font-mono text-sm text-gray-500">
            <p>Built with ❤️ by <a href="https://github.com/alpha912" className="hover:text-noir-white" target="_blank" rel="noopener noreferrer">Alphin Tom</a> • MIT License • {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function generatePreviewHTML(doc: OSFDocument): string {
  let html = '';
  const metaBlock = doc.blocks.find((block): block is MetaBlock => block.type === 'meta');

  if (metaBlock) {
    html += '<div class="mb-6 pb-4 border-b-2 border-gray-200">';
    html += `<h1 class="text-3xl font-bold mb-2">${escapeHTML(String(metaBlock.props.title || 'Untitled'))}</h1>`;
    if (metaBlock.props.author) {
      html += `<p class="text-gray-500">By ${escapeHTML(String(metaBlock.props.author))}</p>`;
    }
    if (metaBlock.props.date) {
      html += `<p class="text-gray-500">${escapeHTML(String(metaBlock.props.date))}</p>`;
    }
    html += '</div>';
  }

  for (const block of doc.blocks) {
    switch (block.type) {
      case 'doc':
        html += '<div class="mb-6">';
        html += convertMarkdownToHTML(block.content);
        html += '</div>';
        break;
      case 'slide':
        html += '<div class="mb-6 p-4 border-2 border-gray-200 bg-gray-50">';
        html += `<h2 class="text-xl font-bold mb-3">${escapeHTML(block.title || 'Slide')}</h2>`;
        if (block.content && block.content.length > 0) {
          html += renderSlideContentHTML(block.content);
        } else if (block.bullets && block.bullets.length > 0) {
          html += '<ul class="list-disc pl-6 my-2">';
          html += block.bullets.map((item) => `<li>${escapeHTML(item)}</li>`).join('');
          html += '</ul>';
        }
        html += '</div>';
        break;
      case 'table':
        html += '<div class="mb-6 overflow-x-auto">';
        if (block.caption) {
          html += `<p class="text-sm text-gray-500 italic mb-2">${escapeHTML(block.caption)}</p>`;
        }
        html += '<table class="min-w-full border border-gray-200 text-sm">';
        html += '<thead class="bg-gray-100"><tr>';
        block.headers.forEach((header) => {
          html += `<th class="px-3 py-2 text-left font-semibold border border-gray-200">${escapeHTML(
            header
          )}</th>`;
        });
        html += '</tr></thead><tbody>';
        block.rows.forEach((row, rowIndex) => {
          const rowClass =
            block.style === 'striped' && rowIndex % 2 === 1 ? ' bg-gray-50' : '';
          html += `<tr class="${rowClass}">`;
          row.cells.forEach((cell) => {
            html += `<td class="px-3 py-2 border border-gray-200">${escapeHTML(
              cell.text
            )}</td>`;
          });
          html += '</tr>';
        });
        html += '</tbody></table></div>';
        break;
      default:
        break;
    }
  }

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
      html += `<blockquote class="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-3">${blockquoteLines
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
      const size = level === 1 ? 'text-2xl' : level === 2 ? 'text-xl' : 'text-lg';
      html += `<h${level} class="${size} font-bold mt-4 mb-2">${renderInlineMarkdown(
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
      html += '<blockquote class="border-l-4 border-gray-300 pl-4 italic text-gray-600 my-3">';
      for (const paragraph of block.content) {
        html += `<p>${renderRuns(paragraph.content)}</p>`;
      }
      html += '</blockquote>';
    } else if (block.type === 'paragraph') {
      const rawText = runsToText(block.content).trim();
      const headingMatch = /^(#{1,3})\s+(.+)$/.exec(rawText);
      if (headingMatch) {
        const level = headingMatch[1].length;
        const size = level === 1 ? 'text-2xl' : level === 2 ? 'text-xl' : 'text-lg';
        html += `<h${level} class="${size} font-bold mt-3 mb-2">${renderInlineMarkdown(
          headingMatch[2]
        )}</h${level}>`;
      } else {
        html += `<p class="my-2">${renderRuns(block.content)}</p>`;
      }
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
        return `<a class="underline text-blue-600" href="${url}" target="_blank" rel="noopener noreferrer">${text}</a>`;
      }
      if (isImageRun(run)) {
        const alt = escapeHTML(run.alt || '');
        const url = escapeHTML(run.url || '');
        return `<img class="inline-block max-h-40" src="${url}" alt="${alt}" />`;
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
  html = html.replace(/`(.+?)`/g, '<code class="bg-gray-100 px-1 rounded">$1</code>');
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
