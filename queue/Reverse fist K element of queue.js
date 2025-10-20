
// ! reverse first k elements of queue


 function reverseFirstK(q, k) {
        // code here
        if(q.length==0)return
        if(q.length==1) return q
        if(k==0) return q
        if(k>q.length) return q
        let stack=[]
        let i=0;
        
        while(i<k){
            stack.push(i)
            i++
        }
        
        let j=0;
        while(j<Math.floor(k/2)){
            let idx=stack.pop()
            
            let temp=q[idx]
            q[idx]=q[j]
            q[j]=temp
            j++
        }
        return q
    }