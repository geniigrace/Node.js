const zlib = require('zlib');
const fs = require('fs');

const readStream = fs.createReadStream('./Day04_Day47/readme2.txt');
const zlibStream = zlib.createGzip();
const writeStream = fs.createWriteStream('./readme3.txt.gz');
readStream.pipe(zlibStream).pipe(writeStream); //.pipe 파이프라인 늘리는 것 