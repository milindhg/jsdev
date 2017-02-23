/*
https://leetcode.com/problems/add-digits/
Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

For example:

Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

Follow up:
Could you do it without any loop/recursion in O(1) runtime?

        
Solution:   https://leetcode.com/submissions/detail/83242534/
            Keep getting numbers and adding them until the sum of the number becomes single digit number.
            Runtime: O(n) where n is the number of digits.
        
        
            https://leetcode.com/submissions/detail/91812698/ - 97% percentile
            A very very smart solution: https://discuss.leetcode.com/topic/21498/accepted-c-o-1-time-o-1-space-1-line-solution-with-detail-explanations
            Just 1 line: return 1 + (num - 1) % 9;
            This comes from the fact that in decimal number system - 9 is the max digit. 
            So we can divide or split any number in the form of a single digit number by taking remainder with 9.
            This is similar to syaing that when a number crosses 9, it jumps back to 0. and keeps jumping back to zero on crossing 9 again.
            Like a limit of just 10 single digit numbers - [0-9]
        
*/

/**
 * @param {number} num
 * @return {number}
 */
var addDigits = function (num) {
    while (num > 9) {
        num = addTheDigits(num);
    }
    return num;
};

var addTheDigits = function (num) {
    var ans = 0;
    while (num > 0) { // take rightmost digit at a time and add it.
        ans += (num % 10);
        num = Math.floor(num / 10);
    }
    return ans;
};

// https://leetcode.com/submissions/detail/91812698/
var addDigitsBest = function (num) {
    return 1 + (num - 1) % 9; // we do this instead of num%9 because all the multiples of 9 will
    // also be returned as zero. which should be returned as 9 instead.
}

var main = function () {
    var num = 20;
    console.log(addDigitsBest(num));
};

main();