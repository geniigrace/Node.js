//폴더,파이 생성 및 이름바꾸기 등 파일 시스템 

const fs = require('fs');

//access : 폴더나 파일에 접근
//F_OK : 파일 존재여부, R_OK : 읽기 권한여부, W_OK : 쓰기 권한여부
fs.access('./Day04_Day47/62_folder', fs.constants.F_OK | fs.constants.R_OK| fs.constants.W_OK, (err)=>{
    if(err){
        if(err.code == 'ENOENT'){
            console.log('폴더 없음');
            fs.mkdir('./Day04_Day47/62_folder', (err)=>{
                if(err){
                    throw err;
                }
                console.log('폴더만들기 성공');
                fs.open('./Day04_Day47/62_folder/file.js', 'w', (err, fd)=>{
                    if(err){
                        throw err;
                    }
                    console.log('빈 파일 만들기 성공', fd); //fd : 파일 아이디 변수 
                    fs.rename('./Day04_Day47/62_folder/file.js', './Day04_Day47/62_folder/newfile.js',(err)=>{
                        if(err){
                            throw err;
                        }
                        console.log('이름 바꾸기 성공');
                    });

                });
            });
        }
        else{
            throw err;
        }
    }
    else{
        console.log('이미 폴더 있음');
    }
});