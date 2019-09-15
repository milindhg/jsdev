/* 
https://leetcode.com/problems/island-perimeter/description/

You are given a map in form of a two-dimensional integer grid where 1 represents land and 0 represents water.

Grid cells are connected horizontally/vertically (not diagonally). The grid is completely surrounded by water, and there is exactly one island (i.e., one or more connected land cells).

The island doesn't have "lakes" (water inside that isn't connected to the water around the island). One cell is a square with side length 1. The grid is rectangular, width and height don't exceed 100. Determine the perimeter of the island.

 

Example:

Input:
[[0,1,0,0],
 [1,1,1,0],
 [0,1,0,0],
 [1,1,0,0]]

Output: 16

Explanation: The perimeter is the 16 yellow stripes in the image below:


Solution:   https://leetcode.com/submissions/detail/260904903/ beats 95.31% JS Submissions
            Approach is very simple for every coordinate in the grid when the element is 1, check below

            Check the up, down, left, right neighboring elements. If you get invalid coordinates (i.e. out of grid x,y) or the element is 0 add 1 to perimeter.


 */

/**
 * @param {number[][]} grid
 * @return {number}
 */
var islandPerimeter = function(grid) {
    var perimeter = 0;
    for(var i=0; i<grid.length; i++){
        for(var j=0; j<grid[0].length; j++){
            if(grid[i][j]==1){
                if(toAddPerimeter(i+1,j,grid)) perimeter++;
                if(toAddPerimeter(i-1,j,grid) ) perimeter++;
                if(toAddPerimeter(i,j+1,grid) ) perimeter++;
                if(toAddPerimeter(i,j-1,grid) ) perimeter++;
            }
        }
    }
    return perimeter;
};

var toAddPerimeter = function(x,y, grid){
    if(x>=0 && x<grid.length && y>=0 && y<grid[0].length){
        if(grid[x][y]==0) return true;
        else return false;
    }
    return true;
}

var main = () => {
    console.log(islandPerimeter([[0,1,0,0],[1,1,1,0],[0,1,0,0],[1,1,0,0]]));
};
main();