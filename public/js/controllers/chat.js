ever.controller("ChatController", ["$scope", function($scope){
  
    var socket = io();
      $('form').submit(function(){
        socket.emit('chat message', $('#sending_messages').val());
        $('#sending_messages').val('');
        return false;
      });
      socket.on('chat message', function(msg){
        $('#chat_messages').append($('<li>').text(msg));
      });
}]);