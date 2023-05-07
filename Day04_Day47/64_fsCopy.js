
const fs = require('fs').promises;

fs.copyFile('./Day04_Day47/readme2.txt', './Day04_Day47/writeme4.txt')

.then(()=>{
    console.log('복사 완료');
})

.catch((error)=>{
    console.error(error);
});