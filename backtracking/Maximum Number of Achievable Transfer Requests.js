// !Maximum Number of Achievable Transfer Requests

function maximumRequests(n, requests) {

    let maxRequests = 0;
    const netTransfers = new Array(n).fill(0);

    function backtrack(index, count) {
        if (index === requests.length) {
            if (netTransfers.every(transfer => transfer === 0)) {
                maxRequests = Math.max(maxRequests, count);
            }
            return;
        }
        // Include the current request
        const [from, to] = requests[index];
        netTransfers[from]--;
        netTransfers[to]++;
        backtrack(index + 1, count + 1);
        // Backtrack
        netTransfers[from]++;
        netTransfers[to]--;
        // Exclude the current request
        backtrack(index + 1, count);
    }
    backtrack(0, 0);
    return maxRequests;
}

/**
 * @param {number} n - Total number of buildings
 * @param {number[][]} requests - Array of [from, to] requests
 * @return {number} - Maximum number of achievable requests
 */
var maximumRequests = function(n, requests) {
    let maxRequests = 0; // This stores our final answer (result)
    
    // This array tracks the net change in people for each building.
    // Equivalent to 'vector<int> resultant(n, 0)'
    const buildingBalance = new Array(n).fill(0);

    // Helper function for Recursion (Backtracking)
    function solve(index, count) {
        // Base Case: We have considered all requests
        if (index === requests.length) {
            
            // Check if all buildings have a net change of 0
            let allBalanced = true;
            for (let i = 0; i < n; i++) {
                if (buildingBalance[i] !== 0) {
                    allBalanced = false;
                    break;
                }
            }
            
            // If balanced, update the maximum count found so far
            if (allBalanced) {
                maxRequests = Math.max(maxRequests, count);
            }
            return;
        }

        // Logic: TAKE or NOT TAKE pattern

        // --- Option 1: TAKE the request ---
        let [from, to] = requests[index];
        
        buildingBalance[from]--; // Person leaves 'from'
        buildingBalance[to]++;   // Person enters 'to'
        
        // Move to next index, increase count of accepted requests
        solve(index + 1, count + 1);

        // --- BACKTRACK (Undo the changes) ---
        // Before trying the "Not Take" option, we must undo the changes made above
        buildingBalance[from]++;
        buildingBalance[to]--;

        // --- Option 2: NOT TAKE the request ---
        // Move to next index, count remains same
        solve(index + 1, count);
    }

    // Start recursion from index 0 with 0 requests accepted
    solve(0, 0);

    return maxRequests;
};