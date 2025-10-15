import React from 'react'

interface TerminalProps {
  title?: string
  children: React.ReactNode
  className?: string
}

export default function Terminal({
  title = 'terminal',
  children,
  className = ''
}: TerminalProps) {
  return (
    <div className={`terminal ${className}`}>
      {/* Header */}
      <div className="terminal-header">
        <div className="flex items-center gap-2">
          <div className="terminal-dot" />
          <div className="terminal-dot" />
          <div className="terminal-dot" />
        </div>
        <span className="font-mono text-xs text-gray-400 ml-4">{title}</span>
      </div>

      {/* Content */}
      <div className="terminal-content">
        {children}
      </div>
    </div>
  )
}
