 import {expect, request, test} from '@playwright/test'


let AUTH_TOKEN={Authorization:'Bearer b6ab7aad19f5921974950acbb3ab4a70ccabceb287eea4a078e3e3ec22e67b7f'}
test('post the data api', async ({request})=>{

    let postData = {
          name: 'usha kiran mera',
        email: `automation_${Date.now()}@open.com`,
        gender: 'male',
        status: 'active'
    }
let response = await request.post('https://gorest.co.in/public/v2/users', { 
    headers: AUTH_TOKEN,
        data: postData
    })
    expect(response.status()).toBe(201);

})  



  