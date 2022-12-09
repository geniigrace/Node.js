//비동기 : 우선순위나 순서상관 없음 

const fs = require('fs');

console.log('시작');

fs.readFile('./Day03_Day46/53_readme2.txt',(err, data)=>{
    if(err){
        throw err;
    }

    console.log('1번', data.toString());
});

fs.readFile('./Day03_Day46/53_readme2.txt', (err, data)=>{
    if(err){
        throw err;
    }

    console.log('2번',data.toString() );
});

fs.readFile('./Day03_Day46/53_readme2.txt', (err, data)=>{
    if(err){
        throw err;
    }

    console.log('3번', data.toString());
});

console.log('끝');