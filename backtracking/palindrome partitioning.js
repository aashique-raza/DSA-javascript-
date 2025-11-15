var partition = function(s) {
    let result=[]
    let temp=[]

    solve(s,temp,result)

    return result
};

function solve(s,temp,result){

    if(s.length==0){
        result.push([...temp])
        return
    }

    for(let i=0; i<s.length; i++){
        let part=s.substring(0,i+1)

        if(isPalindrome(part)){
            temp.push(part)
            solve(s.substring(i + 1), temp, result);
            temp.pop()
        }
    }
}

function isPalindrome(s){
    let i=0;
    let j=s.length;

    while(i<j){
        if(s[i]!==s[j]){
            return false
        }
        i++
        j--
    }
    return true
}