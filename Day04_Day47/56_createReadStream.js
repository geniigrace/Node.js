//버퍼와 스트림
//스트림

const fs = require('fs');

const readStream = fs.createReadStream('./Day04_Day47/readme2.txt',{highWaterMark : 16});
//highWaterMark 기본 64kb -> 16b로 변환

const data = [];

readStream.on('data',(chunk)=>{ // chunk : 넘어오는 것 
    data.push(chunk);
    console.log('data: ', chunk, chunk.length);
});

readStream.on('end', ()=>{
    console.log('end : ', Buffer.concat(data).toString());
});

readStream.on('error', (err)=>{
    console.log('error : ', err);
});