# Contributing to OmniScript Website

Thank you for your interest in contributing to the **OmniScript Format (OSF) Documentation Website**! This site provides documentation, guides, and a playground for OSF.

---

## 🚀 Getting Started

### 1️⃣ Fork the repository

Click the **Fork** button at the top right of the [omniscriptosf.github.io](https://github.com/OmniScriptOSF/omniscriptosf.github.io) repository page.

### 2️⃣ Clone your fork locally

```bash
git clone https://github.com/your-username/omniscriptosf.github.io.git
cd omniscriptosf.github.io
git checkout -b my-feature-branch
```

### 3️⃣ Install dependencies

```bash
npm install
```

### 4️⃣ Run development server

```bash
npm run dev
```

Visit http://localhost:3000 to see your changes.

### 5️⃣ Make your changes

- Edit pages in `app/`
- Add components in `components/`
- Update styles in Tailwind classes
- Add new documentation pages

### 6️⃣ Build and test

```bash
# Build for production
npm run build

# Preview production build
npm run start
```

### 7️⃣ Commit and push

```bash
git add .
git commit -m "docs: describe your change concisely"
git push origin my-feature-branch
```

### 8️⃣ Open a Pull Request

Go to your fork on GitHub and click **Compare & pull request**.

---

## 💡 Contribution Types

✅ Improve documentation  
✅ Add guides and tutorials  
✅ Fix typos and errors  
✅ Improve UI/UX  
✅ Add examples to playground  
✅ Enhance accessibility  

---

## ✨ Guidelines

### Commit Message Convention

We follow [Conventional Commits](https://www.conventionalcommits.org/):

- `docs:` - Documentation changes
- `feat:` - New features
- `fix:` - Bug fixes
- `style:` - UI/styling changes
- `refactor:` - Code refactoring

**Examples:**
```
docs: add guide for @table blocks
feat: add interactive playground
fix: broken links in navigation
style: improve mobile responsiveness
```

### Documentation Style

- **Clear and concise**: Use simple language
- **Code examples**: Include working examples
- **Visual aids**: Use diagrams and screenshots where helpful
- **Accessibility**: Ensure WCAG AA compliance
- **Mobile-first**: Test on mobile devices

### File Structure

```
app/
├── page.tsx              # Homepage
├── docs/                 # Documentation pages
│   ├── page.tsx         # Docs index
│   ├── v1-2-features/   # Feature guides
│   └── releases/        # Release notes
├── playground/          # Interactive playground
└── api/                 # API routes
```

### Pull Request Process

1. Target the `main` branch
2. Build succeeds (`npm run build`)
3. Test on mobile and desktop
4. Request review from maintainers
5. Address any review feedback

### All contributors must follow our [Code of Conduct](CODE_OF_CONDUCT.md)

---

## 🤝 Community

Join our discussions on [GitHub Discussions](https://github.com/OmniScriptOSF/omniscript-core/discussions).

---

## 📚 Key Technologies

- **Framework**: Next.js 15.3.3
- **Language**: TypeScript
- **Styling**: Tailwind CSS 3.4.17
- **Icons**: Phosphor Icons
- **Deployment**: GitHub Pages

---

## 📄 License

By contributing, you agree that your contributions will be licensed under the [MIT License](LICENSE).
