# E2E Tests

End-to-end tests for all demo projects using Playwright.

## Setup

```bash
cd demo/e2e
npm install
npx playwright install
```

## Running Tests

### Run all tests for all projects
```bash
npm test
```

### Run tests for a specific project
```bash
npm run test:angular
npm run test:react
npm run test:react-vite
npm run test:vue2
npm run test:vue3
npm run test:micro-front-end
```

### Run tests in UI mode
```bash
npm run test:ui
```

### Run tests in headed mode (see browser)
```bash
npm run test:headed
```

### Run tests in debug mode
```bash
npm run test:debug
```

## Configuration

Configuration is managed through environment files:

- `.env` - Default configuration (committed to git)
- `.env.local` - Local overrides (not committed, overrides `.env`)

### Environment Variables

Create a `.env.local` file in the `demo/e2e` directory to customize settings:

```bash
# Base URLs for demo projects
ANGULAR_BASE_URL=http://localhost:4200
REACT_VITE_BASE_URL=http://localhost:5173
VUE3_BASE_URL=http://localhost:5174

# E2E Test Configuration
E2E_HEADLESS=true
```

Available variables:
- `ANGULAR_BASE_URL` (default: http://localhost:4200)
- `REACT_VITE_BASE_URL` (default: http://localhost:5173)
- `VUE3_BASE_URL` (default: http://localhost:5174)
- `E2E_HEADLESS` (default: true) - Set to `false` to run in headed mode
- `PROXY_SERVER` - Proxy server URL (e.g., `http://proxy.example.com:8080` or `socks5://proxy.example.com:1080`)
- `PROXY_USERNAME` - Optional proxy authentication username
- `PROXY_PASSWORD` - Optional proxy authentication password

### Quick Setup

1. Copy the example file:
   ```bash
   cp .env.local.example .env.local
   ```

2. Edit `.env.local` with your local settings

### Proxy Configuration

To use a proxy server for browser requests, add these to your `.env.local` file:

```bash
# Proxy configuration (optional)
PROXY_SERVER=http://proxy.example.com:8080
PROXY_USERNAME=your-username  # Optional, if proxy requires authentication
PROXY_PASSWORD=your-password  # Optional, if proxy requires authentication
```

Supported proxy formats:
- HTTP proxy: `http://proxy.example.com:8080`
- HTTPS proxy: `https://proxy.example.com:8080`
- SOCKS5 proxy: `socks5://proxy.example.com:1080`

### Headless Mode

By default, tests run in headless mode (controlled by `E2E_HEADLESS` in `.env` or `.env.local`). You can also override via command line:

```bash
E2E_HEADLESS=false npm test
```

## View Test Report

After running tests, view the HTML report:

```bash
npm run report
```

