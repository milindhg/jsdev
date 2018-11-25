/* https://www.amazon.com/Fu-Store-Sleeping-Christmas-Valentines/dp/B07K8NKNP4/ref=gbps_img_m-8_043b_9dda5085?smid=A18J2D68FG1DQ0&pf_rd_p=c24a8f09-0b9a-43a1-9c0c-cc4c976b043b&pf_rd_s=merchandised-search-8&pf_rd_t=101&pf_rd_i=5550342011&pf_rd_m=ATVPDKIKX0DER&pf_rd_r=CHGEY5C5ADKCMZ1WK9Y7

We are given two strings, A and B.

A shift on A consists of taking string A and moving the leftmost character to the rightmost position. For example, if A = 'abcde', then it will be 'bcdea' after one shift on A. Return True if and only if A can become B after some number of shifts on A.

Example 1:
Input: A = 'abcde', B = 'cdeab'
Output: true

Example 2:
Input: A = 'abcde', B = 'abced'
Output: false
Note:

A and B will have length at most 100.

Solution:   https://leetcode.com/submissions/detail/191308886/  beats 100% JS Submissions.
            Simplest solution and most efficient way is to join concat either string A or B with itself and check if other string is present as a substring in the concatenated string.
            Linear Time. Single pass.


 */

 /**
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
    if(A.length!=B.length) return false;
    var c = A + A;
    return c.includes(B);
};