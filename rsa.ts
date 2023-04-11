
import {
    KeyPairSyncResult,
    RSAKeyPairOptions,
    generateKeyPairSync,
    verify,
    sign
} from 'crypto'

//function to generate random keypair
const getKeyPair = (): KeyPairSyncResult<string, string> => {
    const options: RSAKeyPairOptions<'pem', 'pem'> = {  // Options
        modulusLength: Math.pow(2,10),
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem'
        }
    }
    return generateKeyPairSync('rsa', options)
}


//get key
const { publicKey, privateKey } = getKeyPair()

// sign
const message = 'Qua dep trai'
const data: Buffer = Buffer.from(message)
const trulySignature: Buffer = sign(undefined, data, privateKey)
const falsySignature: Buffer = Buffer.from('wrong signature')

// verify
const trulyCheck = verify(undefined, data, publicKey, trulySignature)
console.log(trulyCheck)
const falsyCheck = verify(undefined, data, publicKey, falsySignature)
console.log(falsyCheck)
