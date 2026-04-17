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
          accounts: env.VITE_REMOTE_ACCOUNTS,
          cards: env.VITE_REMOTE_CARDS,
        },
         shared: {
          react: {
            version: '^19.2.4',
          },
          'react-dom': {
            version: '^19.2.4',
          },
          'react-router-dom': {
            version: '^7.14.1',
          },
        },
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