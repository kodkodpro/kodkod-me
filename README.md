# Andrew Kodkod

[kodkod.me](https://kodkod.me)

Use Node.js 22.23.4 or newer.

```sh
pnpm install --frozen-lockfile
pnpm dev
pnpm build
```

TypeScript remains on 6.x because `@astrojs/check` does not yet support TypeScript 7.
Astro's `compressHTML: true` setting preserves the site's inline spacing across the Astro 7 upgrade.

The text-first design uses locally copied [mdxcn](https://www.mdxcn.dev/) stat, spec, quote and callout components through Astro React. Components render to static HTML without client hydration. Source attribution and local changes are recorded in `src/registry/UPSTREAM.txt`. Project screenshots and author portraits use Astro image optimization. The palette follows the system light/dark preference.

Local design comparisons live in `artifacts/`, which is ignored by Git and excluded from the deployed site.
