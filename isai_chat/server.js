var express = require("express");
var path = require("path");
var app = express();
var http = require('http').Server(app);

app.use(express.static('src'));

http.listen(3000, function(){
  console.log('listening on *:3000');
});
