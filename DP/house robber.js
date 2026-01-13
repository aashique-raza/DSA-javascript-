// ! house robber--


// simple recursion--

function houseRobber(nums){
    let max=0;
    let sum=0;

    function helper(i,sum){
        if(i>=nums.length){
            max=Math.max(max,sum);
            return;
        }
        // include
        helper(i+2,sum+nums[i]);

        // exclude
        helper(i+1,sum);
    }
    helper(0,0);
    return max;
} 

//  using dp with recursion--
function houseRobber(nums){
   
    let dp=new Array(nums.length).fill(-1);

    function helper(i){
        if(i>=nums.length){
            return 0;
        }
        if(dp[i]!==-1){
            return dp[i];
        }
        // include
        let include=nums[i]+helper(i+2);
        // exclude
        let exclude=helper(i+1);
        dp[i]=Math.max(include,exclude);
        return dp[i];
    }
    return helper(0);
}