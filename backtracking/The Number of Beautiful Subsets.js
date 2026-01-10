
// ! The Number of Beautiful Subsets


function beautifulSubsets(nums, k) {

    let result = 0;
    let temp = [];

    function solve(idx,nums,map){
        if(idx >= nums.length){
            if(temp.length > 0){
                result++;
            }
            return;
        }

        // include
        if(!map[nums[idx] - k] && !map[nums[idx] + k]){
            temp.push(nums[idx]);
            map[nums[idx]] = (map[nums[idx]] || 0) + 1;
            solve(idx + 1, nums, map);
            temp.pop();
            map[nums[idx]]--;
        }

        // exclude
        solve(idx + 1, nums, map);
    }

    solve(0, nums, {});

    return result;
}