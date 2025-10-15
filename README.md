# omniscript.github.io

Official landing page for OmniScript - the universal document DSL for LLMs and AI.

## 🎨 Design System

Built with the **NOIR design system** - a terminal-aesthetic design language featuring:

- Pure black & white color scheme with grayscale variations
- Monospace-first typography (JetBrains Mono)
- Geometric precision with 8px base unit
- Terminal-inspired components
- Maximum clarity and readability

## 🛠 Tech Stack

- **Framework**: Next.js 14 (Static Site Generation)
- **Language**: TypeScript 5.x (strict mode)
- **Styling**: Tailwind CSS 3.4+
- **Fonts**: JetBrains Mono, Inter
- **Package Manager**: pnpm
- **Deployment**: GitHub Pages

## 🚀 Development

```bash
# Install dependencies
pnpm install

# Start development server
pnpm run dev

# Build for production
pnpm run build

# Preview production build
pnpm run start
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

## 🌐 Deployment

The site automatically deploys to GitHub Pages on every push to `main` branch.

**Live URL**: https://omniscriptosf.github.io/omniscript.github.io/

## 📄 License

MIT License - Built with ❤️ by [Alphin Tom](https://github.com/alpha912)
