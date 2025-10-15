// File: app/docs/v1-features/diagram-blocks/page.tsx
// What: Documentation for @diagram blocks
// Why: Teach users how to create diagrams in OSF
// Related: app/docs/v1-features/, v1.0 spec

'use client';

import { FlowArrow, GameController } from 'phosphor-react';

export default function DiagramBlocksPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-5xl font-bold mb-6 border-b-4 border-purple-500 pb-4">
          @diagram Blocks
        </h1>
        
        <p className="text-xl text-gray-300 mb-12">
          Create flowcharts, sequence diagrams, Gantt charts, and mind maps using Mermaid or Graphviz.
        </p>

        {/* Quick Example */}
        <section className="mb-12 border-2 border-purple-500 p-6">
          <h2 className="text-3xl font-bold mb-4">Quick Example</h2>
          <div className="bg-gray-900 p-4 font-mono text-sm overflow-x-auto">
            <pre>{`@diagram {
  type: "flowchart";
  engine: "mermaid";
  title: "User Login Flow";
  code: "graph TD
    A[Start] --> B{Valid User?}
    B -->|Yes| C[Dashboard]
    B -->|No| D[Error Page]
    D --> A";
}`}</pre>
          </div>
        </section>

        {/* Diagram Types */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-6 border-b-2 border-white pb-2">Diagram Types</h2>
          
          {/* Flowchart */}
          <div className="mb-8 border-l-4 border-blue-500 pl-6">
            <h3 className="text-2xl font-bold mb-3">Flowchart</h3>
            <p className="text-gray-300 mb-4">Visualize processes and decision flows.</p>
            <div className="bg-gray-900 p-4 font-mono text-sm overflow-x-auto mb-4">
              <pre>{`@diagram {
  type: "flowchart";
  engine: "mermaid";
  title: "Order Processing";
  code: "graph LR
    A[Order] --> B{In Stock?}
    B -->|Yes| C[Ship]
    B -->|No| D[Backorder]
    C --> E[Complete]
    D --> E";
}`}</pre>
            </div>
            <div className="bg-gray-800 p-3 text-sm">
              <strong>Supported directions:</strong> TD (top-down), LR (left-right), BT (bottom-top), RL (right-left)
            </div>
          </div>

          {/* Sequence */}
          <div className="mb-8 border-l-4 border-green-500 pl-6">
            <h3 className="text-2xl font-bold mb-3">Sequence Diagram</h3>
            <p className="text-gray-300 mb-4">Show interactions between actors over time.</p>
            <div className="bg-gray-900 p-4 font-mono text-sm overflow-x-auto mb-4">
              <pre>{`@diagram {
  type: "sequence";
  engine: "mermaid";
  title: "API Authentication";
  code: "sequenceDiagram
    Client->>API: Request Token
    API->>Database: Validate User
    Database-->>API: User Valid
    API-->>Client: Return Token";
}`}</pre>
            </div>
          </div>

          {/* Gantt */}
          <div className="mb-8 border-l-4 border-yellow-500 pl-6">
            <h3 className="text-2xl font-bold mb-3">Gantt Chart</h3>
            <p className="text-gray-300 mb-4">Project timelines and task dependencies.</p>
            <div className="bg-gray-900 p-4 font-mono text-sm overflow-x-auto mb-4">
              <pre>{`@diagram {
  type: "gantt";
  engine: "mermaid";
  title: "Project Timeline";
  code: "gantt
    title Development Schedule
    section Phase 1
    Design       :a1, 2024-01-01, 30d
    Development  :a2, after a1, 45d
    section Phase 2
    Testing      :a3, after a2, 20d
    Deployment   :a4, after a3, 10d";
}`}</pre>
            </div>
          </div>

          {/* Mind Map */}
          <div className="mb-8 border-l-4 border-red-500 pl-6">
            <h3 className="text-2xl font-bold mb-3">Mind Map</h3>
            <p className="text-gray-300 mb-4">Organize ideas hierarchically.</p>
            <div className="bg-gray-900 p-4 font-mono text-sm overflow-x-auto mb-4">
              <pre>{`@diagram {
  type: "mindmap";
  engine: "mermaid";
  title: "Product Features";
  code: "mindmap
    root((Product))
      Features
        Core
        Advanced
      Users
        Free
        Premium
      Support
        Docs
        Community";
}`}</pre>
            </div>
          </div>
        </section>

        {/* Engines */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-6 border-b-2 border-white pb-2">Rendering Engines</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            <div className="border-2 border-purple-500 p-6">
              <h3 className="text-2xl font-bold mb-3">Mermaid (Default)</h3>
              <p className="text-gray-300 mb-4">
                Modern, easy-to-use syntax with great support for flowcharts, sequences, Gantt, and more.
              </p>
              <div className="space-y-2 text-sm">
                <div>✅ Flowcharts</div>
                <div>✅ Sequence diagrams</div>
                <div>✅ Gantt charts</div>
                <div>✅ Mind maps</div>
                <div>✅ Simple syntax</div>
              </div>
            </div>

            <div className="border-2 border-blue-500 p-6">
              <h3 className="text-2xl font-bold mb-3">Graphviz</h3>
              <p className="text-gray-300 mb-4">
                Powerful graph visualization with DOT language. Best for complex network diagrams.
              </p>
              <div className="space-y-2 text-sm">
                <div>✅ Directed graphs</div>
                <div>✅ Undirected graphs</div>
                <div>✅ Complex layouts</div>
                <div>✅ Network diagrams</div>
                <div>✅ Advanced control</div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-4 mb-4">
            <h4 className="font-bold mb-2">Graphviz Example:</h4>
            <div className="font-mono text-sm overflow-x-auto">
              <pre>{`@diagram {
  type: "flowchart";
  engine: "graphviz";
  title: "System Architecture";
  code: "digraph G {
    rankdir=LR;
    node [shape=box];
    Client -> LoadBalancer;
    LoadBalancer -> Server1;
    LoadBalancer -> Server2;
    Server1 -> Database;
    Server2 -> Database;
  }";
}`}</pre>
            </div>
          </div>
        </section>

        {/* Properties */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-6 border-b-2 border-white pb-2">Properties</h2>
          
          <div className="bg-gray-900 p-6">
            <div className="space-y-4">
              <div>
                <code className="text-purple-400">type</code>
                <span className="text-gray-400"> (required)</span>
                <p className="text-gray-300 mt-1">
                  Diagram type: <code>flowchart</code>, <code>sequence</code>, <code>gantt</code>, <code>mindmap</code>
                </p>
              </div>
              <div>
                <code className="text-purple-400">engine</code>
                <span className="text-gray-400"> (required)</span>
                <p className="text-gray-300 mt-1">
                  Rendering engine: <code>mermaid</code> (default), <code>graphviz</code>
                </p>
              </div>
              <div>
                <code className="text-purple-400">title</code>
                <span className="text-gray-400"> (optional)</span>
                <p className="text-gray-300 mt-1">
                  Diagram title/caption
                </p>
              </div>
              <div>
                <code className="text-purple-400">code</code>
                <span className="text-gray-400"> (required)</span>
                <p className="text-gray-300 mt-1">
                  Diagram definition in Mermaid or Graphviz syntax
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Mermaid Syntax Quick Reference */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-6 border-b-2 border-white pb-2">Mermaid Syntax Reference</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div className="bg-gray-900 p-4">
              <h4 className="font-bold mb-2">Flowchart Nodes:</h4>
              <div className="font-mono text-sm space-y-1">
                <div>A[Rectangle]</div>
                <div>B(Round edges)</div>
                <div>C((Circle))</div>
                <div>D{'{Diamond}'}</div>
                <div>E[/Parallelogram/]</div>
              </div>
            </div>

            <div className="bg-gray-900 p-4">
              <h4 className="font-bold mb-2">Flowchart Arrows:</h4>
              <div className="font-mono text-sm space-y-1">
                <div>A {'->'} B (solid)</div>
                <div>A -.{'->'} B (dotted)</div>
                <div>A =={'>'} B (thick)</div>
                <div>A {'->'} |text| B (labeled)</div>
              </div>
            </div>
          </div>

          <div className="border-2 border-purple-500 p-4">
            <p className="text-sm">
              <strong>Learn more:</strong> <a href="https://mermaid.js.org/intro/" target="_blank" rel="noopener noreferrer" className="underline">Mermaid Documentation</a>
            </p>
          </div>
        </section>

        {/* Rendering */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-6 border-b-2 border-white pb-2">How Diagrams Render</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border-2 border-white p-4">
              <h3 className="text-xl font-bold mb-2">PDF</h3>
              <p className="text-gray-300 text-sm">
                Rendered using Mermaid.js or Graphviz with high quality SVG output.
              </p>
            </div>
            <div className="border-2 border-white p-4">
              <h3 className="text-xl font-bold mb-2">DOCX</h3>
              <p className="text-gray-300 text-sm">
                Diagram code displayed as preformatted text for reference.
              </p>
            </div>
            <div className="border-2 border-white p-4">
              <h3 className="text-xl font-bold mb-2">PPTX</h3>
              <p className="text-gray-300 text-sm">
                Diagram code shown on slides with monospace formatting.
              </p>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-6 border-b-2 border-white pb-2">Best Practices</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-bold mb-1">✅ Keep it Simple</h4>
              <p className="text-gray-300 text-sm">
                Complex diagrams with many nodes can be hard to read. Break into multiple diagrams if needed.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-bold mb-1">✅ Use Descriptive Labels</h4>
              <p className="text-gray-300 text-sm">
                Label nodes and edges clearly so the diagram is self-explanatory.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-bold mb-1">✅ Add Titles</h4>
              <p className="text-gray-300 text-sm">
                Always include a title to provide context for the diagram.
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-bold mb-1">⚠️ Test Your Syntax</h4>
              <p className="text-gray-300 text-sm">
                Use the playground or Mermaid Live Editor to validate diagram syntax before adding to documents.
              </p>
            </div>
          </div>
        </section>

        {/* Try It */}
        <section className="mb-12 bg-purple-900 border-2 border-purple-500 p-6">
          <h2 className="text-3xl font-bold mb-4">Try It Yourself</h2>
          <p className="text-gray-300 mb-4">
            Test @diagram blocks in the interactive playground:
          </p>
          <a href="/playground" className="inline-block px-6 py-3 bg-white text-black font-bold hover:bg-gray-200">
            Open Playground →
          </a>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-6 border-t-2 border-white">
          <a href="/docs/v1-features/chart-blocks" className="text-white hover:underline">
            ← Previous: @chart Blocks
          </a>
          <a href="/docs/v1-features/code-blocks" className="text-white hover:underline">
            Next: @code Blocks →
          </a>
        </div>
      </div>
    </div>
  );
}
