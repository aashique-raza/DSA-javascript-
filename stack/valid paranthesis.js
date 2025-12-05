

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
    let stack = [];

    for (let char of s) {
       
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } 
      
        else if (char === ')' || char === '}' || char === ']') {
            
        
            if (stack.length === 0) {
                return false;
            }

    
            let topElement = stack.pop();

          
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

   
    return stack.length === 0;
}

// Example of how to use it
console.log(isValid("()[]{}")); // true
console.log(isValid("([)]"));   // false
console.log(isValid("(]"));     // false
console.log(isValid(")("));     // false