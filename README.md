# Johannes Amée - Personal Website

Personal website and blog built with Hugo using the Typo theme. Live at [johannesamee.com](https://www.johannesamee.com/).

## Quick Reference

**Tech Stack:**
- Hugo v1.24.2+ with Typo theme v1.16.0
- Go modules for dependency management
- Obsidian for content management
- Giscus for comments (GitHub Discussions)

**Key Files:**
- `hugo.toml` - Main configuration
- `build.sh` - Production build script
- `content/notebook/` - Blog posts
- `content/.obsidian/` - Obsidian workspace (only locally)

## Development Commands

```bash
# Install dependencies
hugo mod get

# Start dev server
hugo server --bind 0.0.0.0 --port 1313

# Build for production
./build.sh
# or manually: hugo --gc --minify
```

## Other information

### Content Management
- Posts go in `content/notebook/`
- Use Obsidian for writing (workspace in `content/.obsidian/`)
- Front matter: title, date, tags, draft status

### Configuration Notes
- Base URL: `https://www.johannesamee.com/`
- Theme: Typo (auto-downloaded via Go modules)
- Comments: Giscus enabled with repo `johannesamee/johannesamee-web`
- Social links: LinkedIn, GitHub, RSS feed

### Build Process
- `build.sh` downloads Go locally, fetches modules, builds with minification
- Output goes to `public/` directory
- Ready for static hosting

### Custom Features
- Collapsible code blocks (`layouts/shortcodes/collapsiblecode.html`)
- Algol syntax highlighting
- Breadcrumbs enabled
- RSS feed at `/index.xml`

## Links
- [Live Site](https://www.johannesamee.com/)
- [RSS Feed](https://www.johannesamee.com/index.xml)
