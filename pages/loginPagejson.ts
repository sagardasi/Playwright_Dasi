import { Locator, Page } from "@playwright/test";

export class forLogin1
{
    private EmailAddress1: Locator;
    private Password1: Locator
    private Login1: Locator
    private SuccessMsg1:Locator
    private FailureMsg1: Locator

    public constructor (page:Page)
    {
        this.EmailAddress1=page.getByRole ('textbox',{name:'E-Mail Address'})
        this.Password1=page.getByRole('textbox',{name:'Password'})
        this.Login1=page.getByRole('button',{name:'Login'})
        this.SuccessMsg1=page.getByRole('heading', {name:"My Orders"})
        this.FailureMsg1=page.getByText('Warning')
    }
    public async getEmailAddress(email: string)
    {
        await this.EmailAddress1.fill(email)
    }
    public async getPassword(password: string)
    {
       await this.Password1.fill(password)
    }
    public async getLogin()
{
    await this.Login1.click()
}
public async validLogin()
{
   return await this.SuccessMsg1.innerText()
}
public async invalidLogin()
{
  return  await this.FailureMsg1.isVisible()
}

}