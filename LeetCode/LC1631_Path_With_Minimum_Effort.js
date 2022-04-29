/* 

https://leetcode.com/problems/path-with-minimum-effort/

You are a hiker preparing for an upcoming hike. You are given heights, a 2D array of size rows x columns, where heights[row][col] represents the height of cell (row, col). You are situated in the top-left cell, (0, 0), and you hope to travel to the bottom-right cell, (rows-1, columns-1) (i.e., 0-indexed). You can move up, down, left, or right, and you wish to find a route that requires the minimum effort.

A route's effort is the maximum absolute difference in heights between two consecutive cells of the route.

Return the minimum effort required to travel from the top-left cell to the bottom-right cell.

 

Example 1:



Input: heights = [[1,2,2],[3,8,2],[5,3,5]]
Output: 2
Explanation: The route of [1,3,5,3,5] has a maximum absolute difference of 2 in consecutive cells.
This is better than the route of [1,2,2,2,5], where the maximum absolute difference is 3.
Example 2:



Input: heights = [[1,2,3],[3,8,4],[5,3,5]]
Output: 1
Explanation: The route of [1,2,3,4,5] has a maximum absolute difference of 1 in consecutive cells, which is better than route [1,3,5,3,5].
Example 3:


Input: heights = [[1,2,1,1,1],[1,2,1,2,1],[1,2,1,2,1],[1,2,1,2,1],[1,1,1,2,1]]
Output: 0
Explanation: This route does not require any effort.
 

Constraints:

rows == heights.length
columns == heights[i].length
1 <= rows, columns <= 100
1 <= heights[i][j] <= 106


 */

/**
 * @param {number[][]} heights
 * @return {number}
 */
var minimumEffortPath = function (heights) {
    const m = heights.length;
    const n = heights[0].length;
    var arr = Array(m).fill(null).map(() => Array(n).fill(Number.MAX_VALUE));
    arr[0][0] = 0;
    // console.log(JSON.stringify(arr));

    for(var i=0; i<m; i++)
        for(var j=0; j<n; j++){
            if(i+1<m) arr[i+1][j] = Math.min(Math.max(arr[i][j],Math.abs(heights[i+1][j]-heights[i][j])),arr[i+1][j]);
            if(i>0) arr[i-1][j] = Math.min(Math.max(arr[i][j],Math.abs(heights[i-1][j]-heights[i][j])),arr[i-1][j]);
            if(j+1<n) arr[i][j+1] = Math.min(Math.max(arr[i][j],Math.abs(heights[i][j+1]-heights[i][j])),arr[i][j+1]);
            if(j>0) arr[i][j-1] = Math.min(Math.max(arr[i][j],Math.abs(heights[i][j-1]-heights[i][j])),arr[i][j-1]);
        }

    // console.log(arr[m-1][n-1]);
    return arr[m-1][n-1];
};

var main = () => {
    let heights = [[1,2,2],[3,8,2],[5,3,5]];
    console.log(minimumEffortPath(heights));
    heights = [[1,2,3],[3,8,4],[5,3,5]];
    console.log(minimumEffortPath(heights));
    heights = [[1, 2, 1, 1, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 2, 1, 2, 1], [1, 1, 1, 2, 1]];
    console.log(minimumEffortPath(heights));
};

main();