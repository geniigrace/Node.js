function longRunningTask(){
    console.log('작업끝');
}

console.log('시작');
setTimeout(longRunningTask, 0);
console.log('다음 작업');