var http = require('http');

var socketio = require('socket.io');
var ecstatic = require('ecstatic');

var players = [];

var fileServer = ecstatic({root: __dirname + '/public'});
var httpServer = http.createServer(fileServer);

var io = socketio.listen(httpServer);
httpServer.listen(8080);

io.sockets.on('connection', function(socket) {
	socket.emit('players', players);
});