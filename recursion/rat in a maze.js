

// ! rat in a maze --

class Solution {
    ratInMaze(maze) {
        const n = maze.length;
        const ans = [];

        // if start blocked, no paths
        if (n === 0 || maze[0][0] === 0) return ans;

        const dfs = (i, j, path) => {
            if (i < 0 || j < 0 || i >= n || j >= n || maze[i][j] === 0) return;

            if (i === n - 1 && j === n - 1) {
                ans.push(path);
                return;
            }

            // mark visited
            maze[i][j] = 0;

            // explore (L, R, U, D) as you already used
            dfs(i, j - 1, path + "L");
            dfs(i, j + 1, path + "R");
            dfs(i - 1, j, path + "U");
            dfs(i + 1, j, path + "D");

            // backtrack
            maze[i][j] = 1;
        };

        dfs(0, 0, "");

        // return sorted array (lexicographic) — important for judge
        return ans.sort();
    }
}
