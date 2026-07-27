import {test} from '@playwright/test'

let AUTH_TOKEN ={Authorization: 'Bearer b6ab7aad19f5921974950acbb3ab4a70ccabceb287eea4a078e3e3ec22e67b7f'}
 test('getting user data api', async({request})=>{
    
    let resp = await request.get('https://gorest.co.in/public/v2/users',{
    headers:AUTH_TOKEN


 })
 let jsonBody=await resp.json()
 console.log(jsonBody)
 }
)
