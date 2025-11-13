

// ! subsets way 1

function subsets(nums){

    let result=[]
    let temp=[]

    function solve(nums,i,temp,result){
        if(i>=nums.length){
            result.push([...temp])
            return
        }

        temp.push(nums[i])
        solve(nums,i+1,temp,result)
        temp.pop()
        solve(nums,i+1,temp,result)
        return result
    }

    return solve(nums,0,temp,result)
}

console.log(subsets([1,2,3]))