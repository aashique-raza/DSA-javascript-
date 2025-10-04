

console.log("Valid Parenthesis");


// ! valid Parenthesis


class Stack {
    constructor() {
        this.items = [];
    }
    push(char){
        // console.log('char',char);
        if(char === '(' || char === '{' || char === '['){
           
            this.items.push(char);
        }else{
          
            let compare=false;
            let peekChar=this.peek();
           
            if(char==')'){
                compare = peekChar === '(';
                if(compare) this.items.pop();
              else  this.items.push(char);
            }
            if(char=='}'){
                compare = peekChar === '{';
                if(compare) this.items.pop();
                else this.items.push(char);
            }
            if(char==']'){
                compare = peekChar === '[';
                if(compare) this.items.pop();
                else this.items.push(char);
            }
        }
    }

    pop(){
        if(this.isEmpty()){
            return "Underflow";
        }
        return this.items.pop();
    }

    peek(){
        if(this.isEmpty()){
            return "No elements in stack";
        }
        return this.items[this.items.length - 1];
    }

    isEmpty(){
        return this.items.length === 0;
    }

}

function isValid(s) {
    let stack = new Stack();
    //  console.log('stack',stack.items);
    for(let ch of s){
        console.log('ch',ch);
        stack.push(ch);
    }
   
    return stack.isEmpty();
}
let s = "(]";

console.log(isValid(s));



// function isValid(s) {
  
//     const bracketMap = {
//         ')': '(',
//         '}': '{',
//         ']': '['
//     };

//     let stack = []; 

//     for (let char of s) {
       
//         if (char === '(' || char === '{' || char === '[') {
//             stack.push(char);
//         } 
       
//         else if (char === ')' || char === '}' || char === ']') {
        
//             if (stack.length === 0) {
//                 return false;
//             }

           
//             let topElement = stack.pop();

           
//             if (bracketMap[char] !== topElement) {
               
//                 return false; 
//             }
//         }
//     }

//     return stack.length === 0;
// }


function isValid(s) {
    let stack = []; // Array ko stack ki tarah istemal karenge

    for (let char of s) {
        // Agar character ek opening bracket hai, to use stack me push karo
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } 
        // Agar character ek closing bracket hai
        else if (char === ')' || char === '}' || char === ']') {
            
            // Edge case: Agar closing bracket hai par stack khali hai, to invalid hai
            if (stack.length === 0) {
                return false;
            }

            // Stack se top element nikalo
            let topElement = stack.pop();

            // Ab aapke logic ke anusaar if/else if se check karenge
            if (char === ')') {
                if (topElement !== '(') {
                    return false;
                }
            } else if (char === '}') {
                if (topElement !== '{') {
                    return false;
                }
            } else if (char === ']') {
                if (topElement !== '[') {
                    return false;
                }
            }
        }
    }

    // Loop ke baad, agar stack khali hai to string valid hai, warna invalid.
    return stack.length === 0;
}

// Example of how to use it
console.log(isValid("()[]{}")); // true
console.log(isValid("([)]"));   // false
console.log(isValid("(]"));     // false
console.log(isValid(")("));     // false