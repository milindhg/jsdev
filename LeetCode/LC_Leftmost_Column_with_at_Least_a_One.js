/* 

https://leetcode.com/explore/featured/card/30-day-leetcoding-challenge/530/week-3/3306/

(This problem is an interactive problem.)

A binary matrix means that all elements are 0 or 1. For each individual row of
the matrix, this row is sorted in non-decreasing order.

Given a row-sorted binary matrix binaryMatrix, return leftmost column
index(0-indexed) with at least a 1 in it. If such index doesn't exist, return
-1.

You can't access the Binary Matrix directly.  You may only access the matrix
using a BinaryMatrix interface:

BinaryMatrix.get(x, y) returns the element of the matrix at index (x, y)
(0-indexed).  BinaryMatrix.dimensions() returns a list of 2 elements [m, n],
which means the matrix is m * n.  Submissions making more than 1000 calls to
BinaryMatrix.get will be judged Wrong Answer.  Also, any solutions that attempt
to circumvent the judge will result in disqualification.

For custom testing purposes you're given the binary matrix mat as input in the
following four examples. You will not have access the binary matrix directly.

TYPE:   REVERSE MATRIX ITERATION, MATRIX, 2D ARRAY, FROM BACK PATTERN, TOP DOWN

Example 1:



Input: mat = [[0,0],[1,1]]
Output: 0
Example 2:



Input: mat = [[0,0],[0,1]]
Output: 1
Example 3:



Input: mat = [[0,0],[0,0]]
Output: -1
Example 4:



Input: mat = [[0,0,0,1],[0,0,1,1],[0,1,1,1]]
Output: 1
 

Constraints:

m == mat.length
n == mat[i].length
1 <= m, n <= 100
mat[i][j] is either 0 or 1.
mat[i] is sorted in a non-decreasing way.
   Hide Hint #1  
1. (Binary Search) For each row do a binary search to find the leftmost one on
   that row and update the answer.
   Hide Hint #2  
2. (Optimal Approach) Imagine there is a pointer p(x, y) starting from top right
   corner. p can only move left or down. If the value at p is 0, move down. If
   the value at p is 1, move left. Try to figure out the correctness and time
   complexity of this algorithm.

Solution:   As the hint above number 2 is really very intuitive and easy to understand.


 */



// This is the BinaryMatrix's API interface.
// You should not implement it, or speculate about its implementation
function BinaryMatrix() {
    // @param {integer} x, y
    // @return {integer}
    this.setBinaryMatrix = (input) => this.matrix = input;

    this.get = function(x, y) {
        return this.matrix[x][y];
    };

    // @return {[integer, integer]}
    this.dimensions = function() {
        return [this.matrix.length, this.matrix[0].length];
    };
};


/**
 * @param {BinaryMatrix} binaryMatrix
 * @return {number}
 */
var leftMostColumnWithOne = function(binaryMatrix) {
    let [M, N] = binaryMatrix.dimensions();
    let [i, j] = [0, N-1];
    let minCol = N;
    while(i < M && j >= 0){
        let cell = binaryMatrix.get(i, j);
        if(cell == 0)
            i++;
        else{
            minCol = Math.min(minCol, j);
            j--;
        }
    }

    return (minCol == N) ? -1 : minCol;
};

let main = () => {
    let binaryMatrix = new BinaryMatrix();
    binaryMatrix.setBinaryMatrix([[0,0,0,1],[0,0,1,1],[0,1,1,1]]);
    console.log(leftMostColumnWithOne(binaryMatrix));
    binaryMatrix.setBinaryMatrix([[0]]);
    console.log(leftMostColumnWithOne(binaryMatrix));
    binaryMatrix.setBinaryMatrix([[1]]);
    console.log(leftMostColumnWithOne(binaryMatrix));
    binaryMatrix.setBinaryMatrix([[0,0],[0,0]]);
    console.log(leftMostColumnWithOne(binaryMatrix));
    binaryMatrix.setBinaryMatrix([[0,0],[1,1]]);
    console.log(leftMostColumnWithOne(binaryMatrix));
};

main();