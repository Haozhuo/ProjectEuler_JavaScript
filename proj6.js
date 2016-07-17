function difference(limit){
    function sum_of_square(limit){
        return ((limit)*(limit+1)*(2*limit+1) / 6);
    }

    function square_of_sum(limit){
        var base = ((1+limit)*limit)/2;
        return base*base;
    }

    return (square_of_sum(limit) - sum_of_square(limit));
}

console.log(difference(100));
