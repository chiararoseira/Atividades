const http = require('http');
const server = http.createServer((req, res) => {
    res.end('Bem-vindo!');
    });
server.listen(2109, () => {
    console.log('Servidor rodando na porta 2109');
    }
);