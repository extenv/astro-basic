import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import solidJs from "@astrojs/solid-js";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  server: {
    port: 3000
  },
  integrations: [tailwind({
    applyBaseStyles: false
  }), solidJs()],
  output: "server",
  adapter: node({
    mode: "middleware"
  })
});