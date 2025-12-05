
console.log("Majority Element in an Array");

// ! Majority Element in an Array
function majorityElement(nums) {

    let map={}
    let n=nums.length;

    for(let i=0; i<n; i++) {

        if(map[nums[i]]) {
            map[nums[i]]++;
        }
        else {
            map[nums[i]]=1;
        }

        if(map[nums[i]] > Math.floor(n/2)   ) {
            return nums[i]; // Return the majority element if found
        }
    }
    return -1; // Return -1 if no majority element exists
}
console.log(majorityElement([3, 2, 3])); // Output: 3
console.log(majorityElement([2, 2, 1, 1, 1, 2, 2])); // Output: 2
console.log(majorityElement([1, 2, 3, 4])); // Output: -1 (no majority element)
