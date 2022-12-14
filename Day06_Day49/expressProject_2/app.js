const express = require('express');
const morgan = require('morgan');
const cookieParser = require('cookie-parser');
const session = require('express-session');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();
const app = express();
app.set('port', process.env.PORT || 3000);

app.use(morgan('dev'));

app.use('/', express.static(path.join(__dirname,'public'))); 
//메모리에 정적으로 올림 -> 추후 public 폴더를 만들고 css, js이미지 파일들을 넣어서 접근

app.use(express.json()); //데이터 전달방식을 json으로 사용 
app.use(express.urlencoded({extended:false})); //url인코드는 쿼리스트링모드로 쿼리스트링모듈 사용(false 일 때)


app.use(cookieParser(process.env.COOKIE_SECRET));//동봉된 쿠키를 해석해 req.cookies 객체로 만듦
/* app.use(cookieParser(비밀키) : 비밀키로 암호화 -> 복호화 
COOKIE_SECRET : 암호화할때 사용되는 촉매제 같은 역할의 비밀 키*/

//세션 구현할 때 데이터를 임시적으로 저장하는 역할
app.use(session({
    resave : false, // 세션에 수정사항 생겨도 다시 저장할지? 
    saveUninitialized : false, //세션에 저장 내역이 없으면 처음부터 세션을 생성할지?
    secret : process.env.COOKIE_SECRET, // 세션 암호화
    cookie:{
        httpOnly:true, // 클라이언트에서 쿠키를 확인할지? 
        secure : false, //https 가 아닌 환경에서도 사용할지?

    },
    name : 'session-cookie',
}));

const multer = require('multer');
const fs = require('fs');

try {
    fs.readdirSync('uploads');
  } catch (error) {
    console.error('uploads 폴더가 없어 uploads 폴더를 생성합니다.');
    fs.mkdirSync('uploads');
  }

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      done(null, 'uploads/');
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname);
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 },
});
  app.get('/upload', (req, res) => {
    res.sendFile(path.join(__dirname, 'multipart.html'));
  });
  app.post('/upload',upload.fields([{name : 'image1'},{name : 'image2'}]) ,(req, res) => {
    console.log(req.files, req.body);
    res.send('ok');
  });
  
  
  app.get('/', (req, res, next) => {
    console.log('GET / 요청에서만 실행됩니다.');
    next();
  }, (req, res) => {
    throw new Error('에러는 에러 처리 미들웨어로 갑니다.')
  });
  app.use((err, req, res, next) => {
    console.error(err);
    res.status(500).send(err.message);
  });
  
  app.listen(app.get('port'), () => {
    console.log(app.get('port'), '번 포트에서 대기 중');
  });
  