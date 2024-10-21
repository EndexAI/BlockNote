import react from "@vitejs/plugin-react";
import auto from "autoprefixer";
import * as path from "path";
import { webpackStats } from "rollup-plugin-webpack-stats";
import tailwindcss from "tailwindcss";
import nesting from "tailwindcss/nesting";

import { defineConfig } from "vite";
// import eslintPlugin from "vite-plugin-eslint";
// https://vitejs.dev/config/
export default defineConfig((conf) => ({
  plugins: [react(), webpackStats()] as any,
  optimizeDeps: {
    // link: ['vite-react-ts-components'],
  },
  build: {
    sourcemap: true,
  },
  css: {
    postcss: {
      plugins: [
        nesting,
        tailwindcss("../packages/shadcn/tailwind.config.js"), // Adjust the path as necessary
        auto,
      ],
    },
    // postcss: "../packages/shadcn/postcss.config.js",
  },
  resolve: {
    alias:
      conf.command === "build"
        ? {}
        : {
            // Comment out the lines below to load a built version of blocknote
            // or, keep as is to load live from sources with live reload working
            "@endexai/blocknote-core": path.resolve(__dirname, "../packages/core/src/"),
            "@endexai/blocknote-react": path.resolve(
              __dirname,
              "../packages/react/src/"
            ),
            "@endexai/blocknote-ariakit": path.resolve(
              __dirname,
              "../packages/ariakit/src/"
            ),
            "@endexai/blocknote-mantine": path.resolve(
              __dirname,
              "../packages/mantine/src/"
            ),
            "@endexai/blocknote-shadcn": path.resolve(
              __dirname,
              "../packages/shadcn/src/"
            ),
          },
  },
}));
