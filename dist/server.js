"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// node's built-in web server lib
const http_1 = __importDefault(require("http"));
// start web server & listen for http events
http_1.default.createServer((req, res) => {
    // create http response for each request
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write('<h1>Hello world</h1>');
    res.end();
}).listen(4000);
console.log('Web server running on port 4000');
