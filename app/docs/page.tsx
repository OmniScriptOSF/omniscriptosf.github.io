// File: app/docs/page.tsx
// What: Documentation home page with navigation
// Why: Central hub for all OSF documentation
// Related: app/docs/getting-started/, app/docs/guide/

'use client';

import Navigation from '@/components/Navigation';
import { Rocket, Book, Sparkle, Wrench, Lightbulb, BookOpen, PresentationChart } from 'phosphor-react';

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation dark />
      <div className="container mx-auto px-4 py-12 max-w-6xl pt-24">
        <h1 className="text-5xl font-bold mb-6 border-b-4 border-white pb-4">
          OmniScript Format Documentation
        </h1>
        
        <p className="text-xl text-gray-300 mb-12">
          Everything you need to master OSF - from quick start to advanced features.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Getting Started */}
          <DocCard
            icon={<Rocket size={32} weight="duotone" />}
            title="Getting Started"
            description="Install OSF and create your first document in minutes"
            links={[
              { text: 'Installation', href: '/docs/getting-started/installation' },
              { text: 'First Document', href: '/docs/getting-started/first-document' },
              { text: 'Quick Reference', href: '/docs/getting-started/quick-reference' }
            ]}
          />

          {/* User Guide */}
          <DocCard
            icon={<Book size={32} weight="duotone" />}
            title="User Guide"
            description="Complete reference for all OSF features"
            links={[
              { text: '@meta Blocks', href: '/docs/guide/meta-blocks' },
              { text: '@doc Blocks', href: '/docs/guide/doc-blocks' },
              { text: '@slide Blocks', href: '/docs/guide/slide-blocks' },
              { text: '@sheet Blocks', href: '/docs/guide/sheet-blocks' },
              { text: 'Themes', href: '/docs/guide/themes' }
            ]}
          />

          {/* v1.0 Features */}
          <DocCard
            icon={<Sparkle size={32} weight="duotone" />}
            title="v1.0 Features"
            description="Advanced blocks (charts, diagrams, code)"
            links={[
              { text: '@chart Blocks', href: '/docs/v1-features/chart-blocks' },
              { text: '@diagram Blocks', href: '/docs/v1-features/diagram-blocks' },
              { text: '@code Blocks', href: '/docs/v1-features/code-blocks' }
            ]}
          />

          {/* v1.1 Features */}
          <DocCard
            icon={<Sparkle size={32} weight="duotone" />}
            title="v1.1 Features (NEW)"
            description="Enhanced formatting and security"
            links={[
              { text: 'Strikethrough Text', href: '/docs/releases/v1-1#strikethrough' },
              { text: 'Unicode Escapes', href: '/docs/releases/v1-1#unicode' },
              { text: 'Position Tracking', href: '/docs/releases/v1-1#errors' },
              { text: 'XSS Prevention', href: '/docs/releases/v1-1#security' }
            ]}
          />

          {/* User Guide */}
          <DocCard
            icon={<Book size={32} weight="duotone" />}
            title="User Guide"
            description="Complete guide to all OSF block types"
            links={[
              { text: 'All Block Types', href: '/docs/user-guide' },
              { text: 'Best Practices', href: '/docs/user-guide#best-practices' },
              { text: 'Common Patterns', href: '/docs/user-guide' }
            ]}
          />

          {/* API Reference */}
          <DocCard
            icon={<Wrench size={32} weight="duotone" />}
            title="API Reference"
            description="Programmatic usage of OSF packages"
            links={[
              { text: 'Complete API Reference', href: '/docs/api-reference' },
              { text: 'Parser & Converters', href: '/docs/api-reference' },
              { text: 'CLI Commands', href: '/docs/api-reference' }
            ]}
          />

          {/* Examples */}
          <DocCard
            icon={<Lightbulb size={32} weight="duotone" />}
            title="Examples"
            description="Real-world OSF documents and templates"
            links={[
              { text: 'View All Examples', href: '/docs/examples' },
              { text: 'Documents', href: '/docs/examples/documents' },
              { text: 'Presentations', href: '/docs/examples/presentations' },
              { text: 'Spreadsheets', href: '/docs/examples/spreadsheets' }
            ]}
          />

          {/* Releases */}
          <DocCard
            icon={<PresentationChart size={32} weight="duotone" />}
            title="Releases"
            description="Release notes and changelogs"
            links={[
              { text: 'v1.1 Release Notes (Latest)', href: '/docs/releases/v1-1' },
              { text: 'v1.0 Release Notes', href: '/docs/releases/v1-0' },
              { text: 'All Releases', href: '/docs/releases' },
              { text: 'Changelog', href: 'https://github.com/OmniScriptOSF/omniscript-core/blob/main/CHANGELOG.md' }
            ]}
          />

          {/* Resources */}
          <DocCard
            icon={<BookOpen size={32} weight="duotone" />}
            title="Resources"
            description="Additional learning materials"
            links={[
              { text: 'Specification v1.1 (Current)', href: 'https://github.com/OmniScriptOSF/omniscript-core/blob/main/spec/v1.1/osf-spec.md' },
              { text: 'Specification v1.0', href: 'https://github.com/OmniScriptOSF/omniscript-core/blob/main/spec/v1.0/osf-spec.md' },
              { text: 'GitHub Repository', href: 'https://github.com/OmniScriptOSF/omniscript-core' },
              { text: 'VSCode Extension', href: 'https://marketplace.visualstudio.com/items?itemName=OmniScriptOSF.omniscript-vscode' }
            ]}
          />
        </div>

        {/* Quick Links */}
        <div className="mt-16 p-8 border-2 border-white">
          <h2 className="text-3xl font-bold mb-6">Quick Links</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <a href="/playground" className="block p-4 bg-white text-black hover:bg-gray-200 font-bold">
              Try the Playground →
            </a>
            <a href="https://github.com/OmniScriptOSF/omniscript-examples" className="block p-4 bg-white text-black hover:bg-gray-200 font-bold">
              Browse Examples →
            </a>
            <a href="https://www.npmjs.com/package/omniscript-cli" className="block p-4 bg-white text-black hover:bg-gray-200 font-bold">
              Install CLI →
            </a>
            <a href="https://github.com/OmniScriptOSF/omniscript-core/discussions" className="block p-4 bg-white text-black hover:bg-gray-200 font-bold">
              Join Discussions →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

interface DocCardProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  links: Array<{ text: string; href: string }>;
}

function DocCard({ icon, title, description, links }: DocCardProps) {
  return (
    <div className="border-2 border-white p-6 hover:bg-white hover:text-black transition-colors">
      {icon && <div className="mb-3">{icon}</div>}
      <h3 className="text-2xl font-bold mb-3">{title}</h3>
      <p className="text-sm mb-4 opacity-80">{description}</p>
      <ul className="space-y-2">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              className="text-sm underline hover:no-underline"
            >
              {link.text} →
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
