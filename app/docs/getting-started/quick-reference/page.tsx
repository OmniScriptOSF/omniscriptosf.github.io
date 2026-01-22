// File: app/docs/getting-started/quick-reference/page.tsx
// What: Quick reference for OSF syntax and blocks
// Why: Give users a fast, scannable cheat sheet
// Related: app/docs/getting-started/installation/page.tsx, app/docs/getting-started/first-document/page.tsx

'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function QuickReferencePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation dark />
      <div className="container mx-auto px-4 py-12 max-w-5xl pt-24">
        <div className="mb-10">
          <h1 className="text-5xl font-bold mb-4 border-b-4 border-white pb-4">Quick Reference</h1>
          <p className="text-xl text-gray-300">
            A fast, scannable cheat sheet for OmniScript Format blocks, directives, and syntax.
          </p>
        </div>

        {/* OSF in 60 seconds */}
        <section className="mb-12 border-2 border-white p-6">
          <h2 className="text-2xl font-bold mb-4">OSF in 60 Seconds</h2>
          <div className="bg-black border-2 border-white p-4 font-mono text-sm text-green-400 overflow-x-auto">
            <pre>{`@meta {
  title: "My First Document";
  author: "Your Name";
  date: "2025-10-16";
  theme: corporate;
}

@doc {
  # Welcome
  This is **bold**, this is *italic*, and this is \`code\`.

  - Bullet one
  - Bullet two
}

@slide {
  title: "Quick Start";
  layout: TitleAndBullets;
  bullets {
    "Edit this text";
    "Add blocks";
    "Export to PDF";
  }
}`}</pre>
          </div>
        </section>

        {/* Blocks at a glance */}
        <section className="mb-12 border-l-4 border-green-500 pl-6">
          <h2 className="text-4xl font-bold mb-6">Blocks at a Glance</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="border-2 border-white p-4 bg-gray-900">
              <h3 className="text-xl font-bold mb-2">@meta</h3>
              <p className="text-gray-300">Document metadata: title, author, date, theme.</p>
            </div>
            <div className="border-2 border-white p-4 bg-gray-900">
              <h3 className="text-xl font-bold mb-2">@doc</h3>
              <p className="text-gray-300">Markdown-like document content and narrative text.</p>
            </div>
            <div className="border-2 border-white p-4 bg-gray-900">
              <h3 className="text-xl font-bold mb-2">@slide</h3>
              <p className="text-gray-300">Presentation slides with layouts and bullets.</p>
            </div>
            <div className="border-2 border-white p-4 bg-gray-900">
              <h3 className="text-xl font-bold mb-2">@sheet</h3>
              <p className="text-gray-300">Spreadsheet-style data tables and formulas.</p>
            </div>
            <div className="border-2 border-white p-4 bg-gray-900">
              <h3 className="text-xl font-bold mb-2">@table</h3>
              <p className="text-gray-300">Markdown pipe tables with caption and styling.</p>
            </div>
            <div className="border-2 border-white p-4 bg-gray-900">
              <h3 className="text-xl font-bold mb-2">@chart</h3>
              <p className="text-gray-300">Bar/line/pie charts from structured series data.</p>
            </div>
            <div className="border-2 border-white p-4 bg-gray-900">
              <h3 className="text-xl font-bold mb-2">@diagram</h3>
              <p className="text-gray-300">Mermaid or Graphviz diagrams.</p>
            </div>
            <div className="border-2 border-white p-4 bg-gray-900">
              <h3 className="text-xl font-bold mb-2">@code</h3>
              <p className="text-gray-300">Code blocks with language, caption, and highlights.</p>
            </div>
          </div>
        </section>

        {/* Tables */}
        <section className="mb-12 border-l-4 border-blue-500 pl-6">
          <h2 className="text-4xl font-bold mb-6">@table</h2>
          <div className="bg-gray-900 border-2 border-blue-500 p-4 font-mono text-sm text-blue-200 overflow-x-auto">
            <pre>{`@table {
  caption: "Regional Performance";
  style: "bordered";
  alignment: ["left", "right", "right", "center"];

  | Region | Q3 Revenue | Q4 Revenue | Growth |
  | --- | --- | --- | --- |
  | North America | $975K | $1,150K | +18% |
  | Europe | $748K | $880K | +17% |
  | APAC | $477K | $592K | +24% |
}`}</pre>
          </div>
        </section>

        {/* Slides */}
        <section className="mb-12 border-l-4 border-purple-500 pl-6">
          <h2 className="text-4xl font-bold mb-6">@slide</h2>
          <p className="text-gray-300 mb-4">Common layouts: <code>TitleOnly</code>, <code>TitleAndContent</code>, <code>TitleAndBullets</code>, <code>TwoColumn</code>.</p>
          <div className="bg-gray-900 border-2 border-purple-500 p-4 font-mono text-sm text-purple-200 overflow-x-auto">
            <pre>{`@slide {
  title: "Key Metrics";
  layout: TitleAndBullets;
  bullets {
    "Revenue up 20%";
    "Churn down to 2%";
    "New @table support";
  }
}`}</pre>
          </div>
        </section>

        {/* Sheets */}
        <section className="mb-12 border-l-4 border-green-500 pl-6">
          <h2 className="text-4xl font-bold mb-6">@sheet</h2>
          <div className="bg-gray-900 border-2 border-green-500 p-4 font-mono text-sm text-green-200 overflow-x-auto">
            <pre>{`@sheet {
  name: "Budget";
  cols: [Item, Cost, Qty, Total];

  A2 = "Hosting";
  B2 = 120;
  C2 = 12;
  D2 = =B2*C2;
}`}</pre>
          </div>
        </section>

        {/* Includes */}
        <section className="mb-12 border-l-4 border-white pl-6">
          <h2 className="text-4xl font-bold mb-6">@include</h2>
          <p className="text-gray-300 mb-4">Compose larger documents from modular files.</p>
          <div className="bg-gray-900 border-2 border-white p-4 font-mono text-sm text-gray-200 overflow-x-auto">
            <pre>{`@include { path: "./sections/intro.osf"; }
@include { path: "./sections/body.osf"; }
@include { path: "./sections/conclusion.osf"; }`}</pre>
          </div>
        </section>

        {/* CLI Commands */}
        <section className="mb-12 border-l-4 border-orange-500 pl-6">
          <h2 className="text-4xl font-bold mb-6">CLI Commands</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-900 border-2 border-orange-500 p-4 font-mono text-sm text-orange-200">
              <pre>{`osf parse file.osf`}</pre>
              <p className="mt-2 text-gray-300">Parse OSF into AST JSON.</p>
            </div>
            <div className="bg-gray-900 border-2 border-orange-500 p-4 font-mono text-sm text-orange-200">
              <pre>{`osf render file.osf --format pdf`}</pre>
              <p className="mt-2 text-gray-300">Export to PDF/DOCX/PPTX/XLSX/HTML.</p>
            </div>
            <div className="bg-gray-900 border-2 border-orange-500 p-4 font-mono text-sm text-orange-200">
              <pre>{`osf lint file.osf`}</pre>
              <p className="mt-2 text-gray-300">Validate syntax and schema.</p>
            </div>
            <div className="bg-gray-900 border-2 border-orange-500 p-4 font-mono text-sm text-orange-200">
              <pre>{`osf format file.osf`}</pre>
              <p className="mt-2 text-gray-300">Normalize formatting.</p>
            </div>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-6">Next Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Link
              href="/docs/getting-started/installation"
              className="block p-6 border-2 border-white hover:bg-white hover:text-black transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">Install CLI →</h3>
              <p className="text-sm opacity-80">Get OmniScript installed locally</p>
            </Link>
            <Link
              href="/docs/getting-started/first-document"
              className="block p-6 border-2 border-white hover:bg-white hover:text-black transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">First Document →</h3>
              <p className="text-sm opacity-80">Create and export your first OSF file</p>
            </Link>
            <Link
              href="/playground"
              className="block p-6 border-2 border-white hover:bg-white hover:text-black transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">Try Playground →</h3>
              <p className="text-sm opacity-80">Experiment in the browser</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}
