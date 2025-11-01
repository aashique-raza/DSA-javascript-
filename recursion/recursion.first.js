
// ! recursion.first.js

//   start with basic  to understand recursion--

// function birth3(day){
//     console.log(`${day} days left for birthday`);
// }
// function birth2(day){
//     console.log(`${day} days left for birthday`);
// }
// function birth1(day){
//     console.log(`${day} days left for birthday`);
// }

// function birth(day){
//     console.log("happy birthday to you");
// }

// birth3(3)
// birth2(2)
// birth1(1)
// birth(0)

//  more optimized ---

// function birth3(day){
//     console.log(`${day} days left for birthday`);
//     birth2(day-1)
// }
// function birth2(day){
//     console.log(`${day} days left for birthday`);
//     birth1(day-1)
// }
// function birth1(day){
//     console.log(`${day} days left for birthday`);
//     birth(day-1)
// }

// function birth(day){
//     console.log("happy birthday to you");
// }

// birth3(3)

// more optimized using recursion ---

// function birth(day){
// console.log(`${day} days left for birthday`);
//     birth(day-1)
// }
// birth(3)

// ! now this is complete recursion--

function birth(day){
    if(day==0){
        console.log("happy birthday to you");
        return
    }
    console.log(`${day} days left for birthda`);
    birth(day-1)
}
birth(3)








// console.log('recursion.first.js');

function printN(n){
    if(n==0){
        return 0
    }
    console.log('n',n);
    return sum(n-1)
}

// printN(5)



//  ! sum of n natural numbers


function sum(n){

    if(n==0) return 0
    return n + sum(n-1)
}

// console.log('sum',sum(5));



//  ! print 1 to n

function print1toN(n){

    if(n==10) return
    console.log(n);
    print1toN(n+1)
}
// print1toN(1)


// ! reverse astring---

function reverseString(s,l,r){

    if(l>=r){
        return s
    }

    let temp=s[l]
    s[l]=s[r]
    s[r]=temp

   return reverseString(s,l+1,r-1)
}

let s=['h','e','l','l','o']
let l=0
let r=s.length-1

// console.log('reverseString',reverseString(s,l,r));


// !  Fibonacci Number  

// * iterative approach

var fib = function(n) {
    

    if(n==0) return 0
    let prev1=0
    let prev2=1

    let next=prev1+prev2

    for(let i=1; i<n; i++){

         next=prev1+prev2

        prev1=prev2
        prev2=next
    }

    return next
};

// console.log(" Fibonacci Number",fib(5));

// * recursive approach
var fib = function(n) {
   if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }

return fib(n - 1) + fib(n - 2);
};
// console.log(" Fibonacci Number",fib(5));