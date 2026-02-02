# Lunexweb Project

A modern web development and SEO services website built with React, TypeScript, and Vite.

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm (or use [nvm](https://github.com/nvm-sh/nvm#installing-and-updating))

### Local Development

```sh
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🛠️ Technologies

- **Vite** - Fast build tool and dev server
- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **shadcn/ui** - Component library
- **React Router** - Client-side routing

## 📦 Project Structure

```
src/
├── components/     # Reusable components
│   ├── layout/    # Layout components (Header, Footer)
│   ├── sections/  # Page sections
│   └── ui/        # shadcn/ui components
├── pages/         # Page components
├── assets/        # Images and static assets
└── lib/           # Utility functions
```

## 🚢 Deployment

### Deploying to Vercel

This project is configured for Vercel deployment:

1. **Push to GitHub**
   ```sh
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Import your GitHub repository
   - Vercel will auto-detect the Vite framework
   - Click "Deploy"

3. **Configuration**
   - Build Command: `npm run build` (auto-detected)
   - Output Directory: `dist` (auto-detected)
   - Install Command: `npm install` (auto-detected)

The `vercel.json` file is already configured with:
- Proper routing for React Router (SPA)
- Build settings
- Framework detection

### Environment Variables

If you need environment variables:
1. Add them in Vercel dashboard → Settings → Environment Variables
2. Use `import.meta.env.VITE_YOUR_VAR` in your code
3. Never commit `.env` files (already in `.gitignore`)

## ✅ Pre-Deployment Checklist

- [x] Build completes successfully (`npm run build`)
- [x] No hardcoded secrets or API keys
- [x] `.gitignore` properly configured
- [x] `vercel.json` configured correctly
- [x] All routes work correctly
- [x] Images and assets load properly

## 📝 Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🔒 Security

- No sensitive data in the repository
- `.env` files are gitignored
- All external URLs are public APIs (Google Fonts)

## 📄 License

See LICENSE file for details.
