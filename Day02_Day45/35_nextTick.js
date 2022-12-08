setImmediate(() => { //즉시실행 
    console.log('immediate');

});

process.nextTick(()=> { //콜백에서 우선처리 
    console.log('nextTick');
});

setTimeout(()=>{ //0초에 실행 
    console.log('timeout');
}, 0);

Promise.resolve().then(()=> console.log('promise'));