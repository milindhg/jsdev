/* 

https://leetcode.com/problems/reshape-the-matrix/

566. Reshape the Matrix
Easy

2766

313

Add to List

Share
In MATLAB, there is a handy function called reshape which can reshape an m x n matrix into a new one with a different size r x c keeping its original data.

You are given an m x n matrix mat and two integers r and c representing the number of rows and the number of columns of the wanted reshaped matrix.

The reshaped matrix should be filled with all the elements of the original matrix in the same row-traversing order as they were.

If the reshape operation with given parameters is possible and legal, output the new reshaped matrix; Otherwise, output the original matrix.

 

Example 1:


Input: mat = [[1,2],[3,4]], r = 1, c = 4
Output: [[1,2,3,4]]
Example 2:


Input: mat = [[1,2],[3,4]], r = 2, c = 4
Output: [[1,2],[3,4]]
 

Constraints:

m == mat.length
n == mat[i].length
1 <= m, n <= 100
-1000 <= mat[i][j] <= 1000
1 <= r, c <= 300
Accepted
292,320
Submissions
466,535

Solution:   https://leetcode.com/submissions/detail/821102460/ beats 72% JS Submissions.
Simple solution is to use the 2 nested for loops.
Simply traverse through every element and put it in the right place in the new answer array.
For answer array to be ready, prepare it or build it as you go.
Choose the right index of target array to populate and use modulo operator to reset columns as we switch to next row.

One important check necessary is to see total number of cells match in source and target matrix, if they don't match return the input array.

Runtime: O(m*n)
Space: O(m*n)


 */


/**
 * @param {number[][]} mat
 * @param {number} r
 * @param {number} c
 * @return {number[][]}
 */
var matrixReshape = function (mat, r, c) {
    if (mat.length * mat[0].length != r * c) {
        return mat;
    } else {
        let ans = Array(r).fill().map(() => Array(c).fill(0));
        let currRow = 0;
        let currCol = 0;
        for (let i = 0; i < mat.length; i++) {
            for (let j = 0; j < mat[0].length; j++) {
                if (currCol == c) {
                    currRow++;
                    currCol = currCol % c;
                }
                ans[currRow][currCol++] = mat[i][j];
            }
        }
        // console.log(JSON.stringify(ans));
        return ans;
    }
};

let main = () => {
    let input = [[1, 2], [3, 4]];
    console.log("Input is " + JSON.stringify(input));
    console.log(JSON.stringify(matrixReshape(input, 1, 4)));
    console.log(JSON.stringify(matrixReshape(input, 4, 1)));
    console.log(JSON.stringify(matrixReshape(input, 5, 4)));
};

main();