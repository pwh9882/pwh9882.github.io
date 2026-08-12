# pwh9882.github.io

Personal research site of Woohyeok Park — intended for [pwh9882.github.io](https://pwh9882.github.io).

Built with React + Vite, Tailwind CSS v4, and shadcn/ui. The design was imported from a
[Claude Design](https://claude.ai/design) project.

## Development

```bash
npm install
npm run dev      # local dev server
npm run build    # type-check + production build (dist/)
npm run lint     # oxlint
```

## Deployment

Every push to `main` triggers the [Deploy to GitHub Pages](.github/workflows/deploy.yml)
workflow, which builds the site and publishes `dist/` to GitHub Pages via
`actions/deploy-pages`.

## Content

Site content (publications, projects, and profile entries) lives in [src/data/site.ts](src/data/site.ts).
