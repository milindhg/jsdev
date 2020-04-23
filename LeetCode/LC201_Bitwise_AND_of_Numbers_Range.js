/* https://leetcode.com/problems/bitwise-and-of-numbers-range/description/

Given a range [m, n] where 0 <= m <= n <= 2147483647, return the bitwise AND of
all numbers in this range, inclusive.

Example 1:

Input: [5,7] Output: 4 Example 2:

Input: [0,1] Output: 0

Solution:   https://leetcode.com/submissions/detail/328923467/
            beats 80.49% JS Submissions.

This is a really simple bitwise problem as the name suggests.  Here basic
intuition is that starting from LSB, most bits are going to be flipped many
times within the range of numbers.  We just have to find the MSB part which does
not flip or does flip. And that part we will right shift with the remaning
zeroes where the LSBs are flipped.  Effectively giving us the answer for the
total ANDing of the range of numbers.

Example 5 to 7 ANDING will be
101
111

So only MSB 1 is not flipped. and 2 LSBs are flipped so ans = 1 << 2 == 4.

 */
/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var rangeBitwiseAnd = function(m, n) {
    var cnt = 0;
    while(m!=n){
        m = m>>1;
        n = n>>1;
        cnt++;
    }
    return m<<cnt;
};

