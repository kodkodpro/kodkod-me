// @ts-check
import { defineConfig } from "astro/config"
import react from "@astrojs/react"
import mdx from "@astrojs/mdx"
import tailwindcss from "@tailwindcss/vite"

// https://astro.build/config
export default defineConfig({
  // Preserve spaces between inline elements after Astro 7's JSX whitespace default.
  compressHTML: true,
  devToolbar: { enabled: false },
  integrations: [mdx(), react()],

  vite: {
    plugins: [tailwindcss()]
  }
})
