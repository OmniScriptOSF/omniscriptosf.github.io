// File: app/docs/getting-started/installation/page.tsx
// What: Installation guide for OSF tools
// Why: Help users get started with OSF quickly
// Related: app/docs/getting-started/first-document/page.tsx

'use client';

import Navigation from '@/components/Navigation';

export default function InstallationPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="container mx-auto px-4 py-12 max-w-4xl pt-24">
        <h1 className="text-5xl font-bold mb-4 border-b-4 border-white pb-4">Installation</h1>
        <p className="text-xl text-gray-300 mb-12">
          Get OmniScript Format up and running in minutes.
        </p>

        {/* CLI Installation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">1. Install the CLI</h2>
          <p className="mb-4">The fastest way to get started is with the command-line interface.</p>
          
          <div className="bg-gray-900 p-4 rounded border-2 border-gray-700 mb-4">
            <pre className="text-green-400 font-mono">
              <code>npm install -g omniscript-cli</code>
            </pre>
          </div>

          <p className="text-sm text-gray-400 mb-4">Or using pnpm:</p>
          
          <div className="bg-gray-900 p-4 rounded border-2 border-gray-700">
            <pre className="text-green-400 font-mono">
              <code>pnpm add -g omniscript-cli</code>
            </pre>
          </div>

          <div className="mt-4 p-4 border-2 border-blue-500 bg-blue-900 bg-opacity-20">
            <p className="text-sm">
              <strong>💡 Tip:</strong> Use pnpm for faster installs and better disk space usage.
            </p>
          </div>
        </section>

        {/* Verify Installation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">2. Verify Installation</h2>
          
          <div className="bg-gray-900 p-4 rounded border-2 border-gray-700 mb-4">
            <pre className="text-green-400 font-mono">
              <code>osf --version</code>
            </pre>
          </div>

          <p>You should see output like:</p>
          
          <div className="bg-gray-900 p-4 rounded border-2 border-gray-700">
            <pre className="text-gray-400 font-mono">
              <code>omniscript-cli v1.0.0</code>
            </pre>
          </div>
        </section>

        {/* VSCode Extension */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">3. Install VSCode Extension (Recommended)</h2>
          <p className="mb-4">For the best development experience, install the official VSCode extension.</p>

          <h3 className="text-xl font-bold mb-2">Option A: From Marketplace</h3>
          <ol className="list-decimal pl-6 mb-4 space-y-2">
            <li>Open Visual Studio Code</li>
            <li>Press <code className="bg-gray-800 px-2 py-1 rounded">Ctrl+Shift+X</code> (Windows/Linux) or <code className="bg-gray-800 px-2 py-1 rounded">Cmd+Shift+X</code> (Mac)</li>
            <li>Search for "OmniScript Format"</li>
            <li>Click Install</li>
          </ol>

          <h3 className="text-xl font-bold mb-2">Option B: Command Line</h3>
          <div className="bg-gray-900 p-4 rounded border-2 border-gray-700">
            <pre className="text-green-400 font-mono">
              <code>code --install-extension OmniScriptOSF.omniscript-vscode</code>
            </pre>
          </div>
        </section>

        {/* Library Installation */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">4. Library Installation (Optional)</h2>
          <p className="mb-4">For programmatic usage in your Node.js projects:</p>

          <h3 className="text-xl font-bold mb-2">Parser Only</h3>
          <div className="bg-gray-900 p-4 rounded border-2 border-gray-700 mb-4">
            <pre className="text-green-400 font-mono">
              <code>npm install omniscript-parser</code>
            </pre>
          </div>

          <h3 className="text-xl font-bold mb-2">With Converters</h3>
          <div className="bg-gray-900 p-4 rounded border-2 border-gray-700">
            <pre className="text-green-400 font-mono">
              <code>npm install omniscript-parser omniscript-converters</code>
            </pre>
          </div>
        </section>

        {/* Next Steps */}
        <section className="mb-12">
          <h2 className="text-3xl font-bold mb-4">5. Next Steps</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a
              href="/docs/getting-started/first-document"
              className="block p-6 border-2 border-white hover:bg-white hover:text-black transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">📝 Create Your First Document →</h3>
              <p className="text-sm opacity-80">Learn OSF basics with a step-by-step tutorial</p>
            </a>

            <a
              href="/playground"
              className="block p-6 border-2 border-white hover:bg-white hover:text-black transition-colors"
            >
              <h3 className="text-xl font-bold mb-2">🎮 Try the Playground →</h3>
              <p className="text-sm opacity-80">Experiment with OSF in your browser</p>
            </a>
          </div>
        </section>

        {/* System Requirements */}
        <section>
          <h2 className="text-3xl font-bold mb-4">System Requirements</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border-2 border-gray-700 p-4">
              <h3 className="font-bold mb-2">Node.js</h3>
              <p className="text-sm text-gray-400">Version 18 or higher</p>
            </div>
            <div className="border-2 border-gray-700 p-4">
              <h3 className="font-bold mb-2">Operating System</h3>
              <p className="text-sm text-gray-400">Windows, macOS, Linux</p>
            </div>
            <div className="border-2 border-gray-700 p-4">
              <h3 className="font-bold mb-2">VSCode</h3>
              <p className="text-sm text-gray-400">Version 1.80 or higher</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
