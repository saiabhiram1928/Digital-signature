const crypto=require('node:crypto')

const encryptWithPublicKey = (public_key , msg)=>{
    const Buffermsg = Buffer.from(msg , 'utf-8')
    return crypto.publicEncrypt(public_key,Buffermsg)
}
const encryptWithPrivateKey = (private_key , msg) =>{
    const Buffermsg = Buffer.from(msg , 'utf-8')
    return crypto.privateEncrypt(private_key , msg)
}
module.exports.encryptWithPublicKey=encryptWithPublicKey
module.exports.encryptWithPrivateKey=encryptWithPrivateKey