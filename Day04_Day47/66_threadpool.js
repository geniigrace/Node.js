//쓰레드풀을 이용한 암호화

const crypto = require('crypto');

const pass = 'pass';
const salt = 'salt';
const start = Date.now();

//crpyto.pbkdf2 : 스레드풀을 구성하는 구성원
// pbkdf2 가 스레드풀 4개를 가지고 운영하기 때문에 1~8번중 1~4번 먼저 실행, 추후 5~8번 후실행

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () =>{
    console.log('1 : ', Date.now()-start);
})

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () =>{
    console.log('2 : ', Date.now()-start);
})

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () =>{
    console.log('3 : ', Date.now()-start);
})

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () =>{
    console.log('4 : ', Date.now()-start);
})

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () =>{
    console.log('5 : ', Date.now()-start);
})

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () =>{
    console.log('6 : ', Date.now()-start);
})

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () =>{
    console.log('7 : ', Date.now()-start);
})

crypto.pbkdf2(pass, salt, 1000000, 128, 'sha512', () =>{
    console.log('8 : ', Date.now()-start);
})

