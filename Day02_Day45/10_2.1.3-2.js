//객체 리터럴


var sayNode=function() { 
    console.log('Node');
};

var es = 'ES';

const newObject={

    sayJS(){
        console.log('JS');
    },

    sayNode,

    [es+6] : 'Fantastic',
};

newObject.sayNode();

newObject.sayJS();

console.log(newObject.ES6);


//JSON 형식
//{name : name, age : age} : ES5 버전
//{name, age} : ES2015 버전, 키와 값이 동일하게 선언됐을 때 줄임
//{name, age : age1} : name은 키와 값이 동일, age는 키 -> age1은 값
