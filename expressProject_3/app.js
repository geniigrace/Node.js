
//기본설정 시작 
const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const indexRouter= require('./routes'); //index는 따로 명시하지 않아도 기본으로 인식함 
const userRouter = require('./routes/user');

const app = express();
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname,'public')));
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(cookieParser(process.env.COOKIE_SECRET));
app.use(session({
    resave : false,
    saveUninitialized : false,
    secret : process.env.COOKIE_SECRET,
    cookie: {
        httpOnly : true,
        secure : false,
    },
    name : 'session-cookie',

}));
//기본설정 끝

//라우터 사용
app.use('/', indexRouter);
app.use('/user', userRouter);

//에러처리
app.use((req, res, next)=>{
    res.status(404).send('NOT Found');
});

app.use((ree,req,res,next)=>{
    console.error(err);
    res.status(500).send(err.message);
});

//클라이언트 반응 대기
app.listen(app.get('port'),()=>{
    console.log(app.get('port'),'번 포트에서 대기중');
});