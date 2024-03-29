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

    var filename = 'house.jpeg';
    var infile = fs.createReadStream(filename, {flags : 'r'});
    // 파이프로 연결해서 알아서 처리하도록 설정하기
    infile.pipe(res);
});

server.on('close', function(){
    console.log('서버가 종료됩니다.');
})

//test5.js와 같은 문제.
//이미지 파일을 넣고나서부터 localhost:3000이 연결이 거부됌.
