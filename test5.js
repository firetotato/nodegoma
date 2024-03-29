var http = require('http');
var server = http.createServer();

var port = 3000;
server.listen(port, function(){
    console.log('웹 서버가 시작됨. : %d', port);
});

server.on('connection',function(socket){
    var addr = socket.address();
    console.log('클라이언트가 접속 : %s, %d', addr.address, addr.port);
});

server.on('request', function(req, res){
    console.log('클라이언트 요청이 왔습니다.');

    var filename = 'house.png';
    false.readFile(filename, function(err, data){
        res.writeHead(200, {"Content-Type" : "image/jpeg"});
        res.write(data);
        res.end();
    });
});

server.on('close', function(){
    console.log('서버가 종료됩니다.');
})