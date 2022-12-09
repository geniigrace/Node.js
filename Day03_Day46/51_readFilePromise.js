// 파일 읽어오기 중 예외발생


const fs = require('fs').promises;

fs.readFile('./50_readme.txt')
.then((data) =>{

    console.log(data);
    console.log(data.toString());

})
 .catch((err)=>{
    console.error(err);
 })