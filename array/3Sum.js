//! 3 sum 


function twoSum(nums, start, target) {
    let i = start + 1, j = nums.length - 1;
    let res = [];

    while (i < j) {
        let sum = nums[i] + nums[j];

        if (sum === target) {
            res.push([nums[i], nums[j]]);

            while (i < j && nums[i] === nums[i + 1]) i++; // skip duplicates
            while (i < j && nums[j] === nums[j - 1]) j--;

            i++;
            j--;
        } else if (sum < target) {
            i++;
        } else {
            j--;
        }
    }
    return res;
}


function threeSum(nums) {
    let result = [];
    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length - 2; i++) {
        if (i > 0 && nums[i] === nums[i - 1]) continue;

        let n = nums[i];
        let target = -n;

        let pairs = twoSum(nums, i, target);

        for (let [a, b] of pairs) {
            result.push([n, a, b]);
        }
    }
    return result;
}


// console.log(threeSum([-1, 0, 1, 2, -1, -4])); // Output: [[-1,-1,2],[-1,0,1]]



