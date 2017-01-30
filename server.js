// Include Modules
var express = require("express");
var app = express();
var server = require("http").createServer(app);
var io = require("socket.io").listen(server);

users = [];
connections = [];

// Run The Server
// server.listen(process.env.PORT || 3000);

// console.log("server running...")

// // Create a Route
// app.get("/", function(req, res){ //When "/" is visited then it runs the function
//     // res.sendFile(__dirname + "/views/login.html");
//     res.sendFile(__dirname + "/public/index.html");
// });


// works css

app.use(express.static(__dirname + '/public'));

app.listen(3000, function() {
  console.log('Server listening on port 3000');
});




