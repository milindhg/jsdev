/*
You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Solution: This is basically following a fibonacci pattern. So you can write fibonacci program with memoization to avoid recalculation of steps already done and reduce run-time.

*/
/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
    var arr = [];
    var i = 0;
    while (i <= n) {
        arr.push(-1);
        i++;
    }
    return climbFib(n, arr);
};

var climbFib = function (n, arr) {
    if (n === 0 || n === 1) {
        arr[n] = 1;
        return arr[n];
    } else {
        if (arr[n] === -1) {
            arr[n] = climbFib(n - 1, arr) + climbFib(n - 2, arr);
        } else {
            arr[n] = arr[n - 1] + arr[n - 2];
        }
        return arr[n];
    }
};

var main = function () {
    var n = 5;
    console.log(climbStairs(n));
};

main();