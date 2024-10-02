const http = require('http');
const { randomNumber } = require('./utils.js');

const server = http.createServer((req, res) => {
    if (req.url === '/numero') {
        res.writeHead(200, { 'Content-Type': 'text/plain' });
        res.end(randomNumber().toString());
    } else {
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('Rota não encontrada');
    }
});

server.listen(2109, () => {
    console.log('Servidor rodando na porta 2109');
});