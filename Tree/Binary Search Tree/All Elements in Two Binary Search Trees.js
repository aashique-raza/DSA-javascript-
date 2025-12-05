
// ! All Elements in Two Binary Search Trees

// approach using extra space--

function inOrder(root, result = []) {
  if (root == null) return result;

  inOrder(root.left, result);
  result.push(root.val);
  inOrder(root.right, result);

  return result;
}

function merge(root1,root2){
 // If both empty:
  if (!root1 && !root2) return [];

  // If one empty → simply return inOrder traversal of other
  if (!root1) return inOrder(root2);
  if (!root2) return inOrder(root1);
    let arr1=inOrder(root1)
    let arr2=inOrder(root2)
    let merge=[]

    let i=0;
    let j=0;
    while(i<arr1.length && j<arr2.length){

        if(arr1[i]<=arr2[j]){
            merge.push(arr1[i])
            i++
        }else{
            merge.push(arr2[j])
            j++
        }
    }
    while(i<arr1.length){
        merge.push(arr1[i])
        i++
    }
    while(j<arr2.length){
        merge.push(arr2[j])
        j++
    }
    return merge
}