import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "/portfoliov2", // Replace 'your-repo-name' with the actual repository name on GitHub
});
