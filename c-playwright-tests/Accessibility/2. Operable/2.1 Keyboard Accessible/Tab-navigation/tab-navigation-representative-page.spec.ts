import { test, expect } from '@playwright/test';

  test('Tab Navigation on the Representative Page', async ({ page }) => {
    await page.goto('www/_html/new-accountProject-representative.html');
    
    await page.keyboard.press('Tab');
    let focusedElement = await page.evaluate(() => document.activeElement ? document.activeElement.id : null);
    expect(focusedElement).toBe("title-link");
  
    await page.keyboard.press('Tab');
    focusedElement = await page.evaluate(() => document.activeElement ? document.activeElement.id : null);
    expect(focusedElement).toBe("username");

    await page.keyboard.press('Tab');
    focusedElement = await page.evaluate(() => document.activeElement ? document.activeElement.id : null);
    expect(focusedElement).toBe("password");
  
    await page.keyboard.press('Tab');
    focusedElement = await page.evaluate(() => document.activeElement ? document.activeElement.id : null);
    expect(focusedElement).toBe("about-link");
  
    await page.keyboard.press('Tab');
    focusedElement = await page.evaluate(() => document.activeElement ? document.activeElement.id : null);
    expect(focusedElement).toBe("privacy-link");    
  });
