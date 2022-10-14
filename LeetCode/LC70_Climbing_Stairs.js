/*
https://leetcode.com/problems/climbing-stairs/?tab=Description

Company List: UBER | 

You are climbing a stair case. It takes n steps to reach to the top.

Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

Solution:   https://leetcode.com/submissions/detail/711610080/ - beats 96.15% in JS submissions.
            Start writing the number of ways for 1 step, 2 steps, 3 steps and so on till 4 or 5.
            You will realize that they form the fibonacci pattern.
            This is basically following a fibonacci pattern. So you can write fibonacci program with memoization to avoid recalculation of steps already done and reduce run-time.

            basic fibonacci problem runtime
            https://leetcode.com/submissions/detail/816974850/  beats 96.78% JS Submissions
            Runtime: O(n)
            Space: O(n)

Another good explanation here: https://leetcode.com/problems/climbing-stairs/solution/#approach-3-dynamic-programming-accepted
Good youtube video here - https://www.youtube.com/watch?v=Y0lT9Fck7qI


*/
/**
 * @param {number} n
 * @return {number}
 */
var climbStairsRecursive = function (n) {
    var arr = [];
    var i = 0;
    //prepare an array of length n
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

/**
 * @param {number} n
 * @return {number}
 */
var climbStairsIterative = function (n) {
    let stairsWays = [1, 1];
    for (let i = 2; i <= n; i++) {
        stairsWays.push(stairsWays[i - 1] + stairsWays[i - 2]);
    }
    return stairsWays[n];
};

var main = function () {
    var n = 5;
    console.log(climbStairsRecursive(n));
    console.log(climbStairsIterative(n));
};

main();
