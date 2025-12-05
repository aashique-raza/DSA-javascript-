
// ! next greater element II

var nextGreaterElements = function(nums) {
    
    let stack=[]
    let result=new Array(nums.length).fill(-1)

    for(let i=0; i<2*nums.length; i++){
        let idx=i%nums.length

        while(stack.length!==0 && nums[idx]>nums[stack[stack.length-1]]){

            result[stack.pop()]=nums[idx]
        }

        stack.push(idx)
    }

    return result
};