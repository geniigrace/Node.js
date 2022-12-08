//1 -> 4 함수식의 간소화 순서
function add1(x,y){
    return x+y;
}

const add2 = (x,y) => {
    return x+y;
};

const add3 = (x,y) => x+y;

const add4 = (x,y) => (x+y); //add4 변수에 x,y 두값 받아서 x+y 리턴 함
// 변수명 = (매개변수) => (리턴값)


//1 -> 2 함수식의 간소화 순서
function not1(x){
    return !x;
}

const not2 = x=>!x;