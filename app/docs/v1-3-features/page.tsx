// File: app/docs/v1-3-features/page.tsx
// What: v1.3 features reference guide
// Why: Provide a single source of truth for all active OSF features in v1.3
// Related: app/docs/releases/v1-3/page.tsx, app/docs/v1-2-features/page.tsx

'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { Book, FileText, PresentationChart, Table, ChartBar, FlowArrow, Code, Shield } from 'phosphor-react';

export default function V13FeaturesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation dark />
      <div className="container mx-auto px-4 py-12 pt-24 max-w-5xl">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Book size={48} weight="duotone" />
            <h1 className="text-5xl font-bold">v1.3 Features Reference</h1>
            <span className="px-4 py-2 bg-green-500 text-black text-sm font-bold">LATEST</span>
          </div>
          <p className="text-xl text-gray-300">
            A single, up-to-date reference for everything supported in OmniScript v1.3.0 — regardless of
            when it was introduced.
          </p>
          <div className="mt-4 text-sm text-gray-400">
            Spec: v1.2 (current stable) • Release: v1.3.0
          </div>
        </div>

        {/* Core Blocks */}
        <section className="mb-12 border-l-4 border-green-500 pl-6">
          <h2 className="text-4xl font-bold mb-6">Core Blocks</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 border-white p-4 bg-gray-900">
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <FileText size={22} weight="duotone" />@meta
              </h3>
              <p className="text-gray-300 mb-3">Document metadata (title, author, date, theme).</p>
              <pre className="bg-black p-3 border-2 border-white text-green-400 text-xs overflow-x-auto">{`@meta {
  title: "My First Document";
  author: "Your Name";
  date: "2025-10-16";
  theme: corporate;
}`}</pre>
            </div>
            <div className="border-2 border-white p-4 bg-gray-900">
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <FileText size={22} weight="duotone" />@doc
              </h3>
              <p className="text-gray-300 mb-3">Markdown-style narrative content.</p>
              <pre className="bg-black p-3 border-2 border-white text-green-400 text-xs overflow-x-auto">{`@doc {
  # Heading
  This is **bold**, *italic*, and ~~strikethrough~~.
}`}</pre>
            </div>
            <div className="border-2 border-white p-4 bg-gray-900">
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <PresentationChart size={22} weight="duotone" />@slide
              </h3>
              <p className="text-gray-300 mb-3">Presentation slides with layouts and bullets.</p>
              <pre className="bg-black p-3 border-2 border-white text-green-400 text-xs overflow-x-auto">{`@slide {
  title: "Key Metrics";
  layout: TitleAndBullets;
  bullets {
    "Revenue up 20%";
    "Churn down to 2%";
  }
}`}</pre>
            </div>
            <div className="border-2 border-white p-4 bg-gray-900">
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <Table size={22} weight="duotone" />@sheet
              </h3>
              <p className="text-gray-300 mb-3">Spreadsheet-style data with formulas.</p>
              <pre className="bg-black p-3 border-2 border-white text-green-400 text-xs overflow-x-auto">{`@sheet {
  name: "Budget";
  cols: [Item, Cost, Qty, Total];
  A2 = "Hosting"; B2 = 120; C2 = 12; D2 = =B2*C2;
}`}</pre>
            </div>
          </div>
        </section>

        {/* Advanced Blocks */}
        <section className="mb-12 border-l-4 border-purple-500 pl-6">
          <h2 className="text-4xl font-bold mb-6">Advanced Blocks</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border-2 border-white p-4 bg-gray-900">
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <ChartBar size={22} weight="duotone" />@chart
              </h3>
              <p className="text-gray-300 mb-3">Bar/line/pie/area charts.</p>
              <pre className="bg-black p-3 border-2 border-white text-green-400 text-xs overflow-x-auto">{`@chart {
  type: "bar";
  title: "Sales";
  data: [
    { label: "Q1"; values: [100]; }
  ];
}`}</pre>
            </div>
            <div className="border-2 border-white p-4 bg-gray-900">
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <FlowArrow size={22} weight="duotone" />@diagram
              </h3>
              <p className="text-gray-300 mb-3">Mermaid or Graphviz diagrams.</p>
              <pre className="bg-black p-3 border-2 border-white text-green-400 text-xs overflow-x-auto">{`@diagram {
  type: "flowchart";
  engine: "mermaid";
  code: "graph TD; A-->B;";
}`}</pre>
            </div>
            <div className="border-2 border-white p-4 bg-gray-900">
              <h3 className="text-2xl font-bold mb-2 flex items-center gap-2">
                <Code size={22} weight="duotone" />@code
              </h3>
              <p className="text-gray-300 mb-3">Formatted code blocks.</p>
              <pre className="bg-black p-3 border-2 border-white text-green-400 text-xs overflow-x-auto">{`@code {
  language: "ts";
  code: "const x = 1;";
}`}</pre>
            </div>
          </div>
        </section>

        {/* Tables + Includes */}
        <section className="mb-12 border-l-4 border-blue-500 pl-6">
          <h2 className="text-4xl font-bold mb-6">Tables & Modular Includes</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 border-white p-4 bg-gray-900">
              <h3 className="text-2xl font-bold mb-2">@table</h3>
              <p className="text-gray-300 mb-3">Markdown tables with caption, style, and alignment.</p>
              <pre className="bg-black p-3 border-2 border-white text-green-400 text-xs overflow-x-auto">{`@table {
  caption: "Regional Performance";
  style: "bordered";
  alignment: ["left", "right", "right", "center"];
  | Region | Q3 | Q4 | Growth |
  | --- | --- | --- | --- |
  | NA | $975K | $1.15M | +18% |
}`}</pre>
            </div>
            <div className="border-2 border-white p-4 bg-gray-900">
              <h3 className="text-2xl font-bold mb-2">@include</h3>
              <p className="text-gray-300 mb-3">Compose documents from multiple files.</p>
              <pre className="bg-black p-3 border-2 border-white text-green-400 text-xs overflow-x-auto">{`@include { path: "./sections/intro.osf"; }
@include { path: "./sections/body.osf"; }`}</pre>
            </div>
          </div>
          <div className="mt-4 text-sm text-gray-400">
            Includes support depth up to 10 and block path traversal for safety.
          </div>
        </section>

        {/* Formatting */}
        <section className="mb-12 border-l-4 border-white pl-6">
          <h2 className="text-4xl font-bold mb-6">Formatting & Inline Syntax</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Headings: <code>#</code>, <code>##</code>, <code>###</code></li>
            <li>Bold: <code>**text**</code> • Italic: <code>*text*</code></li>
            <li>Strikethrough: <code>~~text~~</code></li>
            <li>Inline code: <code>`code`</code> • Code blocks: <code>```lang</code></li>
            <li>Lists: <code>-</code>, <code>*</code>, ordered lists <code>1.</code></li>
            <li>Blockquotes: <code>&gt; quoted text</code></li>
            <li>Links: <code>[text](url)</code> • Images: <code>![alt](url)</code></li>
            <li>Unicode escapes: <code>\uXXXX</code> and <code>\xXX</code></li>
          </ul>
        </section>

        {/* Export Targets */}
        <section className="mb-12 border-l-4 border-orange-500 pl-6">
          <h2 className="text-4xl font-bold mb-6">Export Targets (v1.3)</h2>
          <p className="text-gray-300 mb-4">
            v1.3 aligns table and blockquote rendering across all exporters.
          </p>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>PDF</li>
            <li>DOCX</li>
            <li>PPTX</li>
            <li>XLSX</li>
            <li>HTML</li>
            <li>JSON (AST)</li>
          </ul>
        </section>

        {/* Security */}
        <section className="mb-12 border-l-4 border-purple-500 pl-6">
          <div className="flex items-center gap-3 mb-4">
            <Shield size={28} weight="duotone" />
            <h2 className="text-4xl font-bold">Security & Safety</h2>
          </div>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>HTML escaping for all rendered content</li>
            <li>Path traversal protection for @include</li>
            <li>Strict input validation (tables, numbers, alignments)</li>
            <li>ReDoS protection with bounded regex usage</li>
          </ul>
        </section>

        {/* Links */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-6">Reference Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/docs/releases/v1-3"
              className="block p-6 border-2 border-white hover:bg-white hover:text-black transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">v1.3 Release Notes →</h3>
              <p className="text-sm opacity-80">What changed in the latest release</p>
            </Link>
            <a
              href="https://github.com/OmniScriptOSF/omniscript-core/blob/main/spec/v1.2/README.md"
              className="block p-6 border-2 border-white hover:bg-white hover:text-black transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-xl font-bold mb-2">Spec v1.2 →</h3>
              <p className="text-sm opacity-80">Current stable OSF specification</p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
