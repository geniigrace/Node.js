const express = require('express');
const path = require('path');

//express 객체 생성 
const app = express();

//프로세스의 포트에 접근해서 세팅하거나 포트번호 3000번으로 세팅 
app.set('port', process.env.PORT||3000);

app.get('/', (req, res)=>{
    //res.send('Hello Express');
    res.sendFile(path.join(__dirname, '/index.html'));
});

app.listen(app.get('port'),()=>{
    console.log(app.get('port'), '번 포트에서 대기중');
});