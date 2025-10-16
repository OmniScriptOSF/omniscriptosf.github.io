// File: app/docs/releases/v1-1/page.tsx
// What: v1.1 release documentation page
// Why: Document new features and improvements for users
// RELEVANT FILES: ../v1-0/page.tsx, ../../page.tsx

export default function V11ReleasePage() {
  return (
    <div className="prose prose-noir max-w-4xl">
      <h1>OmniScript v1.1.0 Release</h1>
      <p className="lead">
        <strong>Release Date:</strong> January 16, 2025<br />
        <strong>Status:</strong> ✅ Production Ready<br />
        <strong>Compatibility:</strong> 100% backward compatible with v1.0
      </p>

      <hr />

      <h2>🎉 What's New</h2>

      <h3>✨ Enhanced Text Formatting</h3>
      <ul>
        <li><strong>Strikethrough Support</strong> - Use <code>~~text~~</code> syntax for strikethrough</li>
        <li><strong>Unicode Escapes</strong> - Full support for <code>\uXXXX</code> and <code>\xXX</code> in strings</li>
        <li><strong>Round-Trip Fidelity</strong> - Perfect preservation through parse/serialize cycles</li>
      </ul>

      <h3>🔍 Better Developer Experience</h3>
      <ul>
        <li><strong>Position Tracking</strong> - Errors show exact line:column (e.g., "Error at 5:12")</li>
        <li><strong>String Validation</strong> - Detect unterminated strings with clear messages</li>
        <li><strong>Enhanced Debugging</strong> - Faster problem resolution</li>
      </ul>

      <h3>🌐 Extended Export Capabilities</h3>
      <ul>
        <li><strong>HTML Rendering</strong> - Ordered lists, blockquotes, code blocks, images, links</li>
        <li><strong>Markdown Export</strong> - Full formatting preservation including strikethrough</li>
        <li><strong>Working Converters</strong> - PDF/DOCX/PPTX/XLSX now fully functional in CLI</li>
      </ul>

      <h3>🔒 Security Improvements</h3>
      <ul>
        <li><strong>XSS Prevention</strong> - All HTML output properly sanitized</li>
        <li><strong>Input Validation</strong> - Enhanced safety checks throughout parser</li>
      </ul>

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

      <h2>🔄 Upgrade Guide</h2>

      <p>Upgrading is simple - just update your packages:</p>

      <pre><code>{`npm install omniscript-parser@1.1.0
npm install omniscript-cli@1.1.0
npm install omniscript-converters@1.1.0`}</code></pre>

      <p><strong>No code changes required!</strong> All v1.0 documents work without modification.</p>

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
  );
}
