// File: app/docs/getting-started/first-document/page.tsx
// What: Tutorial for creating first OSF document
// Why: Teach users basic OSF syntax through hands-on example
// Related: app/docs/getting-started/installation/page.tsx

export default function FirstDocumentPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <h1 className="text-5xl font-bold mb-6 border-b-4 border-white pb-4">
          Your First OSF Document
        </h1>

        <p className="text-xl text-gray-300 mb-12">
          Learn OSF basics by creating a simple document, slide, and spreadsheet.
        </p>

        {/* Step 1 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Step 1: Create a File</h2>
          
          <p className="mb-4">Create a new file with a <code className="bg-gray-800 px-2 py-1 rounded">.osf</code> extension:</p>
          
          <div className="bg-gray-900 p-4 rounded border-2 border-gray-700">
            <pre className="text-green-400 font-mono">
              <code>touch hello.osf</code>
            </pre>
          </div>

          <p className="mt-4 text-sm text-gray-400">
            On Windows: Right-click in folder → New → Text Document → Rename to <code className="bg-gray-800 px-1 rounded">hello.osf</code>
          </p>
        </section>

        {/* Step 2 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Step 2: Add Metadata</h2>
          
          <p className="mb-4">Open <code className="bg-gray-800 px-2 py-1 rounded">hello.osf</code> and add a metadata block:</p>
          
          <div className="bg-gray-900 p-4 rounded border-2 border-gray-700">
            <pre className="text-gray-300 font-mono text-sm">
{`@meta {
  title: "My First Document";
  author: "Your Name";
  date: "2025-10-15";
  theme: default;
}`}
            </pre>
          </div>

          <div className="mt-4 p-4 border-2 border-blue-500 bg-blue-900 bg-opacity-20">
            <p className="text-sm">
              <strong>💡 Explanation:</strong> The @meta block contains document information. Properties end with semicolons.
            </p>
          </div>
        </section>

        {/* Step 3 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Step 3: Add Content</h2>
          
          <p className="mb-4">Add a document block with some text:</p>
          
          <div className="bg-gray-900 p-4 rounded border-2 border-gray-700">
            <pre className="text-gray-300 font-mono text-sm">
{`@doc {
  # Welcome
  
  This is my **first** OSF document!
  
  ## What I've Learned
  
  - OSF uses @ symbols for blocks
  - Markdown syntax works inside @doc
  - It's just plain text
}`}
            </pre>
          </div>
        </section>

        {/* Step 4 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Step 4: Parse and Validate</h2>
          
          <p className="mb-4">Check that your document is valid:</p>
          
          <div className="bg-gray-900 p-4 rounded border-2 border-gray-700">
            <pre className="text-green-400 font-mono">
              <code>osf parse hello.osf</code>
            </pre>
          </div>

          <p className="mt-4">You should see:</p>
          
          <div className="bg-gray-900 p-4 rounded border-2 border-gray-700">
            <pre className="text-gray-400 font-mono text-sm">
{`✓ Parse successful
Blocks: 2 (meta, doc)`}
            </pre>
          </div>
        </section>

        {/* Step 5 */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Step 5: Export to PDF</h2>
          
          <p className="mb-4">Generate a PDF from your OSF file:</p>
          
          <div className="bg-gray-900 p-4 rounded border-2 border-gray-700">
            <pre className="text-green-400 font-mono">
              <code>osf render hello.osf --format pdf</code>
            </pre>
          </div>

          <p className="mt-4">This creates <code className="bg-gray-800 px-2 py-1 rounded">hello.pdf</code> in the same directory!</p>
        </section>

        {/* Complete Example */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">Complete Example</h2>
          
          <p className="mb-4">Here's a complete OSF document with all basic features:</p>
          
          <div className="bg-gray-900 p-4 rounded border-2 border-gray-700 overflow-x-auto">
            <pre className="text-gray-300 font-mono text-sm">
{`@meta {
  title: "Complete Example";
  author: "Your Name";
  date: "2025-10-15";
  theme: corporate;
}

@doc {
  # Introduction
  
  This document has **three** sections:
  
  1. This narrative section
  2. A presentation slide
  3. A data table
}

@slide {
  title: "Key Points";
  layout: TitleAndContent;
  
  - OSF is plain text
  - Export to multiple formats
  - Git-friendly and AI-friendly
}

@sheet {
  name: "Data";
  cols: [Item, Value];
  
  A1 = "Item";
  B1 = "Value";
  A2 = "Revenue";
  B2 = 100;
  A3 = "Cost";
  B3 = 60;
  A4 = "Profit";
  B4 = =B2-B3;
}`}
            </pre>
          </div>
        </section>

        {/* Next Steps */}
        <section>
          <h2 className="text-3xl font-bold mb-4">What's Next?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="/docs/guide/doc-blocks"
              className="block p-6 border-2 border-white hover:bg-white hover:text-black transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">Learn @doc Blocks →</h3>
              <p className="text-sm opacity-80">Master document formatting</p>
            </a>

            <a
              href="/docs/guide/slide-blocks"
              className="block p-6 border-2 border-white hover:bg-white hover:text-black transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">Learn @slide Blocks →</h3>
              <p className="text-sm opacity-80">Create presentations</p>
            </a>

            <a
              href="/docs/examples"
              className="block p-6 border-2 border-white hover:bg-white hover:text-black transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">Browse Examples →</h3>
              <p className="text-sm opacity-80">See real-world OSF documents</p>
            </a>

            <a
              href="/playground"
              className="block p-6 border-2 border-white hover:bg-white hover:text-black transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">Try the Playground →</h3>
              <p className="text-sm opacity-80">Experiment in your browser</p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
