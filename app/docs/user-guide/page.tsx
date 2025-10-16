'use client';

import Navigation from '@/components/Navigation';
import { Book, FileText, PresentationChart, Table, ChartBar, FlowArrow, Code } from 'phosphor-react';

export default function UserGuidePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="container mx-auto px-4 py-12 pt-24 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Book size={48} weight="duotone" />
            <h1 className="text-5xl font-bold">User Guide</h1>
          </div>
          <p className="text-gray-400">Complete guide to using OmniScript Format</p>
        </div>

        <div className="prose prose-invert max-w-none">
          {/* Overview */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 border-b-2 border-white pb-2">Overview</h2>
            <p className="text-gray-300 mb-4">
              OmniScript Format (OSF) is a universal document description language that combines the best features
              of multiple document types into a single, easy-to-learn format.
            </p>
            <p className="text-gray-300">
              With OSF, you write content once in plain text and export it to multiple formats including
              PDF, Microsoft Word (DOCX), PowerPoint (PPTX), and Excel (XLSX).
            </p>
          </section>

          {/* Block Types */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 border-b-2 border-white pb-2">Block Types</h2>
            
            <p className="text-gray-300 mb-6">
              OSF documents are composed of blocks. Each block starts with <code>@blocktype</code> followed
              by its content in curly braces.
            </p>

            {/* @meta */}
            <div className="mb-8 border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <FileText size={24} weight="duotone" />
                @meta - Document Metadata
              </h3>
              <p className="text-gray-300 mb-4">
                Every OSF document should start with a <code>@meta</code> block containing document information.
              </p>
              <pre className="bg-gray-900 p-4 rounded overflow-x-auto mb-4">
{`@meta {
  title: "My Document";
  author: "Your Name";
  date: "2025-10-16";
  version: "1.1";
  theme: "Corporate";
}`}
              </pre>
              <p className="text-sm text-gray-400">
                <strong>Properties:</strong> title, author, date, version, theme, tags, description
              </p>
            </div>

            {/* @doc */}
            <div className="mb-8 border-l-4 border-green-500 pl-6">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <FileText size={24} weight="duotone" />
                @doc - Document Content
              </h3>
              <p className="text-gray-300 mb-4">
                Write document content using Markdown syntax for rich text formatting.
              </p>
              <pre className="bg-gray-900 p-4 rounded overflow-x-auto mb-4">
{`@doc {
  content: "# Welcome to OmniScript

  This is a **bold** statement and this is *italic* text.
  
  New in v1.1: ~~Strikethrough~~ support and unicode ✓

  ## Features
  - Easy to learn
  - Powerful exports
  - Git-friendly

  Here's a [link](https://example.com) and some \`code\`.
  ";
}`}
              </pre>
              <p className="text-sm text-gray-400">
                <strong>Supports:</strong> Headings, bold, italic, lists, links, code, blockquotes, tables
              </p>
            </div>

            {/* @slide */}
            <div className="mb-8 border-l-4 border-purple-500 pl-6">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <PresentationChart size={24} weight="duotone" />
                @slide - Presentation Slides
              </h3>
              <p className="text-gray-300 mb-4">
                Create presentation slides with various layouts and bullet points.
              </p>
              <pre className="bg-gray-900 p-4 rounded overflow-x-auto mb-4">
{`@slide {
  title: "Product Features";
  layout: "TitleAndBullets";
  bullets {
    "🚀 Fast and efficient";
    "💡 Easy to use";
    "🔒 Secure by default";
  }
}`}
              </pre>
              <p className="text-sm text-gray-400">
                <strong>Layouts:</strong> TitleSlide, TitleAndContent, TitleAndBullets, TwoColumn, Blank
              </p>
            </div>

            {/* @sheet */}
            <div className="mb-8 border-l-4 border-yellow-500 pl-6">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <Table size={24} weight="duotone" />
                @sheet - Spreadsheet Data
              </h3>
              <p className="text-gray-300 mb-4">
                Define spreadsheet data with columns, rows, and formulas.
              </p>
              <pre className="bg-gray-900 p-4 rounded overflow-x-auto mb-4">
{`@sheet {
  name: "Sales Data";
  cols: [Product, Q1, Q2, Total];
  data {
    (2,1)="Widget A"; (2,2)=100; (2,3)=150;
    (3,1)="Widget B"; (3,2)=200; (3,3)=250;
  }
  formula (2,4): "=B2+C2";
  formula (3,4): "=B3+C3";
}`}
              </pre>
              <p className="text-sm text-gray-400">
                <strong>Features:</strong> Cell references, Excel formulas, automatic calculations
              </p>
            </div>

            {/* @chart */}
            <div className="mb-8 border-l-4 border-cyan-500 pl-6">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <ChartBar size={24} weight="duotone" />
                @chart - Data Visualization (v1.0)
              </h3>
              <p className="text-gray-300 mb-4">
                Create interactive charts with multiple types and customization options.
              </p>
              <pre className="bg-gray-900 p-4 rounded overflow-x-auto mb-4">
{`@chart {
  type: "bar";
  title: "Quarterly Revenue";
  data: [
    { label: "Q1"; values: [100]; },
    { label: "Q2"; values: [150]; },
    { label: "Q3"; values: [200]; }
  ];
  options: {
    xAxis: "Quarter";
    yAxis: "Revenue ($K)";
    legend: true;
  };
}`}
              </pre>
              <p className="text-sm text-gray-400">
                <strong>Types:</strong> bar, line, pie, scatter, area • <a href="/docs/v1-features/chart-blocks" className="text-blue-400 hover:underline">Full docs →</a>
              </p>
            </div>

            {/* @diagram */}
            <div className="mb-8 border-l-4 border-pink-500 pl-6">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <FlowArrow size={24} weight="duotone" />
                @diagram - Visual Diagrams (v1.0)
              </h3>
              <p className="text-gray-300 mb-4">
                Create flowcharts, sequence diagrams, Gantt charts, and mind maps.
              </p>
              <pre className="bg-gray-900 p-4 rounded overflow-x-auto mb-4">
{`@diagram {
  type: "flowchart";
  engine: "mermaid";
  title: "User Login Flow";
  code: "
    graph TD
      A[Start] --> B{Valid User?}
      B -->|Yes| C[Dashboard]
      B -->|No| D[Error]
      D --> A
  ";
}`}
              </pre>
              <p className="text-sm text-gray-400">
                <strong>Types:</strong> flowchart, sequence, gantt, mindmap • <strong>Engines:</strong> mermaid, graphviz • <a href="/docs/v1-features/diagram-blocks" className="text-blue-400 hover:underline">Full docs →</a>
              </p>
            </div>

            {/* @code */}
            <div className="mb-8 border-l-4 border-red-500 pl-6">
              <h3 className="text-2xl font-bold mb-3 flex items-center gap-2">
                <Code size={24} weight="duotone" />
                @code - Syntax Highlighted Code (v1.0)
              </h3>
              <p className="text-gray-300 mb-4">
                Display code with syntax highlighting, line numbers, and annotations.
              </p>
              <pre className="bg-gray-900 p-4 rounded overflow-x-auto mb-4">
{`@code {
  language: "typescript";
  caption: "Hello World Example";
  lineNumbers: true;
  highlight: [1, 3];
  code: "
    function hello(name: string) {
      console.log(\`Hello, \${name}!\`);
    }
    hello('World');
  ";
}`}
              </pre>
              <p className="text-sm text-gray-400">
                <strong>Languages:</strong> 50+ supported including TypeScript, Python, Java, Go, Rust • <a href="/docs/v1-features/code-blocks" className="text-blue-400 hover:underline">Full docs →</a>
              </p>
            </div>
          </section>

          {/* Best Practices */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 border-b-2 border-white pb-2">Best Practices</h2>
            
            <div className="space-y-4 text-gray-300">
              <div className="border-2 border-green-500 p-4">
                <h3 className="font-bold text-white mb-2">✅ DO: Start with @meta</h3>
                <p>Always begin your OSF file with a @meta block containing at least a title.</p>
              </div>

              <div className="border-2 border-green-500 p-4">
                <h3 className="font-bold text-white mb-2">✅ DO: Use consistent property names</h3>
                <p>Follow the documented property names exactly (case-sensitive).</p>
              </div>

              <div className="border-2 border-green-500 p-4">
                <h3 className="font-bold text-white mb-2">✅ DO: Escape special characters</h3>
                <p>Use backslashes to escape quotes and special characters in strings.</p>
              </div>

              <div className="border-2 border-red-500 p-4">
                <h3 className="font-bold text-white mb-2">❌ DON'T: Mix block types incorrectly</h3>
                <p>Each block should contain only its appropriate properties.</p>
              </div>

              <div className="border-2 border-red-500 p-4">
                <h3 className="font-bold text-white mb-2">❌ DON'T: Forget semicolons</h3>
                <p>All property assignments must end with a semicolon.</p>
              </div>
            </div>
          </section>

          {/* Next Steps */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 border-b-2 border-white pb-2">Next Steps</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <a href="/docs/getting-started/installation" className="border-2 border-white p-6 hover:bg-gray-900 transition-colors">
                <h3 className="font-bold text-xl mb-2">Installation</h3>
                <p className="text-gray-400 text-sm">Install the CLI and get started</p>
              </a>

              <a href="/docs/getting-started/first-document" className="border-2 border-white p-6 hover:bg-gray-900 transition-colors">
                <h3 className="font-bold text-xl mb-2">First Document</h3>
                <p className="text-gray-400 text-sm">Create your first OSF file</p>
              </a>

              <a href="/playground" className="border-2 border-white p-6 hover:bg-gray-900 transition-colors">
                <h3 className="font-bold text-xl mb-2">Try Playground</h3>
                <p className="text-gray-400 text-sm">Test OSF in your browser</p>
              </a>

              <a href="/docs/api-reference" className="border-2 border-white p-6 hover:bg-gray-900 transition-colors">
                <h3 className="font-bold text-xl mb-2">API Reference</h3>
                <p className="text-gray-400 text-sm">Use OSF programmatically</p>
              </a>
            </div>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t-2 border-gray-800">
          <a href="/docs" className="text-blue-400 hover:underline">← Back to Documentation</a>
          <a href="/docs/api-reference" className="text-blue-400 hover:underline">API Reference →</a>
        </div>
      </div>
    </div>
  );
}
