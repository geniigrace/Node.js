//Thread를 쓰지 않는 경우

const min = 2;
const max = 10000000;
const primes= [];

function findPrimes(start, range){
    let isPrime = true;
    const end = start + range;
    for(let i = start; i< end ; i++){
        for(let j=min; j<Math.sqrt(end); j++){//sqrt(n) : n만큼 제곱 
            if(i!== j && i %j ===0){
                isPrime = false;
                break;
            }
        }

        if(isPrime){
            primes.push(i);
        }
        isPrime = true;
    }
}

console.time('prime');
findPrimes(min, max);
console.timeEnd('prime');
console.log(primes.length);