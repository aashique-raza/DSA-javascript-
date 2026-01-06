// ! Minimum Time to Complete Trips

// brute force approach--

function minimumTime(trips, totalTrips) {
    for(let i=0; i<trips.length; i++){
        let Time = trips[i];
        let count = 0;
        for(let j=0; j<trips.length; j++){
            count += Math.floor(Time / trips[j]);
        }
        if(count >= totalTrips) return Time;
    }
    return -1;
}
console.log(minimumTime([1,2,3], 5)); // 3