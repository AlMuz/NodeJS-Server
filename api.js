var express = require('express');
var api = express.Router();

api.get('/', function(req,res,next){
  res.json({a:"this is get"});
});

api.post('/', function(req,res,next){
  res.json({a:"this is post"});
});

api.delete('/', function(req,res,next){
  res.json({a:"this is delete"});
});

module.exports = api;
