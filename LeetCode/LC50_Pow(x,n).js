/*

https://leetcode.com/problems/powx-n/

Implement pow(x, n), which calculates x raised to the power n (xn).

Example 1:

Input: 2.00000, 10
Output: 1024.00000
Example 2:

Input: 2.10000, 3
Output: 9.26100
Example 3:

Input: 2.00000, -2
Output: 0.25000
Explanation: 2-2 = 1/22 = 1/4 = 0.25
Note:

-100.0 < x < 100.0
n is a 32-bit signed integer, within the range [−231, 231 − 1]


Solution:   https://leetcode.com/submissions/detail/217288010/ beats 92.21% of JS Submissions.
            Basic idea is to do this via recursion. 2 base cases. simple. 
            For even case though, it is more performant to calculate the answer of half of the even first.
            That way recalculation of the same power level is avoided.
            For odd, we simply do the even and multiply the given number again.

 */

/**
 * @param {number} x
 * @param {number} n
 * @return {number}
 */
var myPow = function (x, n) {
    var ans;
    if (n < 0) {
        ans = 1 / myPowHelper(x, -n);
    } else {
        ans = myPowHelper(x, n);
    }
    return ans;
};

var myPowHelper = function (x, n) {
    if (n == 0)
        return 1;
    if (n == 1)
        return x;
    if (n % 2 == 0) {
        var myPowEven = myPowHelper(x, n / 2);
        return myPowEven * myPowEven;
    }
    else {
        return myPowHelper(x, n - 1) * x;
    }


}

var main = function () {
    var ans = myPow(2.00000, 10);
    console.log(ans + ' ' + ((ans == 1024.00000) ? 'Correct' : 'Incorrect'));
    var ans = myPow(2.10000, 3);
    console.log(ans + ' ' + ((ans == 9.26100) ? 'Correct' : 'Incorrect'));
    var ans = myPow(2.00000, -2);
    console.log(ans + ' ' + ((ans == 0.25000) ? 'Correct' : 'Incorrect'));
};

main();