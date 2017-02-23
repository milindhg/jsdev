/*
https://leetcode.com/problems/ugly-number/
Write a program to check whether a given number is an ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 6, 8 are ugly while 14 is not ugly since it includes another prime factor 7.

Note that 1 is typically treated as an ugly number.

Solution:   https://leetcode.com/submissions/detail/83239648/
            Take the input number and while the number is divisble by 2,3 or 5 - Keep dividing and reducing the number.
            Once the number is not divisible by 2 neither 3 nor 5 then the number is divisible by some other prime number and hence return answer is false.
            Finally if the number is reduced to 1, then return true.

*/

/**
 * @param {number} num
 * @return {boolean}
 */
var isUgly = function (num) {
    // While the number is divisible by 2,3 or 5 keep reducing the number.
    if (num <= 0) {
        return false;
    }
    if (num === 1) {
        return true;
    }
    while (num % 2 === 0 || num % 3 === 0 || num % 5 === 0) {
        if (num % 2 === 0) {
            num /= 2;
        }
        if (num % 3 === 0) {
            num /= 3;
        }
        if (num % 5 === 0) {
            num /= 5;
        }
        if (num === 1) { // You've reached the end of the reduction.
            return true;
        }
    }
    return false;
};

var main = function () {
    var num = 14;
    console.log(isUgly(num));
}

main();