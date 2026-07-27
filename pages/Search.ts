import { Locator, Page } from "@playwright/test";

export class SearchPage {
    private searchtext: Locator;
    private searchbutton: Locator;
    private page: Page; // Keep a reference to page

    public constructor(page: Page) {
        this.page = page;
        this.searchtext = page.getByRole('textbox', { name: 'Search' });
        this.searchbutton = page.locator('(//button[@type="button"])[4]');
    }

    public async searchProduct(sp: string): Promise<void> {
        await this.searchtext.fill(sp);
    }

    public async clicksearch(): Promise<void> {
        await this.searchbutton.click();
    }

    // Pass the search term dynamically
    public async validatesearch(productName: string): Promise<boolean> {
        return await this.page.getByText(`Search - ${productName}`).isVisible();
    }
}
