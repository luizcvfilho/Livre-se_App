const jwt = require('jsonwebtoken');
const crypto = require('crypto');
const fs = require('fs');
const path = require('path');


const PRIV_KEY = fs
.readFileSync(path
  .join(__dirname, "..","..","id_rsa_priv.pem"), "utf-8");


const generatePassword = (password) => {
  const salt = crypto.randomBytes(32).toString('hex');
  const hash = crypto
  .pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
  return{
    salt: salt,
    hash: hash
  };
}

const generateJWT = (user) => {
  const sub = user.id;
  const payload = {
    sub: sub,
    iat: Date.now()
  };
  const jsonWt = jwt.sign(payload, PRIV_KEY, {expiresIn: "7d", algorithm: 'RS256'});
  return jsonWt;
}

const checkPassword = (password, hash, salt) => {
  const hashFormReq = crypto
  .pbkdf2Sync(password, salt, 10000, 64, 'sha512').toString('hex');
  return hashFormReq === hash;
};
 
const decodeJwt = (token) => {
  const payload = token.split(".")[1];
  const encodedPayload = Buffer.from(payload, 'base64');
  const decodedPayload = encodedPayload.toString('utf-8');
  return JSON.parse(decodedPayload);
}

const getToken = (req) => {
  const header = req.get('Authorization');
  if(!header) return error;
  return header.split(' ')[1];
};


module.exports = {
  generateJWT,
  generatePassword,
  checkPassword,
  decodeJwt,
  getToken
};