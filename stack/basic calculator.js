
console.log("basic calculator")

function basicCalculator(s) {
    let num = 0;
    let res = 0;
    let sign = 1
    let stack = []

    for (let i = 0; i < s.length; i++) {
        let char = s[i]


        if (char == '(') {
            stack.push(res)
            stack.push(sign)
            res = 0
            sign = 1
            num = 0
        }
        else if (char == ')') {
            res = res + (num * sign)
            res = res * stack.pop()
            res = res + stack.pop()
            num = 0
            sign = 1
        }
        else if (char == '+') {
            res = res + (num * sign)
            sign = 1
            num = 0
        }
        else if (char == '-') {
            res = res + (num * sign)
            sign = -1
            num = 0
        }

        else if(!isNaN(char) && char !== ' ') {
            
                console.log('pchar)', parseInt(char))
                num = num * 10 + parseInt(char)




            
        }

    }

    console.log('num', num)
console.log('res', res)
console.log('sign', sign)
return res += (num * sign)
}



console.log(basicCalculator("1 + 1")) // 2
console.log(basicCalculator(" 2-1 + 2 ")) // 3
console.log(basicCalculator("(1+(4+5+2)-3)+(6+8)")) // 23