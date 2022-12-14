const express = require('express');
const path = require('path');

//express 객체 생성 
const app = express();

//프로세스의 포트에 접근해서 세팅하거나 포트번호 3000번으로 세팅 
app.set('port', process.env.PORT||3000);

app.use((req, res, next)=>{
    console.log('모든 요청에 다 실행됩니다.');
    next();
});

app.get('/',(req, res, next)=>{
    res.send('Get/요청에서만 실행됩니다.');
    next();
}, (req, res)=>{
    throw new Error('에러는 에러 처리 미들웨어로 갑니다.');
});


app.use((err, req, res, next)=>{
    console.error(err);
    res.status(500).send(err.message);
});

app.listen(app.get('port'),()=>{
    console.log(app.get('port'), '번 포트에서 대기중');
});