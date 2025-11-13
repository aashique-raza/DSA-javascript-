

// ! permutation in array---

function permute(nums,temp=[],result=[],visit=new Array(nums.length).fill(0)){

    if(visit.length==temp.length){
        result.push([...temp])
        return
    }

    for(let i=0; i<visit.length; i++){

        if(visit[i]==0){
            visit[i]=1
            temp.push(nums[i])
            permute(nums,temp,result,visit)
            visit[i]=0
            temp.pop()
        }
    }
    return result
}

console.log(permute([1]))
console.log(permute([1,2]))