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

        let k = i
        let rightMax = 0;

        while (k < height.length) {
            rightMax = Math.max(rightMax, height[k])
            k++
        }


        sum += Math.min(leftMax, rightMax) - height[i]
    }
    return sum
}

// console.log(trapWater([1,0,4]))
// console.log(trapWater([4,2,0,3,2,5]))
// console.log(trapWater([0,1,0,2,1,0,1,3,2,1,2,1]))

// ! optimal---


function leftMostMax(height) {
    left_array = new Array(height.length)

   
    left_array[0] = height[0]

    for (i = 1; i < height.length; i++) {
        left_array[i] = Math.max(height[i], left_array[i - 1])
    }

    return left_array
}

function rightMostMax(height) {
    right_array = new Array(height.length)

    right_array[height.length - 1] = height[height.length - 1]

    for (i = height.length - 2; i >= 0; i--) {
        right_array[i] = Math.max(height[i], right_array[i + 1])
    }

    return right_array
}
function trapWater2(height) {
   
    let leftMax = leftMostMax(height)
    let rightMax = rightMostMax(height)

    console.log('left max',leftMax)
    console.log('rightMax max',rightMax)

    let sum = 0
    for (let i = 0; i < height.length; i++) {

        let l = leftMax[i]
        let r = rightMax[i]

        sum+=Math.min(l,r)-height[i]
    }

    return sum
}

console.log(trapWater2([1, 0, 4]))
console.log(trapWater2([0,1,0,2,1,0,1,3,2,1,2,1]))
console.log(trapWater2([4,2,0,3,2,5]))



