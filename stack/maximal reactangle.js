

// ! maximal rectangle in binary matrix

var maximalRectangle = function (matrix) {
  if (matrix.length === 0) return 0;

    const n = matrix[0].length;
    let maxArea = 0;
    let heights = new Array(n).fill(0);
    
    for(let i=0; i<matrix[0].length; i++){
        heights[i]=(matrix[0][i]==='1')?1:0;
    }
    maxArea = Math.max(maxArea, largestRectangleArea(heights));

    for (let i = 1; i < matrix.length; i++) {
        for (let j = 0; j < n; j++) {
            heights[j] = (matrix[i][j] === '1') ? heights[j] + 1 : 0;
        }
        maxArea = Math.max(maxArea, largestRectangleArea(heights));
    }
    return maxArea;
}
function largestRectangleArea(heights) {
    let stack = [];
    let maxArea = 0;
    heights.push(0); // Sentinel value to pop all remaining bars
    for (let i = 0; i < heights.length; i++) {
        while (stack.length > 0 && heights[i] < heights[stack[stack.length - 1]]) {
            let height = heights[stack.pop()];
            let width = stack.length === 0 ? i : i - stack[stack.length - 1] - 1;
            maxArea = Math.max(maxArea, height * width);
        }
        stack.push(i);
    }
    return maxArea;
}
console.log(maximalRectangle([["1","0","1","0","0"],["1","0","1","1","1"],["1","1","1","1","1"],["1","0","0","1","0"]]));
