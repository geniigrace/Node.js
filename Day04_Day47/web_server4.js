//웹페이지에 html/css 불러오기

const http = require('http');

const fs = require('fs').promises;

http.createServer(async (req, res)=>{
    try{
        const data = await fs.readFile('./Day04_Day47/sol-2.html');
        res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8'});
        res.end(data);
    }
    catch(err){
        console.error(err);
        res.writeHead(500, {'Content-Type': 'text/plain; chartset=utf-8'});
        res.end(err.message);
    }
})

.listen(8080, ()=>{
    console.log('8080 번 포트에서 서버 대기중입니다.');
});