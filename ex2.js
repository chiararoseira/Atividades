const http = require('http');
const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Bem-vindo!');
    } else if (req.url === '/sobre') {
        res.end('Informações sobre mim');
    } else if (req.url === '/contato') {
        res.end('Informações de contato');
    } else {
        res.end('Rota não encontrada');
    }
});
server.listen(2109, () => {
    console.log('Servidor rodando na porta 2109');
});