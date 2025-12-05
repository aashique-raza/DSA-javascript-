

// ! subsets II 

var subsetsWithDup = function(nums) {
    let result=[]
    let temp=[]

    nums.sort((a,b)=>a-b)

    solve(nums,0,temp,result)
    return result
};

function solve(nums,i,temp,result){
    if(i>=nums.length){
        result.push([...temp])
        return
    }

    temp.push(nums[i])

    solve(nums,i+1,temp,result)

    temp.pop()

    let idx=i+1

    while(idx<nums.length && nums[idx]==nums[idx-1]){
        idx++
    }

    solve (nums,idx,temp,result)
}

console.log(subsetsWithDup([1,2,2]))