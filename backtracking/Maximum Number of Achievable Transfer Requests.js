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