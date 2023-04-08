const crypto = require('node:crypto')
const fs = require('fs')
const { decryptWithPublickey } = require('./decrypt')
const { packageData } = require('./sign')


const hash= crypto.createHash(packageData.hashAlgo)
const publicKey = fs.readFileSync(__dirname+ '/public_key.pem', 'utf8')

let decryptedData = decryptWithPublickey(publicKey, packageData.encrptedData).toString()

hash.update( JSON.stringify(packageData.data))
const hashedData= hash.digest('hex')
if(hashedData === decryptedData){
    console.log("data not tampered" , hashedData)
}else{
    console.log("data is tampered")
}

