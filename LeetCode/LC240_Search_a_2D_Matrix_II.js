/* 
https://leetcode.com/problems/search-a-2d-matrix-ii/description/

Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted in ascending from left to right.
Integers in each column are sorted in ascending from top to bottom.

TYPE:   ARRAY, MATRIX, GRID, TRICKY, VERY TRICKY, linear on Matrix (m+n)

Example:

Consider the following matrix:

[
  [1,   4,  7, 11, 15],
  [2,   5,  8, 12, 19],
  [3,   6,  9, 16, 22],
  [10, 13, 14, 17, 24],
  [18, 21, 23, 26, 30]
]
Given target = 5, return true.

Given target = 20, return false.


Solution:   https://leetcode.com/problems/search-a-2d-matrix-ii/description/    beats 95.93% JS Submissions.
            Now the approach we first think is like a binary search. However because there is no easy way to divide the matrix.
            The solution is actually not considering the Diagonal as the sort of middle element, but the largest element in first row and smallest in last column.
            
            So first row largest element can help us drill down on which row the target belongs to. 
            If target is greater than last element of first row, then we know no point in checking the smaller elements of the first row. 
            But then we want to check whether the target is greater than next row's last element. So that way basically we drill down on the row.

            Similarly last column smallest element can help us drill down on which column the target belongs to. 
            If target is smaller than first element of last column, then we know no point in checking the greater elements of the last column. 
            But then we want to check whether the target is smaller than previous column's first element. So that way basically we drill down on the column.

            Applying both above conditions together, give us an intuition of pinning down the exact row and column where our element could be present.
            Finally if we reach a stage where our element is not in first row as well as not in first column, 
            then we can safely say we saw the start and end of each row and column and conclude that the element is not present.

 */


/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    if(matrix.length == 0 || matrix[0].length == 0)
        return false;
    let r = 0;
    let c = matrix[0].length - 1;
    while(c >= 0 && r < matrix.length){
        if(matrix[r][c] == target)
            return true;
        else if(target < matrix[r][c])
            c--;
        else
            r++;
    }
    return false;
};

var main = () => {
    console.log(searchMatrix([], 20));
    console.log(searchMatrix([[]], 20));
    console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 20));
    console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 5));
    console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 24));
    console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 13));
};

main();