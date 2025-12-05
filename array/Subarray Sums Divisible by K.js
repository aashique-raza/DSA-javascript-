
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

// console.log(maxSubarray([4,5,0,-2,-3,1],5))


//  optimized approach----

function maxSubarray2(nums,k){

    let reminderMap={}

    let sum=0;
    let result=0;
    reminderMap[sum]=1

    for(let i=0; i<nums.length; i++){

        sum=sum+nums[i]
      

        let r=sum%k

       
        if(r<0){
            r=r+k
        }
 
        if(reminderMap[r]){
            result=result+reminderMap[r]
            reminderMap[r]++
        }else{
            reminderMap[r]=1
        }
    }

    return result
}

console.log(maxSubarray2([2,-6,3,1,2,8,2,1],7))