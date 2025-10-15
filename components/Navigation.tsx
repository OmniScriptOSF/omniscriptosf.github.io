// File: components/Navigation.tsx
// What: Shared navigation component for consistent layout
// Why: Ensure users don't feel lost across different sections

export default function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-noir-white border-b-2 border-noir-black px-8 py-4">
      <div className="container-noir flex items-center justify-between">
        <a href="/" className="font-mono font-bold text-2xl tracking-tight">
          OmniScript_
        </a>

        <ul className="flex items-center gap-8">
          <li><a href="/#features" className="font-mono text-sm hover:underline">Features</a></li>
          <li><a href="/playground" className="font-mono text-sm hover:underline">Playground</a></li>
          <li><a href="/docs" className="font-mono text-sm hover:underline">Docs</a></li>
          <li><a href="https://github.com/OmniScriptOSF/omniscript-core" className="font-mono text-sm hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.npmjs.com/package/omniscript-cli" className="font-mono text-sm hover:underline" target="_blank" rel="noopener noreferrer">NPM</a></li>
        </ul>
      </div>
    </nav>
  );
}
