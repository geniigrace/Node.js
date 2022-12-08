
var candyMachine={
//여기서부터 
    status:{
        name:'node',
        count: 5,
    },

    getCandy:function(){
        this.status.count--;
        return this.status.count;
    },
//여기까지 객체라고 볼수 있음 
};

var getCandy=candyMachine.getCandy();
var count = candyMachine.status.count;

console.log(getCandy);
console.log(count);