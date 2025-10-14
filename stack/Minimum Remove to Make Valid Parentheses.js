

// ! Minimum Remove to Make Valid Parentheses

var minRemoveToMakeValid = function(s) {
    let openStack=[]
    let result=''
    let map=new Map()

    for(let i=0; i<s.length; i++){
        if(s[i]==')'){
            if(openStack.length!==0){
                openStack.pop()
            }else{
                map.set(i,1)
            }
        }
        if(s[i]=='('){
            openStack.push(i)
        }
    }

    while(openStack.length!==0){
        map.set(openStack.pop(),1)
    }

    for(let j=0; j<s.length; j++){
        if(!map.has(j)){
            result+=s[j]
        }
    }
    return result
};