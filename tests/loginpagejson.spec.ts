import {expect, test} from '@playwright/test'
import{HomePage} from '../pages/homePage'
import{forLogin1} from '../pages/loginPagejson'
import{DataProvider1} from '../utils/dataProvider'
import{TestConfig} from '../test.Config'

const jsonPath='testData/loginData.json'
const jsonTestData=DataProvider1.getTestDataFromJson(jsonPath)

for(const data of jsonTestData)
{

test(`Login test from JSON file: ${data.testName}`, async({page})=>{
await page.goto (TestConfig.appUrl)
 await page.waitForTimeout(5000)

let CD =new HomePage(page)
await CD.forLogin()
 
let DD = new forLogin1(page)
await DD. getEmailAddress(data.email)
await DD.getPassword(data.password)
DD.getLogin()
await page.waitForLoadState('networkidle')

if (data.expected.toLowerCase ()==='success'){
    await expect(page.getByRole('heading',{name:"My Orders"})).toBeVisible()
}else{
    const errorMsg= await DD.invalidLogin()
    expect(errorMsg).toBeTruthy()

}

})
}
