const {URL} = require('url');

const myurl=new URL('http://www.gilbut.co.kr/?page=3&limit=10&category=nodejs&category=javascript');
console.log('searchParams: ', myurl.searchParams);
console.log('searchParams.getAll(): ', myurl.searchParams.getAll('category'));
console.log('searchParams.get(): ', myurl.searchParams.get('limit'));
console.log('searchparams.has(): ', myurl.searchParams.has('page'));

console.log('searchParams.key(): ', myurl.searchParams.keys());
console.log('searchParams.value(): ', myurl.searchParams.values());

myurl.searchParams.append('filter','es3');
myurl.searchParams.append('filter','es5');
myurl.searchParams.set('filter','es6');
console.log(myurl.searchParams.getAll('filter'));

myurl.searchParams.delete('filter');
console.log(myurl.searchParams.getAll('filter'));

console.log('searchParams.toString(): ', myurl.searchParams.toString());
myurl.search=myurl.searchParams.toString();