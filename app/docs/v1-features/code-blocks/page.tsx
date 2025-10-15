// File: app/docs/v1-features/code-blocks/page.tsx
// What: Documentation for @code blocks
// Why: Teach users how to display code in OSF
// Related: app/docs/v1-features/, v1.0 spec

'use client';

import Navigation from '@/components/Navigation';
import { Code, GameController, CheckCircle, Warning } from 'phosphor-react';

export default function CodeBlocksPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="container mx-auto px-4 py-12 pt-24 max-w-4xl">
        <h1 className="text-5xl font-bold mb-6 border-b-4 border-green-500 pb-4">
          @code Blocks
        </h1>
        
        <p className="text-xl text-gray-300 mb-12">
          Display syntax-highlighted code with line numbers and highlighting for 50+ programming languages.
        </p>

        {/* Quick Example */}
        <section className="mb-12 border-2 border-green-500 p-6">
          <h2 className="text-3xl font-bold mb-4">Quick Example</h2>
          <div className="bg-gray-900 p-4 font-mono text-sm overflow-x-auto">
            <pre>{`@code {
  language: "typescript";
  caption: "Express Server";
  lineNumbers: true;
  highlight: [3, 4, 5];
  code: "import express from 'express';
    const app = express();
    
    app.get('/', (req, res) => {
      res.send('Hello World');
    });
    
    app.listen(3000);";
}`}</pre>
          </div>
        </section>

        {/* Properties */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-6 border-b-2 border-white pb-2">Properties</h2>
          
          <div className="bg-gray-900 p-6 mb-6">
            <div className="space-y-4">
              <div>
                <code className="text-green-400">language</code>
                <span className="text-gray-400"> (required)</span>
                <p className="text-gray-300 mt-1">
                  Programming language for syntax highlighting (e.g., <code>typescript</code>, <code>python</code>, <code>java</code>)
                </p>
              </div>
              <div>
                <code className="text-green-400">code</code>
                <span className="text-gray-400"> (required)</span>
                <p className="text-gray-300 mt-1">
                  The code content to display
                </p>
              </div>
              <div>
                <code className="text-green-400">caption</code>
                <span className="text-gray-400"> (optional)</span>
                <p className="text-gray-300 mt-1">
                  Optional caption or description for the code block
                </p>
              </div>
              <div>
                <code className="text-green-400">lineNumbers</code>
                <span className="text-gray-400"> (optional, default: false)</span>
                <p className="text-gray-300 mt-1">
                  Show line numbers alongside code
                </p>
              </div>
              <div>
                <code className="text-green-400">highlight</code>
                <span className="text-gray-400"> (optional)</span>
                <p className="text-gray-300 mt-1">
                  Array of line numbers to highlight (e.g., <code>[3, 4, 5]</code>)
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Supported Languages */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-6 border-b-2 border-white pb-2">Supported Languages (50+)</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-6">
            {[
              'javascript', 'typescript', 'python', 'java',
              'c', 'cpp', 'csharp', 'go',
              'rust', 'php', 'ruby', 'swift',
              'kotlin', 'scala', 'r', 'matlab',
              'sql', 'bash', 'powershell', 'html',
              'css', 'scss', 'json', 'yaml',
              'markdown', 'xml', 'graphql', 'dockerfile'
            ].map((lang) => (
              <div key={lang} className="bg-gray-900 px-3 py-2 text-sm font-mono border border-gray-700">
                {lang}
              </div>
            ))}
          </div>

          <div className="border-2 border-green-500 p-4">
            <p className="text-sm">
              <strong>Full list:</strong> <a href="https://prismjs.com/#supported-languages" target="_blank" rel="noopener noreferrer" className="underline">Prism.js Supported Languages</a>
            </p>
          </div>
        </section>

        {/* Examples */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-6 border-b-2 border-white pb-2">Examples</h2>
          
          {/* TypeScript */}
          <div className="mb-8 border-l-4 border-blue-500 pl-6">
            <h3 className="text-2xl font-bold mb-3">TypeScript</h3>
            <div className="bg-gray-900 p-4 font-mono text-sm overflow-x-auto">
              <pre>{`@code {
  language: "typescript";
  caption: "Type-safe function";
  lineNumbers: true;
  code: "interface User {
    id: number;
    name: string;
  }
  
  function greet(user: User): string {
    return \`Hello, \${user.name}!\`;
  }";
}`}</pre>
            </div>
          </div>

          {/* Python */}
          <div className="mb-8 border-l-4 border-yellow-500 pl-6">
            <h3 className="text-2xl font-bold mb-3">Python</h3>
            <div className="bg-gray-900 p-4 font-mono text-sm overflow-x-auto">
              <pre>{`@code {
  language: "python";
  caption: "FastAPI endpoint";
  lineNumbers: true;
  highlight: [5, 6];
  code: "from fastapi import FastAPI
  
  app = FastAPI()
  
  @app.get('/users/{user_id}')
  async def get_user(user_id: int):
      return {'id': user_id}";
}`}</pre>
            </div>
          </div>

          {/* Bash */}
          <div className="mb-8 border-l-4 border-green-500 pl-6">
            <h3 className="text-2xl font-bold mb-3">Bash Script</h3>
            <div className="bg-gray-900 p-4 font-mono text-sm overflow-x-auto">
              <pre>{`@code {
  language: "bash";
  caption: "Deployment script";
  code: "#!/bin/bash
  npm run build
  npm test
  npm run deploy";
}`}</pre>
            </div>
          </div>

          {/* SQL */}
          <div className="mb-8 border-l-4 border-purple-500 pl-6">
            <h3 className="text-2xl font-bold mb-3">SQL</h3>
            <div className="bg-gray-900 p-4 font-mono text-sm overflow-x-auto">
              <pre>{`@code {
  language: "sql";
  caption: "Database query";
  lineNumbers: true;
  code: "SELECT u.name, COUNT(o.id) as orders
  FROM users u
  LEFT JOIN orders o ON u.id = o.user_id
  WHERE u.active = true
  GROUP BY u.name
  HAVING COUNT(o.id) > 5;";
}`}</pre>
            </div>
          </div>
        </section>

        {/* Line Highlighting */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-6 border-b-2 border-white pb-2">Line Highlighting</h2>
          
          <p className="text-gray-300 mb-4">
            Draw attention to specific lines by adding them to the <code className="bg-gray-800 px-2 py-1">highlight</code> array:
          </p>

          <div className="bg-gray-900 p-4 font-mono text-sm overflow-x-auto mb-4">
            <pre>{`@code {
  language: "javascript";
  caption: "Important lines highlighted";
  lineNumbers: true;
  highlight: [3, 4, 5];  // Lines 3, 4, 5 will be highlighted
  code: "function processData(data) {
    const validated = validate(data);
    
    // These lines are highlighted
    if (!validated) {
      throw new Error('Invalid data');
    }
    
    return transform(validated);
  }";
}`}</pre>
          </div>

          <div className="border-2 border-yellow-500 p-4">
            <p className="text-sm">
              <strong>Note:</strong> Line highlighting helps readers focus on important parts of the code.
              Use it for error handling, key logic, or changes in code reviews.
            </p>
          </div>
        </section>

        {/* Rendering */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-6 border-b-2 border-white pb-2">How Code Renders</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border-2 border-white p-4">
              <h3 className="text-xl font-bold mb-2">PDF</h3>
              <p className="text-gray-300 text-sm">
                Syntax highlighted using Prism.js with line numbers and highlighting preserved.
              </p>
            </div>
            <div className="border-2 border-white p-4">
              <h3 className="text-xl font-bold mb-2">DOCX</h3>
              <p className="text-gray-300 text-sm">
                Displayed with monospace font and proper indentation. Captions shown above code.
              </p>
            </div>
            <div className="border-2 border-white p-4">
              <h3 className="text-xl font-bold mb-2">PPTX</h3>
              <p className="text-gray-300 text-sm">
                Formatted as code slides with monospace font and dark background.
              </p>
            </div>
          </div>
        </section>

        {/* Best Practices */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-6 border-b-2 border-white pb-2">Best Practices</h2>
          
          <div className="space-y-4">
            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-bold mb-1">✅ Use Captions</h4>
              <p className="text-gray-300 text-sm">
                Add captions to provide context: "Example usage", "Error handling", "Configuration", etc.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-bold mb-1">✅ Enable Line Numbers for Longer Code</h4>
              <p className="text-gray-300 text-sm">
                Line numbers make it easier to reference specific parts of the code in discussions.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-bold mb-1">✅ Keep Code Concise</h4>
              <p className="text-gray-300 text-sm">
                Show only relevant code. Use ellipsis (...) to indicate omitted sections if needed.
              </p>
            </div>

            <div className="border-l-4 border-green-500 pl-4">
              <h4 className="font-bold mb-1">✅ Highlight Key Lines</h4>
              <p className="text-gray-300 text-sm">
                Use highlighting sparingly to draw attention to the most important lines.
              </p>
            </div>

            <div className="border-l-4 border-yellow-500 pl-4">
              <h4 className="font-bold mb-1">⚠️ Escape Special Characters</h4>
              <p className="text-gray-300 text-sm">
                Use proper escaping for quotes and backslashes in code strings.
              </p>
            </div>
          </div>
        </section>

        {/* Try It */}
        <section className="mb-12 bg-green-900 border-2 border-green-500 p-6">
          <h2 className="text-3xl font-bold mb-4">Try It Yourself</h2>
          <p className="text-gray-300 mb-4">
            Test @code blocks in the interactive playground:
          </p>
          <a href="/playground" className="inline-block px-6 py-3 bg-white text-black font-bold hover:bg-gray-200">
            Open Playground →
          </a>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-6 border-t-2 border-white">
          <a href="/docs/v1-features/diagram-blocks" className="text-white hover:underline">
            ← Previous: @diagram Blocks
          </a>
          <a href="/docs/releases/v1-0" className="text-white hover:underline">
            Back to v1.0 Release Notes →
          </a>
        </div>
      </div>
    </div>
  );
}
