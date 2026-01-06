

// ! Guess Number Higher or Lower
var guessNumber = function(n) {
   let l=1;
   let r=n
   while(l<r){
    let mid=Math.floor((l+r)/2)
    let result=guess(mid)
    if(result==0) return mid
    else if(result==1){
        l=mid+1
    }else{
        r=mid-1
    }
   }
   return l
};