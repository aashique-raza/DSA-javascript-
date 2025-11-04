
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
// const myString = "Hello World";
// const vowelCount = countVowels(myString);
// console.log(`Number of vowels in "${myString}":`, vowelCount);

// ! count consonants in string using recursion way 2

function countConsonants(str, index = 0) {  
    if(index >= str.length) {
        return 0;
    }
    const vowels = "aeiouAEIOU";
    let count = 0;
    if(/[a-zA-Z]/.test(str[index]) && !vowels.includes(str[index])) {
        count = 1;
    }
    return count + countConsonants(str, index + 1);
}


// ! reverse string using recursion way 1

function reverseString(str, index = str.length - 1  ){

    if(index < 0) {
        return "";
    }
    return str[index] + reverseString(str, index - 1);
} 
// !  reverse string using recursion way 2
function reverseStringWay2(str, index = 0) {
    if(index >= str.length) {
        return "";
    }
    return reverseStringWay2(str, index + 1) + str[index];
}


// Example usage: