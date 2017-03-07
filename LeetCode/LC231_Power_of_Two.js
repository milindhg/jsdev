/*
https://leetcode.com/problems/power-of-two/?tab=Description
Given an integer, write a function to determine if it is a power of two.

*/

/*
Solution:   https://leetcode.com/submissions/detail/94801212/
            The best approach is to check whether the number only has 1 bit set.
            There are 2 ways to check it. 1 is to check for each bit. runtime would be O(31)
            Second - a smart approach is to AND num and num-1. Example number is 8. i.e. 1000. So num&(num-1) will be 1000 & 0111 = 0000.
*/

/**
 * @param {number} n
 * @return {boolean}
 * 
 */
var isPowerOfTwo = function (n) {
    if (n <= 0)
        return false;
    return ((n & (n - 1)) == 0 ? true : false);
};

var main = function () {
    console.log(isPowerOfTwo(8));
    console.log(isPowerOfTwo(18));
    console.log(isPowerOfTwo(0));
}

main();