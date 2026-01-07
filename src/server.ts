// node's built-in web server lib
import http from 'http';

// start web server & listen for http events
http.createServer((req: http.IncomingMessage, res: http.ServerResponse) => {
    // create http response for each request
    res.writeHead(200, { 'Content-Type': 'text/html' } );
    res.write('<h1>Hello world</h1>');
    res.end();
}).listen(4000);

console.log('Web server running on port 4000');