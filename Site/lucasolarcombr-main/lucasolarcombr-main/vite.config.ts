import path from "node:path";
import { fileURLToPath } from "node:url";

import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

const repositoryName = process.env.GITHUB_REPOSITORY?.split("/")[1];
const basePath =
  process.env.VITE_BASE_PATH ??
  (process.env.GITHUB_ACTIONS && repositoryName ? `/${repositoryName}/` : "/");

export default defineConfig({
  base: basePath,
  plugins: [react(), tailwindcss(), tsconfigPaths()],
  resolve: {
    alias: {
      "@": path.resolve(path.dirname(fileURLToPath(import.meta.url)), "src"),
    },
  },
  build: {
    outDir: "dist",
    assetsDir: "assets",
  },
});
