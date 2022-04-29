/* /* 
https://leetcode.com/problems/as-far-from-land-as-possible/description/

Given an N x N grid containing only values 0 and 1, where 0 represents water and 1 represents land, find a water cell such that its distance to the nearest land cell is maximized and return the distance.

The distance used in this problem is the Manhattan distance: the distance between two cells (x0, y0) and (x1, y1) is |x0 - x1| + |y0 - y1|.

If no land or water exists in the grid, return -1.

 

Example 1:



Input: [[1,0,1],[0,0,0],[1,0,1]]
Output: 2
Explanation: 
The cell (1, 1) is as far as possible from all the land with distance 2.
Example 2:



Input: [[1,0,0],[0,0,0],[0,0,0]]
Output: 4
Explanation: 
The cell (2, 2) is as far as possible from all the land with distance 4.
 

Note:

1 <= grid.length == grid[0].length <= 100
grid[i][j] is 0 or 1


Solution:       https://leetcode.com/submissions/detail/305525076/ beats 31.96% JS Submissions.


 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxDistance = function (grid) {
    var m = grid.length;
    var n = grid[0].length;
    var queue = [];
    queue.push('$');
    var visited = [];
    //initialize memoization visited arr with all cells = false
    for (var i = 0; i < m; i++) {
        visited[i] = [];
        for (var j = 0; j < n; j++)
            visited[i].push(false);
    }

    //Add first set of 1s/Land in the queue
    for (var i = 0; i < m; i++) {
        for (var j = 0; j < n; j++) {
            if (grid[i][j] == 1) {
                queue.push([i, j]);
                visited[i][j] = true;
            }
        }
    }

    var directions = [[0, 1], [0, -1], [1, 0], [-1, 0]];
    var level = -1;
    while (queue.length > 1) {
        var coords = queue.shift();
        if (coords == '$') {
            level++;
            queue.push('$');
        }
        for (var index = 0; index < directions.length; index++) {
            var direction = directions[index];
            var r = coords[0] + direction[0];
            var c = coords[1] + direction[1];
            if (r >= 0 && r < m && c >= 0 && c < n && visited[r][c] != true) {
                queue.push([r, c]);
                visited[r][c] = true;
            }
        }
    }
    return level <= 0 ? -1 : level;
};

var main = () => {
    console.log(maxDistance([[1, 0, 1], [0, 0, 0], [1, 0, 1]]));
    console.log(maxDistance([[1, 1, 1], [1, 1, 1], [1, 1, 1]]));
    console.log(maxDistance([[0, 0, 0], [0, 0, 0], [0, 0, 0]]));
};

main();