import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Pages Accessibility', () => {
  test('The homepage should have no critical accessibility violations', async ({ page }) => {
    await page.goto('/www/index.html', { waitUntil: 'load' });
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa']) 
      .analyze();
    
    // Log violations for easier debugging, even if the test passes based on filtered criteria
    if (accessibilityScanResults.violations.length > 0) {
      console.log('Axe-core: Accessibility Violations Found:');
      console.log(accessibilityScanResults.violations);
      expect(accessibilityScanResults.violations).toEqual([]);
    }
    else console.log('Axe-core: No accessibility violations found.');
    
  });

  test('The representative page should have no critical accessibility violations', async ({ page }) => {
    await page.goto('/www/_html/new-accountProject-representative.html', { waitUntil: 'load' });
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa']) 
      .analyze();
    
    // Log violations for easier debugging, even if the test passes based on filtered criteria
    if (accessibilityScanResults.violations.length > 0) {
      console.log('Axe-core: Accessibility Violations Found:');
      console.log(accessibilityScanResults.violations);
      expect(accessibilityScanResults.violations).toEqual([]);
    }
    else console.log('Axe-core: No accessibility violations found.');
    
  });

  
});
