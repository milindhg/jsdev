/* 
https://leetcode.com/problems/valid-perfect-square/description/

Given a positive integer num, write a function which returns True if num is a
perfect square else False.

Note: Do not use any built-in library function such as sqrt.

Example 1:

Input: 16
Output: true

Example 2:

Input: 14
Output: false

Solution:   https://leetcode.com/submissions/detail/279214812/  
            beats 81.77 % JS Submissions.
So basic idea is to square the numbers starting from 1 to reach the input num.
Then check whether the last number where we stopped squaring, is it's square ===
num?

There can be a better approach by reducing the search space and thus working
through lesser numbers.

There can be even better approach by using mathematical equation and
logarithming solving to get an equation for x.  This method is shown in the
function isPerfectSquareMath below.
 */

/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    var i = 1;
    while(i*i<num)
        i++;
    return (i*i==num) ? true:false;
};

//https://leetcode.com/submissions/detail/279217722/ beats 92.45 % JS Submissions.
var isPerfectSquareMath = function(num){
    // Perfect explanation
    //          num = x*x
    // i.e.     num = x^2
    // i.e.     log(num) = log(x^2)     Taking Log to the base 2 on both sides.
    // i.e.     log(num) = 2*log(x)     using property logb(m^n) = n * logb(m)
    // i.e.     log(num)/2 = log(x)     dividing both sides by 2 i.e.
    // 2^(log(num)/2) = x      Raising both sides by 2, i.e. doing inverse of
    // taking log to the base 2 on both sides.  So basically x = 2 raise to
    // (log(num)/2).  Since we want to check whether the number x is perfect or
    // not. We will round it and get x and then verify by squaring our candidate
    // x to get num or not.

    var candidateX = Math.round(Math.pow(2, Math.log2(num)/2));
    return candidateX*candidateX === num;

};

var main = () => {
    var input = 16;
    console.log(isPerfectSquareMath(input));

    input = 14;
    console.log(isPerfectSquareMath(input));
};

main();