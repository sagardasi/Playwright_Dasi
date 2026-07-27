import { Locator, Page } from "@playwright/test";

//1) Locators
//2) Constructor
//3) Action methods

export class HomePage
{
    //variables which will store the locators
    private myAccount: Locator;
    private clickRegister: Locator;
    private clicklogin: Locator;

constructor(page:Page)
{
    this.myAccount= page.locator('//span[text()="My Account"]')
    this.clickRegister=page.getByRole('link', {name:'Register'})
    this.clicklogin=page.getByRole('link', {name:'Login'})
}

public async forRegistration()
{
     await this.myAccount.click()
     await this.clickRegister.click()
     
}


public async forLogin()
{
    await this.myAccount.click()
     await this.clicklogin.click()
     
}

}
