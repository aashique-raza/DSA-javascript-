console.log('recursion.first.js');

function printN(n){
    if(n==0){
        return 0
    }
    console.log('n',n);
    return sum(n-1)
}

printN(5)



//  ! sum of n natural numbers


function sum(n){

    if(n==0) return 0
    return n + sum(n-1)
}

console.log('sum',sum(5));



//  ! print 1 to n

function print1toN(n){

    if(n==10) return
    console.log(n);
    print1toN(n+1)
}
print1toN(1)