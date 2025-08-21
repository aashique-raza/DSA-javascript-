console.log("Majority Element 2 in an Array");
// ! Majority Element 2 in an Array
function majorityElement2(nums) {
    let map = {};
    let result=[]
    let set = new Set(); // Use a Set to avoid duplicates
    let compare = Math.floor(nums.length / 3);
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }
        if (map[nums[i]] > compare) {
            
            if(!set.has(nums[i])) {
                result.push(nums[i]); // Add to the result array if it's a majority element
                set.add(nums[i]); // Add to the Set if it's a majority element
                
            }
            // To avoid duplicates in the result
            delete map[nums[i]];
        }
    }
    return result; // Return the array of majority elements
}

console.log(majorityElement2([3, 2, 3])); // Output: [3]
console.log(majorityElement2([2,2])); // Output: [2]
// console.log(majorityElement2([2, 2, 1, 1, 1, 2, 2]));
//     // Output: [2]
// console.log(majorityElement2([1, 2, 3, 4])); // Output: [] (no majority element)
// console.log(majorityElement2([1, 2, 3, 1, 2, 1]));
// // Output: [1] (1 appears more than n/3 times)
// console.log(majorityElement2([1, 1, 2, 2, 3, 3, 4, 4]));
// // Output: [1, 2] (both appear more than n/3 times)