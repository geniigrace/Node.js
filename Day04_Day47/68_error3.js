//에러발생
//promises로 나오기

const fs = require('fs').promises;

setInterval(()=>{
    fs.unlink('./asdfj.js')
}, 1000);