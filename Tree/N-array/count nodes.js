//  ! count nodes--

//  approach 1->  level order-->

function countNodes(root) {
  if (!root) return 0;

  let queue = [root];
  let sum = 0;
  while (queue.length > 0) {
    let curr = queue.shift();
    sum++;

    for (let child of curr.children) {
      queue.push(child);
    }
  }

  return sum;
}

function countNodes2(root) {
  if (!root) return 0;

  let queue = [root];
  let i = 0;
  while (queue.length > i) {
    let curr = queue[i++];

    for (let child of curr.children) {
      queue.push(child);
    }
  }
  return queue.length;
}

//  aproach 2 using recursion
function countNodes3(root) {
  if (!root) return 0;

  let sum = 1;

  for (let child of root.children) {
    sum += countNodes3(child);
  }

  return sum;
}

//  ! count leaf nodes--
//  approach 1--level order traversal--

function countLeaf(root) {
  if (!root) return 0;

  let queue = [root];
  let i = 0;
  let leaf = 0;
  while (queue.length > i) {
    let curr = queue[i++];

    if (curr.children.length == 0) {
      leaf++;
    } else {
      for (let child of curr.children) {
        queue.push(child);
      }
    }
  }
  return leaf;
}

//  approach 2-- recursion--

function countLeaf2(root) {
  if (!root) return 0;

  if (!root.children || root.children.length === 0) {
    return 1; 
  }

  let sum = 0;
  for (let child of root.children) {
    sum += countLeaf2(child); // recursive count
  }

  return sum;
}
