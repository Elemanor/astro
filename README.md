# DrySpace Waterproofing Website

Professional website for DrySpace Waterproofing, Toronto's trusted basement waterproofing and foundation repair experts.

## 🚀 Tech Stack

- **Framework**: [Astro](https://astro.build) v4.x
- **UI Components**: React + Tailwind CSS
- **Styling**: Tailwind CSS with shadcn/ui components
- **Content**: Markdown with Astro Content Collections
- **Deployment**: Netlify

## 📋 Prerequisites

- Node.js 18.20.8 or higher
- npm 10.x or higher
- Git

## 🛠️ Local Development

1. **Clone the repository**
   ```bash
   git clone [your-repo-url]
   cd dryspace-astro
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📁 Project Structure

```
/
├── public/
│   ├── _redirects      # Netlify redirects
│   ├── images/         # Static images
│   └── pics/           # Content images
├── src/
│   ├── components/     # Reusable components
│   ├── content/        # Markdown content
│   │   ├── blog/      # Blog posts
│   │   ├── guides/    # How-to guides
│   │   ├── locations/ # Service area pages
│   │   ├── pages/     # Static pages
│   │   ├── problems/  # Problem pages
│   │   └── services/  # Service pages
│   ├── layouts/       # Page layouts
│   ├── pages/         # Astro pages
│   ├── styles/        # Global styles
│   └── templates/     # Page templates
├── astro.config.mjs   # Astro configuration
├── tailwind.config.mjs # Tailwind configuration
└── netlify.toml       # Netlify configuration
```

## 🚀 Deployment to Netlify

### Option 1: Deploy via Netlify CLI

1. **Install Netlify CLI**
   ```bash
   npm install -g netlify-cli
   ```

2. **Login to Netlify**
   ```bash
   netlify login
   ```

3. **Initialize Netlify**
   ```bash
   netlify init
   ```

4. **Deploy**
   ```bash
   netlify deploy --prod
   ```

### Option 2: Deploy via Git

1. **Push to GitHub**
   ```bash
   git init
   git add .
   git commit -m "Initial commit"
   git branch -M main
   git remote add origin [your-repo-url]
   git push -u origin main
   ```

2. **Connect to Netlify**
   - Go to [Netlify Dashboard](https://app.netlify.com)
   - Click "Add new site" → "Import an existing project"
   - Choose your Git provider
   - Select your repository
   - Deploy settings are pre-configured in `netlify.toml`

## 🔧 Environment Variables

Create a `.env` file for local development:

```env
# No environment variables required for basic setup
# Add any API keys or secrets here if needed
```

## 📝 Content Management

### Adding a Blog Post
1. Create a new `.md` file in `src/content/blog/`
2. Add frontmatter with required fields
3. Write content in Markdown

### Adding a Service Page
1. Create a new `.md` file in `src/content/services/`
2. Include `url` field in frontmatter
3. Follow the service template structure

### Adding a Guide
1. Create a new `.md` file in `src/content/guides/`
2. Include `url` field in frontmatter
3. Use step-by-step format

## 🎨 Design System

The site uses an industry-standard design system with:
- WCAG AA compliant color contrasts
- Professional blue (#1E3A8A) as primary color
- Minimum 16px font sizes
- 44px minimum touch targets
- Consistent spacing and typography

## 🔍 SEO

- All pages include meta tags
- Structured data for services
- XML sitemap auto-generated
- Proper heading hierarchy
- Alt text for images

## 📱 Performance

- Static site generation
- Optimized images
- Lazy loading
- Minimal JavaScript
- Fast page loads

## 🐛 Troubleshooting

### Node Version Error
If you see "Node.js version not supported", upgrade Node:
```bash
nvm install 18.20.8
nvm use 18.20.8
```

### Build Errors
Clear cache and rebuild:
```bash
rm -rf node_modules .astro dist
npm install
npm run build
```

## 📞 Support

For issues or questions:
- Create an issue in the repository
- Contact the development team

## 📄 License

© 2025 DrySpace Waterproofing. All rights reserved.
