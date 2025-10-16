// File: app/docs/v1-1-features/page.tsx
// What: Documentation page for v1.1 features
// Why: Comprehensive guide to new v1.1 capabilities
// Related: app/docs/releases/v1-1/page.tsx

'use client';

import Navigation from '@/components/Navigation';
import { Sparkle } from 'phosphor-react';

export default function V11FeaturesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="container mx-auto px-4 py-12 pt-24 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Sparkle size={48} weight="duotone" className="text-green-400" />
            <h1 className="text-5xl font-bold">v1.1 Features</h1>
          </div>
          <p className="text-gray-400">Enhanced formatting, unicode support, and security improvements</p>
        </div>

        <div className="prose prose-invert max-w-none">
          {/* Strikethrough */}
          <section className="mb-12 border-l-4 border-green-500 pl-6">
            <h2 className="text-3xl font-bold mb-4">Strikethrough Text</h2>
            <p className="text-gray-300 mb-4">
              Add strikethrough formatting using the <code>~~text~~</code> syntax, perfect for showing 
              price changes, edits, or crossed-out items.
            </p>
            
            <div className="bg-gray-900 p-4 rounded mb-4">
              <p className="text-sm text-gray-500 mb-2">Example:</p>
              <pre className="text-gray-300 text-sm overflow-x-auto">
{`@slide {
  title: "Q2 Pricing Update";
  
  - Premium Plan: ~~$99/month~~ **$79/month** (Limited time!)
  - ~~Legacy feature removed~~ New feature added
}`}
              </pre>
            </div>

            <div className="bg-gray-800 p-4 rounded">
              <p className="text-sm text-gray-400 mb-2">Renders as:</p>
              <p>Premium Plan: <s>$99/month</s> <strong>$79/month</strong> (Limited time!)</p>
              <p><s>Legacy feature removed</s> New feature added</p>
            </div>
          </section>

          {/* Unicode */}
          <section className="mb-12 border-l-4 border-blue-500 pl-6">
            <h2 className="text-3xl font-bold mb-4">Unicode Escape Sequences</h2>
            <p className="text-gray-300 mb-4">
              Use <code>\uXXXX</code> (4-digit hex) or <code>\xXX</code> (2-digit hex) to insert 
              special characters like copyright symbols, checkmarks, and international characters.
            </p>
            
            <div className="bg-gray-900 p-4 rounded mb-4">
              <p className="text-sm text-gray-500 mb-2">Example:</p>
              <pre className="text-gray-300 text-sm overflow-x-auto">
{`@meta {
  title: "Product Launch \\u2713";
  copyright: "\\u00A9 2025 MyCompany";
  trademark: "MyProduct\\u2122";
}`}
              </pre>
            </div>

            <div className="bg-gray-800 p-4 rounded mb-4">
              <p className="text-sm text-gray-400 mb-2">Common Unicode Characters:</p>
              <ul className="text-sm space-y-1">
                <li><code>\u00A9</code> → © (copyright)</li>
                <li><code>\u2122</code> → ™ (trademark)</li>
                <li><code>\u00AE</code> → ® (registered)</li>
                <li><code>\u2713</code> → ✓ (checkmark)</li>
                <li><code>\u2717</code> → ✗ (cross mark)</li>
                <li><code>\u2022</code> → • (bullet)</li>
                <li><code>\xE9</code> → é (e acute)</li>
                <li><code>\xF1</code> → ñ (n tilde)</li>
              </ul>
            </div>

            <div className="bg-blue-900 bg-opacity-20 border-2 border-blue-600 p-4 rounded">
              <p className="text-sm">
                <strong>💡 Pro Tip:</strong> The parser automatically uses the shortest escape sequence 
                when serializing (e.g., <code>\xA9</code> instead of <code>\u00A9</code> for efficiency).
              </p>
            </div>
          </section>

          {/* Position Tracking */}
          <section className="mb-12 border-l-4 border-yellow-500 pl-6">
            <h2 className="text-3xl font-bold mb-4">Enhanced Error Messages</h2>
            <p className="text-gray-300 mb-4">
              Parser errors now include precise line and column numbers, making debugging 10x faster.
            </p>
            
            <div className="bg-gray-900 p-4 rounded mb-4">
              <p className="text-sm text-gray-500 mb-2">v1.0 Error (vague):</p>
              <pre className="text-red-400 text-sm">Error: Missing closing brace</pre>
            </div>

            <div className="bg-gray-900 p-4 rounded">
              <p className="text-sm text-gray-500 mb-2">v1.1 Error (precise):</p>
              <pre className="text-red-400 text-sm">{`Error: Missing closing } for block meta at 15:42`}</pre>
            </div>
          </section>

          {/* Enhanced HTML */}
          <section className="mb-12 border-l-4 border-purple-500 pl-6">
            <h2 className="text-3xl font-bold mb-4">Extended HTML Rendering</h2>
            <p className="text-gray-300 mb-4">
              HTML output now supports all content types including ordered lists, blockquotes, 
              code blocks, images, and links.
            </p>
            
            <div className="bg-gray-900 p-4 rounded mb-4">
              <p className="text-sm text-gray-500 mb-2">Now Supported:</p>
              <pre className="text-gray-300 text-sm overflow-x-auto">
{`@doc {
  # Features

  1. Ordered lists work now
  2. With proper numbering
  3. In HTML output

  > Blockquotes are fully supported
  > Including multi-line quotes

  \`\`\`javascript
  // Code blocks with syntax highlighting
  console.log("Hello, World!");
  \`\`\`

  ![Images](https://example.com/image.png)
  [Links](https://example.com) work too!
}`}
              </pre>
            </div>
          </section>

          {/* Security */}
          <section className="mb-12 border-l-4 border-red-500 pl-6">
            <h2 className="text-3xl font-bold mb-4">Security Improvements</h2>
            <p className="text-gray-300 mb-4">
              All HTML output is now properly escaped to prevent XSS (Cross-Site Scripting) attacks.
            </p>
            
            <div className="bg-gray-900 p-4 rounded mb-4">
              <p className="text-sm text-gray-500 mb-2">Malicious Input:</p>
              <pre className="text-gray-300 text-sm overflow-x-auto">
{`@meta {
  title: "<script>alert('xss')</script>";
}`}
              </pre>
            </div>

            <div className="bg-gray-900 p-4 rounded mb-4">
              <p className="text-sm text-gray-500 mb-2">Safe HTML Output:</p>
              <pre className="text-green-400 text-sm overflow-x-auto">
{`&lt;script&gt;alert(&#39;xss&#39;)&lt;/script&gt;`}
              </pre>
            </div>

            <div className="bg-red-900 bg-opacity-20 border-2 border-red-600 p-4 rounded">
              <p className="text-sm">
                <strong>🔒 Security:</strong> This protection is automatic and requires no configuration. 
                All user input is sanitized before rendering to HTML.
              </p>
            </div>
          </section>

          {/* Upgrade Guide */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 border-b-2 border-white pb-2">Upgrade Guide</h2>
            
            <div className="bg-gray-900 p-4 rounded mb-4">
              <p className="text-sm text-gray-500 mb-2">Install v1.1:</p>
              <pre className="text-green-400 text-sm">
npm install -g omniscript-cli@1.1.0
              </pre>
            </div>

            <p className="text-gray-300 mb-4">
              <strong>100% Backward Compatible:</strong> All v1.0 documents work without modification.
            </p>

            <div className="bg-green-900 bg-opacity-20 border-2 border-green-600 p-4 rounded">
              <p className="text-sm mb-2"><strong>What You Get:</strong></p>
              <ul className="text-sm space-y-1">
                <li>✅ Use ~~strikethrough~~ in your documents</li>
                <li>✅ Add unicode characters with \uXXXX</li>
                <li>✅ Better error messages automatically</li>
                <li>✅ Enhanced HTML rendering</li>
                <li>✅ XSS protection (no action needed)</li>
              </ul>
            </div>
          </section>

          {/* Links */}
          <section>
            <h2 className="text-3xl font-bold mb-4">Learn More</h2>
            <div className="grid md:grid-cols-2 gap-4">
              <a href="/docs/releases/v1-1" className="block p-4 bg-gray-900 hover:bg-gray-800 border-2 border-gray-700 hover:border-white transition-all">
                <p className="font-bold mb-2">📋 Release Notes</p>
                <p className="text-sm text-gray-400">Full v1.1.0 release documentation</p>
              </a>
              <a href="https://github.com/OmniScriptOSF/omniscript-core/blob/main/spec/v1.1/osf-spec.md" className="block p-4 bg-gray-900 hover:bg-gray-800 border-2 border-gray-700 hover:border-white transition-all" target="_blank" rel="noopener noreferrer">
                <p className="font-bold mb-2">📖 Specification v1.1</p>
                <p className="text-sm text-gray-400">Technical specification document</p>
              </a>
              <a href="https://github.com/OmniScriptOSF/omniscript-examples/blob/main/getting-started/v1.1-new-features.osf" className="block p-4 bg-gray-900 hover:bg-gray-800 border-2 border-gray-700 hover:border-white transition-all" target="_blank" rel="noopener noreferrer">
                <p className="font-bold mb-2">💡 Example Document</p>
                <p className="text-sm text-gray-400">See v1.1 features in action</p>
              </a>
              <a href="/docs/user-guide" className="block p-4 bg-gray-900 hover:bg-gray-800 border-2 border-gray-700 hover:border-white transition-all">
                <p className="font-bold mb-2">📚 User Guide</p>
                <p className="text-sm text-gray-400">Complete OSF documentation</p>
              </a>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
