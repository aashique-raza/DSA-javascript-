// ! Unique Paths

//  simple recursion--


var uniquePaths = function(m, n,mIdx=0,nIdx=0) {
    
   if(m==1 && n==1) return 1
   if(m==0 || n==0) return 0

   let right=uniquePaths(m,n-1)
   let down=uniquePaths(m-1,n)

   return right+down
};
