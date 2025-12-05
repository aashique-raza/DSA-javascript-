

// ! robot collision

var survivedRobotsHealths = function(positions, healths, directions) {
    
    const n = positions.length;
    const robots = [];
    for (let i = 0; i < n; i++) {
        robots.push({ position: positions[i], health: healths[i], direction: directions[i], index: i });
    }
    robots.sort((a, b) => a.position - b.position);

    console.log('robots',robots);
    const stack = [];
    for (const robot of robots) {
        if (robot.direction === 'R') {
            stack.push(robot);
        } else {
            while (stack.length > 0 && stack[stack.length - 1].direction === 'R' && robot.health > 0) {
                const lastRobot = stack[stack.length - 1];
                if (lastRobot.health < robot.health) {
                    robot.health -= 1;
                    stack.pop();
                }
                else if (lastRobot.health === robot.health) {
                    robot.health = 0;
                    stack.pop();
                }
                else {
                    lastRobot.health -= 1;
                    robot.health = 0;
                }
            }
            if (robot.health > 0) {
                stack.push(robot);
            }
        }
    }
    stack.sort((a, b) => a.index - b.index);
    const result = [];
    for (const robot of stack) {
        result.push(robot.health);
    }
    return result;
};

// --- Example ---
const positions = [5, 3, 2, 6];
const healths = [10, 10, 15, 12];
const directions = "RLRL";
console.log(survivedRobotsHealths(positions, healths, directions));
// Output: [14]