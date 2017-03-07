/*

Given an integer, return its base 7 string representation.

Example 1:
Input: 100
Output: "202"
Example 2:
Input: -7
Output: "-10"
Note: The input will be in range of [-1e7, 1e7].

*/

/*
Solution:   https://leetcode.com/submissions/detail/95740066/ - beats 79.69% of JS submissions.
            Solution is exactly same as the conversion of a decimal number to binary number.
            Only in this case instead of base 2, base is 7. So keep dividing by 7 and noting the remainder. Prepare your answer by taking the remainder, multiply it by factor of 10 and then add earlier answer to it.
            Extra case to handle here can be negative input number. Just multiply answer by negative 1 to get the final answer and convert to string.
*/
/**
 * @param {number} num
 * @return {string}
 */
var convertToBase7 = function (num) {
    var answerMultiplier = 1;
    if (num < 0) {
        answerMultiplier = -1;
        num *= -1;
    }
    var answer = 0;
    var multFactor = 1;
    while (num > 0) {
        var remainder = num % 7;
        num = Math.floor(num / 7);
        answer = remainder * multFactor + answer;
        multFactor *= 10;
    }
    answer = num * multFactor + answer;
    // console.log(answer);
    return (answer * answerMultiplier) + '';
};

var main = function () {
    console.log(convertToBase7(-7));
};

main();