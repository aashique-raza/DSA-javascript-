
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
// const myString = "racecar";
// const result = isPalindrome(myString);
// console.log(`Is "${myString}" a palindrome?`, result);

// ! count vowels in string using recursion

function countVowels(str, index = 0,count = 0 ) {

    if(index >= str.length) {
        return count;
    }

    const vowels = "aeiouAEIOU";
    if(vowels.includes(str[index])) {
        count++;
    }
    return countVowels(str, index + 1, count);

}
// Example usage:
const myString = "Hello World";
const vowelCount = countVowels(myString);
console.log(`Number of vowels in "${myString}":`, vowelCount);