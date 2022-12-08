const dep1 = requrie('./34_dep1');

console.log('require dep1', dep1);
module.exports=() =>{
    console.log('dep1', dep1);
};