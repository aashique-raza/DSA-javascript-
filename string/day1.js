// !reverse a string ------------------------------

//* approach 1: taking extra space and strat looping from the end
function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}

// test the function    
// console.log(reverseString('Hello')); // outputs: dlroW olleH

// * approach 2: two pointer approach
function reverseStringTwoPointer(str) {

    // Step 1: Convert to array
    let arr = str.split('');
    let i = 0;
    let j = str.length - 1;

    // console.log(str[i]);
    // console.log(str[j]);
    while (i < j) {
        let tem = arr[j];

        arr[j] = arr[i];
        arr[i] = tem
        i++
        j--
    }
    return arr.join('');

}

// test the function
// console.log(reverseStringTwoPointer('Hello')); // outputs: dlroW olleH



//! check palindrome ------------------------------

// * approach 1: using extra space orextra  variable

function isPalindrome(str) {
    let reversedString = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversedString += str[i];
    }
    if (reversedString === str) {
        return true;
    }
    else {
        return false;
    }
}

// console.log(isPalindrome('madam')); // outputs: true
// console.log(isPalindrome('hello')); // outputs: false

// * approach 2: two pointer approach

function isPalindromeTwoPointer(str) {

    let i = 0; let j = str.length - 1;
    while (i < j) {
        if (arr[i] !== arr[j]) {
            return false;
        } else {
            i++
            k--
        }
    }
    return true;
}

// console.log(isPalindromeTwoPointer('madam')); // outputs: true
// console.log(isPalindromeTwoPointer('hello')); // outputs: false

var isPalindrome = function (x) {

    let string = x.toString()
    console.log(string);

    let i = 0; let j = string.length - 1;

    while (i < j) {

        if (string[i] !== string[j]) {
            return false
        }
        else {
            i++
            j--
        }
    }
    return true
};
// console.log(isPalindrome(121)); // outputs: true

// ! count vowelas and consonants ------------------------------

function countVowelsAndConsonants(str) {

    let vowelCount = 0;
    let consonantCount = 0;

    for (let i = 0; i < str.length; i++) {

        if (str[i].toLowerCase() === 'a' || str[i].toLowerCase() === 'e' || str[i].toLowerCase() === 'i' || str[i].toLowerCase() === 'o' || str[i].toLowerCase() === 'u') {
            vowelCount++;
        } else {
            consonantCount++;
        }
    }

    return {
        vowels: vowelCount,
        consonants: consonantCount
    };
}
// test the function
// console.log(countVowelsAndConsonants('abcde')); // outputs: { vowels: 2, consonants: 3 }
// console.log(countVowelsAndConsonants('JavaScript')); // outputs: { vowels: 3, consonants: 7 }

// let words = ["are","amy","u"]

//     let vowelStringCount=0;
//     let vowels=['a','e','i','o','u']

//     for(let i=0; i<=2; i++){
//         let firstCh=words[i][0]
//         console.log(firstCh);
//         let lastCh=words[i][words[i].length-1]
//         console.log('last,', lastCh);
//         if(vowels.includes(firstCh) && vowels.includes(lastCh)){
//             vowelStringCount++
//         }
//     }


// !find the most frequent character in a string ------------------------------

function mostFrequentCharacter(str) {
    let frequency = {};
    for (let i = 0; i < str.length; i++) {
        if (frequency[str[i]]) {
            frequency[str[i]]++;
        } else {
            frequency[str[i]] = 1;
        }
    }

    let maxKey = null;
    let maxValue = 0;
    for (let ky in frequency) {
        let value = Number(frequency[ky]);
        if (value > maxValue) {
            maxValue = value;
            maxKey = ky;
        }
    }
    return maxKey;
}

// console.log(mostFrequentCharacter('hello')); // outputs: l
// console.log(mostFrequentCharacter('JavaScript')); // outputs: a


let str = 'leetcode'
// function firstUniqueCharacter(str) {
//     for(let i=0; i<str.length; i++){

//         let count=0;
//         for(let j=0; j<str.length; j++){

//             if(str[i]==str[j]) count++
//         }

//         if(count===1) {
//             return i;
//         }
//     }
//     return -1; // if no unique character found
// }
// console.log(firstUniqueCharacter(str)); // outputs: 0 (index of 'l')
// console.log(firstUniqueCharacter('loveleetcode')); // outputs: 2 (index of 'v')
// console.log(firstUniqueCharacter('aabb')); // outputs: -1 (no unique character)

function firstUniqueCharacter(str) {
    let idx = 0;
    let feq = {}
    // console.log('feq', feq);

    for (let i = 0; i < str.length; i++) {
        if (feq[str[i]]) {
            feq[str[i]]++;
        } else {
            feq[str[i]] = 1;
        }
    }
    for (let key in feq) {
        let value = Number(feq[key]);
        if (value == 1) return idx;
        else idx++;
    }
    return -1; // if no unique character found
}

// console.log(firstUniqueCharacter(str)); // outputs: 0 (index of 'l')
// console.log(firstUniqueCharacter('loveleetcode')); // outputs: 2 (index of 'v')
// console.log(firstUniqueCharacter('aabb')); // outputs: -1 (no unique character)
// console.log(firstUniqueCharacter('dddccdbba')); // outputs: 8 (index of 'a')

// ! remove duplicate characters from a string ------------------------------
function removeDuplicateCharacters(str) {
    let result = '';
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < str.length; j++) {
            if (str[i] !== str[j]) {
                if (!result.includes(str[i])) {
                    result += str[i]
                }
            }
        }
    }
    console.log('result', result);
    return result;
}

// console.log(removeDuplicateCharacters('aabbbcc')); // outputs: helo
// console.log(removeDuplicateCharacters('JavaScript')); // outputs: JavaScript

// * approach 2: using Set
function removeDuplicateCharactersSet(str) {
    let arr = str.split('');
    let result = new Set()

    for (let i = 0; i < arr.length; i++) {
        if (!result.has(arr[i])) {
            result.add(arr[i]);
        }
    }
    console.log('result', result);

    return Array.from(result).join('');
}

// console.log(removeDuplicateCharactersSet('aabbbcc')); // outputs: abc
// console.log(removeDuplicateCharactersSet('JavaScript')); // outputs: JavaScript


// ! approach 3: using a frquency object
function removeDuplicateCharactersFrequency(str) {
    let seen = {}
    let result = ''

    for (let i = 0; i < str.length; i++) {
        if (!seen[str[i]]) {
            seen[str[i]] = str[i];
            result += str[i];
        }
    }
    return result;
}
// console.log(removeDuplicateCharactersFrequency('aabbbcc')); // outputs: abc
// console.log(removeDuplicateCharactersFrequency('JavaScript')); // outputs: JavaScript

// ! reverse words in a sentence ------------------------------

function reverseWordsInSentence(sentence) {
    let arr = str.split(' ');
    let i = 0; let j = arr.length - 1;
    while (i < j) {
        let temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        i++;
        j--;
    }
    return arr.join(' ');
}

// console.log(reverseWordsInSentence('Hello World')); // outputs: World Hello
// console.log(reverseWordsInSentence('JavaScript is fun')); // outputs: fun is JavaScript 

// ! check if two strings are anagrams ------------------------------

// * approach 1: using brute force
function areAnagrams(str1, str2) {
    if (str1.length !== str2.length) return false;
    let freq = {}

    for (let i = 0; i < str1.length; i++) {

        if (freq[str1[i]]) {
            freq[str1[i]]++;
        } else {
            freq[str1[i]] = 1;
        }
    }
    for (let i = 0; i < str2.length; i++) {
        if (freq[str2[i]]) {
            freq[str2[i]]--;
        } else {
            return false;
        }
    }
    for (let key in freq) {
        if (Number(freq[key]) >= 1) {
            return false;
        }
    }

    return true;
}
// console.log(areAnagrams('listen', 'silent')); // outputs: true
// console.log(areAnagrams('hello', 'world')); // outputs: false
// console.log(areAnagrams("aabb", "ab")) // outputs: false
// console.log(areAnagrams("aabc", "abcc")); // outputs: false

// ! check palindrome in senetnce without spaces and punctuation ------------------------------
function isPalindromeSentence(sentence) {
    let string = ''
    for (let i = 0; i < sentence.length; i++) {
        if (sentence[i].charCodeAt() >= 65 && sentence[i].charCodeAt() <= 90 ||
            sentence[i].charCodeAt() >= 97 && sentence[i].charCodeAt() <= 122) {
            string += sentence[i].toLowerCase();
        }

    }
    let i = 0;
    let j = string.length - 1;
    while (i < j) {
        if (string[i] !== string[j]) {
            return false;
        } else {
            i++;
            j--;
        }
    }
    return true;
}

// console.log(isPalindromeSentence('A man, a plan, a canal, Panama')); // outputs: true
// console.log(isPalindromeSentence('Was it a car or a cat I saw?')); // outputs

function isAlphaNumeric(char) {
    let code = char.charCodeAt(0);
    return (
        (code >= 48 && code <= 57) ||
        (code >= 65 && code <= 90) ||
        (code >= 97 && code <= 122)
    );
}

function isPalindromeOptimized(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        while (left < right && !isAlphaNumeric(str[left])) left++;
        while (left < right && !isAlphaNumeric(str[right])) right--;

        if (str[left].toLowerCase() !== str[right].toLowerCase()) {
            return false;
        }

        left++;
        right--;
    }

    return true;
}


// ! longest substring wihthout repeating characters ------------------------------

function lengthOfLongestSubstring(s) {

    let i = 0;
    let j = 0;
    let max = 0;
    let seen = new set()

    while (j < s.length) {

      if(seen.has(s[j])){
        seen.delete(s[i])
        i++
      }
        else{
            seen.add(s[j])
            j++
            max=Math.max(max, j-i)
        }

    }

    return max
}

// let obj = {};
// obj[1] = "one";
// obj[true] = "yes";

// console.log(obj); 
// { '1': 'one', 'true': 'yes' }

// let obj = {};
// let a = {};
// let b = {};

// obj[a] = "hello";
// obj[b] = "world";

// console.log(obj); // { '[object Object]': 'world' }

let freq = {};
freq['a'] = 0;

if (freq['a']) {
  console.log("present"); // ❌ ye print nahi hoga, kyunki 0 falsy hai
}

if ('a' in freq) console.log("present");  // sahi
if (freq.hasOwnProperty('a')) console.log("present"); // safe
if (freq['a'] !== undefined) console.log("present");  // chalega agar undefined store nahi karte ho

let safeObj = Object.create(null);
let a={}
safeObj[true] = "not dangerous";
console.log(safeObj); // { __proto__: 'not dangerous' }



// ! compress a string ------------------------------

function compressString(str) {
     if(str.length === 0) return '';
    let i=0;
    let j=0;

    let result=''

    while(j<str.length){

        if(str[i]!=str[j]){
            let count=j-i
            result+=str[i]
            result+=count
            i=j
        }
        j++
    }
    result+=str[i]
    result+=j-i

    return result
}

// console.log(compressString('aabcccccaaa')); // outputs: a2b1c5a3
// console.log(compressString('abc')); // outputs: a1b1c1


// Aisa asal mein kabhi hoga nahi, lekin isse khatra samajh aa jayega
// Object.prototype.iamHiding = "Surprise!";

// let frequency = { a: 2, b: 3 };

// for (let key in frequency) {
//   console.log(key, "->", frequency[key]);
// }
// Output:
// a -> 2
// b -> 3
// iamHiding -> Surprise!  <-- YE GALAT HAI! Yeh aapke algorithm ko tod sakta hai.


let obj = {};

Object.defineProperty(obj, 'myKey', {
  value: 100,
  writable: false,      // Ab aap iski value nahi badal sakte
  enumerable: true,     // Yeh loops mein dikhegi
  configurable: false   // Aap ise delete nahi kar sakte
});

console.log(obj.myKey); // 100

obj.myKey = 200; // Yeh line chupchap fail ho jayegi
console.log(obj.myKey); // Abhi bhi 100 hai

delete obj.myKey; // Yeh bhi fail ho jayega
console.log(obj.myKey); // Abhi bhi 100 hai




