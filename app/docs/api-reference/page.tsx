'use client';

import Navigation from '@/components/Navigation';
import { Code, Package, Wrench } from 'phosphor-react';

export default function APIReferencePage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="container mx-auto px-4 py-12 pt-24 max-w-4xl">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-center gap-4 mb-4">
            <Code size={48} weight="duotone" />
            <h1 className="text-5xl font-bold">API Reference</h1>
          </div>
          <p className="text-gray-400">Programmatic usage of OmniScript Format</p>
        </div>

        <div className="prose prose-invert max-w-none">
          {/* Parser Package */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 border-b-2 border-white pb-2 flex items-center gap-3">
              <Package size={36} weight="duotone" />
              omniscript-parser
            </h2>
            
            <p className="text-gray-300 mb-4">
              Zero-dependency TypeScript parser for converting OSF text to Abstract Syntax Tree (AST) and back.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Installation</h3>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto mb-6">
npm install omniscript-parser
            </pre>

            <h3 className="text-2xl font-bold mb-4">Usage</h3>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto mb-6">
{`import { parse, serialize } from 'omniscript-parser';

// Parse OSF to AST
const osfCode = \`
@meta { title: "My Document"; }
@doc { content: "# Hello World"; }
\`;

const ast = parse(osfCode);
console.log(ast);
// Output: { version: "1.0", blocks: [...] }

// Serialize AST back to OSF
const osfOutput = serialize(ast);
console.log(osfOutput);`}
            </pre>

            <h3 className="text-2xl font-bold mb-4">API</h3>
            
            <div className="mb-6 border-2 border-blue-500 p-6">
              <h4 className="font-bold text-xl mb-3">parse(osfCode: string): OSFDocument</h4>
              <p className="text-gray-300 mb-4">
                Parses OSF text into an Abstract Syntax Tree (AST).
              </p>
              <p className="text-sm text-gray-400">
                <strong>Parameters:</strong> osfCode - String containing OSF content
              </p>
              <p className="text-sm text-gray-400">
                <strong>Returns:</strong> OSFDocument object with version and blocks array
              </p>
              <p className="text-sm text-gray-400">
                <strong>Throws:</strong> Error if syntax is invalid
              </p>
            </div>

            <div className="mb-6 border-2 border-blue-500 p-6">
              <h4 className="font-bold text-xl mb-3">serialize(ast: OSFDocument): string</h4>
              <p className="text-gray-300 mb-4">
                Converts an AST back to OSF text format.
              </p>
              <p className="text-sm text-gray-400">
                <strong>Parameters:</strong> ast - OSFDocument object
              </p>
              <p className="text-sm text-gray-400">
                <strong>Returns:</strong> String containing formatted OSF code
              </p>
            </div>

            <h3 className="text-2xl font-bold mb-4 mt-8">Types</h3>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto mb-6">
{`interface OSFDocument {
  version?: string;
  blocks: OSFBlock[];
}

type OSFBlock = 
  | MetaBlock 
  | DocBlock 
  | SlideBlock 
  | SheetBlock 
  | ChartBlock 
  | DiagramBlock 
  | OSFCodeBlock;

interface MetaBlock {
  type: 'meta';
  title?: string;
  author?: string;
  date?: string;
  version?: string;
  theme?: string;
  tags?: string[];
  description?: string;
}

interface ChartBlock {
  type: 'chart';
  chartType: 'bar' | 'line' | 'pie' | 'scatter' | 'area';
  title: string;
  data: ChartDataSeries[];
  options?: ChartOptions;
}`}
            </pre>
          </section>

          {/* Converters Package */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 border-b-2 border-white pb-2 flex items-center gap-3">
              <Package size={36} weight="duotone" />
              omniscript-converters
            </h2>
            
            <p className="text-gray-300 mb-4">
              Professional document converters for exporting OSF to PDF, DOCX, PPTX, and XLSX.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Installation</h3>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto mb-6">
npm install omniscript-parser omniscript-converters
            </pre>

            <h3 className="text-2xl font-bold mb-4">Usage - PDF</h3>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto mb-6">
{`import { parse } from 'omniscript-parser';
import { PDFConverter } from 'omniscript-converters';

const osfCode = \`@meta { title: "My Document"; }\`;
const ast = parse(osfCode);

const converter = new PDFConverter();
const result = await converter.convert(ast, { theme: 'Corporate' });

// Write to file
import fs from 'fs';
fs.writeFileSync('output.pdf', result.buffer);`}
            </pre>

            <h3 className="text-2xl font-bold mb-4">Usage - DOCX</h3>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto mb-6">
{`import { DOCXConverter } from 'omniscript-converters';

const converter = new DOCXConverter();
const result = await converter.convert(ast);

fs.writeFileSync('output.docx', result.buffer);`}
            </pre>

            <h3 className="text-2xl font-bold mb-4">Usage - PPTX</h3>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto mb-6">
{`import { PPTXConverter } from 'omniscript-converters';

const converter = new PPTXConverter();
const result = await converter.convert(ast, { theme: 'Modern' });

fs.writeFileSync('output.pptx', result.buffer);`}
            </pre>

            <h3 className="text-2xl font-bold mb-4">Usage - XLSX</h3>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto mb-6">
{`import { XLSXConverter } from 'omniscript-converters';

const converter = new XLSXConverter();
const result = await converter.convert(ast);

fs.writeFileSync('output.xlsx', result.buffer);`}
            </pre>

            <h3 className="text-2xl font-bold mb-4 mt-8">Converter Options</h3>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto mb-6">
{`interface ConverterOptions {
  theme?: string;           // Theme name (default: 'default')
  pageSize?: 'A4' | 'Letter';
  orientation?: 'portrait' | 'landscape';
  fontSize?: number;
  fontFamily?: string;
}`}
            </pre>

            <h3 className="text-2xl font-bold mb-4">Themes</h3>
            <p className="text-gray-300 mb-4">
              Available themes: <code>default</code>, <code>Corporate</code>, <code>Modern</code>, 
              <code>Minimal</code>, <code>Academic</code>, <code>Dark</code>, <code>Light</code>
            </p>
          </section>

          {/* CLI Package */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-6 border-b-2 border-white pb-2 flex items-center gap-3">
              <Wrench size={36} weight="duotone" />
              omniscript-cli
            </h2>
            
            <p className="text-gray-300 mb-4">
              Command-line interface for parsing, validating, and converting OSF files.
            </p>

            <h3 className="text-2xl font-bold mb-4 mt-8">Installation</h3>
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto mb-6">
npm install -g omniscript-cli
            </pre>

            <h3 className="text-2xl font-bold mb-4">Commands</h3>
            
            <div className="space-y-6">
              <div className="border-2 border-green-500 p-6">
                <h4 className="font-bold text-xl mb-3 font-mono">osf parse {'<file>'}</h4>
                <p className="text-gray-300 mb-2">
                  Parse and validate an OSF file, output AST as JSON.
                </p>
                <pre className="bg-gray-900 p-2 rounded text-sm">
osf parse document.osf
                </pre>
              </div>

              <div className="border-2 border-green-500 p-6">
                <h4 className="font-bold text-xl mb-3 font-mono">osf render {'<file>'} --format {'<type>'}</h4>
                <p className="text-gray-300 mb-2">
                  Convert OSF to specified format (pdf, docx, pptx, xlsx, html).
                </p>
                <pre className="bg-gray-900 p-2 rounded text-sm">
{`osf render doc.osf --format pdf --output output.pdf
osf render doc.osf --format docx --theme Corporate`}
                </pre>
              </div>

              <div className="border-2 border-green-500 p-6">
                <h4 className="font-bold text-xl mb-3 font-mono">osf lint {'<file>'}</h4>
                <p className="text-gray-300 mb-2">
                  Check OSF file for syntax errors and best practice violations.
                </p>
                <pre className="bg-gray-900 p-2 rounded text-sm">
osf lint document.osf
                </pre>
              </div>

              <div className="border-2 border-green-500 p-6">
                <h4 className="font-bold text-xl mb-3 font-mono">osf export {'<file>'} --target {'<type>'}</h4>
                <p className="text-gray-300 mb-2">
                  Export OSF to another text format (md, json).
                </p>
                <pre className="bg-gray-900 p-2 rounded text-sm">
osf export doc.osf --target md --output README.md
                </pre>
              </div>
            </div>
          </section>

          {/* Examples */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold mb-4 border-b-2 border-white pb-2">Complete Example</h2>
            
            <pre className="bg-gray-900 p-4 rounded overflow-x-auto mb-6">
{`// File: generate-report.ts
import { parse, serialize } from 'omniscript-parser';
import { PDFConverter, DOCXConverter } from 'omniscript-converters';
import fs from 'fs';

async function generateReport() {
  // Create OSF content
  const osfCode = \`
@meta {
  title: "Q4 Business Report";
  author: "Finance Team";
  date: "2025-10-15";
  theme: "Corporate";
}

@doc {
  content: "# Executive Summary
  
  Revenue grew **25%** this quarter.
  ";
}

@chart {
  type: "bar";
  title: "Revenue by Quarter";
  data: [
    { label: "Q1"; values: [100]; },
    { label: "Q2"; values: [120]; },
    { label: "Q3"; values: [140]; },
    { label: "Q4"; values: [175]; }
  ];
}
  \`;

  // Parse to AST
  const ast = parse(osfCode);
  
  // Generate PDF
  const pdfConverter = new PDFConverter();
  const pdfResult = await pdfConverter.convert(ast);
  fs.writeFileSync('report.pdf', pdfResult.buffer);
  
  // Generate DOCX
  const docxConverter = new DOCXConverter();
  const docxResult = await docxConverter.convert(ast);
  fs.writeFileSync('report.docx', docxResult.buffer);
  
  console.log('✅ Generated report.pdf and report.docx');
}

generateReport();`}
            </pre>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="flex justify-between items-center mt-12 pt-8 border-t-2 border-gray-800">
          <a href="/docs/user-guide" className="text-blue-400 hover:underline">← User Guide</a>
          <a href="https://github.com/OmniScriptOSF/omniscript-core" className="text-blue-400 hover:underline" target="_blank" rel="noopener noreferrer">View on GitHub →</a>
        </div>
      </div>
    </div>
  );
}
