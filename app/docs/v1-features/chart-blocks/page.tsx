// File: app/docs/v1-features/chart-blocks/page.tsx
// What: Documentation for @chart blocks
// Why: Teach users how to create charts in OSF
// Related: app/docs/v1-features/, v1.0 spec

'use client';

import Navigation from '@/components/Navigation';
import { ChartBar, GameController } from 'phosphor-react';

export default function ChartBlocksPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <div className="container mx-auto px-4 py-12 pt-24 max-w-4xl">
        <h1 className="text-5xl font-bold mb-6 border-b-4 border-blue-500 pb-4">
          @chart Blocks
        </h1>
        
        <p className="text-xl text-gray-300 mb-12">
          Create data visualizations with bar, line, pie, scatter, and area charts.
        </p>

        {/* Quick Example */}
        <section className="mb-12 border-2 border-blue-500 p-6">
          <h2 className="text-3xl font-bold mb-4">Quick Example</h2>
          <div className="bg-gray-900 p-4 font-mono text-sm overflow-x-auto">
            <pre>{`@chart {
  type: "bar";
  title: "Quarterly Sales";
  data: [
    { label: "Q1"; values: [100]; },
    { label: "Q2"; values: [150]; },
    { label: "Q3"; values: [200]; },
    { label: "Q4"; values: [180]; }
  ];
  options: {
    xAxis: "Quarter";
    yAxis: "Revenue ($K)";
    legend: true;
  };
}`}</pre>
          </div>
        </section>

        {/* Chart Types */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-6 border-b-2 border-white pb-2">Chart Types</h2>
          
          {/* Bar Chart */}
          <div className="mb-8 border-l-4 border-blue-500 pl-6">
            <h3 className="text-2xl font-bold mb-3">Bar Chart</h3>
            <p className="text-gray-300 mb-4">Best for comparing values across categories.</p>
            <div className="bg-gray-900 p-4 font-mono text-sm overflow-x-auto mb-4">
              <pre>{`@chart {
  type: "bar";
  title: "Sales by Region";
  data: [
    { label: "North"; values: [850]; },
    { label: "South"; values: [620]; },
    { label: "East"; values: [740]; },
    { label: "West"; values: [890]; }
  ];
}`}</pre>
            </div>
          </div>

          {/* Line Chart */}
          <div className="mb-8 border-l-4 border-green-500 pl-6">
            <h3 className="text-2xl font-bold mb-3">Line Chart</h3>
            <p className="text-gray-300 mb-4">Best for showing trends over time.</p>
            <div className="bg-gray-900 p-4 font-mono text-sm overflow-x-auto mb-4">
              <pre>{`@chart {
  type: "line";
  title: "Monthly Revenue";
  data: [
    { label: "Jan"; values: [100]; },
    { label: "Feb"; values: [120]; },
    { label: "Mar"; values: [140]; },
    { label: "Apr"; values: [165]; }
  ];
}`}</pre>
            </div>
          </div>

          {/* Pie Chart */}
          <div className="mb-8 border-l-4 border-purple-500 pl-6">
            <h3 className="text-2xl font-bold mb-3">Pie Chart</h3>
            <p className="text-gray-300 mb-4">Best for showing proportions of a whole.</p>
            <div className="bg-gray-900 p-4 font-mono text-sm overflow-x-auto mb-4">
              <pre>{`@chart {
  type: "pie";
  title: "Market Share";
  data: [
    { label: "Product A"; values: [45]; },
    { label: "Product B"; values: [30]; },
    { label: "Product C"; values: [25]; }
  ];
}`}</pre>
            </div>
          </div>

          {/* Scatter Plot */}
          <div className="mb-8 border-l-4 border-yellow-500 pl-6">
            <h3 className="text-2xl font-bold mb-3">Scatter Plot</h3>
            <p className="text-gray-300 mb-4">Best for showing correlations between variables.</p>
            <div className="bg-gray-900 p-4 font-mono text-sm overflow-x-auto mb-4">
              <pre>{`@chart {
  type: "scatter";
  title: "Price vs Demand";
  data: [
    { label: "Data Points"; values: [10, 20, 15, 25, 30]; }
  ];
}`}</pre>
            </div>
          </div>

          {/* Area Chart */}
          <div className="mb-8 border-l-4 border-red-500 pl-6">
            <h3 className="text-2xl font-bold mb-3">Area Chart</h3>
            <p className="text-gray-300 mb-4">Best for showing cumulative values over time.</p>
            <div className="bg-gray-900 p-4 font-mono text-sm overflow-x-auto mb-4">
              <pre>{`@chart {
  type: "area";
  title: "Cumulative Sales";
  data: [
    { label: "Week 1"; values: [100]; },
    { label: "Week 2"; values: [220]; },
    { label: "Week 3"; values: [360]; }
  ];
}`}</pre>
            </div>
          </div>
        </section>

        {/* Options */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-6 border-b-2 border-white pb-2">Chart Options</h2>
          
          <div className="bg-gray-900 p-6 mb-6">
            <h3 className="text-xl font-bold mb-4">Available Options</h3>
            <div className="space-y-4">
              <div>
                <code className="text-blue-400">xAxis</code>
                <span className="text-gray-400"> (string)</span>
                <p className="text-gray-300 mt-1">Label for the X axis</p>
              </div>
              <div>
                <code className="text-blue-400">yAxis</code>
                <span className="text-gray-400"> (string)</span>
                <p className="text-gray-300 mt-1">Label for the Y axis</p>
              </div>
              <div>
                <code className="text-blue-400">legend</code>
                <span className="text-gray-400"> (boolean)</span>
                <p className="text-gray-300 mt-1">Show/hide legend (default: true)</p>
              </div>
              <div>
                <code className="text-blue-400">colors</code>
                <span className="text-gray-400"> (string[])</span>
                <p className="text-gray-300 mt-1">Custom colors for data series</p>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-4 font-mono text-sm overflow-x-auto">
            <pre>{`@chart {
  type: "bar";
  title: "Styled Chart";
  data: [
    { label: "A"; values: [10]; },
    { label: "B"; values: [20]; }
  ];
  options: {
    xAxis: "Categories";
    yAxis: "Values";
    legend: false;
    colors: ["#3B82F6", "#10B981"];
  };
}`}</pre>
          </div>
        </section>

        {/* Multi-Series */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-6 border-b-2 border-white pb-2">Multi-Series Charts</h2>
          
          <p className="text-gray-300 mb-4">
            Create charts with multiple data series by providing multiple value arrays:
          </p>

          <div className="bg-gray-900 p-4 font-mono text-sm overflow-x-auto mb-4">
            <pre>{`@chart {
  type: "bar";
  title: "Sales Comparison";
  data: [
    { label: "Q1"; values: [100, 120, 90]; },
    { label: "Q2"; values: [150, 140, 160]; },
    { label: "Q3"; values: [200, 180, 220]; }
  ];
  options: {
    xAxis: "Quarter";
    yAxis: "Revenue ($K)";
    legend: true;
    colors: ["#3B82F6", "#10B981", "#F59E0B"];
  };
}`}</pre>
          </div>

          <div className="border-2 border-blue-500 p-4">
            <p className="text-gray-300">
              <strong>Note:</strong> Each values array represents a different series. 
              In this example, three series are shown across four quarters.
            </p>
          </div>
        </section>

        {/* Rendering */}
        <section className="mb-12">
          <h2 className="text-4xl font-bold mb-6 border-b-2 border-white pb-2">How Charts Render</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="border-2 border-white p-4">
              <h3 className="text-xl font-bold mb-2">PDF</h3>
              <p className="text-gray-300 text-sm">
                Rendered using Chart.js with full interactivity and high quality.
              </p>
            </div>
            <div className="border-2 border-white p-4">
              <h3 className="text-xl font-bold mb-2">DOCX</h3>
              <p className="text-gray-300 text-sm">
                Converted to data tables with labels and values clearly formatted.
              </p>
            </div>
            <div className="border-2 border-white p-4">
              <h3 className="text-xl font-bold mb-2">PPTX</h3>
              <p className="text-gray-300 text-sm">
                Rendered as native PowerPoint charts that can be edited.
              </p>
            </div>
          </div>
        </section>

        {/* Try It */}
        <section className="mb-12 bg-blue-900 border-2 border-blue-500 p-6">
          <h2 className="text-3xl font-bold mb-4">Try It Yourself</h2>
          <p className="text-gray-300 mb-4">
            Test @chart blocks in the interactive playground:
          </p>
          <a href="/playground" className="inline-block px-6 py-3 bg-white text-black font-bold hover:bg-gray-200">
            Open Playground →
          </a>
        </section>

        {/* Navigation */}
        <div className="flex justify-between items-center mt-12 pt-6 border-t-2 border-white">
          <a href="/docs/releases/v1-0" className="text-white hover:underline">
            ← Back to v1.0 Release Notes
          </a>
          <a href="/docs/v1-features/diagram-blocks" className="text-white hover:underline">
            Next: @diagram Blocks →
          </a>
        </div>
      </div>
    </div>
  );
}
