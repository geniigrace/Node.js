
const fs = require('fs');
const file = fs.createWriteStream('./Day04_Day47/60_big.txt');

for(let i = 0; i<= 100; i++){
    file.write('1');
}

file.end();