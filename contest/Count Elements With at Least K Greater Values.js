// ! Count Elements With at Least K Greater Values

//  aproach 1 : brute force--

function countElements(nums, k) {
  if (nums.length == 0) return 0;
  let map = {};

  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        if (map.hasOwnProperty(i)) {
          map[i]++;
        } else {
          map[i] = 1;
        }
      }
    }
    if (!map.hasOwnProperty(i)) {
      map[i] = 0;
    }
  }

  let count = 0;
  for (let key in map) {
    if (map[key] >= k) {
      count++;
    }
  }
  return count;
}

// console.log("result",countElements([4, 2, 2, 2],1))

//  optimized solution---

function count(nums, k) {
  if (nums.length === 0) return 0;


  let arr = nums.sort((a, b) => a - b);


  let map = new Map();

  
  let lastIndex = arr.length - 1;

  for (let i = arr.length - 1; i >= 0; i--) {
    
    if (i === arr.length - 1 || arr[i] !== arr[i + 1]) {
      lastIndex = i;
    }

    let greater = arr.length - lastIndex - 1;

   
    map.set(arr[i], greater);
  }

  
  let result = 0;
  for (let i = 0; i < nums.length; i++) {
    if (map.get(nums[i]) >= k) {
      result++;
    }
  }

  return result;
}

console.log("result", count([1, 2, 2, 4, 4, 4, 10], 1));
