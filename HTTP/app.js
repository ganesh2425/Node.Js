const http = require ("http");
const server = http.createServer((response, request)=>{
    response.end("<h1>Hello Bangalore Good Morning to all</h1>");
});
server.listen(8000);