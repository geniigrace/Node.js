//Thread : MainThread <-> WorkerThreads

const {
    Worker, isMainThread, parentPort,
} = require('worker_threads');

if (isMainThread){ //부모(mainThread)일때

    const worker = new Worker(__filename); //워커객체 생성 
    worker.on('message', message => console.log('from worker', message)); // 받은 메세지불러서 출력
    worker.on('exit',() => console.log('worker exit'));//워커 나간다고 하면 출력 
    worker.postMessage('ping ping!'); //메인이 워커한테 보내는 메세지 
}

else{ //워커(workerThreads)일때

    parentPort.on('message', (value)=>{ // 벨류에 받은 메세지 담기 
        console.log('from parent', value); //받은 메세지
        parentPort.postMessage('pong');
        parentPort.close(); //워커가 메인한테 보낸 메세지 
    });
}