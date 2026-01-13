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