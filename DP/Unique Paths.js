// ! Unique Paths

//  simple recursion--
// var uniquePaths = function(m, n,mIdx=0,nIdx=0) {
    
//    if(m==1 && n==1) return 1
//    if(m==0 || n==0) return 0

//    let right=uniquePaths(m,n-1)
//    let down=uniquePaths(m-1,n)

//    return right+down
// };

//  recursion with memoization--
function createGrid(m, n) {
    const grid = new Array(m);

    for (let i = 0; i < m; i++) {
        grid[i] = new Array(n).fill(-1);
    }

    return grid;
}

function solve(m,n){
    if(m==1 && n==1) return 1
    if(m==0 || n==0) return 0
    if(dp[m-1][n-1] != -1) return dp[m-1][n-1]
    dp[m-1][n-1] = solve(m-1,n,dp)+solve(m,n-1,dp)
    return dp[m-1][n-1]

}

var uniquePaths = function(m, n,mIdx=0,nIdx=0) {
    let dp = createGrid(m,n);
    return solve(m,n,dp);
};


//  tabulation--
 function createGrid(m, n) {
    const grid = new Array(m);
    for (let i = 0; i < m; i++) {
        grid[i] = new Array(n).fill(0);
    }
    return grid;
}

var uniquePaths = function(m, n) {
    let dp = createGrid(m,n);
    
    //  fill 1 in first row and first column
    for(let i=0;i<m;i++){
        dp[i][0]=1
    }
    for(let j=0;j<n;j++){
        dp[0][j]=1
    }

    //  start filling the dp table from (1,1)
    for(let i=1;i<m;i++){
        for(let j=1;j<n;j++){
            dp[i][j]=dp[i-1][j]+dp[i][j-1]
        }
    }

    return dp[m-1][n-1];
}
