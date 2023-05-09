//폴더나 파일의 변경사항을 확인함

const fs = require('fs');

fs.watch('./Day04_Day47/readme2.txt', (eventType, filename)=>{
    console.log(eventType, filename);
});