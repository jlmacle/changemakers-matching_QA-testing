import { test, expect } from '@playwright/test';

  test.afterEach(async ({ page }) => {
    await page.close();
  });

  test('Tab Navigation on the Representative Page', async ({ page }) => {
    await page.goto('/www/_html/new-accountProject-representative.html', { waitUntil: 'load' });
        
    // Selectors in the order Tab is expected to find them
    const dataTests = [
      'title-link',
      'username',
      'password',
      'about-link',
      'privacy-link'
    ];

    
  for (const dataTest of dataTests) {
    await page.keyboard.press('Tab');

    const focused = page.locator(':focus-visible');
    await expect(focused).toHaveAttribute('data-test', dataTest);
  }
 
  });
