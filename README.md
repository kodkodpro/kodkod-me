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
