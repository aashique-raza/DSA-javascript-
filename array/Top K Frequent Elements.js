
// ! top K Frequent Elements in an Array

function topKFrequent(nums, k) {

    let map = {};
    let result = [];
    

    // Count the frequency of each element
    for (let i = 0; i < nums.length; i++) {
        if (map[nums[i]]) {
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }
    }
    // Create an array of elements sorted by frequency
    let sortedElements = Object.keys(map).sort((a, b) => map[b] - map[a]);
    console.log(sortedElements);
    // Get the top k frequent elements
    for (let i = 0; i < k; i++) {
        if (sortedElements[i]) {
            result.push(parseInt(sortedElements[i])); // Convert string keys back to numbers
        }
    }
    return result; // Return the array of top k frequent elements
}

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2)); // Output: [1, 2]

