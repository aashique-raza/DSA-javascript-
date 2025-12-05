

// ! remove k digits

function removeKdigits(num, k) {


    if (num.length === k) return '0';
    let stack = [];
    let remove = 0;

    for (let i = 0; i < num.length; i++) {


        while (stack.length > 0 && remove < k && stack[stack.length - 1] > num[i]) {
            stack.pop();
            remove++;
        }
        stack.push(num[i]);
    }
    while (remove<k) {
        stack.pop();
        k--;
    }
    while (stack.length > 1 && stack[0] === '0') {
        stack.shift();
    }
    return stack.join('') || '0';
}