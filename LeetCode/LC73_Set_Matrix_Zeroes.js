/* https://leetcode.com/problems/set-matrix-zeroes/description/

Given a m x n matrix, if an element is 0, set its entire row and column to 0. Do it in-place.

Example 1:

Input: 
[
  [1,1,1],
  [1,0,1],
  [1,1,1]
]
Output: 
[
  [1,0,1],
  [0,0,0],
  [1,0,1]
]
Example 2:

Input: 
[
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
Output: 
[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
Follow up:

A straight forward solution using O(mn) space is probably a bad idea.
A simple improvement uses O(m + n) space, but still not the best solution.
Could you devise a constant space solution?


Solution:   https://leetcode.com/submissions/detail/211908789/  beats 53% JS Submissions
            https://leetcode.com/submissions/detail/735433254/ beats 99.34% js submissions
            hint use the first index of row and column as the flagger to check whether we need to update this row and column to 0. Then iterate over the first row and first column and check and update respective rows and columns to 0.
            So whenever you encounter a cell with value 0, call updateRowCol function to update that cells i row and j column to $ for all cells which are Non-zero.
            Then run a similar double for loop to basically turn all $s into 0s.

 */


/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroesComplicated = function (matrix) {
    //hint use the first index of row and column as the flagger to check whether we need to update this row and column to 0. Then iterate over the first row and first column and check and update respective rows and columns to 0.

    //mark topLeftCornerFlag
    var topLeftCornerFlag = (matrix[0][0] == 0 ? true : false);
    // console.log(topLeftCornerFlag);

    for (var i = 0; i < matrix.length; i++) {
        for (var j = 0; j < matrix[0].length; j++) {
            if (matrix[i][j] == 0) {
                matrix[i][0] = '$';
                matrix[0][j] = '$';
            }
        }
    }

    //loop over first column
    for (var i = matrix.length - 1; i > 0; i--) {
        if (matrix[i][0] == '$') {
            matrix[i][0] = 0;
            for (var j = 0; j < matrix[0].length; j++) {
                /* if (i == 0 && j == 0 && matrix[0][0] == '$$') {
                    matrix[0][0] == '$$';
                } else { */
                matrix[i][j] = 0;
                /* } */
            }
        }
    }

    //loop over first row
    for (var j = matrix[0].length - 1; j > 0; j--) {
        if (matrix[0][j] == '$') {
            matrix[0][j] = 0;
            for (var i = 0; i < matrix.length; i++) {
                /* if (i == 0 && j == 0 && matrix[0][0] == '$$') {
                    matrix[0][0] == '$$';
                } else { */
                matrix[i][j] = 0;
                /* } */
            }
        }
    }

    if (matrix[0][0] == '$') {
        matrix[0][0] = 0;
        if (topLeftCornerFlag) {
            //set complete first column as zero.
            var j = 0;
            for (var i = 1; i < matrix.length; i++) {
                matrix[i][j] = 0;
            }

            //set complete first row as zero.
            var i = 0;
            for (var j = 1; j < matrix[0].length; j++) {
                matrix[i][j] = 0;
            }
        }
    } /* else if (matrix[0][0] == '$') {
        matrix[0][0] = 0;
    } */

    /* if (matrix[0][0] == 0 && topLeftCornerFlag == true) {
        //set complete first column as zero.
        var j = 0;
        for (var i = 1; i < matrix.length; i++) {
            matrix[i][j] = 0;
        }

        //set complete first row as zero.
        var i = 0;
        for (var j = 1; j < matrix[0].length; j++) {
            matrix[i][j] = 0;
        }
    } */
};


//A very easy to read and understand solution with O(1) space.
/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 * https://leetcode.com/submissions/detail/735433254/ beats 99.34% js submissions
 * 
 */
var setZeroes = function (matrix) {
    //hint use the first index of row and column as the flagger to check whether we need to update this row and column to 0. Then iterate over the first row and first column and check and update respective rows and columns to 0.

    for (var i = 0; i < matrix.length; i++)
        for (var j = 0; j < matrix[0].length; j++)
            if (matrix[i][j] == 0) updateRowCol(matrix, i, j);
    // console.log(matrix);
    for (var i = 0; i < matrix.length; i++)
        for (var j = 0; j < matrix[0].length; j++)
            if (matrix[i][j] == '$') matrix[i][j] = 0;

};


var updateRowCol = function (matrix, i, j) {
    for (var k = 0; k < matrix[i].length; k++)
        if (k != j && matrix[i][k] != 0) matrix[i][k] = '$';
    for (var k = 0; k < matrix.length; k++)
        if (k != i && matrix[k][j] != 0) matrix[k][j] = '$';
}


var main = function () {
        var input = [[1,1,1],[1,0,1],[1,1,1]];
        console.log(input);
        setZeroes(input);
        console.log(input);
        input = [[0,1,2,0],[3,4,5,2],[1,3,1,5]];
        console.log(input);
        setZeroes(input);
        console.log(input);
        input = [[1,1,1],[0,1,2]];
        console.log(input);
        setZeroes(input);
        console.log(input);
    input = [[1,0,3]];
    console.log(input);
    setZeroes(input);
    console.log(input);
    input = [[1, 2, 3, 4], [5, 0, 7, 8], [0, 10, 11, 12], [13, 14, 15, 0]];
    console.log(input);
    setZeroes(input);
    console.log(input);
    input = [[0, 1, 2, 0], [3, 4, 5, 2], [1, 3, 1, 5]];
    console.log(input);
    setZeroes(input);
    console.log(input);
    input = [[1, 0, 3]];
    console.log(input);
    setZeroes(input);
    console.log(input);
};

main();