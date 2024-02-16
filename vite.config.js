import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // Импортируем модуль path

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "~routes": path.resolve(__dirname, "./src/components"), // Используем '~' вместо 'routes' для избежания конфликтов
      "~images": path.resolve(__dirname, "./src/img"), // Используем '~' вместо 'images' для избежания конфликтов
    }
  }
});
