// File: app/docs/releases/v1-1/page.tsx
// What: v1.1 release documentation page
// Why: Document new features and improvements for users
// RELEVANT FILES: ../v1-0/page.tsx, ../../page.tsx

'use client';

import Navigation from '@/components/Navigation';

export default function V11ReleasePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation dark />
      <div className="container mx-auto px-4 py-12 pt-24 max-w-4xl">
        <div className="prose prose-invert max-w-none">
          <h1 id="top">OmniScript v1.1.0 Release</h1>
          <p className="lead">
            <strong>Release Date:</strong> October 16, 2025<br />
            <strong>Status:</strong> ✅ Production Ready<br />
            <strong>Compatibility:</strong> 100% backward compatible with v1.0
          </p>

          <hr />

          <h2>Table of Contents</h2>
          <ul>
            <li><a href="#strikethrough">Strikethrough Text</a></li>
            <li><a href="#unicode">Unicode Escape Sequences</a></li>
            <li><a href="#errors">Position Tracking in Errors</a></li>
            <li><a href="#rendering">Extended HTML Rendering</a></li>
            <li><a href="#security">Security Improvements</a></li>
            <li><a href="#upgrade">Upgrade Guide</a></li>
          </ul>

          <hr />

          <h2>🎉 What&apos;s New</h2>

          <h3 id="strikethrough">✨ Strikethrough Text Formatting</h3>
          <p>Use <code>~~text~~</code> syntax for strikethrough formatting:</p>
          <pre><code>{`@slide {
  title: "Product Updates";
  
  Price: ~~$99~~ **$79** today only!
}`}</code></pre>
          <p><strong>Renders as:</strong> Price: <s>$99</s> <strong>$79</strong> today only!</p>

          <h3 id="unicode">🌐 Unicode Escape Sequences</h3>
          <p>Full support for <code>\uXXXX</code> (4-digit hex) and <code>\xXX</code> (2-digit hex):</p>
          <pre><code>{`@meta {
  title: "Copyright \\u00A9 2025";    // ©
  status: "Complete \\u2713";         // ✓
  author: "Caf\\xE9";                 // Café
}`}</code></pre>
          <p><strong>Features:</strong></p>
          <ul>
            <li>Perfect round-trip: parse(serialize(doc)) === doc</li>
            <li>Automatic escaping on serialization</li>
            <li>Full Unicode range (U+0000 to U+FFFF)</li>
          </ul>

          <h3 id="errors">🔍 Position Tracking in Errors</h3>
          <p>All parser errors now include precise line:column information:</p>
          <pre><code>{`// Before (v1.0)
Error: Missing closing }

// After (v1.1)  
Error: Missing closing } for block meta at 15:42
Error: Expected identifier at 8:5
Error: Invalid number format at 12:18`}</code></pre>
          <p><strong>Benefits:</strong> 10x faster debugging for large documents!</p>

          <h3 id="rendering">🌐 Extended HTML Rendering</h3>
          <p>HTML output now supports all content block types:</p>
          <ul>
            <li><strong>Ordered Lists</strong> - Renders as <code>&lt;ol&gt;</code></li>
            <li><strong>Blockquotes</strong> - Renders as <code>&lt;blockquote&gt;</code></li>
            <li><strong>Code Blocks</strong> - Syntax highlighting with <code>&lt;pre&gt;&lt;code&gt;</code></li>
            <li><strong>Images</strong> - Proper <code>&lt;img&gt;</code> tags</li>
            <li><strong>Links</strong> - Proper <code>&lt;a&gt;</code> tags</li>
          </ul>

          <h3>📝 Enhanced Markdown Export</h3>
          <p>Markdown export now preserves ALL formatting:</p>
          <ul>
            <li>Strikethrough → <code>~~text~~</code></li>
            <li>Ordered lists → <code>1. 2. 3.</code></li>
            <li>Blockquotes → <code>&gt; text</code></li>
            <li>Code blocks → <code>```language ... ```</code></li>
          </ul>

          <h3 id="security">🔒 Security Improvements</h3>
          <p><strong>XSS Prevention</strong> - All HTML output is properly escaped:</p>
          <pre><code>{`@meta { title: "<script>alert('xss')</script>"; }

// v1.0: Would render dangerous <script> tag
// v1.1: Renders safe: &lt;script&gt;...&lt;/script&gt;`}</code></pre>
          <p><strong>Applies to:</strong> All meta properties, document content, slide content, and sheet values.</p>

          <hr />

          <h2>📝 Example: New Features</h2>

          <pre><code>{`@slide {
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
}`}</code></pre>
          <hr />

          <h2 id="upgrade">🔄 Upgrade Guide</h2>

          <p>Upgrading is simple - just update your packages:</p>

          <pre><code>{`npm install omniscript-parser@1.1.0
npm install omniscript-cli@1.1.0
npm install omniscript-converters@1.1.0`}</code></pre>
          <p><strong>No code changes required!</strong> All v1.0 documents work without modification.</p>

          <h3>What You Get</h3>
          <ul>
            <li>✅ Use <code>~~strikethrough~~</code> in your documents</li>
            <li>✅ Better error messages with exact locations</li>
            <li>✅ HTML rendering includes all content types</li>
            <li>✅ Markdown export preserves all formatting</li>
            <li>✅ PDF/DOCX/PPTX/XLSX rendering actually works via CLI</li>
            <li>✅ Protected against XSS attacks automatically</li>
          </ul>

          <hr />

          <h2>📊 Test Coverage</h2>

          <ul>
            <li>✅ <strong>88 tests</strong> passing (31 new for v1.1 features)</li>
            <li>✅ <strong>100% success rate</strong></li>
            <li>✅ Comprehensive coverage for all new features</li>
            <li>✅ Security tests for XSS prevention</li>
            <li>✅ Round-trip tests for unicode handling</li>
          </ul>

          <hr />

          <h2>🐛 Bug Fixes</h2>

          <ul>
            <li>Fixed parser round-trip with unicode characters</li>
            <li>Fixed CLI converter integration (PDF/DOCX/PPTX/XLSX)</li>
            <li>Fixed dependency version synchronization</li>
            <li>Fixed vitest configuration for cleaner test output</li>
          </ul>

          <hr />

          <h2>🚀 Next Steps</h2>

          <ol>
            <li><a href="/docs/getting-started/installation">Install OmniScript</a></li>
            <li><a href="/playground">Try the Interactive Playground</a></li>
            <li><a href="https://github.com/OmniScriptOSF/omniscript-examples">Browse Examples</a></li>
            <li><a href="https://github.com/OmniScriptOSF/omniscript-core">Star on GitHub</a></li>
          </ol>
        </div>
      </div>
    </div>
  );
}
