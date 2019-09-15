/* 
https://leetcode.com/problems/max-area-of-island/description/

Given a non-empty 2D array grid of 0's and 1's, an island is a group of 1's (representing land) connected 4-directionally (horizontal or vertical.) You may assume all four edges of the grid are surrounded by water.

Find the maximum area of an island in the given 2D array. (If there is no island, the maximum area is 0.)

Example 1:

[[0,0,1,0,0,0,0,1,0,0,0,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,1,1,0,1,0,0,0,0,0,0,0,0],
 [0,1,0,0,1,1,0,0,1,0,1,0,0],
 [0,1,0,0,1,1,0,0,1,1,1,0,0],
 [0,0,0,0,0,0,0,0,0,0,1,0,0],
 [0,0,0,0,0,0,0,1,1,1,0,0,0],
 [0,0,0,0,0,0,0,1,1,0,0,0,0]]
Given the above grid, return 6. Note the answer is not 11, because the island must be connected 4-directionally.
Example 2:

[[0,0,0,0,0,0,0,0]]
Given the above grid, return 0.
Note: The length of each dimension in the given grid does not exceed 50.

TYPE: 2DARRAY, GRID, TRICKY, BACKTRACKING, DFS, ISLAND

Solution:   https://leetcode.com/submissions/detail/260102378/ beats 88.97% JS Submissions.
            Idea is simple, as soon as a cell with value 1 is found, do a DFS and try to see and mark all the elements in this particular island as 0.
            Meanwhile while marking the elements as 0 count the area. This is the DFS aspect. So if there is only 1 island in the grid that one gets covered.
            
            Next time any other 1 is found, it means that there are more than one islands meaning that they are disjoint.
            So follow same approach for that island as well.

            Now marking approach is always up, down, left, right check and update.
 */


/**
 * @param {number[][]} grid
 * @return {number}
 */
var maxAreaOfIsland = function(grid) {
    var ans = 0;
    for(var i=0; i<grid.length; i++){
        for(var j=0; j<grid[0].length; j++){
            if(grid[i][j]==1){  //found candidate island. Do DFS to check if we got max length island.
                var maxIslandSize = [0];
                ans = Math.max(sweep(i,j,grid,maxIslandSize),ans);
                //we can also pass a set of isVisited nodes or other option is we can modify the input array cell itself with 0 to mark the islands as visited.
            }
        }
    }
    return ans;
};

var sweep = function(x,y,grid,maxIslandSize){
    if(grid[x][y]==1) {
        maxIslandSize[0]+=1;
        grid[x][y]=0;
    }
    if(isValidCoords(x+1,y,grid)) sweep(x+1,y,grid,maxIslandSize);
    if(isValidCoords(x-1,y,grid)) sweep(x-1,y,grid,maxIslandSize);
    if(isValidCoords(x,y+1,grid)) sweep(x,y+1,grid,maxIslandSize);
    if(isValidCoords(x,y-1,grid)) sweep(x,y-1,grid,maxIslandSize);
    return maxIslandSize[0];
};

var isValidCoords = function(x,y,grid){
    return (x>=0 && x<grid.length && y>=0 && y<grid[0].length && grid[x][y]==1);
}

var main = () => {
    console.log(maxAreaOfIsland([[1,1,0,0,0],[1,1,0,0,0],[0,0,0,1,1],[0,0,0,1,1]]));
};

main();