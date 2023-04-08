const crypto = require('node:crypto')
const hash = crypto.createHash('sha256')
const fs =require('fs')
const { encryptWithPrivateKey } = require('./encrypt')
const data = {
    id:1,
    text:"hiii"
}
const jsonData= JSON.stringify(data)

hash.update(jsonData)

const hashedData= hash.digest('hex')
const privateKey = fs.readFileSync(__dirname + '/private_key.pem', 'utf8')

const encrptedData=encryptWithPrivateKey(privateKey,hashedData)

const package = {
    hashAlgo: "sha256",
    data,
    encrptedData
}
module.exports.packageData = package