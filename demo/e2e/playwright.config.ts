import { defineConfig, devices } from '@playwright/test';
import { config } from 'dotenv';
import { resolve } from 'path';
import { existsSync } from 'fs';

const envPath = resolve(__dirname, '.env');
const envLocalPath = resolve(__dirname, '.env.local');

if (existsSync(envPath)) {
  config({ path: envPath });
}
if (existsSync(envLocalPath)) {
  config({ path: envLocalPath, override: true });
}

const E2E_HEADLESS = process.env.E2E_HEADLESS !== 'false';

const baseURLs = {
  angular: process.env.ANGULAR_BASE_URL || 'http://localhost:4200',
  'react-vite': process.env.REACT_VITE_BASE_URL || 'http://localhost:5173',
  vue3: process.env.VUE3_BASE_URL || 'http://localhost:5174',
};

const getProxyConfig = () => {
  const proxyServer = process.env.PROXY_SERVER;
  if (!proxyServer) {
    return undefined;
  }

  const proxyConfig: { server: string; username?: string; password?: string } = {
    server: proxyServer,
  };

  if (process.env.PROXY_USERNAME) {
    proxyConfig.username = process.env.PROXY_USERNAME;
  }

  if (process.env.PROXY_PASSWORD) {
    proxyConfig.password = process.env.PROXY_PASSWORD;
  }

  return proxyConfig;
};

const proxyConfig = getProxyConfig();

export default defineConfig({
  testDir: './src',
  testMatch: /.*\.e2e-spec\.ts$/,
  fullyParallel: true,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 2 : 0,
  workers: process.env.CI ? 1 : undefined,
  reporter: 'html',
  expect: {
    timeout: 10000,
  },
  use: {
    baseURL: 'http://localhost:4200',
    trace: 'on-first-retry',
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    headless: E2E_HEADLESS,
    ...(proxyConfig && { proxy: proxyConfig }),
  },

  projects: [
    {
      name: 'angular',
      use: {
        ...devices['iPhone 12'],
        baseURL: baseURLs.angular,
      },
    },
    {
      name: 'react-vite',
      use: {
        ...devices['iPhone 12'],
        baseURL: baseURLs['react-vite'],
      },
    },
    {
      name: 'vue3',
      use: {
        ...devices['iPhone 12'],
        baseURL: baseURLs.vue3,
      },
    },
  ],

  webServer: undefined,
});

