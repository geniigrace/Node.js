//서버 여러개 켜기

const http = require('http');

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/html; charset=utf8'});
    res.write('<h1>Hello Node! Port 8080</h1>');
    res.end('<p>Hello Sever!</p>');
})

.listen(8080, ()=>{
    console.log('8080번 포트에서 서버 대기중입니다.');
});

http.createServer((req, res)=>{
    res.writeHead(200, {'Content-Type':'text/html; charset=utf8'});
    res.write('<h1>Hello Node! Port 8081</h1>');
    res.end('<p>Hello Sever!</p>');
})

.listen(8081, ()=>{
    console.log('8081번 포트에서 서버 대기중입니다.');
});