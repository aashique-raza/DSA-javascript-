
// !  largest even number
var largestEven = function(s) {

    let idx=s.length-1
    while(idx>=0){
        if(s[idx]=='1'){
            idx--
        }else{
            break;
        }
    }
    if(idx==-1) return ''
   return s.substring(0,idx+1)
};©leetcode