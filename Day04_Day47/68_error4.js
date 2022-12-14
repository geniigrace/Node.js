//에러발생 및 처리

process.on('uncaughtException', (err)=>{
    console.error('예기치못한 에러 ',err);
});

setInterval(()=>{
    throw new Error('서버를 고장~!');
},1000);

setTimeout(()=>{
    console.log('실행');
},2000);

