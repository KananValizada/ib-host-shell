import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [
      react(),
      federation({
        name: 'host_shell',
        remotes: {
          remote_accounts: env.VITE_REMOTE_ACCOUNTS,
          remote_cards: env.VITE_REMOTE_CARDS,
        },
        shared: ['react', 'react-dom'],
      }),
    ],
    build: {
      target: 'esnext',
    },
    server: {
      port: 3000,
    },
  };
});