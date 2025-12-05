// ! Maximum Length of Subarray With Positive Product

console.log('Maximum Length of Subarray With Positive Product')

function maximumLen(nums) {

    let maxLen = 0
    let posLen = 0;
    let negLen = 0;

    for (let i = 0; i < nums.length; i++) {
        let x = nums[i]

        if (x == 0) {

            posLen = 0;
            negLen = 0;
        } else if (x > 0) {

            negLen = negLen > 0 ? negLen + 1 : 0

            posLen += 1

        } else {
            let prevPos = posLen
            let prevNeg = negLen
            posLen = prevNeg > 0 ? prevNeg + 1 : 0

            negLen = prevPos + 1
        }

        console.log('maxlen', maxLen)
        maxLen = Math.max(maxLen, posLen)
    }

    return maxLen
}

// console.log(maximumLen([0, 1, -2, -3, -4]))
// console.log(maximumLen([-1, -2, -3, 0, 1]))
// console.log(maximumLen([-1, 2]))


