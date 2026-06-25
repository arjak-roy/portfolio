import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import Sitemap from 'vite-plugin-sitemap';
import viteCompression from 'vite-plugin-compression';


// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    
    // Automatically generates sitemap.xml in the outDir
    Sitemap({
      hostname: 'https://arjakroy.com',
      dynamicRoutes: [
        '/',
      ]
    }),

    // Compresses assets (brotli / gzip) to improve LCP
    viteCompression({
      algorithm: 'brotliCompress',
      ext: '.br',
    }),
    viteCompression({
      algorithm: 'gzip',
      ext: '.gz',
    }),
  ],
})
