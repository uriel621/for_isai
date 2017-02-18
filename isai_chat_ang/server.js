// // Include Modules
// var express = require("express");
// var path = require("path");
// var app = express();
// var server = require("http").createServer(app).listen(3000)
// var io = require("socket.io").listen(server);

// users = [];
// connections = [];

// // server.listen(3000)

// // Run The Server
// // server.listen(process.env.PORT || 3000);

// // console.log("server running...")

// // // Create a Route
// // app.get("/", function(req, res){ //When "/" is visited then it runs the function
// //     // res.sendFile(__dirname + "/views/login.html");
// //     res.sendFile(__dirname + "/public/index.html");
// // });


// // works css

// // app.use(express.static(__dirname + '/public'));

// // app.listen(3000, function() {
// //   console.log('Server listening on port 3000');
// // });

// // // Open a connection with socket.io
// // io.sockets.on("connection", function(socket){
// //     connections.push(socket);
// //     console.log("Connected: %s sockets connected", connections.length);

// //     //Disconnect
// //     socket.on("disconnect", function(data){
// //         connections.splice(connections.indexOf(socket), 1);
// //     console.log("Disconnected: %s sockets connected", connections.length);
// //     }); 
// // });

// // Traversy
// // app.listen(3000, function(){
// //     console.log("Server on 3000")
// // })

// // ================================================================================
// // Traversy way of Set Static Path
// // app.use(express.static(path.join(__dirname + public)));

// app.use(express.static(__dirname + '/public'));

// app.get("*", function(req, res){
//     res.redirect("public/index.html")
// })

// // Open a connection with socket.io
// io.sockets.on("connection", function(socket){
//     // connections.push(socket);
//     console.log("server621");
//     socket.emit("MyEvent", "Connection Success")

//     // //Disconnect
//     // socket.on("disconnect", function(data){
//     //     connections.splice(connections.indexOf(socket), 1);
//     // console.log("Disconnected: %s sockets connected", connections.length);
//     // }); 
// });
//=================================================================================================
var express = require("express");
var path = require("path");
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);


app.use(express.static(__dirname + '/public'));

app.get("*", function(req, res){
    res.redirect("public/index.html")
})

io.on('connection', function(socket){
  socket.on('chat message', function(msg){
    io.emit('chat message', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});





