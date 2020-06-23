const cryptico = require('cryptico-js');

function RSA_Key(){
	var passPhrase = "Lo unico que se es que no se nada";// La frase de contraseña utilizada para generar repetidamente esta clave RSA. 
	var bits = 1024;
	var RSAKey = cryptico.generateRSAKey(passPhrase, bits);

	return RSAKey;
}

function public_Key(RSAKey){
	//clave publica
	var publicKey = cryptico.publicKeyString(RSAKey);
	//console.log('\n\npublic key: '+publicKey);

	return publicKey;
}

//decrypt
function decryp(encrypted){
	var RSAKey = RSA_Key();
	var decryp = cryptico.decrypt(encrypted, RSAKey);
	console.log('\n\nMessage decrypt: '+decryp.plaintext+'\n');
}

module.exports = {
	"RSA_Key" : RSA_Key,
	"public_Key" : public_Key,
	"decryp" : decryp
};