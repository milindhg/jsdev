/*
https://leetcode.com/problems/power-of-three/?tab=Description
Given an integer, write a function to determine if it is a power of three.

Follow up:
Could you do it without using any loop / recursion?
*/

/*
Solution:   There are multiple ways to do it.
            1. To check whether the given number's log to the base 3 is integer or not. However this can fail in some cases where the user does not calculate properly in all the languages.
            2. To find the closes power of 3 near the given number and compare it with given number and compare next power of three i.e. calculated number multiplied by 3 with the given number.
                Approach 2 is the one we follow.
            3. To find the maximum integer power of three. and then divide that max power of 3 by given number. If remainder is 0, the given number is a power of 3 else not.
*/

/**
 * @param {number} n
 * @return {boolean}
 * @improve: This approach fails when the given logToBase3 answer is an integer, but is given as
 *           decimal because of irrational number calculation of machine.
 */
var isPowerOfThree_1 = function (n) {
    return Number.isInteger(logToBase3(n));
};

/**
 * @param {number} n
 * @return {boolean}
 * @runtime: https://leetcode.com/submissions/detail/94805056/ 57.95%
 */
var isPowerOfThree_2 = function (n) {
    if (n <= 0)
        return false;
    var nearestRaisedToNumber = Math.floor(logToBase3(n));
    var effectivePower = Math.pow(3, nearestRaisedToNumber);
    if (effectivePower == n || (effectivePower * 3) === n)
        return true;
    return false;
};

/**
 * @param {number} n
 * @return {boolean}
 * @problem: This approach somehow works theoretically but fails to give correct answer in program.
 */
var isPowerOfThree_3 = function (n) {
    var maxRaiseTo = Math.floor(logToBase3(Number.MAX_VALUE));
    console.log(maxRaiseTo);
    console.log(Math.pow(3, maxRaiseTo) % n)
    if (Math.pow(3, maxRaiseTo) % n == 0)
        return true;
    return false;
};

var logToBase3 = function (n) {
    return Math.log(n) / Math.log(3);
};

var main = function () {
    console.log(logToBase3(243));
    console.log(isPowerOfThree_1(243));
    console.log(isPowerOfThree_2(243));
    console.log(isPowerOfThree_3(243));
};

main();