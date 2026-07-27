
import {faker} from '@faker-js/faker'

export class RandomData
{
    static getFirstName() :string
    {
        return faker.person.firstName()
    }

     static getLastName() :string
    {
        return faker.person.lastName()
    }

     static getEmail() : string
    {
        return faker.internet.email()
    }

     static getTelephone() : string
    {
        return faker.phone.number()
    }
     
     static getRandomPassword(length:number=12) : string
    {
        return faker.internet.password({length})
    }
}
