const A = require('./29_globalA'); //globalA에서 함수를 가져와 A 에 넣음 

global.message = '안녕하세요'; //global 메세지에 안녕하세요 대입 

console.log(A()); //함수 받은 A를 출력 