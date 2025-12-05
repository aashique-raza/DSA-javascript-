
// ! queue reversal using stack

function reverseQueue(queue) {
    let stack = [];
    let len=0;
    while(queue.length>0){
        stack.push(queue.shift());
        len++;
    }
    queue.length=0; // clear the queue
    for(let i=0;i<len;i++){
        queue.push(stack.pop());
    }
    return queue;
}