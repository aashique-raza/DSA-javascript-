console.log(" Permutation in String in string");

// * approach:
// * 1. Sort the first string and store it in a variable.
// * 2. Iterate through the second string with a sliding window of the same length as the first string.
// * 3. For each substring in the second string, sort it and compare it with the sorted first string.
// * 4. If they match, return true; otherwise, continue until all substrings are checked.
// * 5. If no match is found, return false.
function checkPermutation(s1, s2) {

    let s1Arr = s1.split('');
    s1Arr.sort();
    s1 = s1Arr.join('');
 console.log(s1);
    let i=0; j=s1.length

    while(j<=s2.length){
        let sub = s2.substring(i,j);
        let subArr = sub.split('');
        subArr.sort();
        sub = subArr.join('');
        console.log(sub);
        if(sub === s1){
            return true;
        }
        i++;
        j++;
    }
    return false;
}

// console.log(checkPermutation("ba", "eidbaooo")); // Output: true
// console.log(checkPermutation("ab", "eidboaoo")); // Output: false
// console.log(checkPermutation("abc", "eidbaooo")); // Output: true
// console.log(checkPermutation("ab", "eidbaooo")); // Output: true
// console.log(checkPermutation("adc", "dcda"));

// * approach 2:
// * 1. Create a frequency map of characters in the first string.
// * 2. Use a sliding window to check each substring of the second string.
// * 3. For each substring, create a frequency map and compare it with the first string's frequency map.
// * 4. If they match, return true; otherwise, continue until all substrings are checked.
// * 5. If no match is found, return false. 



function checkPermutation2(s1, s2) {
    let seen={}
    for(let i=0; i<s1.length; i++){
        if(seen[s1[i]]){
            seen[s1[i]]++;
        }else{
            seen[s1[i]]=1;
        }
} 

let i=0; j=s1.length;

while(j<=s2.length){
    let sub = s2.substring(i,j);
    let subSeen = {...seen}; // Create a copy of the seen object
    let isPermutation = true;
    for(let k=0; k<sub.length; k++){
        if(seen[sub[k]]!== undefined && subSeen[sub[k]]> 0){
            subSeen[sub[k]]--;
        }
        else{
            isPermutation = false;
            break;
        }
    }
    if(isPermutation){
        return true;
    }
    i++;
    j++;
}
    return false;


}
console.log(checkPermutation2("ba", "eidbaooo")); // Output: true
console.log(checkPermutation2("ab", "eidboaoo"));
console.log(checkPermutation2("adc", "dcda"));