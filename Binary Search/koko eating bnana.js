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