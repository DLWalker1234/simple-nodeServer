const { readfile } = require('fs');
const { createServer } = require('http');
const server = createServer();

server.on('request', (request, response) => {

    console.log('Request received for:', request.url)
    response.write('<h1>My First Node Server</h1>')
    response.write('<h2>By Dustin Walker</h2>')
    response.write('<img src="https://rawgit.com/nodejs/nodejs.org/886b30fde80f35fd0db98793f258d78a9ae0a997/static/images/logo-light.svg"')
    respone.end()

});

server.listen(8080, () => {
    console.log('listening on PORT 8080');
});