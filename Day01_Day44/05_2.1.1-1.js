//ES2015+ 버전

if(true){
    var x=3; //var는 갇혀있어도 외부에서 참조할 수 있다
}

console.log(x);

if(true){
    //const y=3; //상수는 해당 구문에 갇힘 외부에서 읽어오기 불가
    var y=3;
}

console.log(y);