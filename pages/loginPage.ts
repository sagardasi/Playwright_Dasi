//loginPage.ts


//readonly = final
//Page Object Model - Design pattern

import { Locator, Page } from "@playwright/test";

//1) Locators
//2) Constructor
//3) Action methods

export class LoginPage
{
  getLogin() {
    throw new Error('Method not implemented.');
  }
  getPassword(password: any) {
    throw new Error('Method not implemented.');
  }
  getEmailAddress(email: any) {
    throw new Error('Method not implemented.');
  }
    //variables which will store the locators
    private emailID: Locator;
    private password: Locator;
    private loginbutton: Locator;
    private loginerrormessage: Locator;

    //constructor - Initialize locators here
    //Constructor is used initialze instance variables
    constructor(page:Page)
    {
        this.emailID=page.getByRole('textbox', {name: 'E-Mail Address'})
        this.password=page.getByRole('textbox', {name:'Password'})
        this.loginbutton=page.getByRole('button', {name:'Login'})
        this.loginerrormessage=page.locator('div.alert')

    }

    //Action methods

   public async performLogin() : Promise<void>
    {
       await this.emailID.fill('kumar@gmail.com')
       await this.password.fill('abc123')
       await this.loginbutton.click()
    }

    public async isInvalidErrorMessage() : Promise<boolean>
    {
        return await this.loginerrormessage.isVisible()

    }




}
