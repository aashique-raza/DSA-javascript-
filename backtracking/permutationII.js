

// ! approach 1

var permuteUnique = function(nums,temp=[],result=[],visit=new Array(nums.length).fill(0),map=new Map()) {
    

    if(visit.length==temp.length){
       const key = temp.join(","); // unique string key

    if (!map.has(key)) {
        map.set(key, true);
        result.push([...temp]);
    }
    return;
    }

    for(let i=0; i<visit.length; i++){

        if(visit[i]==0){
            visit[i]=1
            temp.push(nums[i])
            permuteUnique(nums,temp,result,visit,map)
            visit[i]=0
            temp.pop()
        }
    }
    return result
};