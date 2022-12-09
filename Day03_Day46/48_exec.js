//자식쓰레드

const exec=require('child_process').exec; // exec : cmd창에 명령내리는거 실행하는 역할

var process = exec('ls'); //윈도우는 dir, 맥/리눅스는 ls

process.stdout.on('data', function(data){

    console.log(data.toString());

});

process.stderr.on('data', function(data){
    console.error(data.toString());
});