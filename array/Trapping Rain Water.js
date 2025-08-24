console.log('Trapping Rain Water')


// !  brute force ---


function trapWater(height) {

    let sum = 0;

    for (let i = 0; i < height.length; i++) {

        //  left max find----
        let j = i;
        let leftMax = 0
        while (j >= 0) {
            leftMax = Math.max(leftMax, height[j])
            j--
        }

        // right max find----

        let k=i
        let rightMax=0;

        while(k<height.length){
            rightMax=Math.max(rightMax,height[k])
            k++
        }


        sum+=Math.min(leftMax,rightMax)-height[i]
    }
    return sum
}

console.log(trapWater([1,0,4]))
console.log(trapWater([4,2,0,3,2,5]))
console.log(trapWater([0,1,0,2,1,0,1,3,2,1,2,1]))