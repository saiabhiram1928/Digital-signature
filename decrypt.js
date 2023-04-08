const crypto=require('node:crypto')

const decryptWithPrivateKey = (private_key , encrypytedMsg)=>{
    return crypto.privateDecrypt(private_key, encrypytedMsg)
}
const decryptWithPublickey = (public_key , encrypytedMsg)=>{
    return crypto.publicDecrypt(public_key, encrypytedMsg)
}
module.exports.decryptWithPrivateKey = decryptWithPrivateKey
module.exports.decryptWithPublickey = decryptWithPublickey