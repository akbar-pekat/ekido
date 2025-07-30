// @ts-check
import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  site: "https://ekidocreative.com",
  output: "server",
  adapter: vercel({}),
  integrations: [sitemap(), robotsTxt()],
});
