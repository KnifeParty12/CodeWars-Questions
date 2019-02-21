function x( begin, end, step) {

    var sum =0;
    for(var i = begin; i<= end; i += step){
    sum +=i;
     console.log(sum);
    }
    return sum;
}


console.log(x(1,5,1));
