//txt 파일 읽어오기

const fs = require('fs');

fs.readFile('./50_readme.txt', (err, data)=>{
    if(err){
        throw err;
    }

    console.log(data);
    console.log(data.toString());
})