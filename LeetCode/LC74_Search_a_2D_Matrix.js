/* 
https://leetcode.com/problems/search-a-2d-matrix/description/

Write an efficient algorithm that searches for a value in an m x n matrix. This matrix has the following properties:

Integers in each row are sorted from left to right.
The first integer of each row is greater than the last integer of the previous row.
Example 1:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 3
Output: true
Example 2:

Input:
matrix = [
  [1,   3,  5,  7],
  [10, 11, 16, 20],
  [23, 30, 34, 50]
]
target = 13
Output: false

Solution:   https://leetcode.com/submissions/detail/322380463/ beats 97.13% JS Submissions.

 */

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let i = 0;
    let j = (matrix.length * matrix[0].length)-1;
    while(i<=j){
        let midpoint = Math.floor(i + (j-i)/2);
        let r = Math.floor(midpoint/matrix[0].length);
        let c = midpoint % matrix[0].length;
        if(target == matrix[r][c]){
           return true;
        }else if(target < matrix[r][c]){
            j = midpoint-1;
        }else{
            i = midpoint+1;
        }
    }
    return false;
};

var main = ()=>{
    console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]], 3));
    console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]], 7));
    console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]], 33));
    console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]], 50));
    console.log(searchMatrix([[1,3,5,7],[10,11,16,20],[23,30,34,50]], 20));
};

main();