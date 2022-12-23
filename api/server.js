require('dotenv').load();
const express = require('express'),
    app = express(),
    port = process.env.APP_API_PORT || 3000,
    bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const apiRouter = require('./controllers/api');

app.use('/api', apiRouter);

app.get('/', (req, res) => {
    res.send('Projeto Ajuda Otaku');
});

app.listen(port, () => console.log(`Projeto rodando na porta ${port}`));

module.exports = app;
