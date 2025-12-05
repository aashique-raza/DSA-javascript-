
// ! find the winner of circle

var findTheWinner = function(n, k) {
    let person = new Array(n).fill(0);
    
    let winnerIndex = winnerHelper(person, n, 0, n, k);
    
    return winnerIndex + 1;
};
function winnerHelper(person, n, index, person_left, k) {
    
    if (person_left === 1) {
        for (let i = 0; i < n; i++) {
            if (person[i] === 0) {
                return i;
            }
        }
    }
    
    let kill_steps = (k - 1) % person_left;
    
    while (kill_steps-- > 0) {
        index = (index + 1) % n;
        
        while (person[index] === 1) {
            index = (index + 1) % n;
        }
    }
    
    person[index] = 1; 
    
    while (person[index] === 1) {
        index = (index + 1) % n;
    }
    
    return winnerHelper(person, n, index, person_left - 1, k);
}