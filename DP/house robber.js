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



//  approach 2-- tabulation--
function maxTillIndexSafe(arr, idx) {
  if (arr.length === 0) return null;
  if (idx < 0) return null;

  idx = Math.min(idx, arr.length - 1);

  let maxVal = arr[0];
  for (let i = 0; i <= idx; i++) {
    if (arr[i] > maxVal) maxVal = arr[i];
  }
  return maxVal;
}

function houseRobber(nums) {
   if (nums.length === 0) return 0;
    if (nums.length === 1) return nums[0]; // ✅ FIX

    let dp = new Array(nums.length).fill(0);
    dp[0] = nums[0];
    dp[1] = Math.max(nums[0], nums[1]);

    for (let i = 2; i < nums.length; i++) {
        let include = nums[i] + maxTillIndexSafe(dp, i - 2);
        let exclude = maxTillIndexSafe(dp, i - 1);
        dp[i] = Math.max(include, exclude);
    }

    return Math.max(...dp);
}