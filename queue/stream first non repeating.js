

// ! stream first non repeating character

function firstNonRepeating(stream) {
    let charCount = new Map(); 
    let q = []; 
    let result = [];


    for (let char of stream) {

        if(charCount.has(char)) {
            charCount.set(char, charCount.get(char) + 1);
        }
        else {
            charCount.set(char, 1);
            q.push(char);
        }
        while (q.length > 0 && charCount.get(q[0]) > 1) {
            q.shift();
        }
        if (q.length === 0) {
            result.push('#');
        } else {
            result.push(q[0]);
        }

    }
    return result.join('');
}
// --- Example ---
const stream = "aabc";
console.log(firstNonRepeating(stream));
// Output: "a#bb"