import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:8800", // Backend server address
        changeOrigin: true, // Ensures that the origin of the request is changed to the target URL
        secure: false, // Disable SSL verification if the target server uses HTTP
        rewrite: (path) => path.replace(/^\/api/, ""), // Remove '/api' from the path before forwarding it
      },
    },
  },
});
