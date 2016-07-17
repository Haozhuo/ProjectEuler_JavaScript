function isPrime(number){
    var upper = Math.floor(Math.sqrt(number));
    for(var i = 3; i <= upper; i += 2){
        if(number % i === 0)
            return false;
    }

    return true;
}

function nthPrime(n){
    if(n === 1)
        return 2;

    var nth = 1;
    var i = 3;

    while(nth != n){
        if(isPrime(i))
            nth++;
        i += 2;
    }

    return (i - 2);
}

console.log(nthPrime(10001));
