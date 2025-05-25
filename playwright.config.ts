import { defineConfig, devices } from '@playwright/test';
import { OrtoniReportConfig } from "ortoni-report"; 


const reportConfig: OrtoniReportConfig = {
  open: process.env.CI ? "never" : "always", // default to never
  folderPath: "z-playwright-report",
  filename: "index.html",
  title: "Playwright Test Report (Ortoni format)",
  projectName: "Changemakers matching",
  testType: "e2e",
  authorName: "JL",
  base64Image: false,
  stdIO: false,
  preferredTheme: "light",
  meta: {
    description: "Playwright test report",
    platform: "macOS",
  },
};
/**
 * See https://playwright.dev/docs/test-configuration.
 */
export default defineConfig({
  testDir: 'c-playwright-tests',
  outputDir: 'z-playwright-results',
  /* Running tests sequentially ensures each test gets the full system resources, 
      avoiding potential conflicts. 
      https://playwright.dev/docs/ci#workers */
  fullyParallel: false,
  /* Opt out of parallel tests on CI. */
  workers: process.env.CI ? 1 : undefined,
  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,
  retries: 4,    
  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  //reporter: process.env.CI ? 'blob' : 'html',
  reporter: [["ortoni-report", reportConfig]],
  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    baseURL: 'http://127.0.0.1:3000',
    viewport: { width: 1280, height: 720 },  

    /* “We don't recommend setting this to on so that traces are run on every test as it's very performance heavy.”
        https://playwright.dev/docs/best-practices#debugging-on-ci  */
    //trace: 'on-first-retry',

    //video: 'retain-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    // Desktop
    { name: 'Desktop 1920×1080', 
      use: { viewport: { width: 1920, height: 1080 } }, 
      /* tab-navigation-home-page.spec.ts',
        'tab-navigation-representative-page.spec.ts' tested with this viewport */
       },
    { name: 'Desktop 1366×768',  
      use: { viewport: { width: 1366, height: 768 } } , 
      testIgnore: [
        '**/tab-navigation-home-page.spec.ts',
        '**/tab-navigation-representative-page.spec.ts',
      ], },
    { name: 'Desktop 1536×864',  
      use: { viewport: { width: 1536, height: 864 } }, 
      testIgnore: [
        '**/tab-navigation-home-page.spec.ts',
        '**/tab-navigation-representative-page.spec.ts',
      ],},
    { name: 'Desktop 1280×720',  
      use: { viewport: { width: 1280, height: 720 } }, 
      testIgnore: [
        '**/tab-navigation-home-page.spec.ts',
        '**/tab-navigation-representative-page.spec.ts',
      ],},
      { name: 'Mobile 360×800',  
      use: { viewport: { width: 360, height: 800 } }, 
      testIgnore: [
        '**/tab-navigation-home-page.spec.ts',
        '**/tab-navigation-representative-page.spec.ts',
      ],},
      { name: 'Mobile 390×844',  
      use: { viewport: { width: 390, height: 844 } }, 
      testIgnore: [
        '**/tab-navigation-home-page.spec.ts',
        '**/tab-navigation-representative-page.spec.ts',
      ],},
      { name: 'Mobile 393×873',  
      use: { viewport: { width: 393, height: 873 } }, 
      testIgnore: [
        '**/tab-navigation-home-page.spec.ts',
        '**/tab-navigation-representative-page.spec.ts',
      ],},
      { name: 'Mobile 412×915',  
      use: { viewport: { width: 412, height: 915 } }, 
      testIgnore: [
        '**/tab-navigation-home-page.spec.ts',
        '**/tab-navigation-representative-page.spec.ts',
      ],},
      { name: 'Tablet 768×1024',  
      use: { viewport: { width: 768, height: 1024 } }, 
      testIgnore: [
        '**/tab-navigation-home-page.spec.ts',
        '**/tab-navigation-representative-page.spec.ts',
      ],},
      { name: 'Tablet 1280×800', 
     use: { viewport: { width: 1280, height: 800 } },
     testIgnore: [
       '**/tab-navigation-home-page.spec.ts',
       '**/tab-navigation-representative-page.spec.ts',
     ],},
     { name: 'Tablet 800×1280', 
     use: { viewport: { width: 800, height: 1280 } },
     testIgnore: [
       '**/tab-navigation-home-page.spec.ts',
       '**/tab-navigation-representative-page.spec.ts',
     ],},
 
    
  ],

  /* Run your local dev server before starting the tests */
  /* webServer: {
    command: 'npm run start',
    url: 'http://127.0.0.1:3000',
    reuseExistingServer: !process.env.CI,
  }, */
});
