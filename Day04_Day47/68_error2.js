//에러발생
//if(err)

//파일 삭제해야하는데 파일이 없을때 에러를 발생시키는 상황 
const fs = require('fs');

setInterval(()=>{
    fs.unlink('./aasdf.js', (err)=>{
        if(err){
            console.error(err);
        }
    });
}, 1000)