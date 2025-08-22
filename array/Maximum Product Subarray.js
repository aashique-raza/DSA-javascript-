var maxProduct = function(nums) {

  let maxP=nums[0]  
  let resultP=nums[0]  
  let minP=nums[0]  

  for(let i=1; i<nums.length; i++){

    let current=nums[i]

    if(current<0){
        [maxP,minP]=[minP,maxP]
    }

    maxP=Math.max(current,current*maxP)
    minP=Math.min(current,minP*current)

    resultP=Math.max(resultP,maxP)


  }

  return resultP
};