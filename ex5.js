const express = require('express');
const app = express();
app.get('/', (req, res) => {
    res.send('<h1>Bem-vindo!</h1>');
});
app.get('/api/data', (req, res) => {
    res.json({
        Nome: 'Chiara',
        Idade: 23,
        Cidade: 'Guarapuava'
    });
});
app.listen(2109, () => {
    console.log('Servidor rodando na porta 2109');
});