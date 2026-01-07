// !-- cookie distribution--


var distributeCookies = function(cookies, k) {
    
    let children = new Array(k).fill(0);
    let minUnfairness = Infinity;

    function backtrack(index) {
        if (index === cookies.length) {
            const currentUnfairness = Math.max(...children);
            minUnfairness = Math.min(minUnfairness, currentUnfairness);
            return;
        }
        for (let i = 0; i < k; i++) {
            children[i] += cookies[index];
            backtrack(index + 1);
            children[i] -= cookies[index];
            if (children[i] === 0) break; // Optimization: avoid redundant distributions
        }
    }

    backtrack(0);

    return minUnfairness
};