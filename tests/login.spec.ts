
 /*import {expect, test} from '@playwright/test'
import {LoginPage} from '../pages/loginPage'

test('loginpage', async({page})=>{
    await page.goto('https://tutorialsninja.com/demo/index.php?route=account/login')
    await page.waitForTimeout(3000)

  let LS= new LoginPage(page)  
  await LS.Loginprocess()
 let err= await LS.expectErrMsg()
 console.log(err)
  expect(err).toBeTruthy()
}) */


import {expect, test} from '@playwright/test'
import { LoginPage } from '../pages/loginPage'
import { HomePage } from '../pages/homePage'

//@master, @sanity, @regression those are tags only

test('Login test @master, @sanity, @regression', async({page})=>{
   await page.goto('https://tutorialsninja.com/demo/index.php?route=common/home')
   await page.waitForTimeout(5000)

   let hp = new HomePage(page)
   hp.forLogin()


  let lp= new LoginPage(page) //When we create an object, constructor get invoked, constructor is used to initialize instance variables
  lp.performLogin()

  let er=lp.isInvalidErrorMessage()
  expect(er).toBeTruthy()

   await page.waitForTimeout(5000)

})