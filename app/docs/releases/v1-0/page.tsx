// File: app/docs/releases/v1-0/page.tsx
// What: Full v1.0 release notes page
// Why: Comprehensive release documentation for v1.0
// Related: app/docs/releases/page.tsx, RELEASE_NOTES.md

'use client';

import Navigation from '@/components/Navigation';
import { Rocket, ChartBar, FlowArrow, Code, CheckCircle, Warning, Star, Confetti } from 'phosphor-react';

export default function V1ReleaseNotesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="container mx-auto px-4 py-12 pt-24 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-5xl font-bold">OmniScript Format v1.0</h1>
            <span className="px-4 py-2 bg-green-500 text-black font-bold">
              PRODUCTION READY
            </span>
          </div>
          <p className="text-gray-400">Released: October 15, 2025</p>
        </div>

        <div className="prose prose-invert max-w-none">
          {/* Welcome */}
          <section className="mb-12 border-2 border-white p-6">
            <Confetti size={48} weight="duotone" className="mb-4" />
            <h2 className="text-3xl font-bold mb-4">Welcome to v1.0!</h2>
            <p className="text-xl text-gray-300">
              OmniScript Format v1.0 is a major milestone representing months of development, 
              testing, and refinement. This release marks the <strong>official production release</strong> with 
              all core features implemented, tested, and ready for use.
            </p>
          </section>

          {/* What's New */}
          <section className="mb-12">
            <h2 className="text-4xl font-bold mb-6 border-b-2 border-white pb-2 flex items-center gap-3">
              <Rocket size={36} weight="duotone" />
              What's New
            </h2>
            
            {/* @chart blocks */}
            <div className="mb-8 border-l-4 border-blue-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">@chart - Data Visualization</h3>
              <p className="text-gray-300 mb-4">
                Create interactive charts with multiple types and styling options.
              </p>
              
              <div className="bg-gray-900 p-4 mb-4 font-mono text-sm overflow-x-auto">
                <pre>{`@chart {
  type: "bar";
  title: "Sales by Quarter";
  data: [
    { label: "Q1"; values: [100, 120, 90]; },
    { label: "Q2"; values: [150, 140, 160]; }
  ];
  options: {
    xAxis: "Quarter";
    yAxis: "Revenue ($K)";
    legend: true;
  };
}`}</pre>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-bold mb-2">Supported Types:</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Bar charts</li>
                    <li>Line charts</li>
                    <li>Pie charts</li>
                    <li>Scatter plots</li>
                    <li>Area charts</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Rendering:</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>PDF: Chart.js</li>
                    <li>DOCX: Data tables</li>
                    <li>PPTX: Native charts</li>
                  </ul>
                </div>
              </div>

              <a href="/docs/v1-features/chart-blocks" className="inline-block px-4 py-2 bg-blue-500 text-black font-bold hover:bg-blue-400">
                Learn More →
              </a>
            </div>

            {/* @diagram blocks */}
            <div className="mb-8 border-l-4 border-purple-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">@diagram - Visual Diagrams</h3>
              <p className="text-gray-300 mb-4">
                Create flowcharts, sequence diagrams, Gantt charts, and mind maps.
              </p>
              
              <div className="bg-gray-900 p-4 mb-4 font-mono text-sm overflow-x-auto">
                <pre>{`@diagram {
  type: "flowchart";
  engine: "mermaid";
  title: "User Authentication";
  code: "graph TD
    A[Login] --> B{Valid?}
    B -->|Yes| C[Dashboard]
    B -->|No| D[Error]";
}`}</pre>
              </div>

              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <h4 className="font-bold mb-2">Supported Types:</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Flowcharts</li>
                    <li>Sequence diagrams</li>
                    <li>Gantt charts</li>
                    <li>Mind maps</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Engines:</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Mermaid (default)</li>
                    <li>Graphviz</li>
                  </ul>
                </div>
              </div>

              <a href="/docs/v1-features/diagram-blocks" className="inline-block px-4 py-2 bg-purple-500 text-black font-bold hover:bg-purple-400">
                Learn More →
              </a>
            </div>

            {/* @code blocks */}
            <div className="mb-8 border-l-4 border-green-500 pl-6">
              <h3 className="text-2xl font-bold mb-3">@code - Syntax Highlighting</h3>
              <p className="text-gray-300 mb-4">
                Display code with line numbers and syntax highlighting for 50+ languages.
              </p>
              
              <div className="bg-gray-900 p-4 mb-4 font-mono text-sm overflow-x-auto">
                <pre>{`@code {
  language: "typescript";
  caption: "Server Example";
  lineNumbers: true;
  highlight: [3, 4];
  code: "import express from 'express';
    const app = express();
    app.listen(3000);";
}`}</pre>
              </div>

              <div className="mb-4">
                <h4 className="font-bold mb-2">Features:</h4>
                <ul className="list-disc list-inside text-gray-300">
                  <li>50+ language support (via Prism.js)</li>
                  <li>Optional line numbers</li>
                  <li>Line highlighting</li>
                  <li>Captions</li>
                </ul>
              </div>

              <a href="/docs/v1-features/code-blocks" className="inline-block px-4 py-2 bg-green-500 text-black font-bold hover:bg-green-400">
                Learn More →
              </a>
            </div>
          </section>

          {/* Complete Feature List */}
          <section className="mb-12">
            <h2 className="text-4xl font-bold mb-6 border-b-2 border-white pb-2">Complete Feature List</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="border-2 border-white p-4">
                <h3 className="text-xl font-bold mb-3">Core Features</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✅ Zero-dependency parser</li>
                  <li>✅ 7 block types</li>
                  <li>✅ 4 export formats</li>
                  <li>✅ 10+ themes</li>
                  <li>✅ Full TypeScript</li>
                  <li>✅ Backward compatible</li>
                </ul>
              </div>

              <div className="border-2 border-white p-4">
                <h3 className="text-xl font-bold mb-3">Advanced Features</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✅ 5 chart types</li>
                  <li>✅ 4 diagram types</li>
                  <li>✅ 2 diagram engines</li>
                  <li>✅ 50+ code languages</li>
                  <li>✅ Line highlighting</li>
                  <li>✅ Custom styling</li>
                </ul>
              </div>

              <div className="border-2 border-white p-4">
                <h3 className="text-xl font-bold mb-3">Quality Assurance</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>✅ 152 tests (100% pass)</li>
                  <li>✅ Code review complete</li>
                  <li>✅ Security hardened</li>
                  <li>✅ Performance optimized</li>
                  <li>✅ Production-ready</li>
                </ul>
              </div>

              <div className="border-2 border-white p-4">
                <h3 className="text-xl font-bold mb-3">Packages</h3>
                <ul className="space-y-2 text-gray-300">
                  <li>📦 omniscript-parser@1.0.0</li>
                  <li>📦 omniscript-converters@1.0.0</li>
                  <li>📦 omniscript-cli@1.0.0</li>
                  <li>📦 omniscript-vscode@0.1.0</li>
                  <li>📦 omniscript-examples@1.0.0</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Breaking Changes */}
          <section className="mb-12">
            <h2 className="text-4xl font-bold mb-6 border-b-2 border-white pb-2">Breaking Changes</h2>
            <div className="bg-green-900 border-2 border-green-500 p-6">
              <h3 className="text-2xl font-bold mb-3 text-green-300 flex items-center gap-2">
                <CheckCircle size={32} weight="duotone" />
                None!
              </h3>
              <p className="text-gray-300">
                v1.0 is <strong>fully backward compatible</strong> with v0.5. All existing OSF documents 
                continue to work without modification.
              </p>
            </div>
          </section>

          {/* Migration Guide */}
          <section className="mb-12">
            <h2 className="text-4xl font-bold mb-6 border-b-2 border-white pb-2">Migration Guide</h2>
            
            <div className="bg-gray-900 p-6 mb-4">
              <h3 className="text-xl font-bold mb-3">From v0.5 to v1.0</h3>
              <p className="text-gray-300 mb-4">
                <strong>Good news:</strong> No migration needed! v1.0 is fully backward compatible.
              </p>
              
              <div className="mb-4">
                <h4 className="font-bold mb-2">All v0.5 documents work unchanged:</h4>
                <div className="bg-black p-4 font-mono text-sm">
                  <pre>{`@meta { title: "My Doc"; }
@doc { # Content }
@slide { title: "Slide"; }
// ✅ Works perfectly in v1.0`}</pre>
                </div>
              </div>

              <div className="mb-4">
                <h4 className="font-bold mb-2">Start using v1.0 features immediately:</h4>
                <div className="bg-black p-4 font-mono text-sm">
                  <pre>{`@meta { title: "My Doc"; version: "1.0"; }
@doc { # Content }
@chart { type: "bar"; /* new! */ }
// ✅ Mix v0.5 and v1.0 blocks`}</pre>
                </div>
              </div>
            </div>

            <div className="border-2 border-blue-500 p-4">
              <h4 className="font-bold mb-2">Recommended Updates:</h4>
              <ol className="list-decimal list-inside space-y-2 text-gray-300">
                <li>Update packages: <code className="bg-black px-2 py-1">npm update omniscript-*</code></li>
                <li>Add version to @meta: <code className="bg-black px-2 py-1">version: "1.0";</code></li>
                <li>Explore new blocks (@chart, @diagram, @code)</li>
              </ol>
            </div>
          </section>

          {/* Test Results */}
          <section className="mb-12">
            <h2 className="text-4xl font-bold mb-6 border-b-2 border-white pb-2">Test Results</h2>
            
            <div className="bg-green-900 border-2 border-green-500 p-6 mb-4">
              <h3 className="text-2xl font-bold mb-3 text-green-300">152/152 Tests Passing (100%)</h3>
              
              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <h4 className="font-bold mb-2">Unit Tests:</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>Parser: 26/26 ✅</li>
                    <li>Converters: 73/73 ✅</li>
                    <li>CLI: 29/29 ✅</li>
                  </ul>
                </div>
                <div>
                  <h4 className="font-bold mb-2">Integration Tests:</h4>
                  <ul className="list-disc list-inside text-gray-300">
                    <li>End-to-end: 5/5 ✅</li>
                    <li>File validation: 3/3 ✅</li>
                    <li>Examples: 16/16 ✅</li>
                  </ul>
                </div>
              </div>
            </div>

            <a 
              href="https://github.com/OmniScriptOSF/omniscript-core/blob/main/docs/TESTING.md" 
              className="inline-block px-6 py-3 border-2 border-white hover:bg-white hover:text-black font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Full Test Report →
            </a>
          </section>

          {/* Known Issues */}
          <section className="mb-12">
            <h2 className="text-4xl font-bold mb-6 border-b-2 border-white pb-2 flex items-center gap-3">
              <Warning size={36} weight="duotone" />
              Known Issues
            </h2>
            
            <div className="border-2 border-yellow-500 p-6">
              <h3 className="text-xl font-bold mb-3 text-yellow-300">Minor (P2) - Non-Blocking</h3>
              <p className="text-gray-300 mb-4">
                These issues do not block v1.0 release but are tracked for v1.0.1:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Chart color array bounds checking</li>
                <li>Code language validation against Prism.js</li>
                <li>Sheet data optional chaining edge cases</li>
                <li>CDN dependencies for Chart.js/Mermaid</li>
              </ul>
              <p className="text-gray-400 text-sm mt-4">
                Track issues on <a href="https://github.com/OmniScriptOSF/omniscript-core/issues" className="underline">GitHub</a>
              </p>
            </div>
          </section>

          {/* What's Next */}
          <section className="mb-12">
            <h2 className="text-4xl font-bold mb-6 border-b-2 border-white pb-2 flex items-center gap-3">
              <Star size={36} weight="duotone" />
              What's Next (v1.1)
            </h2>
            
            <div className="border-2 border-blue-500 p-6">
              <h3 className="text-xl font-bold mb-3">Planned Features:</h3>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>@table block - Markdown-style tables</li>
                <li>@include directive - Import external files</li>
                <li>@variables - Template variables</li>
                <li>@loops - Repeat blocks dynamically</li>
                <li>Conditional rendering</li>
                <li>Custom themes system</li>
                <li>Plugin architecture</li>
                <li>More export formats (HTML, Markdown, LaTeX)</li>
              </ul>
              <a 
                href="https://github.com/OmniScriptOSF/omniscript-core/blob/main/spec/roadmap.md" 
                className="inline-block mt-4 px-6 py-3 bg-blue-500 text-black font-bold hover:bg-blue-400"
                target="_blank"
                rel="noopener noreferrer"
              >
                View Full Roadmap →
              </a>
            </div>
          </section>

          {/* Thank You */}
          <section className="mb-12">
            <h2 className="text-4xl font-bold mb-6 border-b-2 border-white pb-2">Thank You</h2>
            <div className="bg-gray-900 p-6">
              <p className="text-xl text-gray-300 mb-4">
                Thank you for using OmniScript Format! We're excited to see what you build with v1.0.
              </p>
              <p className="text-gray-300">
                <strong>Happy documenting!</strong> 🚀
              </p>
            </div>
          </section>

          {/* Navigation */}
          <div className="flex justify-between items-center mt-12 pt-6 border-t-2 border-white">
            <a href="/docs/releases" className="text-white hover:underline">
              ← Back to All Releases
            </a>
            <a href="/playground" className="px-6 py-3 bg-white text-black font-bold hover:bg-gray-200">
              Try v1.0 in Playground →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
