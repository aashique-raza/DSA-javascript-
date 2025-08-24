
console.log("Subarray Sums Divisible by K")

// ! Subarray Sums Divisible by K


// ! brute force ---

function maxSubarray(nums,k){

    let result=0;

    for(let i=0; i<nums.length; i++){

        let sum=0;
        for(let j=i; j<nums.length; j++){

            sum+=nums[j]

            console.log('sum',sum)
           
            if(sum%k==0){
                result++
            }
        }
    }

   return result
}

console.log(maxSubarray([4,5,0,-2,-3,1],5))