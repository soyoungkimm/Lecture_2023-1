var http = require("http");
const fs = require('fs').promises;

http.createServer(async function (request, response) {
    try {
        const data = await fs.readFile('./04.html');
        response.writeHead(200, {'Content-Type' : 'text/plain'});
        response.end('Hello World\n');
    }
    catch (err) {
        console.error(error);
    }
}).listen(3000);