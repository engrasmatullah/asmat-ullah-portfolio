import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// This is the main config file for Vite.
// Vite is the tool that runs our React app during development
// and builds it into fast, small files when we are ready to publish it.
export default defineConfig({
  plugins: [react()],
  server: {
    // While running "npm run dev", any request to /api (like the contact form)
    // is forwarded to the backend server, so both can run together smoothly.
    proxy: {
      "/api": {
        target: "http://localhost:5000",
        changeOrigin: true,
      },
    },
  },
});
