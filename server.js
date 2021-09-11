const http = require('http');
const PORT = 3000;

const server = http.createServer((req, res) => {
    res.statusCode = 200;
    res.setHeader('Context-Type', 'text-plain');
    res.end('Hello World');
});

server.listen(port, () => {
    console.log(`Listening on Port ${PORT}`)
});


