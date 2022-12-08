const timeout=setTimeout(() => {
    console.log('1.5초 후 실행');
}, 1500);


const interval=setTimeout(() => {
    console.log('1초 마다 실행');
}, 1000);

const timeout2 = setTimeout(() =>{
    console.log('실행되지 않습니다.');
}, 3000);

setTimeout(()=> {
    clearTimeout(timeout2); // 중간에 클리어되므로 '실행되지 않습니다'는 출력되지 않음 
    clearInterval(interval);
}, 2500);

const immediate = setImmediate(()=> {
    console.log('즉시실행');
});

const immediate2 = setImmediate(()=> {
    console.log('실행되지 않습니다.');
});

clearImmediate(immediate2);