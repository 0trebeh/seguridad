function send(){
	var URL = "https://localhost:3000/Server";

	var secret = document.getElementById('message').value;

	var publicKey = 'xNKFEWNXM+L0GQVFxd+B8sGm/w02Sv/6H2Z5dX4TkiSj65tvVQ+Xih2I9WHp176ao4mYDHGQb5KW/Qql96JJYVMRG3lF6FMF0LRigc22VBhnxXRnv7r4toAvK225NucN9QO1cZqp2FSaM8cyxMdUw4OBM5QIHsUxbK6nYuxv2Pk=';

	var encryptSecret = encrypt(secret, publicKey);
	console.log('\n\nmensaje encriptado: '+encryptSecret);

	var message = {
		message : encryptSecret
	};

	fetch(URL, {
		method: 'POST',
	  	body: JSON.stringify(message),
	  	headers:{
	    	'Content-Type': 'application/json'
	  	}
	}).then(function (res){
		return res.text();
	}).then(function (text){
		console.log(text);
	}).catch(function (err){
		console.error(err);
	})
}

function encrypt(secret, publicKey){
	//encriptar
	var encrypted = cryptico.encrypt(secret, publicKey);

	return encrypted.cipher;
}