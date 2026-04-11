import { wayfinder } from '@laravel/vite-plugin-wayfinder';
import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import laravel from 'laravel-vite-plugin';
import { networkInterfaces } from 'os';
import { defineConfig } from 'vite';

function getNetworkIp() {
  const interfaces = networkInterfaces();
  for (const interfaceName in interfaces) {
    const interfaceInfo = interfaces[interfaceName];
    if (!interfaceInfo) continue;
    for (const interfaceData of interfaceInfo) {
      if (interfaceData.family === 'IPv4' && !interfaceData.internal) {
        return interfaceData.address;
      }
    }
  }
  return 'localhost';
}

export default defineConfig({
  server: {
    host: true,
    hmr: {
      host: getNetworkIp(),
    },
    proxy: {
      '/login': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        secure: false,
      },
      '/api': {
        target: 'http://127.0.0.1:8000',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  plugins: [
    laravel({
      input: [
        'resources/css/app.css',
        'resources/js/public.js',
        'resources/js/admin.tsx',
      ],
      refresh: true,
    }),
    react({
      babel: {
        plugins: ['babel-plugin-react-compiler'],
      },
    }),
    tailwindcss(),
    wayfinder({
      formVariants: true,
      patterns: ['admin/**/*', 'admin.*'],
      path: 'app/Http/Controllers/Admin',
      routes: true,
      actions: true,
    }),
  ],
  esbuild: {
    jsx: 'automatic',
  },
});
