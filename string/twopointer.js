
// ! merege two string Merge Two Strings Alternately
//  Input: "abc", "123"
//  Output: "a1b2c3"

// * approach 1 : 
function mergeAlternately(word1, word2) {
    let result = '';
    let maxlen = Math.max(word1.length, word2.length);
    for (let i = 0; i < maxlen; i++) {
        if (i < word1.length) {
            result += word1[i];
        }
        if (i < word2.length) {
            result += word2[i];
        }
    }

    return result;
}

// console.log(mergeAlternately("abc", "123")); // Output: "a1b2c3"
// console.log(mergeAlternately("ab", "1255")); // Output: "a1b2"

// * approach 2 : using two pointer
function mergeAlternately2(word1, word2) {
    let result = '';
    let i = 0, j = 0;
    while (i < word1.length || j < word2.length) {
        if (i < word1.length) {
            result += word1[i++];
        }
        if (j < word2.length) {
            result += word2[j++];
        }
    }
    return result;
}

// console.log(mergeAlternately2("abc", "123")); // Output: "a1b2c3"
// console.log(mergeAlternately2("ab", "1255")); // Output: "a

var mergeAlternately = function (word1, word2) {
    let maxlength = Math.max(word1.length, word2.length)
    let result = ''

    for (let i = 0; i < maxlength; i++) {
        if (i < word1.length) result += word1[i]
        if (i < word2.length) result += word2[i]
    }
};
// console.log(mergeAlternately("abc", "123")); // Output: "a1b2c3"
// console.log(mergeAlternately("ab", "1255")); // Output: "a1b2"
// console.log(mergeAlternately("hello", "world")); // Output: "hweolrllod"

// ! check if string has all unique characters
function hasAllUniqueChars(str) {
    for (let i = 0; i < str.length - 1; i++) {
        for (let j = (i + 1); j < str.length; j++) {
            if (str[i] === str[j]) return false;
        }
    }
    return true;
}
// console.log(hasAllUniqueChars("abcde")); // true
// console.log(hasAllUniqueChars("hello")); // false
// console.log(hasAllUniqueChars("world")); // true
// console.log(hasAllUniqueChars("abcdefabc")); // false

// * optimized approach using 
function hasAllUniqueCharsOptimized(str) {

    let seen = {}

    for (let i = 0; i < str.length; i++) {
        if (seen[str[i]]) return false;
        seen[str[i]] = true;
    }
    return true;
}
// console.log(hasAllUniqueCharsOptimized("abcde")); // true
// console.log(hasAllUniqueCharsOptimized("hello")); // false

// ! longets substring without repeating characters
function lengthOfLongestSubstring(s) {
    let maxlength = 0;
    for (let i = 0; i < s.length; i++) {
        let substring = ''
        for (let j = i; j < s.length; j++) {
            if (substring.includes(s[j])) {
                let len = substring.length;
                maxlength = Math.max(maxlength, len);
                substring = '';
                break;
            } else {
                substring += s[j];
            }
        }
    }
    return maxlength;
}

// console.log(lengthOfLongestSubstring("abcabcbb")); // Output: 3 ("abc")
// console.log(lengthOfLongestSubstring("bbbbb")); // Output: 1 ("b")  
// console.log(lengthOfLongestSubstring("pwwkew")); // Output: 3 ("wke")


// * approach 2 : using two pointer
function lengthOfLongestSubstring2(s) {
    let substring = new Set();
    let i = 0; j = 0;
    let maxlength = 0;
    while (j < s.length) {
        if (substring.has(s[j])) {
            substring.delete(s[i]);
            i++;
        } else {
            substring.add(s[j]);
            maxlength = Math.max(maxlength, substring.size);
            j++;
        }
    }
    return maxlength;
}

// console.log(lengthOfLongestSubstring2("abcabcbb")); // Output: 3 ("abc")
// console.log(lengthOfLongestSubstring2("bbbbb")); // Output: 1 ("b")
// console.log(lengthOfLongestSubstring2("pwwkew")); // Output: 3 ("wke")

// !compress string (run-length encoding)

function compressString(s) {
    let i = 0; j = 0;
    let result = '';
    let count = 0
    while (j < s.length) {

        if (s[i] === s[j]) {
            count++;
            j++;
        } else {
            result = result + s[i] + count;
            i = j;
            count = 0
        }
    }
    return result + s[i] + count;
}

// console.log(compressString("aaabbcc")); // Output: "a3b2c2"
// console.log(compressString("abc")); // Output: "a1b1c1"
// console.log(compressString("aabbccdd")); // Output: "a2b2c2d2"   

// ! longest palindromic substring

// * approach 1 : brute force

function longestPalindrome(s) {
    let pstring = ''

    for (let i = 0; i < s.length; i++) {
        let result = ''
        for (let k = i; k < s.length; k++) {
            result += s[k];

            // reverse loop

            let reverse = ''
            for (let j = result.length; j > 0; j--) {
                reverse += result[j - 1];

            }
            if (result === reverse && result.length > pstring.length) {
                pstring = result;


            }
            reverse = ''
        }


    }
    return pstring;
}

// console.log(longestPalindrome("babad")); // Output: "bab" or "aba"
// console.log(longestPalindrome("cbbd")); // Output: "bb"
// console.log(longestPalindrome("a")); // Output: "a"


// * approach 2 : using two pointer

function checkPalindrome(str) {
    let left = 0;
    let right = str.length - 1;

    while (left < right) {
        if (str[left] !== str[right]) {
            return false;
        }
        left++;
        right--;
    }
    return true;
}
function longestPalindrome2(s) {
    let i = 0;
    let j = 0;
    let pstring = '';
    let result = '';
    while (i < s.length) {
        result += s[j];
        let returnValue = checkPalindrome(result);
        if (returnValue && result.length > pstring.length) {
            pstring = result;
        }
        if (s.length - 1 === j) {
            i++;
            j = i;
            result = '';
        } else {
            j++;
        }
    }

    return pstring;

}

// console.log(longestPalindrome2("babad")); // Output: "bab" or "aba"
// console.log(longestPalindrome2("cbbd")); // Output: "bb"
// console.log(longestPalindrome2("a")); // Output: "a"
// console.log(longestPalindrome2("forgeeksskeegfor")); // Output: "geeksskeeg"

// ! manacher's algorithm

function manachersAlgorithm(s) {

    // transform the string to handle even length palindromes
    let transformed = '';
    for (let i = 0; i < s.length; i++) {
        transformed += '#' + s[i]
    }
    transformed += '#'; // add a trailing separator

    // initialize variables
    let n = transformed.length;
    let p = new Array(n).fill(0);
    let center = 0, right = 0;

    //  main loop
    for (let i = 0; i < n; i++) {

        let mirror = 2 * center - i; // find the mirror index

        if (i < right) {
            p[i] = Math.min(right - i, p[mirror]);
        }

        // expand around the center
        let left = i - (p[i] + 1);
        let rightBound = i + (p[i] + 1);
        while (i - p[i] - 1 >= 0 && i + p[i] + 1 < n && transformed[i - p[i] - 1] === transformed[i + p[i] + 1]) {
            p[i]++;

        }

        // update the center and right boundary
        if (i + p[i] > right) {
            center = i;
            right = i + p[i];
        }


    }
    let maxlen = Math.max(...p);
    let centerIndex = p.indexOf(maxlen);
    let start = Math.floor((centerIndex - maxlen) / 2);
    console.log(start, centerIndex, maxlen);
    let end = Math.floor((centerIndex + maxlen) / 2);
    return s.substring(start, end);
}

// console.log(manachersAlgorithm("babad")); // Output: "bab" or "aba"

// ! minimum window substring

function minWindowSubstring(s, t) {

    // store frequency of characters in t
    let freq = {}

    for (let i = 0; i < t.length; i++) {
        freq[t[i]] = (freq[t[i]] || 0) + 1;
    }


    let minLength = Infinity;
    let minsubstr = ''



    for (let i = 0; i < s.length; i++) {

        let temp = { ...freq };
        let count = t.length;
        // console.log(temp);

        for (let j = i; j < s.length; j++) {
            if (temp[s[j]] && temp[s[j]] > 0) {
                temp[s[j]]--;
                count--;
            }
            //  console.log(count);
            if (count === 0) {
                let str = s.substring(i, j + 1);
                // console.log(str);
                if (str.length < minLength) {
                    minLength = str.length;
                    minsubstr = str;

                }
                break
            }
        }
    }

    return minsubstr
}

// console.log(minWindowSubstring("ADOBECODEBANC", "ABC")); // Output: "BANC"

// !minimum window substring using sliding window
function minWindowSubstring2(s, t) {
    let freq = {};


    for (let i = 0; i < t.length; i++) {
        freq[t[i]] = (freq[t[i]] || 0) + 1;
    }

    let left = 0, right = 0;
    let count = t.length;
    let minLength = Infinity;
    let minsubstr = '';

    while (right < s.length) {
        if (freq[s[right]] !== undefined) {
            if (freq[s[right]] > 0) count--;
            freq[s[right]]--;
        }

        while (count === 0) {
            if (right - left + 1 < minLength) {
                minLength = right - left + 1;
                minsubstr = s.substring(left, right + 1);
            }
            if (freq[s[left]] !== undefined) {
                freq[s[left]]++;
                if (freq[s[left]] > 0) count++;
            }
            left++;
        }
        right++;
    }

    return minsubstr;
}
// console.log(minWindowSubstring2("ADOBECODEBANC", "ABC")); // Output: "BANC" // Output: "BANC"

// console.log(minWindowSubstring2("a", "aa")); // Output: ""
// console.log(minWindowSubstring2("a", "a")); // Output: "a"
// console.log(minWindowSubstring2("aa", "aa")); // Output: "aa"  

// ! find all anagrams in a string

// * approach 1 : brute force
function findAnagrams(s, p) {
    let m = p.length;
    let result = []
    let map = {};
    for (let i = 0; i < m; i++) {
        map[p[i]] = (map[p[i]] || 0) + 1;
    }

    for (let i = 0; i < s.length; i++) {
        let str = s.substring(i, i + m);


        let count = p.length;
        let temp = { ...map };
        if (str.length === m) {
            for (let j = 0; j < str.length; j++) {
                if (temp[str[j]]) {

                    if (temp[str[j]] > 0) {
                        count--;
                    }
                    temp[str[j]]--;

                }

            }
        }

        if (count === 0) {
            result.push(i);
        }
    }
    return result;

}

// console.log(findAnagrams("cbaebabacd", "abc")); // Output: [0, 6]  
// console.log(findAnagrams("abab", "ab")); // Output: [0, 1, 2] 







// * appraoc 2 again brute force
function findAnagrams2(s, p) {
    let m = p.length;
    let result = [];
    let k = p.length - 1;
    let map = {};
    for (let i = 0; i < m; i++) {
        map[p[i]] = (map[p[i]] || 0) + 1;
    }
    let i = 0;
    let j = i

    while (i < s.length) {
        count = p.length;
        let temp = { ...map };
        while (j <= k) {
            if (temp[s[j]]) {
                if (temp[s[j]] > 0) {
                    count--;
                }
                temp[s[j]]--;
            }
            j++;
        }
        if (count === 0) {
            result.push(i);
        }
        i++;
        j = i;
        k++;
    }
}

// console.log(findAnagrams2("cbaebabacd", "abc")); // Output: [0, 6]

// * optimization using sliding window
function findAnagrams3(s, p) {
    let freq = {};
    let window = {};
    let result = [];
    let m = p.length;
    let matches = 0;

    // Build frequency map for p
    for (let char of p) {
        freq[char] = (freq[char] || 0) + 1;
    }

    let left = 0;
    for (let right = 0; right < s.length; right++) {
        let char = s[right];

        // Add current char to window
        window[char] = (window[char] || 0) + 1;

        // If char count matches freq, increase matches
        if (freq[char] && window[char] === freq[char]) {
            matches++;
        }

        // If window size bigger than p, shrink from left
        if (right - left + 1 > m) {
            let leftChar = s[left];
            if (freq[leftChar] && window[leftChar] === freq[leftChar]) {
                matches--;
            }
            window[leftChar]--;
            if (window[leftChar] === 0) {
                delete window[leftChar];
            }
            left++;
        }

        // If all chars matched, record start index
        if (matches === Object.keys(freq).length) {
            result.push(left);
        }
    }

    return result;
}

// console.log(findAnagrams3("cbaebabacd", "abc")); // [0, 6]

// ! Longest Substring with At Most K Distinct Characters

// * approach 1 : brute force

function longestSubstringKDistinct(s, k) {

    let max = -Infinity
    for (let i = 0; i < s.length; i++) {
        let substring = '';

        let frwq = {};

        for (let j = i; j < s.length; j++) {
            substring += s[j];
            frwq[s[j]] = (frwq[s[j]] || 0) + 1;


            if (Object.keys(frwq).length <= k) {
                max = Math.max(max, substring.length);
            } else{
                break;
            }
        }
        console.log(substring);


    }
    return max;
}
// console.log(longestSubstringKDistinct("eceba", 2)); // Output: 3 ("ece")

//  * again brute force
function longestSubstringKDistinct2(s, k) {
    let maximum=0

    for(let i=0;i<s.length;i++){
        let result=''
        let char= new Set()
        for(let j=i;j<s.length;j++){
            result+=s[j]
            char.add(s[j])
            if(char.size<=k){
                maximum=Math.max(maximum,result.length)
            }else{
                break;
            }
        }
    }
    return maximum;
}

// console.log(longestSubstringKDistinct2("eceba", 2)); // Output: 3 ("ece")

// * approach 3 : using sliding window
function longestSubstringKDistinct3(s, k) {
    let freq=new Map();
    let i=0, j=0;
    let maxLength = 0;

    while (j < s.length) {
        freq.set(s[j], (freq.get(s[j]) || 0) + 1);
        if( freq.size <= k) {
            maxLength = Math.max(maxLength, j - i + 1);
        }else {
            while (freq.size > k) {
                freq.set(s[i], freq.get(s[i]) - 1);
                if (freq.get(s[i]) === 0) {
                    freq.delete(s[i]);
                }
                i++;
            }   }
        j++;
    }

    return maxLength;
}

// console.log(longestSubstringKDistinct3("eceba", 2)); // Output: 3 ("ece")
// console.log(longestSubstringKDistinct3("aabacbebebe", 3)); // Output: 7 ("cbebebe")

