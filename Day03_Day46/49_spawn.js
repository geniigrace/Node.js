//파이썬 파일 실행해보기 
//파이썬이 설치되어 있어야 함

const spawn = require('child_process').spawn;

var process = spawn('python', ['test.py']);

process.stdout.on('data', function(data) {
  console.log(data.toString());
}); // 실행 결과

process.stderr.on('data', function(data) {
  console.error(data.toString());
}); // 실행 에러
