const crypto = require('node:crypto');
const base64url= require('base64url');
const fs = require('fs')
const signatureFunction  = crypto.createSign('RSA-SHA256')
const verifyFunction = crypto.createVerify('RSA-SHA256')
const privateKey = fs.readFileSync(__dirname + '/private_key.pem' , 'utf8')
const publicKey  =  fs.readFileSync(__dirname + '/public_key.pem' , 'utf-8')

// const header = JSON.stringify({
//     type: "RS256",
//     typ : "JWT"
// })
// const payload = JSON.stringify({
//     id: "1234567890",
//     name: "John Doe",
//     admin : true
// })
// const base64urlheader = base64url(header)
// const base64urlpayload = base64url(payload)

// signatureFunction.write(base64urlheader + "." + base64urlpayload)
// signatureFunction.end()


//  const signature =  signatureFunction.sign(privateKey , 'base64url')
// let signature  = signatureFunction.sign(privateKey , 'base64')
// signature =  base64url.fromBase64(signature)

// const JWTtoken = base64urlheader + '.'+ base64urlpayload + '.' +signature
// console.log(JWTtoken)



// verify

// const jwtParts= JWTtoken.split('.')

// const headerUrl =  jwtParts[0]
// const payloadUrl =  jwtParts[1]
// const singatureUrl =  jwtParts[2]

// verifyFunction.write(headerUrl + '.' + payloadUrl )
// verifyFunction.end()    

// const signatureBase64 =base64url.toBase64(singatureUrl)

// const  signatureIsValid = verifyFunction.verify(publicKey , signatureBase64 , 'base64')

// console.log(signatureIsValid)

// Another way to is use jsonwebtoken package 

const jwt =  require('jsonwebtoken')

const payloadObj = {
    id: "1234567890",
    name: "John Doe",
    admin : true,
}
//async way
// jwt.sign(payloadObj , privateKey, {algorithm : 'RS256' } , (err ,token) =>{
//     console.log(err || token)
// })
 const jwtToken =  jwt.sign(payloadObj , privateKey, {algorithm : 'RS256' , expiresIn : '1h'})
//  console.log(jwtToken)  
 const verified = jwt.verify(jwtToken , publicKey , {algorithms : ['RS256']})
 console.log(verified)
 //async way 
//  jwt.verify(jwtToken , publicKey , {algorithms : ['RS256']} , (err , payload) =>{
//     if(err) console.log(err)
//     console.log(payload)
//  })