/* 
https://leetcode.com/problems/flood-fill/description/

An image is represented by a 2-D array of integers, each integer representing the pixel value of the image (from 0 to 65535).

Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood fill, and a pixel value newColor, "flood fill" the image.

To perform a "flood fill", consider the starting pixel, plus any pixels connected 4-directionally to the starting pixel of the same color as the starting pixel, plus any pixels connected 4-directionally to those pixels (also with the same color as the starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.

At the end, return the modified image.

Example 1:
Input: 
image = [[1,1,1],[1,1,0],[1,0,1]]
sr = 1, sc = 1, newColor = 2
Output: [[2,2,2],[2,2,0],[2,0,1]]
Explanation: 
From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected 
by a path of the same color as the starting pixel are colored with the new color.
Note the bottom corner is not colored 2, because it is not 4-directionally connected
to the starting pixel.
Note:

The length of image and image[0] will be in the range [1, 50].
The given starting pixel will satisfy 0 <= sr < image.length and 0 <= sc < image[0].length.
The value of each color in image[i][j] and newColor will be an integer in [0, 65535].

TYPE:   FLOOD FILL, 2DARRAY, GRID, TRICKY, BACKTRACKING, DFS, ISLAND

Solution:   https://leetcode.com/submissions/detail/261269266/ beats 89.77 % JS Submissions.
            Idea is simple start with the first given pixel and note its oldcolor.
            Then change the color to new color.
            Then check for all the neighboring pixels in recursion to see if they have the same color. 
            For the pixels that have same color, change the color to new color. For other pixels, don't do recursive search.
            At the end of all the recursion, you'll get the changed patch in the image.

 */

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} newColor
 * @return {number[][]}
 */
var floodFill = function(image, sr, sc, newColor) {
    var oldColor = image[sr][sc];
    floodFillHelper(image, sr, sc, newColor, oldColor);
    return image;
};

var floodFillHelper = function(image, sr, sc, newColor, oldColor){
    if(image[sr][sc]==oldColor && image[sr][sc]!=newColor){
        image[sr][sc] = newColor;
        if(isValid(sr+1,sc,image) && image[sr+1][sc] == oldColor && image[sr+1][sc] != newColor) floodFillHelper(image, sr+1, sc, newColor, oldColor);
        if(isValid(sr-1,sc,image) && image[sr-1][sc] == oldColor && image[sr-1][sc] != newColor) floodFillHelper(image, sr-1, sc, newColor, oldColor);
        if(isValid(sr,sc+1,image) && image[sr][sc+1] == oldColor && image[sr][sc+1] != newColor) floodFillHelper(image, sr, sc+1, newColor, oldColor);
        if(isValid(sr,sc-1,image) && image[sr][sc-1] == oldColor && image[sr][sc-1] != newColor) floodFillHelper(image, sr, sc-1, newColor, oldColor);
    }
}

var isValid = function(x,y,grid){
    return (x>=0 && x<grid.length && y>=0 && y<grid[0].length)
};



var main = function(){
    console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]],1,1,2));
    console.log(floodFill([[0,0,0],[0,0,0]],0,0,2));
};

main();