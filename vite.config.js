import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    // We'll use standard build mode instead of lib mode to avoid the CSS input error
    rollupOptions: {
      input: './index.js',
      output: {
        // This removes the hash from the filename
        assetFileNames: 'alpine.min.[ext]',
        // Vite requires an entry JS file, even if it's empty
        entryFileNames: 'ignore.js', 
      },
    },
    // This ensures the CSS isn't split into multiple files
    cssCodeSplit: false,
    // Empty the dist folder before building
    emptyOutDir: true,
  },
});
