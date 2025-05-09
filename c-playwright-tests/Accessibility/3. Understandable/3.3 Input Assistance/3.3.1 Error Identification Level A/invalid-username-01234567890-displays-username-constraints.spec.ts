import { test, expect } from '@playwright/test';


const viewports = [
  { label: '1920×1080', width: 1920, height: 1080 }, 
  /* { label: '1366×768',  width: 1366, height: 768  },
  { label: '1536×864',  width: 1536, height: 864  },
  { label: '1280×720',  width: 1280, height: 720  },
  { label: '360×800',   width: 360,  height: 800  },
  { label: '390×844',   width: 390,  height: 844  },
  { label: '393×873',   width: 393,  height: 873  },
  { label: '412×915',   width: 412,  height: 915  },
  { label: '768×1024',  width: 768,  height: 1024 },
  { label: '1280×800',  width: 1280, height: 800  },
  { label: '800×1280',  width: 800,  height: 1280 },
  { label: '820×1180',  width: 820,  height: 1180 },  */
];

test.describe('Username validation: invalid username (too long): 01234567890', () => {
  for (const vp of viewports) {
    test(`01234567890 (too long) on ${vp.label}`, async ({ page }) => {
      // 1. Setting the viewport
      await page.setViewportSize({ width: vp.width, height: vp.height });

      // 2. Navigation to the page
      await page.goto('http://127.0.0.1:3000/www/_html/new-accountProject-representative.html');
      await page.waitForLoadState('load');
      await page.waitForFunction(() => typeof window.checkUsername === 'function'); 

      // 3. Filling form with invalid username
      const username = await page.locator('[data-test="username"]');
      await username.fill('01234567890');
      /* Keyup triggering */
      await username.dispatchEvent('keyup', { key: 'Enter' });
      
      // 4. Testing the value of element with id #newAccount-projRep-errorInUsername to be '⚠️ The username must between 4 and 10 characters long.'
      const errorInUsername = await page.locator('#newAccount-projRep-errorInUsername');          
      await expect(errorInUsername).toHaveText('⚠️ The username must between 4 and 10 characters long.');      
    });
  }
});
