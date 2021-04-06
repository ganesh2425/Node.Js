const http = require ("http");
const server = http.createServer((response, request)=>{
    response.end("<h1>Hello Bangalore Good Morning to all</h1>");
});
server.listen(8000,"127.0.0.1",()=>{
    console.log("new server is created by port no 8000");
});