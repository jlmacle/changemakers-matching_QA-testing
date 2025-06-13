import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

test.describe('Homepage Accessibility @XRAY-123', () => { // @XRAY-123 maps to an Xray Test Case ID
  test('should have no critical accessibility violations on the homepage', async ({ page }) => {
    await page.goto('/www/index.html', { waitUntil: 'load' });
    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'best-practice']) // Example: focus on certain tags
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
