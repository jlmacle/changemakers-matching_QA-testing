import { test, expect } from '@playwright/test';  
  
  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Tab Navigation on the Home Page', async ({ page }) => {
    await page.goto('/www/index.html', { waitUntil: 'load' });
    
    // Selectors in the order Tab is expected to find them
    const focusOrder = [
      '[data-test="skipToMainContent"]',
      '[data-test="newAccountOrLogin-button"]',
      '[data-test="title-link"]',
      '[data-test="testimonies"]',
      '[data-test="about-link"]',
      '[data-test="privacy-link"]'
    ];

    // Stepping through with Tab and asserting focus each time
    for (const selector of focusOrder) {
      await page.keyboard.press('Tab');
      await expect(page.locator(selector)).toBeFocused();
    }
 
  });
