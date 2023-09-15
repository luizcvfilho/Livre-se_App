const crypto = require("crypto");
const fs = require("fs");
const path = require("path");

(()=>{
	const pairKey = crypto.generateKeyPairSync('rsa', {
		modulusLength: 4096,
		publicKeyEncoding:{
			type: 'pkcs1',
			format: 'pem'
		},
		privateKeyEncoding:{
			type: 'pkcs1',
			format: 'pem'
		},
	});

	fs.writeFileSync(path.join(__dirname, "..", "..","id_rsa_pub.pem"), pairKey.publicKey);
	fs.writeFileSync(path.join(__dirname, "..", "..","id_rsa_priv.pem"), pairKey.privateKey);

	console.log("Kept Keys")
})();
