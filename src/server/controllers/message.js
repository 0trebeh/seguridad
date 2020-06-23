const rsa = require('../RSA/rsa');
const messageCtrl = {};

messageCtrl.get = async (req, res) => {
    res.send('Home get');
    console.log('peticion tipo get');
}

messageCtrl.post = async (req, res) => {
	const { message } = req.body;
    res.send('Home post');

    //decrypt
    rsa.decryp(message);
    //console.log('\n'+'message: ' + message);
}

module.exports = messageCtrl;