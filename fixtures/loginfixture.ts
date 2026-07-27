// fixtures
// builtin fixture -- page, browser, request, expect
// custom fixtures -- loginPage, homePage, RegPage
 
// custom fixture -- will actually help me to avoide repetition of code
 
import{test as base, expect} from '@playwright/test';
import {HomePage} from '../pages/homePage'
import {LoginPage} from '../pages/loginPage'
 
type MyFixture= {
    homePage:HomePage;
    loginPage:LoginPage;
 
};
 
export const test = base.extend<MyFixture>({
    homePage: async({page}, use)=>{
        await use(new HomePage(page));
    },
    loginPage :async({page}, use)=>{
        await use(new LoginPage(page));
    }
});
export {expect};