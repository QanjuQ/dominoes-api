const express = require('express');
const cookieParser = require('cookie-parser');
const handlers = require('./src/handlers/game_handlers.js');
const bodyParser = require('body-parser')

let app = express();

const logger = (req,res,next) => {
    console.log(req.url,req.method);
    next();
};

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(logger);
app.use(cookieParser());

app.post('/create-game', handlers.createGame);
app.post('/join-game', handlers.joinGame);
app.get('/start-game', handlers.startGame);

module.exports = app;