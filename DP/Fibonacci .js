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


// using tabulation
function fibTab(n) {
  const dp = new Array(n + 1).fill(0);
  dp[1] = 1;
  for (let i = 2; i <= n; i++) {
    dp[i] = dp[i - 1] + dp[i - 2];
  }
  return dp[n];
}
console.log(fib(6)); // Output: 8
