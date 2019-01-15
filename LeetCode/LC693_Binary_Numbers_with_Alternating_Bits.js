/* https://leetcode.com/problems/binary-number-with-alternating-bits/description/

Given a positive integer, check whether it has alternating bits: namely, if two adjacent bits will always have different values.

TYPE: bitwise
TYPE: bits

Example 1:
Input: 5
Output: True
Explanation:
The binary representation of 5 is: 101
Example 2:
Input: 7
Output: False
Explanation:
The binary representation of 7 is: 111.
Example 3:
Input: 11
Output: False
Explanation:
The binary representation of 11 is: 1011.
Example 4:
Input: 10
Output: True
Explanation:
The binary representation of 10 is: 1010.


Solution:   https://leetcode.com/submissions/detail/200764462/ beats 40% of JS Submissions.
            From the units place of the number keep checking the alternating numbers. If no match found even once return false.
            This can be done much quicker if we just keep comparing last 2 bits of the input number being reduced to zero by right shift. 
            Anytime the 2 bits are matching i.e. 1==1 or 0==0, then there are 2 consecutive bits which are same. So return false.
            Otherwise return true.

 */

/**
 * @param {number} n
 * @return {boolean}
 */
var hasAlternatingBits = function(n) {
    while(n>0){
        var n1 = n & 1;
        n = n >> 1;
        var n2 = n & 1;
        if(n1 == n2){
            return false;
        }
    }
    return true;
};


var main = function(){
    console.log(hasAlternatingBits(5));
    console.log(hasAlternatingBits(2));
    console.log(hasAlternatingBits(4));
    console.log(hasAlternatingBits(10));
    console.log(hasAlternatingBits(1));
    console.log(hasAlternatingBits(6));
};

main();