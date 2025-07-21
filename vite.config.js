// vite.config.js or vite.config.mjs
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue'; // <--- Make sure this line exists and is correct

export default defineConfig({
  plugins: [
    vue(), // <--- Make sure it's included in the plugins array
    // other plugins if you have any
  ],
  // other Vite configurations
});