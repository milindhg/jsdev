/*
https://leetcode.com/problems/unique-paths/description/
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

The grid is 3X7 and the start is 0,0 while the goal is 2,6
Above is a 3 x 7 grid. How many possible unique paths are there?

Note: m and n will be at most 100.
*/
/*
Solution:   https://leetcode.com/submissions/detail/130797836/  beats 56.44 % of other javascript submissions.
            Basically the idea is to go start traversing from the start to the end of route. WHenever goal is met, add the count of routes.
            As you increase the number of columns and rows of the input matrix, the performance deteriorates since you keep calculating the same routes again to see if they reach the goal. 
            So a good idea to improve performance is to memoize the result and whenever you reach a sub-goal i.e. a cell from which you know that there is a route to the goal > use the same route count as stored on the sub-goal.
            With this sub-goal approach, you can reach the solution faster.
            
            Easier solution without recursion
            https://leetcode.com/submissions/detail/301954676/  beats 88.44% JS Submissions
            Very simple idea fill complete first row with 1 and first column with 1.
            Then just calculate mat[i][j] = mat[i-1][j] + mat[i][j-1];
            Finally return mat[m-1][n-1]
            So main assumption is that if consider breaking the problem in matrix of size 1X10 then there is only 1 way to reach the last column ofthe first row.
            Similarly if the matrix is 10X1, then there is only one way to reach the last row of the first column.
            Then just fill in the matrix and get the answer for the last row, last column as addition of the previous cell in row and column.

*/            

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    uniquePaths.counter = 0;

    //Create memoization matrix and initialize each element in the matrix with -1.
    uniquePaths.memArray = [];
    for (var x = 0; x < m; x++) {
        var currArr = [];
        for (var y = 0; y < n; y++) {
            currArr.push(-1);
        }
        uniquePaths.memArray.push(currArr);
    }
    printDebug("memArray at init = ");
    printArrayDebug(uniquePaths.memArray, m, n);
    printDebug();

    var answer = findPath(m, n, 0, 0);
    printDebug("answer = " + answer);
    printArrayDebug(uniquePaths.memArray, m, n);
    return answer;
};

var findPath = function (m, n, i, j) {
    var deepAnswerRight = 0, deepAnswerDown = 0;
    printDebug();
    printDebug("i = " + i + " j = " + j);
    printDebug("uniquePaths.counter = " + uniquePaths.counter);
    printArrayDebug(uniquePaths.memArray, m, n);
    if (i >= m || j >= n)
        return 0;
    else if (uniquePaths.memArray[i][j] > 0) {
        //console.log("hit here ");
        return uniquePaths.memArray[i][j];
    } else if (i == (m - 1) && j == (n - 1)) {
        printDebug("incrementing counter");
        uniquePaths.counter = 1;
        uniquePaths.memArray[i][j] = uniquePaths.counter;
        return uniquePaths.memArray[i][j];
    } else {
        if (i < m) {
            // if (uniquePaths.memArray[i][j] == -1) {
            deepAnswerDown = findPath(m, n, i + 1, j);
            // }
        }
        if (j < n) {
            deepAnswerRight = findPath(m, n, i, j + 1);
        }
    }
    uniquePaths.memArray[i][j] = (deepAnswerRight + deepAnswerDown);
    return uniquePaths.memArray[i][j];
};

var printArray = function (arr, m, n) {
    for (var x = 0; x < m; x++) {
        console.log(arr[x]);
    }
};


/** https://leetcode.com/submissions/detail/301954676/  beats 88.44% JS Submissions
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePathsEasy = function(m,n){
    var mat = [];
    for(var i=0; i<m; i++){
        var temp = [];
        for(var j=0; j<n; j++)
            temp.push(0);
        mat.push(temp);
    }

    // console.log(mat);
    for(var i=0; i<m; i++)
        mat[i][0]=1;

    for(var j=0; j<n; j++)
        mat[0][j]=1;
        
    for(var i=1; i<m; i++)
        for(var j=1; j<n; j++)
            mat[i][j] = mat[i-1][j] + mat[i][j-1];
    
    return mat[m-1][n-1];

};

var findPathEasy = function(m,n){

};

var main = function () {
    var m = 3;
    var n = 5;
    console.log(uniquePaths(m, n, 0, 0));
    uniquePathsEasy(m,n);
};

var printDebug = function (msg) {
    console.log(msg);
};

var printArrayDebug = function (arr, m, n) {
    printArray(arr,m,n);
}

main();