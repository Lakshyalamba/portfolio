import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import { createChatMiddleware } from './server/chat.js';

export default defineConfig(({ mode }) => {
  const env = { ...loadEnv(mode, process.cwd(), ''), ...process.env };
  const chat = createChatMiddleware(() => env);
  return {
    plugins: [react(), {
      name: 'portfolio-chat',
      configureServer(server) { server.middlewares.use(chat); },
      configurePreviewServer(server) { server.middlewares.use(chat); },
    }],
  };
});
