

console.log("Container With Most Water")

// ! Container With Most Water

function maxArea(height){
     let i=0;
    let j=height.length-1;

    let maxArea=0;

    while(i<=j){

      
        let h= Math.min(height[i],height[j])
  
        let w=j-i
   

        let area=h*w

        maxArea=Math.max(maxArea,area)

        if(height[i]>height[j]){
            j--
        }
        else{
            i++
        }


    }

    return maxArea
}

console.log(maxArea([1,8,6,2,5,4,8,3,7]))
console.log(maxArea([1,1]))