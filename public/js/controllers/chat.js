ever.controller("ChatController", ["$scope", "$log", function($scope, $log){
    $log.info("Your In");
        var socket;
        socket = io.connect("http://localhost:3000");
        console.log(socket);
        socket.on("MyEvent", function(message){
            alert(message);
        });
}]);