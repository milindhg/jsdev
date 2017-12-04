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
Solution:   https://leetcode.com/submissions/detail/130797836/
            beats 56.44 % of other javascript submissions.
            Basically the idea is to go start traversing from the start to the end of route. WHenever goal is met, add the count of routes.
            As you increase the number of columns and rows of the input matrix, the performance deteriorates since you keep calculating the same routes again to see if they reach the goal. 
            So a good idea to improve performance is to memoize the result and whenever you reach a sub-goal i.e. a cell from which you know that there is a route to the goal > use the same route count as stored on the sub-goal.
            With this sub-goal approach, you can reach the solution faster.
            
*/            

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function (m, n) {
    uniquePaths.counter = 0;
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

var main = function () {
    var m = 18;
    var n = 18;
    console.log(uniquePaths(m, n, 0, 0));
};

var printDebug = function (msg) {
    // console.log(msg);
};

var printArrayDebug = function (arr, m, n) {
    // printArray(arr,m,n);
}

main();