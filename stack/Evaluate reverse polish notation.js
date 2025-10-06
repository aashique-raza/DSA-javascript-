
// ! evaluate reverse polish notation
function cal(op1, op2, operator) {

    switch (operator) {
        case '+':
            return BigInt(op1) + BigInt(op2)
        case '-':
            return BigInt(op1) - BigInt(op2)
        case '*':
            return BigInt(op1) * BigInt(op2)
        case '/':

            return BigInt(op1) / BigInt(op2)
    }


}
var evalRPN = function (tokens) {

    if (tokens.length == 0) return

    let stack = []

    for (let i = 0; i < tokens.length; i++) {
        let token = tokens[i]

        if (token == '+' || token == '/' || token == '-' || token == '*') {
            let op2 = stack.pop()
            let op1 = stack.pop()
            let returnVal = cal(op1, op2, token)
            stack.push(returnVal)
        } else {
            stack.push(tokens[i])
        }
    }

    return Number(stack[stack.length - 1])

};