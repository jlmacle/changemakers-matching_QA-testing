import { test, expect } from '@playwright/test';

test.describe('Username validation: invalid character: é', () => {
  
    test(`é (invalid character)`, async ({ page }) => {
      // Navigation to the page
      await page.goto('http://127.0.0.1:3000/www/_html/new-accountProject-representative.html');
      await page.waitForLoadState('load');

      // Filling form with invalid username
      const username = await page.locator('[data-test="username"]');
      await username.fill('parentalité');
      /* Keyup triggering */
      await username.dispatchEvent('keyup', { key: 'Enter' });
      
      // 4. Testing the value of element with id #newAccount-projRep-errorInUsername to be '⚠️ The username must between 4 and 10 characters long.'
      const errorInUsername = await page.locator('#newAccount-projRep-errorInUsername');          
      await expect(errorInUsername).toHaveText('The username can only contain lowercase letters (without accents), numbers and underscores.');      
    });

});
