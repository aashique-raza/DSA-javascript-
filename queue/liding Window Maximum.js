

// ! Sliding Window Maximum

function maxSlidingWindow(nums, k) {
    let q = []; 
    let result = [];
    let i = 0; 
    
    for (let j = 0; j < nums.length; j++) {
       
        while (q.length > 0 && nums[q[q.length - 1]] < nums[j]) {
            q.pop();
        }
        q.push(j);

       
        if (j - i + 1 < k) {
            continue;
        }
        else if (j - i + 1 === k) {
            result.push(nums[q[0]]);
            if (q[0] === i) {
                q.shift();
            }
            i++;
        }
    }
    return result;
}

// --- Example ---
const nums = [1,3,-1,-3,5,3,6,7];
const k = 3;
console.log(maxSlidingWindow(nums, k));
// Output: [3,3,5,5,6,7]