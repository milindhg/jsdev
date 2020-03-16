/* 
https://leetcode.com/problems/plus-one/description/

Given a non-empty array of digits representing a non-negative integer, plus one to the integer.

The digits are stored such that the most significant digit is at the head of the list, and each element in the array contain a single digit.

You may assume the integer does not contain any leading zero, except the number 0 itself.

Example 1:

Input: [1,2,3]
Output: [1,2,4]
Explanation: The array represents the integer 123.
Example 2:

Input: [4,3,2,1]
Output: [4,3,2,2]
Explanation: The array represents the integer 4321.


Solution:   https://leetcode.com/submissions/detail/313127227/  beats 84.20% JS Submissions.
            Very simple approach. But very important to not convert the number array into an integer. 
            Simply add one to the last digit and keep adding carry if necessary.
            Finally do a check to see if there is a carry, if there is then simply push it to the front of the array. This is only needed for cases where first digit is 9 and carry is present.

 */

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    var i = digits.length-1;
    var carry=1;
    while(i>=0){
        digits[i] += carry;
        carry = 0;
        if(digits[i]>9){
            digits[i]=0;
            carry = 1;
        }
        i--;
    }
    if(carry==1) digits.unshift(1);
    return digits;
};

var main = () => {
    console.log(plusOne([9,9,9,9]));
};

main();