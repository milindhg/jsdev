/* https://leetcode.com/problems/spiral-matrix/description/

Given a matrix of m x n elements (m rows, n columns), return all elements of the matrix in spiral order.

Example 1:

Input:
[
 [ 1, 2, 3 ],
 [ 4, 5, 6 ],
 [ 7, 8, 9 ]
]
Output: [1,2,3,6,9,8,7,4,5]
Example 2:

Input:
[
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9,10,11,12]
]
Output: [1,2,3,4,8,12,11,10,9,5,6,7]

Solution:   https://leetcode.com/submissions/detail/186435669/  beats 98.64% JS Submissions.
            The problem is similar to LC59 Spiral Matrix II.
            Well basically trick is to have 2 indices as traversal for row and column.
            Also have 2 more indices per row and column for tracking valid min and max of the row and column respectively.
            
            Now the condition on the while loop is very important and tricky. 
            Also there is additional check same as while loop required before every inside for loop. The main reason of doing it is in this problem we do not have symmetric matrix. i.e. m!=n.
            
            Another simple to read solution with same approach available here - https://leetcode.com/problems/spiral-matrix/discuss/20570/Clean-Java-readable-human-friendly-code

 */

/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    if (!matrix.length) return [];
    var rowStart = 0;
    var rowEnd = matrix.length - 1;
    var colStart = 0;
    var colEnd = matrix[0].length - 1;
    var num = 1;  // This will basically track total number of cells in the matrix. And there is going to be atleast 1 cell as per constraints.
    var ansarr = [];

    while (num <= (matrix.length * matrix[0].length)) {
        var i = rowStart;
        var j = colStart
        if (num > (matrix.length * matrix[0].length)) break;
        for (j = colStart; j <= colEnd; j++) {        //Top horizontal line
            ansarr.push(matrix[i][j]);
            num++
        }
        j--;
        rowStart++;

        if (num > (matrix.length * matrix[0].length)) break;
        for (i = rowStart; i <= rowEnd; i++) {       //right vertical line
            ansarr.push(matrix[i][j]);
            num++
        }
        i--;

        colEnd--;
        if (num > (matrix.length * matrix[0].length)) break;
        for (j = colEnd; j >= colStart; j--) {        //Bottom horizontal line
            ansarr.push(matrix[i][j]);
            num++
        }
        j++

        rowEnd--;
        if (num > (matrix.length * matrix[0].length)) break;
        for (i = rowEnd; i >= rowStart; i--) {        //left vertical line
            ansarr.push(matrix[i][j]);
            num++;
        }
        i++

        colStart++;

    }

    return ansarr;

};

var main = function () {
    var matrix = [[1, 2, 3]];
    var ans = spiralOrder(matrix);
    console.log(ans);
};

main();