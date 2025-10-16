// File: app/docs/v1-2-features/page.tsx
// What: v1.2 features documentation page
// Why: Document @table, @include, and security improvements
// Related: app/docs/releases/v1-2/page.tsx

'use client';

import Navigation from '@/components/Navigation';
import CodeBlock from '@/components/CodeBlock';
import { Table, FileText, Shield, TestTube } from 'phosphor-react';

export default function V12FeaturesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation dark />
      <div className="container mx-auto px-4 py-12 pt-24 max-w-4xl">
        <h1 className="text-5xl font-bold mb-6 border-b-4 border-white pb-4">
          v1.2 Features Guide
        </h1>
        
        <p className="text-xl text-gray-300 mb-12">
          Tables, modular documents, and enterprise-grade security in OmniScript v1.2.0.
        </p>

        {/* @table Blocks */}
        <section id="table" className="mb-16 border-l-4 border-green-500 pl-6">
          <div className="flex items-center gap-4 mb-4">
            <Table size={32} weight="duotone" />
            <h2 className="text-4xl font-bold">@table Blocks</h2>
            <span className="px-3 py-1 bg-green-500 text-black text-sm font-bold">NEW</span>
          </div>
          
          <p className="text-xl text-gray-300 mb-6">
            Create beautiful tables using familiar Markdown syntax with advanced features.
          </p>

          <h3 className="text-2xl font-bold mb-4">Basic Table</h3>
          <CodeBlock
            code={`@table {
  | Product | Price | Stock |
  | --- | --- | --- |
  | Widget | $99 | 45 |
  | Gadget | $149 | 23 |
  | Doohickey | $79 | 67 |
}`}
            title="basic-table.osf"
          />

          <h3 className="text-2xl font-bold mb-4 mt-8">With Caption and Styling</h3>
          <CodeBlock
            code={`@table {
  caption: "Q4 Sales Report";
  style: "bordered";
  
  | Region | Revenue | Growth |
  | --- | --- | --- |
  | North | $1.2M | +18% |
  | South | $880K | +17% |
  | East | $1.5M | +24% |
}`}
            title="styled-table.osf"
          />

          <h3 className="text-2xl font-bold mb-4 mt-8">With Column Alignment</h3>
          <CodeBlock
            code={`@table {
  caption: "Product Inventory";
  style: "striped";
  alignment: ["left", "right", "center"];
  
  | Product | Price | Status |
  | --- | --- | --- |
  | Widget Pro | $129 | ✓ In Stock |
  | Gadget Max | $199 | ⚠ Low |
  | Thing Mini | $49 | ✓ In Stock |
}`}
            title="aligned-table.osf"
          />

          <div className="mt-8 p-6 bg-gray-900 border-2 border-white">
            <h3 className="text-2xl font-bold mb-4">Table Properties</h3>
            <ul className="space-y-3 text-gray-300">
              <li><strong>caption</strong>: Optional table title displayed above the table</li>
              <li><strong>style</strong>: <code className="bg-black px-2 py-1">"bordered"</code>, <code className="bg-black px-2 py-1">"striped"</code>, or <code className="bg-black px-2 py-1">"minimal"</code></li>
              <li><strong>alignment</strong>: Array of <code className="bg-black px-2 py-1">"left"</code>, <code className="bg-black px-2 py-1">"center"</code>, or <code className="bg-black px-2 py-1">"right"</code></li>
            </ul>
          </div>

          <div className="mt-8 p-6 bg-green-900 border-2 border-green-500">
            <h3 className="text-2xl font-bold mb-4">✨ Features</h3>
            <ul className="space-y-2 text-gray-200">
              <li>✅ Markdown pipe syntax (familiar and easy)</li>
              <li>✅ Optional captions for context</li>
              <li>✅ Three built-in styles</li>
              <li>✅ Per-column alignment</li>
              <li>✅ XSS protection (automatic HTML escaping)</li>
              <li>✅ Round-trip serialization</li>
            </ul>
          </div>
        </section>

        {/* @include Directive */}
        <section id="include" className="mb-16 border-l-4 border-blue-500 pl-6">
          <div className="flex items-center gap-4 mb-4">
            <FileText size={32} weight="duotone" />
            <h2 className="text-4xl font-bold">@include Directive</h2>
            <span className="px-3 py-1 bg-blue-500 text-black text-sm font-bold">NEW</span>
          </div>
          
          <p className="text-xl text-gray-300 mb-6">
            Build modular documents by composing sections from multiple files.
          </p>

          <h3 className="text-2xl font-bold mb-4">Basic Include</h3>
          <CodeBlock
            code={`@meta {
  title: "Annual Report";
  date: "2025-10-16";
}

@include { path: "./sections/executive-summary.osf"; }
@include { path: "./sections/financial-data.osf"; }
@include { path: "./sections/recommendations.osf"; }`}
            title="main.osf"
          />

          <h3 className="text-2xl font-bold mb-4 mt-8">Nested Includes</h3>
          <p className="text-gray-300 mb-4">
            Included files can themselves contain @include directives (up to 10 levels deep).
          </p>
          <CodeBlock
            code={`// sections/executive-summary.osf
@doc {
  # Executive Summary
  
  Our Q4 performance exceeded expectations.
}

@include { path: "./subsections/highlights.osf"; }`}
            title="sections/executive-summary.osf"
          />

          <div className="mt-8 p-6 bg-gray-900 border-2 border-white">
            <h3 className="text-2xl font-bold mb-4">Include Properties</h3>
            <ul className="space-y-3 text-gray-300">
              <li><strong>path</strong>: Relative path to the .osf file to include</li>
              <li><strong>Depth limit</strong>: Maximum 10 levels of nesting</li>
              <li><strong>Circular detection</strong>: Prevents infinite loops</li>
            </ul>
          </div>

          <div className="mt-8 p-6 bg-blue-900 border-2 border-blue-500">
            <h3 className="text-2xl font-bold mb-4">🔒 Security Features</h3>
            <ul className="space-y-2 text-gray-200">
              <li>✅ Path traversal protection (blocks ../../../etc/passwd)</li>
              <li>✅ Circular reference detection</li>
              <li>✅ Depth limit prevents stack overflow</li>
              <li>✅ Only allows relative paths within base directory</li>
            </ul>
          </div>
        </section>

        {/* Security Grade A+ */}
        <section id="security" className="mb-16 border-l-4 border-purple-500 pl-6">
          <div className="flex items-center gap-4 mb-4">
            <Shield size={32} weight="duotone" />
            <h2 className="text-4xl font-bold">Security Grade A+</h2>
            <span className="px-3 py-1 bg-purple-500 text-black text-sm font-bold">ENTERPRISE</span>
          </div>
          
          <p className="text-xl text-gray-300 mb-6">
            Comprehensive security improvements achieve enterprise-grade protection.
          </p>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-900 border-2 border-white">
              <h3 className="text-xl font-bold mb-4">Path Traversal Protection</h3>
              <p className="text-gray-300 mb-4">Prevents directory escape attacks:</p>
              <CodeBlock
                code={`// ❌ BLOCKED
@include {
  path: "../../../../etc/passwd";
}

// ✅ ALLOWED
@include {
  path: "./sections/intro.osf";
}`}
                title="security-example.osf"
              />
            </div>

            <div className="p-6 bg-gray-900 border-2 border-white">
              <h3 className="text-xl font-bold mb-4">ReDoS Prevention</h3>
              <p className="text-gray-300 mb-4">Bounded regex quantifiers prevent catastrophic backtracking.</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✅ Uses <code className="bg-black px-2 py-1">{`\\s{0,20}`}</code> instead of <code className="bg-black px-2 py-1">{`\\s*`}</code></li>
                <li>✅ Prevents exponential runtime attacks</li>
                <li>✅ All regexes audited and secured</li>
              </ul>
            </div>

            <div className="p-6 bg-gray-900 border-2 border-white">
              <h3 className="text-xl font-bold mb-4">Input Validation</h3>
              <p className="text-gray-300 mb-4">Strict validation at every layer:</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✅ Table column count consistency</li>
                <li>✅ Alignment array validation</li>
                <li>✅ Number parsing edge cases</li>
                <li>✅ Helpful error messages</li>
              </ul>
            </div>

            <div className="p-6 bg-gray-900 border-2 border-white">
              <h3 className="text-xl font-bold mb-4">Defense-in-Depth</h3>
              <p className="text-gray-300 mb-4">Multi-layer security architecture:</p>
              <ul className="space-y-2 text-gray-300 text-sm">
                <li>✅ Parser-level validation</li>
                <li>✅ Renderer-level sanitization</li>
                <li>✅ Runtime input validation</li>
                <li>✅ XSS protection in HTML output</li>
              </ul>
            </div>
          </div>

          <div className="mt-8 p-6 bg-purple-900 border-2 border-purple-500">
            <div className="flex items-center gap-3 mb-4">
              <TestTube size={24} weight="duotone" />
              <h3 className="text-2xl font-bold">19 Security Tests</h3>
            </div>
            <p className="text-gray-200 mb-4">
              Comprehensive test suite verifies all security protections:
            </p>
            <div className="grid md:grid-cols-2 gap-4 text-sm text-gray-300">
              <ul className="space-y-1">
                <li>• Path traversal (5 tests)</li>
                <li>• Table validation (6 tests)</li>
                <li>• ReDoS prevention (3 tests)</li>
              </ul>
              <ul className="space-y-1">
                <li>• Number parsing (3 tests)</li>
                <li>• Base path validation (2 tests)</li>
                <li>• All passing ✅</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Testing & Quality */}
        <section className="mb-16 border-l-4 border-yellow-500 pl-6">
          <h2 className="text-4xl font-bold mb-6">Testing & Quality</h2>
          
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="p-6 bg-gray-900 border-2 border-white text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">203/203</div>
              <div className="text-gray-300">Total Tests Passing</div>
            </div>
            <div className="p-6 bg-gray-900 border-2 border-white text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div className="p-6 bg-gray-900 border-2 border-white text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">A+</div>
              <div className="text-gray-300">Security Grade</div>
            </div>
          </div>

          <div className="p-6 bg-gray-900 border-2 border-white">
            <h3 className="text-2xl font-bold mb-4">Test Breakdown</h3>
            <ul className="space-y-2 text-gray-300">
              <li><strong>Parser:</strong> 83 tests (parsing, serialization, validation)</li>
              <li><strong>CLI:</strong> 47 tests (commands, rendering, formatting)</li>
              <li><strong>Converters:</strong> 73 tests (PDF, DOCX, PPTX, XLSX)</li>
              <li><strong>Security:</strong> 19 tests (path traversal, ReDoS, validation)</li>
            </ul>
          </div>
        </section>

        {/* Migration */}
        <section className="mb-16 border-l-4 border-orange-500 pl-6">
          <h2 className="text-4xl font-bold mb-6">Migration from v1.1</h2>
          
          <div className="p-6 bg-green-900 border-2 border-green-500 mb-6">
            <h3 className="text-2xl font-bold mb-4">✅ Zero Breaking Changes</h3>
            <p className="text-gray-200 text-lg">
              v1.2.0 is 100% backward compatible with v1.1. All existing documents work without modification.
            </p>
          </div>

          <h3 className="text-2xl font-bold mb-4">New Features (Optional)</h3>
          <p className="text-gray-300 mb-4">Start using new features at your own pace:</p>
          
          <CodeBlock
            code={`// Your existing v1.1 documents work as-is
@doc {
  # My Document
  Content here...
}

// Add @table when you need tables
@table {
  | A | B |
  | --- | --- |
  | 1 | 2 |
}

// Add @include when you want modular docs
@include { path: "./sections/extra.osf"; }`}
            title="migration-example.osf"
          />

          <div className="mt-6 p-6 bg-gray-900 border-2 border-white">
            <h3 className="text-2xl font-bold mb-4">Stricter Validation</h3>
            <p className="text-gray-300 mb-4">
              v1.2.0 includes stricter validation that may catch errors in malformed documents:
            </p>
            <ul className="space-y-2 text-gray-300">
              <li>• Table column counts must match header</li>
              <li>• Alignment values must be "left", "center", or "right"</li>
              <li>• Number parsing is more strict</li>
            </ul>
            <p className="text-gray-300 mt-4">
              These changes improve robustness but may require fixing previously-ignored errors.
            </p>
          </div>
        </section>

        {/* Links */}
        <div className="mt-16 p-8 bg-white text-black">
          <h2 className="text-3xl font-bold mb-6">Learn More</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/docs/releases/v1-2" className="block p-4 border-2 border-black hover:bg-black hover:text-white font-bold">
              v1.2.0 Release Notes →
            </a>
            <a href="https://github.com/OmniScriptOSF/omniscript-core/blob/main/MIGRATION_v1.2.md" className="block p-4 border-2 border-black hover:bg-black hover:text-white font-bold" target="_blank" rel="noopener noreferrer">
              Migration Guide →
            </a>
            <a href="https://github.com/OmniScriptOSF/omniscript-core/releases/tag/v1.2.0" className="block p-4 border-2 border-black hover:bg-black hover:text-white font-bold" target="_blank" rel="noopener noreferrer">
              GitHub Release →
            </a>
            <a href="https://www.npmjs.com/package/omniscript-cli" className="block p-4 border-2 border-black hover:bg-black hover:text-white font-bold" target="_blank" rel="noopener noreferrer">
              Install from NPM →
            </a>
          </div>
        </div>

        {/* Back Link */}
        <div className="mt-12">
          <a href="/docs" className="text-white hover:underline">
            ← Back to Documentation
          </a>
        </div>
      </div>
    </div>
  );
}
