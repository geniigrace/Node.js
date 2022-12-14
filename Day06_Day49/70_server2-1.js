
const https = require('https'); //http에 ssl암호를 사용
const fs = require('fs');

//ssl보안 관련
https.createServer({
    cert : fs.readFileSync('도메인 인증서 경로'),
    key : fs.readFileSync('도메인 비밀키 경로'),
    ca : [
        fs.readFileSync('상위 인증서 경로'),
        fs.readFileSync('상위 인증서 경로'),
    ],

    //이부분은 동일함
},(req, res)=>{
    res.writeHead(200, { 'Content-Type':'text/html; charset=utf-8'});
    res.write('<h1>HELLO NODE</h1>');
    res.end('<p>HELLO SERVER</p>');
})

//https 는 포트를 무조건 443을 사용 
.listen(443, ()=>{
    console.log('443번 포트에서 서버 대기중');
});