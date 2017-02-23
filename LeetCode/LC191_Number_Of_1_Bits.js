/*
https://leetcode.com/problems/number-of-1-bits/
Write a function that takes an unsigned integer and returns the number of ’1' bits it has (also known as the Hamming weight).

For example, the 32-bit integer ’11' has binary representation 00000000000000000000000000001011, so the function should return 3.

*/

/*
Solution:   https:// leetcode.com/submissions/detail/91798385/
            Keep getting the right-most number and add 1 to answer if the right most bit is 1.
            This goes same as saying get the remainder of the number for 2 and add it to answer. and keep dividing the number by 2.
            We follow second approach because for numbers greater than 2^32, the javascript bitwise operators behave incorrectly.
*/
/**
 * @param {number} n - a positive integer
 * @return {number}
 * 
 * this is a new way suggested by Thube. But did give some errors. Check this.
 * 
 */
var hammingWeightCheck = function (n) {
    var ans = 0;
    if (n === Math.pow(2, 32) - 1) {
        return 32;
    }
    while (n > 0) {
        ans += 1;
        n = (n & (n - 1));
    }
    return ans;
};

/**
 * @param {number} n - a positive integer
 * @return {number} https://leetcode.com/submissions/detail/91798385/ submissions
 * 
 */
var hammingWeight = function (n) {
    var ans = 0;
    while (n > 0) {
        ans = ans + n % 2;
        n = Math.floor(n / 2);
    }
    return ans;
};

/**
 * @param {number} n - a positive integer
 * @return {number}
 * 
 * beats 49.23% javascript submissions
 * 
 */
var hammingWeightBetter = function (n) {
    var ans = 0;
    if (n > Math.pow(2, 31))
        return 1;
    while (n > 0) {
        ans += n & 1;
        n = Math.floor(n / 2);
        console.log(ans);
    }
    return ans;
};

var main = function () {
    console.log(hammingWeightBetter(2147483648));
};

main();