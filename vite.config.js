import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import compression from 'vite-plugin-compression';

export default defineConfig({
  base: '/',
  plugins: [
    react(),
    compression({
      algorithm: 'gzip',
      ext: '.gz'
    }),
    {
      name: 'security-headers',
      configureServer(server) {
        server.middlewares.use((_, res, next) => {
          res.setHeader('X-Content-Type-Options', 'nosniff');
          res.setHeader('X-Frame-Options', 'DENY');
          res.setHeader('X-XSS-Protection', '1; mode=block');
          res.setHeader('Referrer-Policy', 'strict-origin-when-cross-origin');
          // Updated CSP to allow necessary sources
          res.setHeader(
            'Content-Security-Policy',
            "default-src 'self'; " +
            "script-src 'self' 'unsafe-inline' 'unsafe-eval'; " +
            "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; " +
            "img-src 'self' data: https:; " +
            "font-src 'self' https://fonts.gstatic.com; " +
            "connect-src 'self';"
          );
          next();
        });
      }
    }
  ],
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    rollupOptions: {
      output: {
        // Add source map for better debugging
        sourcemap: true,
      },
    },
  },
  server: {
    port: 5173,
    host: '0.0.0.0',
    open: true,
    hmr: true,
    watch: {
      usePolling: true,
    },
  },
  define: {
    'process.env': process.env
  }
});