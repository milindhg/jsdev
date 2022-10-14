/*
https://leetcode.com/problems/unique-paths-ii/description/
Follow up for "Unique Paths":

Now consider if some obstacles are added to the grids. How many unique paths would there be?

An obstacle and empty space is marked as 1 and 0 respectively in the grid.

For example,
There is one obstacle in the middle of a 3x3 grid as illustrated below.

[
  [0,0,0],
  [0,1,0],
  [0,0,0]
]
The total number of unique paths is 2.

Note: m and n will be at most 100.

Solution: https://leetcode.com/submissions/detail/301963960/  beats 95.99% JS Submissions.
          The Basic idea is very close to the idea for the problem LC62_Unique_Paths.js easy solution.
          However you have to somehow use some other sentinel than 1 to indicate blocked path while solving the problem.
          So that you don't mix up 1's by adding 1 to find next cell in that row / cols values.
          Another way to improve performance could be to have a map of all the obstacles. However still obstacles marking will need to traverse the matrix once first.

*/

/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function (obstacleGrid) {
    var m = obstacleGrid.length;
    var n = obstacleGrid[0].length;
    //Mark all obstacles with sentinel like $ in this case.
    for (var i = 0; i < m; i++)
        for (var j = 0; j < n; j++)
            if (obstacleGrid[i][j] == 1)
                obstacleGrid[i][j] = '$';

    // Mark first column of all the rows to $ if there is a $ found. i.e. the first column down is not reachable if obstacle detected.
    for (var i = 0; i < m; i++) {
        if (obstacleGrid[i][0] == '$')
            while (i < m) {
                obstacleGrid[i][0] = '$';
                i++;
            }
        else
            obstacleGrid[i][0] = 1;
    }

    // Mark first row of all the columns to $ if there is a $ found. i.e. the first row right is not reachable if obstacle detected.
    for (var j = 0; j < n; j++) {
        if (obstacleGrid[0][j] == '$')
            while (j < n) {
                obstacleGrid[0][j] = '$';
                j++;
            }
        else
            obstacleGrid[0][j] = 1;
    }

    //Then use similar approach to LC62 easy solution.
    for (var i = 1; i < m; i++)
        for (var j = 1; j < n; j++) {
            if (obstacleGrid[i][j] == '$') continue;
            var prevRowCell, prevColCell;
            if (obstacleGrid[i][j - 1] == '$')
                prevRowCell = 0;
            else
                prevRowCell = obstacleGrid[i][j - 1];
            if (obstacleGrid[i - 1][j] == '$')
                prevColCell = 0;
            else
                prevColCell = obstacleGrid[i - 1][j];
            obstacleGrid[i][j] = prevRowCell + prevColCell;
        }

    return obstacleGrid[m - 1][n - 1] == '$' ? 0 : obstacleGrid[m - 1][n - 1];
};

var main = () => {
    var input = [[0, 0, 0], [0, 1, 0], [0, 0, 0]];
    console.log(uniquePathsWithObstacles(input));
    input = [[0, 0, 0], [0, 0, 0], [0, 1, 0], [0, 0, 0]];
    console.log(uniquePathsWithObstacles(input));
    input = [[1]];
    console.log(uniquePathsWithObstacles(input));
};

main();