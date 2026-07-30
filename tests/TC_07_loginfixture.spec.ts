import { expect, test } from '../fixtures/loginfixture'
import { TestConfig } from '../test.Config'
 
 

test('Invalid login test @master', async({page, homePage, loginPage})=>{
    await page.goto(TestConfig.appUrl);
    //await let  hp = new HomePage(page)
   
    //await hp.login()
    await homePage.forLogin();
 
    await loginPage.performLogin();
   
    const errorMessage = await loginPage.isInvalidErrorMessage();
    expect(errorMessage).toBeTruthy();
 
   
})
 