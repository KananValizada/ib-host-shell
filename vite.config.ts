import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  plugins: [
    react(),
    federation({
      name: 'host_shell',
      remotes: {
      remote_accounts: 'http://localhost:3001/assets/remoteEntry.js',
      remote_cards: 'http://localhost:3002/assets/remoteEntry.js'
    },
      shared: ['react', 'react-dom']
    })
  ],
  build: {
    target: 'esnext'
  },
  server: {
    port: 3000
  }
});