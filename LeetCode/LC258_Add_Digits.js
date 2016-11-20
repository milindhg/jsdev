/*

Given a non-negative integer num, repeatedly add all its digits until the result has only one digit.

For example:

Given num = 38, the process is like: 3 + 8 = 11, 1 + 1 = 2. Since 2 has only one digit, return it.

Follow up:
Could you do it without any loop/recursion in O(1) runtime?

        
Solution: Keep getting numbers and adding them until the sum of the number becomes single digit number.
        
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
    while (num > 0) {
        ans += (num % 10);
        num = Math.floor(num / 10);
    }
    return ans;
};

var main = function () {
    var num = 38;
    console.log(addDigits(num));
};

main();