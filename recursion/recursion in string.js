
// ! recursion in string

console.log("Recursion in string");

// ! check palindrome using recursion
function isPalindrome(str, left = 0, right = str.length - 1) {

    if (left >= right) {
        return true;
    }

    isPalindrome(str, left + 1, right - 1);

    if (str[left] !== str[right]) {
        return false;
    }
    return true;
}
// Example usage:
const myString = "racecar";
const result = isPalindrome(myString);
console.log(`Is "${myString}" a palindrome?`, result);