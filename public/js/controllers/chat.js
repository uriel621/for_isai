ever.controller("ChatController", ["$scope", function($scope){
  
    var socket = io();
      socket.on('chat message', function(msg){
        $('#chat_messages').append($('<li>').text(msg));
      });

      $scope.send_message = function(){

        if(document.getElementById("sending_messages").value === ""){
          alert("TYPE SOMETHING")
        }
        else {
          socket.emit('chat message', $('#sending_messages').val());
          $('#sending_messages').val('');
          return false;
        }

      }
      
}]);