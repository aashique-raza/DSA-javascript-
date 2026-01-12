// ! minimum cost climbing stairs


function minCostClimbingStairs(cost) {
    const n = cost.length;
    const dp = new Array(n + 1).fill(0);
    dp[0] = 0;
    dp[1] = 0;
    for (let i = 2; i <= n; i++) {
        dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
    }
    return dp[n];

}


//  approach 2 using recursion and memoization
function minCostClimbingStairs(cost) {
    const n = cost.length;
    const dp = new Array(n + 1).fill(-1);
    function helper(i) {
        if (i <= 1) return 0;
        if (dp[i] !== -1) return dp[i];
        const takeOneStep = helper(i - 1) + cost[i - 1];
        const takeTwoSteps = helper(i - 2) + cost[i - 2];
        dp[i] = Math.min(takeOneStep, takeTwoSteps);
        return dp[i];
    }
    return helper(n);
}
