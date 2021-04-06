// The http.createServer() method includes request
// and response parameters which is supplied by Node.js.

const http = require("http");

const server = http.createServer((req, res)=>{
  res.end("Hello from the others side");
});
server.listen(4000,"127.0.0.1", ()=>{
    console.log("listening to the server port dfgdf 4000");
});