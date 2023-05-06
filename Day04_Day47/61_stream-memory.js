//대용량 파일 만들었을시 1gb 짜리가 생성되는 것을 보여줌


const fs = require('fs');

console.log('before : ', process.memoryUsage().rss);

const readStream = fs.createReadStream('./Day04_Day47/60_big.txt');
const writeStream = fs.createWriteStream('./Day04_Day47/60_big2.txt');
readStream.pipe(writeStream);
readStream.on('end', ()=>{
    console.log('stream : ', process.memoryUsage().rss);
});