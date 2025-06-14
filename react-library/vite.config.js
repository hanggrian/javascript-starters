import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  test: {
    include: ['./__tests__/*.jsx'],
    environment: 'jsdom',
    globals: true,
  },
});
