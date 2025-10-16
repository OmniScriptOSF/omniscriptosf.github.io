// File: app/docs/releases/v1-2/page.tsx
// What: v1.2.0 release notes page
// Why: Detailed release notes for v1.2.0
// Related: app/docs/v1-2-features/page.tsx

'use client';

import Navigation from '@/components/Navigation';
import { CheckCircle, Sparkle, Shield, TestTube, ChartBar } from 'phosphor-react';

export default function V12ReleasePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation dark />
      <div className="container mx-auto px-4 py-12 pt-24 max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-5xl font-bold">v1.2.0 Release Notes</h1>
            <span className="px-4 py-2 bg-green-500 text-black text-lg font-bold">
              LATEST
            </span>
          </div>
          <p className="text-xl text-gray-300">
            Released October 16, 2025
          </p>
        </div>

        <div className="p-6 bg-green-900 border-2 border-green-500 mb-12">
          <h2 className="text-2xl font-bold mb-4">🎉 Major Release: Tables, Includes & Enterprise Security</h2>
          <p className="text-lg text-gray-200">
            v1.2.0 introduces two major features (@table and @include), achieves Security Grade A+, 
            and includes comprehensive refactoring with 85-91% code reduction.
          </p>
        </div>

        {/* New Features */}
        <section className="mb-12 border-l-4 border-green-500 pl-6">
          <div className="flex items-center gap-3 mb-6">
            <Sparkle size={32} weight="duotone" />
            <h2 className="text-4xl font-bold">New Features</h2>
          </div>

          <div className="space-y-6">
            <div className="p-6 bg-gray-900 border-2 border-white">
              <h3 className="text-2xl font-bold mb-3">@table Blocks</h3>
              <p className="text-gray-300 mb-4">
                Markdown-style tables with captions, alignment, and styling options.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Familiar pipe syntax from Markdown</li>
                <li>Optional captions for context</li>
                <li>Three built-in styles: bordered, striped, minimal</li>
                <li>Per-column alignment (left, center, right)</li>
                <li>Automatic HTML escaping for XSS protection</li>
                <li>Round-trip serialization support</li>
              </ul>
            </div>

            <div className="p-6 bg-gray-900 border-2 border-white">
              <h3 className="text-2xl font-bold mb-3">@include Directive</h3>
              <p className="text-gray-300 mb-4">
                Modular document composition with file includes.
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-300">
                <li>Compose documents from multiple files</li>
                <li>Recursive includes (up to 10 levels)</li>
                <li>Circular reference detection</li>
                <li>Path traversal protection (enterprise security)</li>
                <li>Relative path resolution</li>
                <li>Clean error messages for missing files</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Security */}
        <section className="mb-12 border-l-4 border-purple-500 pl-6">
          <div className="flex items-center gap-3 mb-6">
            <Shield size={32} weight="duotone" />
            <h2 className="text-4xl font-bold">Security: Grade A+</h2>
          </div>

          <div className="p-6 bg-purple-900 border-2 border-purple-500 mb-6">
            <h3 className="text-2xl font-bold mb-4">Security Improvements</h3>
            <p className="text-gray-200 text-lg mb-4">
              Comprehensive security overhaul achieves enterprise-grade protection.
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <ul className="space-y-2 text-gray-200">
                <li><CheckCircle size={20} weight="duotone" className="inline mr-2" />Path traversal protection</li>
                <li><CheckCircle size={20} weight="duotone" className="inline mr-2" />ReDoS prevention</li>
                <li><CheckCircle size={20} weight="duotone" className="inline mr-2" />Strict input validation</li>
              </ul>
              <ul className="space-y-2 text-gray-200">
                <li><CheckCircle size={20} weight="duotone" className="inline mr-2" />Defense-in-depth architecture</li>
                <li><CheckCircle size={20} weight="duotone" className="inline mr-2" />XSS protection (enhanced)</li>
                <li><CheckCircle size={20} weight="duotone" className="inline mr-2" />19 security tests</li>
              </ul>
            </div>
          </div>

          <div className="space-y-4">
            <div className="p-4 bg-gray-900 border-l-4 border-purple-500">
              <h4 className="font-bold mb-2">Path Traversal Protection</h4>
              <p className="text-gray-300 text-sm">
                Prevents directory escape attacks (../../../../etc/passwd). Validates all include paths 
                to ensure they stay within the base directory.
              </p>
            </div>
            <div className="p-4 bg-gray-900 border-l-4 border-purple-500">
              <h4 className="font-bold mb-2">ReDoS Prevention</h4>
              <p className="text-gray-300 text-sm">
                Uses bounded regex quantifiers ({`\\s{0,20}`} instead of {`\\s*`}) to prevent 
                catastrophic backtracking and denial-of-service attacks.
              </p>
            </div>
            <div className="p-4 bg-gray-900 border-l-4 border-purple-500">
              <h4 className="font-bold mb-2">Strict Validation</h4>
              <p className="text-gray-300 text-sm">
                Table column counts, alignment values, and number parsing all strictly validated 
                with helpful error messages.
              </p>
            </div>
          </div>
        </section>

        {/* Code Quality */}
        <section className="mb-12 border-l-4 border-blue-500 pl-6">
          <div className="flex items-center gap-3 mb-6">
            <ChartBar size={32} weight="duotone" />
            <h2 className="text-4xl font-bold">Code Quality</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-gray-900 border-2 border-white">
              <h3 className="text-2xl font-bold mb-3">Refactoring</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Parser: 904 → 173 lines (81% reduction)</li>
                <li>• CLI: 1,147 → 172 lines (85% reduction)</li>
                <li>• Highly modular: 46 focused files</li>
                <li>• All files under 300 lines</li>
              </ul>
            </div>

            <div className="p-6 bg-gray-900 border-2 border-white">
              <h3 className="text-2xl font-bold mb-3">Type Safety</h3>
              <ul className="space-y-2 text-gray-300">
                <li>• Zero 'any' types</li>
                <li>• Strict TypeScript mode</li>
                <li>• exactOptionalPropertyTypes enabled</li>
                <li>• Full type coverage</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Testing */}
        <section className="mb-12 border-l-4 border-yellow-500 pl-6">
          <div className="flex items-center gap-3 mb-6">
            <TestTube size={32} weight="duotone" />
            <h2 className="text-4xl font-bold">Testing</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-6">
            <div className="p-6 bg-gray-900 border-2 border-white text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">203/203</div>
              <div className="text-gray-300">Tests Passing</div>
            </div>
            <div className="p-6 bg-gray-900 border-2 border-white text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">100%</div>
              <div className="text-gray-300">Success Rate</div>
            </div>
            <div className="p-6 bg-gray-900 border-2 border-white text-center">
              <div className="text-4xl font-bold text-green-400 mb-2">+74</div>
              <div className="text-gray-300">New Tests</div>
            </div>
          </div>

          <div className="p-6 bg-gray-900 border-2 border-white">
            <h3 className="text-xl font-bold mb-4">Test Breakdown</h3>
            <ul className="space-y-2 text-gray-300">
              <li><strong>Parser:</strong> 83 tests (parsing, serialization, @table, @include)</li>
              <li><strong>CLI:</strong> 47 tests (commands, rendering, formatting)</li>
              <li><strong>Converters:</strong> 73 tests (PDF, DOCX, PPTX, XLSX)</li>
              <li><strong>Security:</strong> 19 dedicated security tests</li>
            </ul>
          </div>
        </section>

        {/* Packages */}
        <section className="mb-12 border-l-4 border-orange-500 pl-6">
          <h2 className="text-4xl font-bold mb-6">Published Packages</h2>
          
          <div className="space-y-4">
            <div className="p-4 bg-gray-900 border-2 border-white">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold">omniscript-parser</h3>
                  <p className="text-gray-400 text-sm">Zero-dependency TypeScript parser</p>
                </div>
                <span className="text-2xl font-bold">v1.2.0</span>
              </div>
            </div>
            <div className="p-4 bg-gray-900 border-2 border-white">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold">omniscript-cli</h3>
                  <p className="text-gray-400 text-sm">Command-line tools</p>
                </div>
                <span className="text-2xl font-bold">v1.2.1</span>
              </div>
            </div>
            <div className="p-4 bg-gray-900 border-2 border-white">
              <div className="flex justify-between items-center">
                <div>
                  <h3 className="text-xl font-bold">omniscript-converters</h3>
                  <p className="text-gray-400 text-sm">PDF, DOCX, PPTX, XLSX converters</p>
                </div>
                <span className="text-2xl font-bold">v1.2.0</span>
              </div>
            </div>
          </div>
        </section>

        {/* Backward Compatibility */}
        <div className="p-6 bg-green-900 border-2 border-green-500 mb-12">
          <h2 className="text-2xl font-bold mb-4">✅ 100% Backward Compatible</h2>
          <p className="text-gray-200 text-lg">
            Zero breaking changes. All v1.1 documents work without modification.
          </p>
        </div>

        {/* Links */}
        <div className="mt-16 p-8 bg-white text-black">
          <h2 className="text-3xl font-bold mb-6">Resources</h2>
          <div className="grid md:grid-cols-2 gap-4">
            <a href="/docs/v1-2-features" className="block p-4 border-2 border-black hover:bg-black hover:text-white font-bold">
              v1.2 Features Guide →
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
          <a href="/docs/releases" className="text-white hover:underline">
            ← Back to All Releases
          </a>
        </div>
      </div>
    </div>
  );
}
