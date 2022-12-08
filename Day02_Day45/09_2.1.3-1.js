//객체 리터럴
//var : 함수도 받을 수 있다 = 함수를 변수에 받을 수 있다

var sayNode=function() { 
    console.log('Node');
};

var es = 'ES';

var oldObject = {

    sayJS : function(){ 
        console.log('JS');
    },  // 키 : 값 = sayJS를 부르면 해당 function이 호출 됨

    sayNode : sayNode, // 키 : 값 = 값을 부르는 키 

    [es+6] : 'Fantastic',

};

//oldObject[es+6]='Fantastic'; //함수명[ 추가할 내용 ] = 값 // es+6=ES6 : es는 ES로 대체 죔 

oldObject.sayNode();
oldObject.sayJS();
console.log(oldObject.ES6);

