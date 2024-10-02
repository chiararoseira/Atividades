const http = require('http');
const server = http.createServer((req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const path = url.pathname;
    if (path.startsWith('/saudacao/')) {
        const nome = path.replace('/saudacao/', '');
        res.end(`Olá, ${nome}!`);
    } else {
        res.end('Rota não encontrada');
    }
});
server.listen(2109, () => {
    console.log('Servidor rodando na porta 2109');
});