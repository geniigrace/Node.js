//대용량 파일 만들었을시 1gb 짜리가 생성되는 것을 보여줌


const fs = require('fs');

console.log('before : ', process.memoryUsage().rss);

const data1 = fs.readFileSync('./Day04_Day47/60_big.txt');
fs.writeFileSync('./Day04_Day47/60_big1.txt', data1);
console.log('buffer : ', process.memoryUsage().rss);