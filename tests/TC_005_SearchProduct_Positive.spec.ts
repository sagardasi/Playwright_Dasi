import { test, expect } from '@playwright/test';
import { TestConfig } from '../test.Config';
import { SearchPage } from '../pages/Search';

test('TC_005_SearchProduct_Positive', async ({ page }) => {

    await page.goto(TestConfig.appUrl);

    const sp = new SearchPage(page);
    
    // 1. Search for 'iPhone'
    await sp.searchProduct('iPhone');
    await sp.clicksearch();

    // 2. Pass 'iPhone' into validatesearch so it checks for "Search - iPhone"
    const isProductVisible = await sp.validatesearch('iPhone');
    expect(isProductVisible).toBeTruthy();
});
