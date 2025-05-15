import { test, expect } from '@playwright/test';  
  
  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Tab Navigation on the Home Page', async ({ page }) => {
  await page.goto('/www/index.html', { waitUntil: 'load' });

  // The sequence of data-test values we expect to receive focus
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
});
