//promise
//무한루프에 빠지게 되면 예외처리 하듯 처리해줌 

const condition = true; //true 라면 resolve, false라면 reject
const promise = new Promise((resolve, reject)=>{
    if(condition){
        resolve('성공');
    }
    else{
        reject('실패');
    }
});

promise //try~catch~finally 와 유사함 
.then((message)=>{
    console.log(message);
})
.catch((error)=>{
    console.log(error);
})
.finally(()=>{
    console.log('무조건');
});

