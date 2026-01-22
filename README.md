# omniscriptosf.github.io

Official landing page for OmniScript - the universal document DSL for LLMs and AI.

## 🎨 Design System

Built with the **NOIR design system** - a terminal-aesthetic design language featuring:

- Pure black & white color scheme with grayscale variations
- Monospace-first typography (JetBrains Mono)
- Geometric precision with 8px base unit
- Terminal-inspired components
- Maximum clarity and readability

## 🛠 Tech Stack

- **Framework**: Next.js 15 (Static Site Generation)
- **Language**: TypeScript 5.x (strict mode)
- **Styling**: Tailwind CSS 3.4+
- **Fonts**: JetBrains Mono, Inter
- **Package Manager**: Bun
- **Deployment**: GitHub Pages
- **Playground Exports**: External API (`omniscript-api`)

## 🚀 Development

```bash
# Install dependencies
bun install

# Start development server
bun run dev

# Build for production
bun run build

# Preview production build
bun run start
```

Visit `http://localhost:3000` to see the site.

## 📦 Project Structure

```
omniscript-site/
├── app/
│   ├── layout.tsx          # Root layout with fonts
│   ├── page.tsx            # Landing page
│   └── globals.css         # NOIR design system styles
├── components/
│   ├── Terminal.tsx        # Terminal window component
│   └── CodeBlock.tsx       # Code display component
├── public/
│   └── .nojekyll           # Disable Jekyll processing
└── .github/
    └── workflows/
        └── deploy.yml      # GitHub Pages deployment
```

## 🔌 Playground Exports

Playground export buttons call a separate backend API service. Set the API base URL via
`NEXT_PUBLIC_OSF_API_BASE` (see `.env.production`).

The backend code now lives in a separate private repo: `OmniScriptOSF/omniscript-api`.

## 🌐 Deployment

The site automatically deploys to GitHub Pages on every push to `main` branch.

**Live URL**: https://omniscriptosf.github.io/

## 📄 License

MIT License - Built with ❤️ by [Alphin Tom](https://github.com/alpha912)
