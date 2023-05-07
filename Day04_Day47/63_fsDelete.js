//파일 삭제

const fs = require('fs').promises;

fs.readdir('./Day04_Day47/62_folder')
.then((dir)=>{
    console.log('폴더 내용 확인', dir);
    return fs.unlink('./Day04_Day47/62_folder/newFile.js'); //unlink : 파일 삭제 
})

.then(()=>{
    console.log('파일 삭제 성공');
    return fs.rmdir('./Day04_Day47/62_folder'); //rmdir : 폴더 삭제
})

.then(()=>{
    console.log('폴더 삭제 성공');
})

.catch((err)=>{
    console.err(err);
});