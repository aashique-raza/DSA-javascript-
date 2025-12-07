

// ! Count Elements With at Least K Greater Values

//  aproach 1 : brute force--

function countElements(nums,k){
    if(nums.length==0)return 0
    let map={}

    for(let i=0; i<nums.length; i++){

        for(let j=0; j<nums.length; j++){
            if(nums[i]<nums[j]){
                if(map.hasOwnProperty(i)){
                    map[i]++
                }else{
                    map[i]=1
                }
            }
        }
        if(!map.hasOwnProperty(i)){
            map[i]=0
        }
    }

    let count=0;
    for(let key in map){
        if(map[key]>=k){
            count++
        }
    }
    return count
}

console.log("result",countElements([4, 2, 2, 2],1))