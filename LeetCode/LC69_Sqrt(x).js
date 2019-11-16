/* 

https://leetcode.com/problems/sqrtx/description/

Implement int sqrt(int x).

Compute and return the square root of x, where x is guaranteed to be a non-negative integer.

Since the return type is an integer, the decimal digits are truncated and only the integer part of the result is returned.

Example 1:

Input: 4
Output: 2
Example 2:

Input: 8
Output: 2
Explanation: The square root of 8 is 2.82842..., and since 
             the decimal part is truncated, 2 is returned.


Solution:   https://leetcode.com/submissions/detail/279218672/  beats 87.29% JS Submissions.
*/

// Perfect explanation
    //          num^0.5 = x
    // i.e.     num = x^2
    // i.e.     log(num) = log(x^2)     Taking Log to the base 2 on both sides.
    // i.e.     log(num) = 2*log(x)     using property logb(mn) = n * logb(m)
    // i.e.     log(num)/2 = log(x)     dividing both sides by 2
    // i.e.     2^(log(num)/2) = x      Raising both sides by 2, i.e. doing inverse of taking log to the base 2 on both sides.
    //So basically x = 2 raise to (log(num)/2). Since we want to floor the answer as we keep raising num, we return Math.floor for the calculated x.

/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
    return Math.floor(Math.pow(2,Math.log2(x)/2));
};

var main = () => {
    var input = 4;
    console.log(mySqrt(input));

    input = 8;
    console.log(mySqrt(input));
};

main();