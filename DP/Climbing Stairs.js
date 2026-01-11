



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

//  using array in dp
var climbStairs = function(n) {
    
    let dp=new Array(n+1).fill(0)

    dp[0]=0
    dp[1]=1
    dp[2]=2

    for(let i=3;i<=n;i++){
        dp[i]=dp[i-1]+dp[i-2]
    }

    return dp[n]
};


