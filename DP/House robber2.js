

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


//  house robber 2 with tabulation--

function houseRobber(nums){

    if(nums.length===1){
        return nums[0];
    }
    if(nums.length===0){
        return 0;
    }
    if(nums.length===2){
        return Math.max(nums[0],nums[1]);
    }
    let n=nums.length;
    let dp1=new Array(n-1).fill(0); // for excluding last element

    let max=0;
    //  first pick index 0 to n-2

    for(let i=0;i<n-1;i++){
        // handle index out bound with 0
        let pick=nums[i]+(i-2>=0 ? dp1[i-2]:0);
        let notPick= (i-1>=0 ? dp1[i-1]:0);
        dp1[i]=Math.max(pick,notPick);
    }
    max= Math.max(...dp1);;
    dp1.fill(0);

    //  now pick index 1 to n-1
    for(let i=1;i<n;i++){
        // handle index out bound with 0
        let pick=nums[i]+(i-2>=1 ? dp1[i-2]:0);
        let notPick= (i-1>=1 ? dp1[i-1]:0);
        dp1[i]=Math.max(pick,notPick);
    }
    max= Math.max(max, ...dp1);
    return max;

}

