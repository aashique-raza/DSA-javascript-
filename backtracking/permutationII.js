

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


// ! more optimized
var permuteUnique = function(nums) {
   let result=[]
   let temp=[]
   let map={}
   for(let i=0; i<nums.length;i++){
    if(map.hasOwnProperty(nums[i])){
        map[nums[i]]++
    }else{
        map[nums[i]]=1
    }
   }
   solve(nums,temp,result,map)
    return result
};

function solve(nums,temp,result,map){

    if(nums.length==temp.length){
        result.push([...temp])
        return
    }

    for(let num in map){
        if(map[num]==0) continue

        temp.push(Number(num));
        map[num]--
        solve (nums,temp,result,map)
        temp.pop()
        map[num]++
    }
}