

// ! first negative in every window of size k

function firstNegativeInWindow(arr, k) {
    let q = []; 
    let result = [];
    let i = 0; 
    let j = 0; 

    while (j < arr.length) {
     
        if (arr[j] < 0) {
            q.push(arr[j]);
        }

        let windowSize = j - i + 1;

      
        if (windowSize < k) {
            
            j++;
        } 
       
        else if (windowSize === k) {
          

        
            if (q.length === 0) {
               
                result.push(0);
            } else {
              
                result.push(q[0]);
            }

            
            if (arr[i] < 0 && arr[i] === q[0]) {
               
                q.shift();
            }

           
            i++;
            j++;
        }
    }
    
    return result;
}

// --- Example ---
const arr = [12, -1, -7, 8, -15, 30, 16, 28];
const k = 3;
console.log(firstNegativeInWindow(arr, k));
// Output: [-1, -1, -7, -15, -15, 0]
