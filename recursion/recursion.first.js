console.log('recursion.first.js');

function sum(n){
    if(n==0){
        return 0
    }
    console.log('n',n);
    return sum(n-1)
}

console.log('sum',sum(5));