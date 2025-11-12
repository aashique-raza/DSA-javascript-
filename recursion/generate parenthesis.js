
//  ! generate parenthesis---brute force


function generateParenthesis(n, str = "", result = []) {
  // Base condition
  if (str.length === 2 * n) {
    if (isValid(str)) {
      result.push(str);
    }
    return;
  }

  // add "("
  generateParenthesis(n, str + "(", result);

  // add ")"
  generateParenthesis(n, str + ")", result);

  return result;
}

function isValid(str) {
  let stack = [];

  for (let i = 0; i < str.length; i++) {
    if (str[i] === "(") {
      stack.push(str[i]);
    } else {
      if (stack.length !== 0 && stack[stack.length - 1] === "(") {
        stack.pop();
      } else {
        return false; // invalid if closing comes before opening
      }
    }
  }

  return stack.length === 0;
}

console.log(generateParenthesis(1)); // ["()"]
console.log(generateParenthesis(2)); // ["(())", "()()"]
