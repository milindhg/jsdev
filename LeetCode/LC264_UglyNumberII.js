/*
 * 
https://leetcode.com/problems/ugly-number-ii/
Write a program to find the n-th ugly number.

Ugly numbers are positive numbers whose prime factors only include 2, 3, 5. For example, 1, 2, 3, 4, 5, 6, 8, 9, 10, 12 is the sequence of the first 10 ugly numbers.

Note that 1 is typically treated as an ugly number.

*/

/*
Solution:   https:// leetcode.com/submissions/detail/91833890/
            Very tricky problem indeed.
            The ugly-number sequence is 1, 2, 3, 4, 5, 6, 8, 9, 10, 12, 15, …
            because every number can only be divided by 2, 3, 5, one way to look at the sequence is to split the sequence to three groups as below:

            (1) 1×2, 2×2, 3×2, 4×2, 5×2, …
            (2) 1×3, 2×3, 3×3, 4×3, 5×3, …
            (3) 1×5, 2×5, 3×5, 4×5, 5×5, …
            We can find that every subsequence is the ugly-sequence itself (1, 2, 3, 4, 5, …) multiply 2, 3, 5.

            Then we use similar merge method as merge sort, to get every ugly number from the three subsequence.

            Every step we choose the smallest one, and move one step after,including nums with same value.

            Thanks for this author about this brilliant idea. Here is my java solution
            
*/

/**
 * @param {number} n
 * @return {number}
 */
var nthUglyNumber = function (n) {
    var ugly = [];
    ugly[0] = 1;
    var index2 = 0, index3 = 0, index5 = 0;
    var factor2 = 2, factor3 = 3, factor5 = 5;
    for (var i = 1; i < n; i++) {
        var min = Math.min(factor2, factor3, factor5);
        ugly[i] = min;
        if (min === factor2) {
            factor2 = 2 * ugly[++index2];
        }
        if (min === factor3) {
            factor3 = 3 * ugly[++index3];
        }
        if (min === factor5) {
            factor5 = 5 * ugly[++index5];
        }
    }
    return ugly[n - 1];
};

var main = function () {
    var n = 8;
    console.log(nthUglyNumber(n));
};

main();
