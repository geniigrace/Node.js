//쿠키와 세션
//쿠키

const http = require('http');

http.createServer((req, res)=>{
    console.log(req.url, req.headers.cookie);
    res.writeHead(200, {'Set-Cookie':'mycookie=hellocookie'});
    //name : mycookie, value : test
    res.end('Hello Cookie');
})

.listen(8083,()=>{
    console.log('8083번 포트에서 대기중입니다.');
});