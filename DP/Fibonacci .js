// ! Fibonacci 
function fibonacci(n, memo = {}) {
    // Check if the value is already computed
    if (n in memo) return memo[n];
    // Base cases
    if (n <= 0) return 0;
    if (n === 1) return 1;
    // Recursive computation with memoization

    memo[n] = fibonacci(n - 1, memo) + fibonacci(n - 2, memo);
    return memo[n];
}



function fib(n, dp = []) {

  if (n <= 1) return n;

  if (dp[n] !== undefined) return dp[n];

  dp[n] = fib(n - 1, dp) + fib(n - 2, dp);

  return dp[n];
}
