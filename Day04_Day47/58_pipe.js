//파일 읽기와 파일 쓰기 동시에 진행

const fs = require('fs');

const readStream = fs.createReadStream('./Day04_Day47/readme2.txt');
const writeStream = fs.createWriteStream('./Day04_Day47/writeme3.txt');
readStream.pipe(writeStream);