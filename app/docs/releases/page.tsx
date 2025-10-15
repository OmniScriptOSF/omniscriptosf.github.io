// File: app/docs/releases/page.tsx
// What: Release notes listing page
// Why: Show all OSF releases and their notes
// Related: app/docs/releases/v1-0/page.tsx

'use client';

import Navigation from '@/components/Navigation';
import { CheckCircle, Warning, RocketLaunch, GitBranch } from 'phosphor-react';

export default function ReleasesPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation dark />
      <div className="container mx-auto px-4 py-12 pt-24 max-w-4xl">
        <h1 className="text-5xl font-bold mb-6 border-b-4 border-white pb-4">
          Release Notes
        </h1>
        
        <p className="text-xl text-gray-300 mb-12">
          View release notes, changelogs, and migration guides for all versions of OmniScript Format.
        </p>

        {/* v1.0 - Production Release */}
        <div className="mb-12 border-2 border-green-500 p-6">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl font-bold">v1.0.0</h2>
            <span className="px-3 py-1 bg-green-500 text-black text-sm font-bold">
              PRODUCTION READY
            </span>
            <span className="text-gray-400">October 15, 2025</span>
          </div>
          
          <p className="text-gray-300 mb-4">
            <CheckCircle size={20} weight="duotone" className="inline mr-2" />
            Major milestone! First production release with advanced features, comprehensive testing, and full documentation.
          </p>
          
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">✨ What's New</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>@chart blocks - Data visualization with 5 chart types</li>
              <li>@diagram blocks - Flowcharts, sequences, Gantt, mindmaps</li>
              <li>@code blocks - Syntax highlighting with 50+ languages</li>
              <li>Enhanced parser with input validation</li>
              <li>Improved converters (PDF, DOCX, PPTX, XLSX)</li>
              <li>152 tests passing (100% success rate)</li>
            </ul>
          </div>

          <div className="flex gap-4">
            <a 
              href="/docs/releases/v1-0" 
              className="px-6 py-3 bg-white text-black font-bold hover:bg-gray-200"
            >
              Read Full Release Notes →
            </a>
            <a 
              href="https://github.com/OmniScriptOSF/omniscript-core/blob/main/CHANGELOG.md" 
              className="px-6 py-3 border-2 border-white hover:bg-white hover:text-black font-bold"
              target="_blank"
              rel="noopener noreferrer"
            >
              View Changelog
            </a>
          </div>
        </div>

        {/* v0.5.x - Development Releases */}
        <div className="mb-12 border-2 border-white p-6">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl font-bold">v0.5.x</h2>
            <span className="px-3 py-1 bg-gray-700 text-white text-sm font-bold">
              ALPHA
            </span>
          </div>
          
          <p className="text-gray-300 mb-4">
            Development releases leading up to v1.0. Includes parser, converters, CLI, and initial specification.
          </p>
          
          <div className="space-y-4 mb-4">
            <ReleaseEntry 
              version="v0.5.7"
              date="January 2025"
              changes={['CLI version alignment', 'Bug fixes']}
            />
            <ReleaseEntry 
              version="v0.5.6"
              date="January 2025"
              changes={['Working PDF, DOCX, XLSX converters', 'Comprehensive test suite', 'Modern tooling (ESLint 9, Prettier 3, TypeScript 5.8)']}
            />
            <ReleaseEntry 
              version="v0.5.0"
              date="October 2024"
              changes={['Initial release', 'Core parser implementation', 'CLI tools', 'OSF v0.5 specification']}
            />
          </div>

          <a 
            href="https://github.com/OmniScriptOSF/omniscript-core/blob/main/CHANGELOG.md" 
            className="inline-block px-6 py-3 border-2 border-white hover:bg-white hover:text-black font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Full Changelog
          </a>
        </div>

        {/* Upcoming */}
        <div className="border-2 border-blue-500 p-6">
          <div className="flex items-center gap-4 mb-4">
            <h2 className="text-3xl font-bold">v1.1</h2>
            <span className="px-3 py-1 bg-blue-500 text-black text-sm font-bold">
              PLANNED
            </span>
          </div>
          
          <p className="text-gray-300 mb-4">
            Future enhancements and new features.
          </p>
          
          <div className="mb-4">
            <h3 className="text-xl font-bold mb-2">📋 Roadmap</h3>
            <ul className="list-disc list-inside space-y-1 text-gray-300">
              <li>@table block - Markdown-style tables</li>
              <li>@include directive - Import external files</li>
              <li>@variables - Template variables</li>
              <li>Custom themes system</li>
              <li>Plugin architecture</li>
            </ul>
          </div>

          <a 
            href="https://github.com/OmniScriptOSF/omniscript-core/blob/main/spec/roadmap.md" 
            className="inline-block px-6 py-3 border-2 border-blue-500 hover:bg-blue-500 hover:text-black font-bold"
            target="_blank"
            rel="noopener noreferrer"
          >
            View Roadmap
          </a>
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

interface ReleaseEntryProps {
  version: string;
  date: string;
  changes: string[];
}

function ReleaseEntry({ version, date, changes }: ReleaseEntryProps) {
  return (
    <div className="border-l-4 border-gray-500 pl-4">
      <div className="flex items-center gap-3 mb-2">
        <h3 className="text-xl font-bold">{version}</h3>
        <span className="text-gray-400 text-sm">{date}</span>
      </div>
      <ul className="list-disc list-inside space-y-1 text-gray-300 text-sm">
        {changes.map((change, index) => (
          <li key={index}>{change}</li>
        ))}
      </ul>
    </div>
  );
}
