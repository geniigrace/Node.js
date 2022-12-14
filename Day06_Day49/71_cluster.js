//cluster

const cluster = require('cluster');
const http = require('http');
//클러스터에서 뽑기 위해 cpu의 개수를 확인ㄴ
const numCPUs = require('os').cpus().length; 


//마스터 클러스터는 처음부터 존재함
if(cluster.isMaster){
    console.log(`마스터 프로세스 아이디 : ${process.pid}`);
//CPU개수만큼 워커 생산 
    for(let i=0; i<numCPUs; i+=1){
        //클러스터 만듦
        cluster.fork();
    }
//워커 종료되었을때
    cluster.on('exit',(worker, code, signal)=>{
        console.log(`${worker.process.pid}번 워커가 종료되었습니다.`);
        console.log('code', code, 'signal' ,signal);
        cluster.fork();
    });
}
else{
//워커들 포트에서 대기
    http.createServer((req, res)=>{
        res.writeHead(200, {'Content-Type':'text/html; charset=utf-8'});
        res.write('<h1>HELLO NODE</h1>');
        res.end('<p>HELLO CLUSTER</p>');
//워커의 존재를 확인하기 위해 1초마다 강제종료       
        setTimeout(()=>{ 
            process.exit(1);
        }, 1000);
    }).listen(8086);
    
    console.log(`${process.pid}번 워커 실행`);
}