/* https://leetcode.com/problems/minimum-path-sum/description/

Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

Example:

Input:
[
  [1,3,1],
  [1,5,1],
  [4,2,1]
]
Output: 7
Explanation: Because the path 1→3→1→1→1 minimizes the sum.


Solution:   https://leetcode.com/submissions/detail/302124850/  beats 96.23% JS Submissions
            The basic idea is to do this without recursion via same technique as used in problem LC62 and LC63.
            So first update the numbers in first row and first column.
            Then start from cell 1,1 (i.e. cell - second row, second column) and keep updating each cell with summation of itself and minimum of prevRowCelVal or prevColCellVal.
            Finally the last row, last column i.e. bottom right corner will automatically be updated with the correct value.
            Return last row, last column value as answer.

 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
    var m = grid.length;
    var n = grid[0].length;
    //Fill first row with correct values and update grid
    for(var i=1; i<m; i++){
        grid[i][0] = grid[i-1][0]+grid[i][0];
    }
    
    //Fill first column with correct values and update grid
    for(var j=1; j<n; j++){
        grid[0][j] = grid[0][j-1]+grid[0][j];
    }
    
    for(var i=1; i<m; i++)
        for(var j=1; j<n; j++){
            var prevRowCell = grid[i][j-1];
            var prevColCell = grid[i-1][j];
            grid[i][j] = Math.min(prevRowCell, prevColCell) + grid[i][j];
        }
    
    return grid[m-1][n-1];
};


var main = () => {
    console.log(minPathSum([[1,3,1],[1,5,1],[4,2,1]]));
};

main();