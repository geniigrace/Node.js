function run(){
    console.log('3초후 실행 됨')
}

console.log('시작');
setTimeout(run, 3000); //백그라운드에서 3초후 태스크큐에서 실행 
console.log('끝');