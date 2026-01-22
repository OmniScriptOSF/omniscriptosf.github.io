// File: components/Navigation.tsx
// What: Shared navigation component for consistent layout
// Why: Ensure users don't feel lost across different sections

import Link from 'next/link';

interface NavigationProps {
  dark?: boolean; // If true, uses black bg with white text for dark pages
}

export default function Navigation({ dark = false }: NavigationProps) {
  const bgColor = dark ? 'bg-black' : 'bg-noir-white';
  const textColor = dark ? 'text-white' : 'text-noir-black';
  const borderColor = dark ? 'border-white' : 'border-noir-black';

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 ${bgColor} ${textColor} border-b-2 ${borderColor} px-8 py-4`}>
      <div className="container-noir flex items-center justify-between">
        <Link href="/" className="font-mono font-bold text-2xl tracking-tight">
          OmniScript_
        </Link>

        <ul className="flex items-center gap-8">
          <li><Link href="/#features" className="font-mono text-sm hover:underline">Features</Link></li>
          <li><Link href="/playground" className="font-mono text-sm hover:underline">Playground</Link></li>
          <li><Link href="/docs" className="font-mono text-sm hover:underline">Docs</Link></li>
          <li><a href="https://github.com/OmniScriptOSF/omniscript-core" className="font-mono text-sm hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a></li>
          <li><a href="https://www.npmjs.com/package/omniscript-cli" className="font-mono text-sm hover:underline" target="_blank" rel="noopener noreferrer">NPM</a></li>
        </ul>
      </div>
    </nav>
  );
}
