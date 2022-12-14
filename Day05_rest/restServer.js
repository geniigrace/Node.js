
const http = require('http');
const fs = require('fs').promises;

const users = {}; //key와 value로 데이터 저장됨

http.createServer(async (req, res)=>{
    try{
        if(req.method==='GET'){
            if(req.url==='/'){
                const data = await fs.readFile('./Day05_rest/restFront.html');
                res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
                return res.end(data);
            }else if(req.url==='/about'){
                const data= await fs.readFile('./Day05_rest/about.html');
                resizeTo.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
                return res.end(data);
            }else if (req.url==='/users'){
                res.writeHead(201, {'Content-Type':'application/json; charset=utf-8'});
                return res.end(JSON.stringify(users));
            }

            try{ // /, about, users도 아닌 경우 
                const data = await fs.readFile(`.${req.url}`); //입력한 url 을 보여줌 
                return res.end(data);
            }catch(err){}
        }else if(req.method==='POST'){
            if(req.url==='/user'){
                let body='';
                req.on('data', (data)=>{
                    body += data;
                });
                return req.on('end',()=>{
                    console.log('POST본문(Body): ',body);
                    const {name} = JSON.parse(body); //body의 내용에 대해 name이 변수명 됨
                    const id = Date.now(); //key 세팅 
                    users[id]=name; // 값은 name = boyd의 내용
                    res.writeHead(201, {'Content-Type':'text.plain;charset=utf-8'});
                    res.end('ok');
                });
            }
        }else if(req.method==='PUT'){
            if(req.url.startsWith('/user/')){
                const key = req.url.split('/')[2]; // /user/key/name 이니까 key는 /기준으로 두번 스플릿한 내용을 key로 담기 
                let body='';
                req.on('data', (data)=>{
                    body += data; //50
                });
                return req.on('end',()=>{
                    console.log('PUT 본문(body) : ',body);
                    users[key]=JSON.parse(body).name;
                    res.writeHead(200, {'Content-Type': 'text/plain; charset=utf-8'});
                    return res.end('ok');
                });
            }
        }else if (req.method==='DELETE'){
            if(req.url.startsWith('/user/')){
                const key=req.url.split('/')[2];
                delete users[key];
                res.writeHead(200, {'Content-Type':'text/plain; charset=utf-8'});
                return res.end('ok');
            }
        }
        res.writeHead(404);
        return res.end('NOT FOUND');
    }catch(err){
        console.error(err); //70
        res.writeHead(500,{'Content-Type':'text/plain; charset=utf-8'});
        res.end(err.message);
    }
})
.listen(8082, ()=>{
    console.log('8082번 포트에서 서버 대기중입니다.');
});