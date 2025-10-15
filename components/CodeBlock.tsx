import React from 'react'

interface CodeBlockProps {
  code: string
  language?: string
  title?: string
  showLineNumbers?: boolean
}

export default function CodeBlock({
  code,
  language = 'osf',
  title,
  showLineNumbers = false
}: CodeBlockProps) {
  const lines = code.trim().split('\n')

  return (
    <div className="code-block">
      {title && (
        <div className="flex items-center gap-2 px-4 py-3 bg-gray-800 border-b-2 border-gray-700">
          <div className="w-3 h-3 rounded-full bg-gray-600" />
          <div className="w-3 h-3 rounded-full bg-gray-600" />
          <div className="w-3 h-3 rounded-full bg-gray-600" />
          <span className="ml-4 font-mono text-xs text-gray-400">{title}</span>
        </div>
      )}

      <div className="flex">
        {showLineNumbers && (
          <div className="py-6 px-4 bg-gray-800 border-r-2 border-gray-700 font-mono text-xs text-gray-500 text-right select-none">
            {lines.map((_, i) => (
              <div key={i}>{i + 1}</div>
            ))}
          </div>
        )}

        <pre className="flex-1 p-6 overflow-x-auto">
          <code className="font-mono text-sm text-gray-100">
            {code}
          </code>
        </pre>
      </div>
    </div>
  )
}
