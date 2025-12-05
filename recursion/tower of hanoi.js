
// ! tower of hanoi 
 function towerOfHanoi(n, source, destination, auxiliary) {
     if (n === 1) {
         console.log(`Move disk 1 from rod ${source} to rod ${destination}`);
         return;
     }  

        towerOfHanoi(n - 1, source, auxiliary, destination);
        console.log(`Move disk ${n} from rod ${source} to rod ${destination}`);
        towerOfHanoi(n - 1, auxiliary, destination, source);
 }  
    // Example usage:
    const numDisks = 3;
    towerOfHanoi(numDisks, 'A', 'C', 'B'); // A, B and C are names of rods