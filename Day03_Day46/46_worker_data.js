//Thread : 2 Worker Threads

const {
    Worker, isMainThread, parentPort, workerData,
} = require('worker_threads');

if(isMainThread){//부모일때
    const threads = new Set(); 
    threads.add(new Worker(__filename,{
        workerData: {start: 1},
    }));//데이터 start :1 인 워커 생성

    threads.add(new Worker(__filename,{
        workerData: {start: 2}
    })); //데이터 start :2 인 워커 생성

    for(let worker of threads){ //워커 두개이니까 for문으로 돌림
        worker.on('message', message => console.log('from worker', message));
        worker.on('exit', ()=>{
            threads.delete(worker);
            if(threads.size===0){//thread를 삭제했으므로 size 0되면 끝
                console.log('job done');
            }
        });
    }
}

else{ //워커일때
    const data = workerData;
    parentPort.postMessage(data.start+100);
}