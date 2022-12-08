const {odd, even} = require('./28_var');
const checkNumber = require('./28_func');

function checkStringOddOrEven(str){
    if(str.length%2){
        return odd;
    }
    return even;
}

console.log(checkNumber(10));
console.log(checkStringOddOrEven('hello'));