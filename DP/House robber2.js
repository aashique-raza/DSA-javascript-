

//  !-- house robber 2 --with recursion--

function houseRobber(nums){
    let n=nums.length;


    function solve(i,n){
        if(i>n){
            return 0;
        }
        // include
        let include=nums[i]+solve(i+2,n);
        // exclude
        let exclude=solve(i+1,n);
        return Math.max(include,exclude);
    }   

    let takeFirst=solve(0,n-2); // excluding last element
    let skipFirst=solve(1,n-1); // excluding first element

    return Math.max(takeFirst,skipFirst);
}

//  recursion with dp-- memoization--
function houseRobber(nums){
    let n=nums.length;
    let dp=new Array(n).fill(-1);
    function solve(i,n){
        if(i>n){
            return 0;
        }
        if(dp[i]!==-1){
            return dp[i];
        }
        // include
        let include=nums[i]+solve(i+2,n);   
        // exclude
        let exclude=solve(i+1,n);
        dp[i]=Math.max(include,exclude);
        return dp[i];
    }
    let takeFirst=solve(0,n-2); // excluding last element
    dp.fill(-1);
    let skipFirst=solve(1,n-1); // excluding first element
    return Math.max(takeFirst,skipFirst);
}
