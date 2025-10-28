/* import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

*/

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'  // or vue / vanilla plugin depending on your project

export default defineConfig({
  plugins: [react()],
  base: '/portfolio/',  // 👈 Important: matches your GitHub repo name
})
