
import { Locator, Page } from "@playwright/test";
import { RandomData } from "../utils/randomDataGenerator";


export class RegisrationPage
{
   //Page consists of Locators, constructor, action methods
        //variables which will store the locators

   private firstName: Locator;
   private lastName: Locator;
   private emailID: Locator;
   private telephone: Locator;
   private password1: Locator;
   private password2: Locator;
   private radiobutton:Locator;
   private checkbox: Locator;
   private continue: Locator;
   private succesmessage: Locator;

      //constructor - Initialize locators here
       //Constructor is used initialze instance variables
       constructor(page:Page)
       {
           this.firstName=page.locator('#input-firstname')
           this.lastName=page.locator('#input-lastname')
           this.emailID=page.locator('#input-email')
           this.telephone=page.locator('#input-telephone')
           this.password1=page.locator('#input-password')
           this.password2=page.locator('#input-confirm')
           this.radiobutton=page.getByRole('radio', {name:'Yes'})
           this.checkbox= page.locator('//input[@type="checkbox"]')
           this.continue = page.locator('input.btn-primary')
           this.succesmessage=page.getByText('Your Account Has Been Created!')
   
       }

      // Action methods

      public async performRegistration() : Promise<void>
      {
        await this.firstName.fill(RandomData.getFirstName())
        await this.lastName.fill(RandomData.getLastName())
        await this.emailID.fill(RandomData.getEmail())
        await this.telephone.fill(RandomData.getTelephone())

        let confirmedpassword=RandomData.getRandomPassword()
        await this.password1.fill(confirmedpassword)
        await this.password2.fill(confirmedpassword)

        await this.radiobutton.click()
        await this.checkbox.click()
        await this.continue.click()

      }

      public async accountconfirmation() :Promise<boolean>
      {
       return await this.succesmessage.isVisible()
      }

}
