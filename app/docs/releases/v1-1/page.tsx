// File: app/docs/releases/v1-1/page.tsx
// What: v1.1 release documentation page
// Why: Document new features and improvements for users
// RELEVANT FILES: ../v1-0/page.tsx, ../../page.tsx

'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';

export default function V11ReleasePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation dark />
      <div className="container mx-auto px-4 py-12 pt-24 max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-5xl font-bold">v1.1.0 Release Notes</h1>
            <span className="px-4 py-2 bg-green-500 text-black text-lg font-bold">
              PRODUCTION READY
            </span>
          </div>
          <p className="text-xl text-gray-300">Released October 16, 2025</p>
        </div>

        <div className="p-6 bg-green-900 border-2 border-green-500 mb-12">
          <h2 className="text-2xl font-bold mb-4">🎉 Strikethrough, Unicode, and Better Rendering</h2>
          <p className="text-lg text-gray-200">
            v1.1.0 delivers richer formatting, precise error positions, and safer HTML output — all fully
            backward compatible with v1.0.
          </p>
        </div>

        <section className="mb-12 border-2 border-white p-6">
          <h2 className="text-2xl font-bold mb-4">Table of Contents</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li><a href="#strikethrough" className="hover:underline">Strikethrough Text</a></li>
            <li><a href="#unicode" className="hover:underline">Unicode Escape Sequences</a></li>
            <li><a href="#errors" className="hover:underline">Position Tracking in Errors</a></li>
            <li><a href="#rendering" className="hover:underline">Extended HTML Rendering</a></li>
            <li><a href="#security" className="hover:underline">Security Improvements</a></li>
            <li><a href="#upgrade" className="hover:underline">Upgrade Guide</a></li>
          </ul>
        </section>

        <section className="mb-12 border-l-4 border-green-500 pl-6">
          <div className="flex items-center gap-3 mb-6">
            <h2 className="text-4xl font-bold">What&apos;s New</h2>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-gray-900 border-2 border-white">
              <h3 id="strikethrough" className="text-2xl font-bold mb-3">✨ Strikethrough Text Formatting</h3>
              <p className="text-gray-300 mb-4">Use <code>~~text~~</code> syntax for strikethrough formatting:</p>
              <div className="bg-black border-2 border-white p-4 font-mono text-sm text-green-400 overflow-x-auto">
                <pre>{`@slide {
  title: "Product Updates";
  
  Price: ~~$99~~ **$79** today only!
}`}</pre>
              </div>
              <p className="text-gray-300 mt-4">
                <strong>Renders as:</strong> Price: <s>$99</s> <strong>$79</strong> today only!
              </p>
            </div>

            <div className="p-6 bg-gray-900 border-2 border-white">
              <h3 id="unicode" className="text-2xl font-bold mb-3">🌐 Unicode Escape Sequences</h3>
              <p className="text-gray-300 mb-4">
                Full support for <code>\uXXXX</code> (4-digit hex) and <code>\xXX</code> (2-digit hex):
              </p>
              <div className="bg-black border-2 border-white p-4 font-mono text-sm text-green-400 overflow-x-auto">
                <pre>{`@meta {
  title: "Copyright \\u00A9 2025";    // ©
  status: "Complete \\u2713";         // ✓
  author: "Caf\\xE9";                 // Café
}`}</pre>
              </div>
              <ul className="list-disc list-inside space-y-2 text-gray-300 mt-4">
                <li>Perfect round-trip: parse(serialize(doc)) === doc</li>
                <li>Automatic escaping on serialization</li>
                <li>Full Unicode range (U+0000 to U+FFFF)</li>
              </ul>
            </div>

            <div className="p-6 bg-gray-900 border-2 border-white">
              <h3 id="errors" className="text-2xl font-bold mb-3">🔍 Position Tracking in Errors</h3>
              <p className="text-gray-300 mb-4">All parser errors now include precise line:column information:</p>
              <div className="bg-black border-2 border-white p-4 font-mono text-sm text-green-400 overflow-x-auto">
                <pre>{`// Before (v1.0)
Error: Missing closing }

// After (v1.1)  
Error: Missing closing } for block meta at 15:42
Error: Expected identifier at 8:5
Error: Invalid number format at 12:18`}</pre>
              </div>
              <p className="text-gray-300 mt-4">
                <strong>Benefit:</strong> 10x faster debugging for large documents.
              </p>
            </div>

            <div className="p-6 bg-gray-900 border-2 border-white">
              <h3 id="rendering" className="text-2xl font-bold mb-3">🌐 Extended HTML Rendering</h3>
              <p className="text-gray-300 mb-4">HTML output now supports all content block types:</p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li><strong>Ordered Lists</strong> - Renders as <code>&lt;ol&gt;</code></li>
                <li><strong>Blockquotes</strong> - Renders as <code>&lt;blockquote&gt;</code></li>
                <li><strong>Code Blocks</strong> - Syntax highlighting with <code>&lt;pre&gt;&lt;code&gt;</code></li>
                <li><strong>Images</strong> - Proper <code>&lt;img&gt;</code> tags</li>
                <li><strong>Links</strong> - Proper <code>&lt;a&gt;</code> tags</li>
              </ul>
              <div className="mt-4 p-4 bg-black border-2 border-white">
                <h4 className="text-lg font-bold mb-2">📝 Enhanced Markdown Export</h4>
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Strikethrough → <code>~~text~~</code></li>
                  <li>Ordered lists → <code>1. 2. 3.</code></li>
                  <li>Blockquotes → <code>&gt; text</code></li>
                  <li>Code blocks → <code>```language ... ```</code></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="mb-12 border-l-4 border-purple-500 pl-6">
          <h2 id="security" className="text-4xl font-bold mb-6">🔒 Security Improvements</h2>
          <div className="p-6 bg-purple-900 border-2 border-purple-500">
            <p className="text-gray-200 mb-4">
              <strong>XSS Prevention:</strong> All HTML output is properly escaped.
            </p>
            <div className="bg-black border-2 border-purple-500 p-4 font-mono text-sm text-purple-200 overflow-x-auto">
              <pre>{`@meta { title: "<script>alert('xss')</script>"; }

// v1.0: Would render dangerous <script> tag
// v1.1: Renders safe: &lt;script&gt;...&lt;/script&gt;`}</pre>
            </div>
            <p className="text-gray-200 mt-4">
              Applies to meta properties, document content, slide content, and sheet values.
            </p>
          </div>
        </section>

        <section className="mb-12 border-l-4 border-blue-500 pl-6">
          <h2 className="text-4xl font-bold mb-6">📝 Example: New Features</h2>
          <div className="bg-gray-900 border-2 border-blue-500 p-4 font-mono text-sm text-blue-200 overflow-x-auto">
            <pre>{`@slide {
  title: "Product Updates";
  
  ## Latest Changes
  
  1. First improvement
  2. Second enhancement  
  3. ~~Old feature~~ **New feature**
  
  > "These updates are game-changing!" - Customer
  
  Implementation:
  
  \`\`\`typescript
  const updates = {
    version: "1.1.0",
    features: ["strikethrough", "unicode"]
  };
  \`\`\`
}`}</pre>
          </div>
        </section>

        <section id="upgrade" className="mb-12 border-l-4 border-white pl-6">
          <h2 className="text-4xl font-bold mb-6">🔄 Upgrade Guide</h2>
          <div className="space-y-4">
            <div className="p-4 bg-black border-2 border-white">
              <div className="text-sm text-gray-400 mb-2">Packages</div>
              <pre className="text-green-400 font-mono text-sm">npm install omniscript-parser@1.1.0
npm install omniscript-cli@1.1.0
npm install omniscript-converters@1.1.0</pre>
            </div>
            <p className="text-gray-300">No code changes required — all v1.0 documents work without modification.</p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>✅ Use <code>~~strikethrough~~</code> in your documents</li>
              <li>✅ Better error messages with exact locations</li>
              <li>✅ HTML rendering includes all content types</li>
              <li>✅ Markdown export preserves all formatting</li>
              <li>✅ PDF/DOCX/PPTX/XLSX rendering via CLI</li>
              <li>✅ Protected against XSS attacks automatically</li>
            </ul>
          </div>
        </section>

        <section className="mb-12 border-l-4 border-green-500 pl-6">
          <h2 className="text-4xl font-bold mb-6">📊 Test Coverage</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>✅ <strong>88 tests</strong> passing (31 new for v1.1 features)</li>
            <li>✅ <strong>100% success rate</strong></li>
            <li>✅ Comprehensive coverage for all new features</li>
            <li>✅ Security tests for XSS prevention</li>
            <li>✅ Round-trip tests for unicode handling</li>
          </ul>
        </section>

        <section className="mb-12 border-l-4 border-orange-500 pl-6">
          <h2 className="text-4xl font-bold mb-6">🐛 Bug Fixes</h2>
          <ul className="list-disc list-inside space-y-2 text-gray-300">
            <li>Fixed parser round-trip with unicode characters</li>
            <li>Fixed CLI converter integration (PDF/DOCX/PPTX/XLSX)</li>
            <li>Fixed dependency version synchronization</li>
            <li>Fixed vitest configuration for cleaner test output</li>
          </ul>
        </section>

        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-6">🚀 Next Steps</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/docs/getting-started/installation"
              className="block p-6 border-2 border-white hover:bg-white hover:text-black transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">🧭 Install OmniScript →</h3>
              <p className="text-sm opacity-80">Get the CLI and start parsing documents</p>
            </Link>
            <Link
              href="/playground"
              className="block p-6 border-2 border-white hover:bg-white hover:text-black transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">🎮 Try the Playground →</h3>
              <p className="text-sm opacity-80">Experiment with OSF in your browser</p>
            </Link>
            <a
              href="https://github.com/OmniScriptOSF/omniscript-examples"
              className="block p-6 border-2 border-white hover:bg-white hover:text-black transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-xl font-bold mb-2">📚 Browse Examples →</h3>
              <p className="text-sm opacity-80">Explore real-world OSF documents</p>
            </a>
            <a
              href="https://github.com/OmniScriptOSF/omniscript-core"
              className="block p-6 border-2 border-white hover:bg-white hover:text-black transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <h3 className="text-xl font-bold mb-2">⭐ Star on GitHub →</h3>
              <p className="text-sm opacity-80">Follow development and contribute</p>
            </a>
          </div>
        </section>
      </div>
    </div>
  );
}
