//파일 쓰기


const fs = require('fs');

fs.writeFile('./Day03_Day46/52_writeme.txt','글이 입력됩니다.',(err)=>{
    if(err){
        throw err;
    }

    fs.readFile('./Day03_Day46/52_writeme.txt', (err, data)=>{
        if(err){
            throw err;
        }

        console.log(data.toString());
    });
});