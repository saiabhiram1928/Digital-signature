const crypto = require('node:crypto');
const fs = require('fs');
const { encryptWithPublicKey } = require('./encrypt');
const { decryptWithPrivateKey } = require('./decrypt');

const publicKey= fs.readFileSync(__dirname+'/public_key.pem' , 'utf-8')
const privateKey= fs.readFileSync(__dirname+'/private_key.pem' , 'utf-8')

const encrypytedMsg = encryptWithPublicKey(publicKey, 'Hiii , my name is abhiram')

console.log(encrypytedMsg.toString())

const decryptedMsg = decryptWithPrivateKey(privateKey,encrypytedMsg)

console.log(decryptedMsg.toString())