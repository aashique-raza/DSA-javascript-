

// ! Lowest Common Ancesstor-- approach 1 using extra space--

function findRoute(root, target, route = []) {
    if (root == null) return route;
    route.push(root);

    if (target < root.val) {
        return findRoute(root.left, target, route);
    } else if (target > root.val) {
        return findRoute(root.right, target, route);
    } else {
        return route;
    }
}

var lowestCommonAncestor = function(root, p, q) {
    
    if (root == null) return null;

  
    let arr1 = findRoute(root, p.val, []);
    let arr2 = findRoute(root, q.val, []);

    let i = 0;

    while (i < arr1.length && i < arr2.length) {
        if (arr1[i].val !== arr2[i].val) {
            return arr1[i - 1];
        }
        i++;
    }

    return arr1[i - 1];
};
