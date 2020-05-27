var express = require('express');

var app = express();

app.get('/', (req, res) => {
    res.send('Hello World');
});

app.get('/versao', (req, res) => {
    res.send('Versão 2');
});

app.get('/matheus', (req, res) => {
    res.send('O Matheus é muito lindo!');
});

app.listen(8080, () => console.log('Ouvindo na 8080'));