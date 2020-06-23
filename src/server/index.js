const {app, server} = require('./server');

async function main() {

    await server.listen(app.get('port'), function(){
    	console.log('Server on port', app.get('port'));
    });

}

main();