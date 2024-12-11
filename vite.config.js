import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 8080,
    // proxy: {
    //   "/api": "http://192.168.43.42:8000/",
    // },
  },
});
