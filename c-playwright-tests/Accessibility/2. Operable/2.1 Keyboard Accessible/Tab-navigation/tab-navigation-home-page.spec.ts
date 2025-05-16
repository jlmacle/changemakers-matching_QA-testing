import { test, expect } from '@playwright/test';    
  
  // new browser context for each test  
  // https://playwright.dev/docs/browser-contexts#introduction
  test('Tab Navigation on the Home Page', async ({ page }) => {
    await page.goto('/www/index.html', { waitUntil: 'load' });

    // The sequence of data-test values we expect
    const dataTests = [
      'skipToMainContent',
      'newAccountOrLogin-button',
      'title-link',
      'testimonies',
      'about-link',
      'privacy-link'
    ];

    for (const dataTest of dataTests) {
      await page.keyboard.press('Tab');
      const focused = page.locator(':focus-visible');
      await expect(focused).toHaveAttribute('data-test', dataTest);
    }

    await page.close();
});
