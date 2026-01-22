// File: app/docs/releases/v1-3/page.tsx
// What: v1.3.0 release notes page
// Why: Detailed release notes for v1.3.0
// Related: app/docs/releases/page.tsx, app/playground/page.tsx

'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import { Sparkle, CheckCircle, Monitor, ArrowsClockwise } from 'phosphor-react';

export default function V13ReleasePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation dark />
      <div className="container mx-auto px-4 py-12 pt-24 max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <h1 className="text-5xl font-bold">v1.3.0 Release Notes</h1>
            <span className="px-4 py-2 bg-green-500 text-black text-lg font-bold">
              LATEST
            </span>
          </div>
          <p className="text-xl text-gray-300">
            Released January 22, 2026
          </p>
        </div>

        <div className="p-6 bg-green-900 border-2 border-green-500 mb-12">
          <h2 className="text-2xl font-bold mb-4">🎉 Export Parity & Preview Alignment</h2>
          <p className="text-lg text-gray-200">
            v1.3.0 focuses on parity across exporters and the playground. Tables and blockquotes
            now render consistently across formats with no breaking changes.
          </p>
        </div>

        {/* Export Parity */}
        <section className="mb-12 border-l-4 border-green-500 pl-6">
          <div className="flex items-center gap-3 mb-6">
            <Sparkle size={32} weight="duotone" />
            <h2 className="text-4xl font-bold">Export Parity</h2>
          </div>

          <div className="p-6 bg-gray-900 border-2 border-white">
            <h3 className="text-2xl font-bold mb-3">@table Rendering</h3>
            <p className="text-gray-300 mb-4">
              Table blocks now render consistently across all export targets.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>PDF, DOCX, PPTX, and XLSX table output</li>
              <li>Caption, alignment, and style rendering preserved</li>
              <li>HTML preview aligned with exported formats</li>
            </ul>
          </div>

          <div className="p-6 bg-gray-900 border-2 border-white mt-6">
            <h3 className="text-2xl font-bold mb-3">Blockquote Styling</h3>
            <p className="text-gray-300 mb-4">
              Consistent blockquote styling across exports and preview.
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-300">
              <li>Exporter styling for quoted text</li>
              <li>Preview matches export output</li>
            </ul>
          </div>
        </section>

        {/* Playground */}
        <section className="mb-12 border-l-4 border-blue-500 pl-6">
          <div className="flex items-center gap-3 mb-6">
            <Monitor size={32} weight="duotone" />
            <h2 className="text-4xl font-bold">Playground Alignment</h2>
          </div>
          <div className="p-6 bg-gray-900 border-2 border-blue-500">
            <p className="text-gray-200 text-lg mb-4">
              Preview rendering now mirrors export output for tables and blockquotes.
            </p>
            <ul className="space-y-2 text-gray-200">
              <li><CheckCircle size={20} weight="duotone" className="inline mr-2" />Unified table rendering</li>
              <li><CheckCircle size={20} weight="duotone" className="inline mr-2" />Quote styling parity</li>
              <li><CheckCircle size={20} weight="duotone" className="inline mr-2" />Cleaner HTML preview output</li>
            </ul>
          </div>
        </section>

        {/* Compatibility */}
        <section className="mb-12 border-l-4 border-purple-500 pl-6">
          <div className="flex items-center gap-3 mb-6">
            <ArrowsClockwise size={32} weight="duotone" />
            <h2 className="text-4xl font-bold">Compatibility</h2>
          </div>
          <div className="p-6 bg-gray-900 border-2 border-purple-500">
            <p className="text-gray-200 text-lg mb-4">
              v1.3.0 is fully backward compatible with v1.2 documents.
            </p>
            <ul className="space-y-2 text-gray-200">
              <li><CheckCircle size={20} weight="duotone" className="inline mr-2" />No breaking changes</li>
              <li><CheckCircle size={20} weight="duotone" className="inline mr-2" />Existing documents render unchanged</li>
            </ul>
          </div>
        </section>

        {/* Upgrade */}
        <section className="mb-12 border-l-4 border-white pl-6">
          <h2 className="text-4xl font-bold mb-6">Upgrade Instructions</h2>
          <div className="space-y-4">
            <div className="p-4 bg-black border-2 border-white">
              <div className="text-sm text-gray-400 mb-2">CLI</div>
              <pre className="text-green-400 font-mono text-sm">$ npm install -g omniscript-cli@1.3.0</pre>
            </div>
            <div className="p-4 bg-black border-2 border-white">
              <div className="text-sm text-gray-400 mb-2">Parser + Converters</div>
              <pre className="text-green-400 font-mono text-sm">$ npm install omniscript-parser@^1.3.0 omniscript-converters@^1.3.0</pre>
            </div>
          </div>
        </section>

        {/* Links */}
        <div className="grid gap-4">
          <a
            href="https://github.com/OmniScriptOSF/omniscript-core/blob/main/CHANGELOG.md"
            className="block p-4 border-2 border-white hover:bg-white hover:text-black font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Full Changelog →
          </a>
          <Link
            href="/docs/releases"
            className="block p-4 border-2 border-white hover:bg-white hover:text-black font-bold"
          >
            Back to All Releases →
          </Link>
        </div>
      </div>
    </div>
  );
}
