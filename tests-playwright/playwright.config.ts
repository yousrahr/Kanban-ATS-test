import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',
  /* Run tests in files in parallel */
  fullyParallel: true,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  /* Retry on CI only */
  retries: process.env.CI ? 2 : 0,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
  headless: false,
  launchOptions: {
    slowMo: 500, // ✅ Correct place to define slow motion
  },
  trace: 'on-first-retry',
},

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium', // Configure this for Chromium/Chrome browser
      use: { ...devices['Desktop Chrome'] },  // Use Desktop Chrome settings
    },
  ],
  
  /* Run your local dev server before starting the tests */
  // Uncomment and configure this if you need to run a local dev server before tests
  // webServer: {
  //   command: 'npm run start', // Your start command here (e.g., npm run start)
  //   url: 'http://127.0.0.1:3000',  // URL where the server is running
  //   reuseExistingServer: !process.env.CI, // Reuse server if not in CI
  // },
});
