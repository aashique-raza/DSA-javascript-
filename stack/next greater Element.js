

console.log("next greater element");

// ! next greater element

class Stack {
    constructor(){
        this.items = [];
        
    }
    push(value){
        this.items.push(value);
    }
    pop(){
        if(this.isEmpty()){
            return "underflow"
        }
        return this.items.pop();
    }
    peek(){
        if(this.isEmpty()){
            return "underflow"
        }   
        return this.items[this.items.length -1];
    }
    isEmpty(){
        return this.items.length === 0;
    }
    size(){
        return this.items.length;
    }
}

function nextGreaterElement(arr) {

    let result = new Array(arr.length).fill(-1);
    let stack = new Stack();
    let map = new Map();

    let i=0;
    while (i < arr.length) {
        
        while (!stack.isEmpty() && arr[i] > arr[stack.peek()]) {
           
            let resolvedIndex = stack.pop();
          
            result[resolvedIndex] = arr[i];
        }

       
        stack.push(i);
        i++;
    }
    return result;



}

let arr = [4,5,2,10,8];
// output = [5,10,10,-1,-1]
console.log('nextGreaterElement',nextGreaterElement(arr));



/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
// var nextGreaterElement = function(nums1, nums2) {

   
//     const stack = []; 
    
    
//     const nextGreaterMap = new Map();

   
//     for (let i = 0; i < nums2.length; i++) {
        
//         while (stack.length > 0 && nums2[i] > nums2[stack[stack.length - 1]]) {
//             let resolvedIndex = stack.pop();
//             let number = nums2[resolvedIndex];
//             let itsNextGreater = nums2[i];
            
         
//             nextGreaterMap.set(number, itsNextGreater);
//         }
       
//         stack.push(i);
//     }
    

//     const result = [];
//     for (const num of nums1) {
      

//         result.push(nextGreaterMap.get(num) || -1);
//     }
    
//     return result;
// };

//  ! again next greater element

function nextGreaterElement1(nums1,nums2) {

    let result=[]
    let stack=[]

    for(let i=0; i<nums2.length; i++){

        while(stack.length>0 && nums2[i]>nums2[stack.length-1]){
            map.set(nums2[stack.pop()], nums2[i])

        }

        stack.push(i)
    }

    for(let num of nums1){
        result.push(map.get(num) || -1)
    }
}