import {expect, test} from '@playwright/test'
import{HomePage} from '../pages/homePage'
import{forLogin1} from '../pages/LoginPagecsv'
import{DataProvider1} from '../utils/dataProvider'
import{TestConfig} from '../test.Config'

const csvPath='testData/loginData.csv'
const testD=DataProvider1.getTestDataFromCsv(csvPath)

for(const data of testD)
{

test(`Login test from CSV file: ${data.testName} @sanity`, async({page})=>{
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





/*
import { expect, test } from '../fixtures/loginfixture'; 
import { DataProvider1 } from '../utils/dataProvider'; 
import { TestConfig } from '../test.Config'; 
import { forLogin1 } from '../pages/LoginPagecsv';

// Load CSV test data 

// using fixtures
const csvPath = "testData/loginData.csv"; 
const testData = DataProvider1.getTestDataFromCsv(csvPath); 

// Loop through each row of the CSV data
// Added 'index' to the loop to ensure every test title is completely unique
for (const [index, data] of testData.entries()) {

  test(`Login Test with CSV Data: ${data.testName} (Row ${index + 1})`, async ({ page, homePage, loginPage }) => {
    
    // 1. Navigate to the application URL
    await page.goto(TestConfig.appUrl); 
    
    // 2. Click the login/account button using your homePage fixture
    await homePage.forLogin(); 
    
    // 3. Enter dynamic credentials directly from the CSV row data
    let DD = new forLogin1(page)
    await DD.getEmailAddress(data.email); 
   await DD.getPassword(data.password); 
    await DD.getLogin(); 
    
    // 4. Wait for network requests to settle down
    await page.waitForLoadState('networkidle');

    // 5. Conditional assertions based on your expected CSV outcome
    if (data.expected.toLowerCase() === 'success') {
      await expect(page.locator('#content').getByRole('heading', { name: 'My Account' })).toBeVisible(); 
    } else {
      const errorMessage = await DD.invalidLogin(); 
      expect(errorMessage).toBeTruthy(); 
    }
  })
}*/