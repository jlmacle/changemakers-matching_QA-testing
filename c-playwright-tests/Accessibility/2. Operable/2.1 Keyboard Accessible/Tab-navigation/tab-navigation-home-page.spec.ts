import { test, expect } from '@playwright/test';  
  
  test('Tab Navigation on the Home Page', async ({ page }) => {
    await page.goto('/www/index.html');

    await page.keyboard.press('Tab');
    let focusedElement = await page.evaluate(() => document.activeElement ? document.activeElement.id : null);
    expect(focusedElement).toBe("skipToMainContent");
  
    await page.keyboard.press('Tab');
    focusedElement = await page.evaluate(() => document.activeElement ? document.activeElement.id : null);
    expect(focusedElement).toBe("newAccountOrLogin-button");
  
    await page.keyboard.press('Tab');
    focusedElement = await page.evaluate(() => document.activeElement ? document.activeElement.id : null);
    expect(focusedElement).toBe("title-link");
  
    await page.keyboard.press('Tab');
    focusedElement = await page.evaluate(() => document.activeElement ? document.activeElement.id : null);
    expect(focusedElement).toBe("testimonies");
  
    await page.keyboard.press('Tab');
    focusedElement = await page.evaluate(() => document.activeElement ? document.activeElement.id : null);
    expect(focusedElement).toBe("about-link");
  
    await page.keyboard.press('Tab');
    focusedElement = await page.evaluate(() => document.activeElement ? document.activeElement.id : null);
    expect(focusedElement).toBe("privacy-link");    
  });
