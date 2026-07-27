
import {expect, test} from '@playwright/test'
import { RegisrationPage } from '../pages/registrationPage'
import { HomePage } from '../pages/homePage'

test('Registration test @master, @sanity --headed', async({page})=>{

   await page.goto('https://tutorialsninja.com/demo/index.php?route=common/home')
      await page.waitForTimeout(5000)

      let hp= new HomePage(page)
      await hp.forRegistration()

     let rp = new RegisrationPage(page)
     await rp.performRegistration()

     let confirmation=await rp.accountconfirmation()
     expect(confirmation).toBeTruthy()

           await page.waitForTimeout(5000)


})