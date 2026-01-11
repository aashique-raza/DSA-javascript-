



// ! climbing stairs

//  using map in dp
var climbStairs = function(n) {
    
    let dp={}

    function solve(p){
        if(p==0) return 0
        if(p==1) return 1
        if(p==2) return 2

        if(p in dp) return dp[p]

        return dp[p]=solve(p-1)+solve(p-2)
    }
   return solve(n)

};


