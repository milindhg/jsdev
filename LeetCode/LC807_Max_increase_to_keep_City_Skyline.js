/* https://leetcode.com/problems/max-increase-to-keep-city-skyline/description/

In a 2 dimensional array grid, each value grid[i][j] represents the height of a building located there. We are allowed to increase the height of any number of buildings, by any amount (the amounts can be different for different buildings). Height 0 is considered to be a building as well. 

At the end, the "skyline" when viewed from all four directions of the grid, i.e. top, bottom, left, and right, must be the same as the skyline of the original grid. A city's skyline is the outer contour of the rectangles formed by all the buildings when viewed from a distance. See the following example.

What is the maximum total sum that the height of the buildings can be increased?

Example:
Input: grid = [[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]
Output: 35
Explanation: 
The grid is:
[ [3, 0, 8, 4], 
  [2, 4, 5, 7],
  [9, 2, 6, 3],
  [0, 3, 1, 0] ]

The skyline viewed from top or bottom is: [9, 4, 8, 7]
The skyline viewed from left or right is: [8, 7, 9, 3]

The grid after increasing the height of buildings without affecting skylines is:

gridNew = [ [8, 4, 8, 7],
            [7, 4, 7, 7],
            [9, 4, 8, 7],
            [3, 3, 3, 3] ]

Notes:

1 < grid.length = grid[0].length <= 50.
All heights grid[i][j] are in the range [0, 100].
All buildings in grid[i][j] occupy the entire grid cell: that is, they are a 1 x 1 x grid[i][j] rectangular prism.


Solution:   https://leetcode.com/submissions/detail/215560512/  beats 77.27% JS Submissions.
            Basic idea is finding maxheight visible in northview and eastview separately.
            southview is same as northview, and westview is same as eastview - at least from the perspective of macheight.
            Then go over each row and count the height increase required for each small building.
            While counting the height increase for each building first check if it is minimum of the max heights in northview and eastview.
            We do this to keep the skyline as it is. 
            So without disturbing the skyline we find the scope to increase the height of smaller buildings.A


 */


/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxIncreaseKeepingSkyline = function(grid) {
    var i = 0, j = 0;
    var topViewMax = new Array(grid[0].length).fill(0);
    var leftViewMax = new Array(grid.length).fill(0);
    while(i<grid.length){
        j = 0;
        while(j<grid[0].length){
            var elem = grid[i][j];
            topViewMax[j] = Math.max(topViewMax[j],elem);
            leftViewMax[i] = Math.max(leftViewMax[i],elem);
            j++;
        }
        i++;
    }
    // console.log(topViewMax);
    // console.log(leftViewMax);
    
    var ans = 0;
    for(var i in grid){
        for(var j in grid[0])
            ans+= Math.min(topViewMax[j], leftViewMax[i]) - grid[i][j];
    }
    
    // console.log(grid);
    return ans;
};

var main = function(){
    var ans = maxIncreaseKeepingSkyline([[3,0,8,4],[2,4,5,7],[9,2,6,3],[0,3,1,0]]);
    console.log(ans + ' ' + (ans==35 ? 'Correct' : 'Incorrect'));
};

main();