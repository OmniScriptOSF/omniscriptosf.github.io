import type { Metadata } from 'next'
import { JetBrains_Mono, Inter } from 'next/font/google'
import './globals.css'

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500', '700'],
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  weight: ['400', '600', '800'],
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'OmniScript Format - Universal Document DSL for LLMs & AI',
  description: 'The universal document format that unifies docs, slides, and spreadsheets into one AI-friendly, Git-native format.',
  keywords: ['omniscript', 'osf', 'document format', 'llm', 'ai', 'git-native', 'markdown', 'typescript'],
  authors: [{ name: 'Alphin Tom', url: 'https://github.com/alpha912' }],
  openGraph: {
    title: 'OmniScript Format',
    description: 'Universal Document DSL for LLMs, Agentic AI, and Git-Native Workflows',
    type: 'website',
    url: 'https://omniscript.github.io',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${jetbrainsMono.variable} ${inter.variable}`}>
      <body className="font-mono antialiased">
        {/* Skip Link */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-noir-black focus:text-noir-white"
        >
          Skip to main content
        </a>

        {/* Main Content */}
        <main id="main-content">
          {children}
        </main>
      </body>
    </html>
  )
}
