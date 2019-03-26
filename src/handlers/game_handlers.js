const Game = require('../models/game.js');
const Player = require('../models/player.js');
const utils = require('../models/utils.js'); 

const isUndefined = (candidate) => (candidate === undefined);

const addPlayerToGame = (req,res) => {
  let sessionid = req.cookies.sessionid;
  if (isUndefined(sessionid))
  {
    res.cookie('sessionid',new Date().getTime(), { maxAge: 900000, httpOnly: true });
    req.app.game.addPlayer(new Player(req.body.name,sessionid));
    res.send("game started and you joined it.");
    console.log('sessionid created successfully');
    return;
  } 
  console.log('sessionid exists', sessionid);
  res.send("you are a player in a game");
};

const createGame = (req,res) => {
  let game = new Game(utils.dominoes.slice(),req.body.numberOfPlayers);
  req.app.game = game;
  addPlayerToGame(req,res);
};

const joinGame = (req,res) => {
  if(isUndefined(req.app.game)) {
    res.send("No game exists to join, please create a game");
    return;
  }
  addPlayerToGame(req,res);
};

const startGame = (req,res) => {
  let game = req.app.game;
  if(game.hasEnoughPlayers()){
    game.setup();
    game.assignTurn();
    res.send(`${game.currPlayer.name}'s turn.`);
    return;
  }
  res.send("wait for other players to join");
};

module.exports = {
  createGame,
  joinGame,
  startGame,
};