import { test, expect } from '@playwright/test';
import { TestConfig } from '../test.Config';
import { SearchPage } from '../pages/Search';

test('TC_006_SearchProduct_Negative', async ({ page }) => {

    await page.goto(TestConfig.appUrl);

    const sp = new SearchPage(page);
    
    // 1. Search for 'iPhone'
    await sp.searchProduct('invalidProduct123');
    await sp.clicksearch();

    // 2. Pass 'invalidProduct123' into validatesearch so it checks for "Search - invalidProduct123"
    const isProductVisible = await sp.validatesearch('invalidProduct123');
    expect(isProductVisible).toBeTruthy()

    await page.waitForTimeout(2000)
});
