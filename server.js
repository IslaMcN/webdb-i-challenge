const express = require('express');

const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());

server.use('/api/budget', db);

server.get('/', (req, res) => {
    res.send('<h4> This is working, this is woooorking.</h4>')
})

module.exports = server;