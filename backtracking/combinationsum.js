


var combinationSum = function(nums, target) {

  let result=[]
  let temp=[]
  solve(nums,0,temp,result,target)
  return result  
};
function solve(nums,i,temp,result,target){

        if(i>=nums.length || target<0){
            return
        }
        if(target==0){
            result.push([...temp])
            return
        }

    temp.push(nums[i])
    // solve(nums,i+1,temp,result,target-nums[i])
    solve(nums,i,temp,result,target-nums[i])

    temp.pop()
    solve(nums,i+1, temp,result,target)
}