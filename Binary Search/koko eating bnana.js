// ! koko eating bnanas

// brute force approach
var minEatingSpeed = function(piles, h) {
    let min=Math.min(...piles);
    let max=Math.max(...piles);
    let minSpeed=min
    for(let k=min;k<=max;k++){
        let totalHours=0;
        for(let i=0;i<piles.length;i++){
            totalHours+=Math.ceil(piles[i]/k)
        }
        if(totalHours<=h){
            minSpeed=k
            break;
        }

    }
    return minSpeed;
}

//  approach 2 optimal approach using binary search
var minEatingSpeed = function(piles, h) {
    let left=1;
    let right=Math.max(...piles);
    let minSpeed=right;
    while(left<=right){
        let mid=Math.floor((left+right)/2);
        let totalHours=0;
        for(let i=0;i<piles.length;i++){
            totalHours+=Math.ceil(piles[i]/mid)
        }
        if(totalHours<=h){
            minSpeed=mid
            right=mid-1
        }
        else{
            left=mid+1
        }
    }
    return minSpeed;
}
