import Terminal from '@/components/Terminal'
import CodeBlock from '@/components/CodeBlock'

export default function Home() {
  const exampleOSF = `@meta {
  title: "Q2 Business Review";
  author: "Your Team";
  date: "2025-01-15";
  theme: "Corporate";
}

@doc {
  # Executive Summary

  Our Q2 performance exceeded expectations with **15% revenue growth**
  and significant improvements in customer retention.
}

@slide {
  title: "Key Metrics";
  layout: TitleAndBullets;
  bullets {
    "💰 Revenue grew 15% to $2.3M";
    "👥 Customer churn decreased to 3%";
    "🚀 Launched 3 major features";
  }
}

@sheet {
  name: "Regional Performance";
  cols: [Region, Q1, Q2, Growth];
  data {
    (2,1)="North America"; (2,2)=850000; (2,3)=975000;
    (3,1)="Europe"; (3,2)=650000; (3,3)=748000;
    (4,1)="Asia Pacific"; (4,2)=400000; (4,3)=477000;
  }
  formula (2,4): "=(C2-B2)/B2*100";
  formula (3,4): "=(C3-B3)/B3*100";
  formula (4,4): "=(C4-B4)/B4*100";
}`

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-noir-white border-b-2 border-noir-black px-8 py-4">
        <div className="container-noir flex items-center justify-between">
          <a href="/" className="font-mono font-bold text-2xl tracking-tight">
            OmniScript_
          </a>

          <ul className="flex items-center gap-8">
            <li><a href="#features" className="font-mono text-sm hover:underline">Features</a></li>
            <li><a href="/playground" className="font-mono text-sm hover:underline">Playground</a></li>
            <li><a href="/docs" className="font-mono text-sm hover:underline">Docs</a></li>
            <li><a href="https://github.com/OmniScriptOSF/omniscript-core" className="font-mono text-sm hover:underline" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            <li><a href="https://www.npmjs.com/package/omniscript-cli" className="font-mono text-sm hover:underline" target="_blank" rel="noopener noreferrer">NPM</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center bg-noir-white pt-20">
        <div className="container-noir text-center py-20">
          <div className="inline-block px-4 py-2 bg-green-100 border-2 border-green-600 mb-8">
            <span className="font-mono text-sm font-bold text-green-800">v1.0.0 • Production Ready</span>
          </div>

          <h1 className="font-sans text-display-xl mb-8 tracking-tight">
            OmniScript<span className="text-gray-400">_</span>
          </h1>

          <p className="font-mono text-body-lg text-gray-600 max-w-3xl mx-auto mb-4">
            The <span className="font-bold text-noir-black">universal document DSL</span> for LLMs, Agentic AI, and Git-native workflows.
          </p>

          <p className="font-mono text-body-md text-gray-500 max-w-2xl mx-auto mb-12">
            One format. Three outputs. Infinite possibilities.
            <br />
            Documents + Slides + Spreadsheets = OmniScript
          </p>

          <div className="flex items-center justify-center gap-4 mb-16">
            <a
              href="https://github.com/OmniScriptOSF/omniscript-core"
              className="btn-primary"
              target="_blank"
              rel="noopener noreferrer"
            >
              Get Started
            </a>
            <a href="#features" className="btn-secondary">
              View Features
            </a>
          </div>

          {/* Terminal Preview */}
          <div className="max-w-4xl mx-auto">
            <Terminal title="installation">
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">$</span>
                  <span>npm install -g omniscript-cli</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <span>&gt; Installing omniscript-cli...</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <span>&gt; ✓ Successfully installed</span>
                </div>
                <div className="flex items-center gap-2 mt-4">
                  <span className="text-gray-500">$</span>
                  <span>osf render document.osf --format pdf</span>
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <span>&gt; Generating PDF... Done! ✓</span>
                </div>
              </div>
            </Terminal>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-gray-50">
        <div className="container-noir">
          <h2 className="font-mono text-heading-xl mb-4 text-center">
            Why OmniScript?
          </h2>
          <p className="font-mono text-body-md text-gray-600 text-center max-w-2xl mx-auto mb-16">
            Traditional document formats were built for humans. OmniScript was built for the AI era.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'Git-Native',
                description: 'Plain text format that works beautifully with version control. Meaningful diffs, no binary conflicts, perfect for collaboration.',
                icon: '📝'
              },
              {
                title: 'LLM-Friendly',
                description: 'Designed for AI agents to read, write, and transform. Simple syntax that LLMs understand natively.',
                icon: '🤖'
              },
              {
                title: 'Multi-Format Export',
                description: 'One source file exports to PDF, DOCX, PPTX, and XLSX. Write once, output everywhere.',
                icon: '🔄'
              },
              {
                title: 'Live Formulas',
                description: 'Spreadsheet formulas that actually work. Dynamic calculations in a plain-text format.',
                icon: '📊'
              },
              {
                title: 'Rich Styling',
                description: '10 professional themes. Bold, italic, code formatting. Tables, lists, and more.',
                icon: '🎨'
              },
              {
                title: 'Developer-First',
                description: 'TypeScript types, CLI tools, comprehensive tests. Built by developers, for developers.',
                icon: '⚡'
              }
            ].map((feature, i) => (
              <div key={i} className="card-hover">
                <div className="text-4xl mb-6">{feature.icon}</div>
                <h3 className="font-mono font-bold text-heading-md mb-4">
                  {feature.title}
                </h3>
                <p className="font-mono text-body-sm text-gray-600 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Example Section */}
      <section className="py-24 bg-noir-white">
        <div className="container-noir">
          <h2 className="font-mono text-heading-xl mb-4 text-center">
            See It In Action
          </h2>
          <p className="font-mono text-body-md text-gray-600 text-center max-w-2xl mx-auto mb-16">
            One OSF file combines documents, slides, and spreadsheets with live formulas.
          </p>

          <div className="max-w-4xl mx-auto">
            <CodeBlock
              code={exampleOSF}
              title="business-report.osf"
              showLineNumbers={true}
            />

            <div className="mt-12 grid md:grid-cols-3 gap-4">
              <div className="card text-center">
                <div className="font-mono text-2xl mb-2">📄</div>
                <div className="font-mono font-bold text-sm mb-2">PDF</div>
                <div className="font-mono text-xs text-gray-500">osf render --format pdf</div>
              </div>
              <div className="card text-center">
                <div className="font-mono text-2xl mb-2">🎯</div>
                <div className="font-mono font-bold text-sm mb-2">PPTX</div>
                <div className="font-mono text-xs text-gray-500">osf render --format pptx</div>
              </div>
              <div className="card text-center">
                <div className="font-mono text-2xl mb-2">📊</div>
                <div className="font-mono font-bold text-sm mb-2">XLSX</div>
                <div className="font-mono text-xs text-gray-500">osf render --format xlsx</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Section */}
      <section className="py-24 bg-gray-900 text-gray-100">
        <div className="container-noir">
          <h2 className="font-mono text-heading-xl mb-4 text-center text-noir-white">
            Quick Start
          </h2>
          <p className="font-mono text-body-md text-gray-400 text-center max-w-2xl mx-auto mb-16">
            Get up and running in under a minute.
          </p>

          <div className="max-w-3xl mx-auto space-y-8">
            <div>
              <div className="font-mono text-sm text-gray-500 mb-2">01 / Install</div>
              <Terminal>
                <div className="flex items-center gap-2">
                  <span className="text-gray-500">$</span>
                  <span>npm install -g omniscript-cli</span>
                </div>
              </Terminal>
            </div>

            <div>
              <div className="font-mono text-sm text-gray-500 mb-2">02 / Create</div>
              <CodeBlock
                code={`@meta { title: "My First Doc"; }

@doc {
  # Hello OmniScript
  This is my first document!
}`}
                title="hello.osf"
              />
            </div>

            <div>
              <div className="font-mono text-sm text-gray-500 mb-2">03 / Convert</div>
              <Terminal>
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="text-gray-500">$</span>
                    <span>osf render hello.osf --format pdf</span>
                  </div>
                  <div className="text-gray-400">&gt; ✓ Generated hello.pdf</div>
                </div>
              </Terminal>
            </div>
          </div>

          <div className="text-center mt-16">
            <a
              href="https://github.com/OmniScriptOSF/omniscript-core"
              className="inline-block px-8 py-4 bg-noir-white text-noir-black font-mono font-bold text-sm uppercase tracking-wide border-2 border-noir-white hover:bg-gray-900 hover:text-noir-white transition-all duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Read the Full Documentation
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-noir-black text-noir-white">
        <div className="container-noir">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="font-mono font-bold text-lg mb-4">OmniScript</div>
              <p className="font-mono text-sm text-gray-400">
                Universal Document DSL for the AI era.
              </p>
            </div>

            <div>
              <div className="font-mono font-bold text-sm mb-4">Links</div>
              <ul className="space-y-2 font-mono text-sm text-gray-400">
                <li><a href="https://github.com/OmniScriptOSF/omniscript-core" className="hover:text-noir-white" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                <li><a href="https://www.npmjs.com/package/omniscript-cli" className="hover:text-noir-white" target="_blank" rel="noopener noreferrer">NPM</a></li>
                <li><a href="https://github.com/OmniScriptOSF/omniscript-core/discussions" className="hover:text-noir-white" target="_blank" rel="noopener noreferrer">Discussions</a></li>
              </ul>
            </div>

            <div>
              <div className="font-mono font-bold text-sm mb-4">Packages</div>
              <ul className="space-y-2 font-mono text-sm text-gray-400">
                <li><span className="hover:text-noir-white">omniscript-parser</span></li>
                <li><span className="hover:text-noir-white">omniscript-cli</span></li>
                <li><span className="hover:text-noir-white">omniscript-converters</span></li>
              </ul>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t-2 border-gray-800 text-center font-mono text-sm text-gray-500">
            <p>Built with ❤️ by <a href="https://github.com/alpha912" className="hover:text-noir-white" target="_blank" rel="noopener noreferrer">Alphin Tom</a> • MIT License • {new Date().getFullYear()}</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
