/*
https://leetcode.com/problems/excel-sheet-column-number/?tab=Description
Related to question Excel Sheet Column Title

Given a column title as appear in an Excel sheet, return its corresponding column number.

For example:

    A -> 1
    B -> 2
    C -> 3
    ...
    Z -> 26
    AA -> 27
    AB -> 28 
*/

/*
Solution:   https://leetcode.com/submissions/detail/79677017/
            Consider this as a Hex to Decimal conversion. Only in Hex, the base is 16. Here the base is 26. (26 alphabets)
            So after converting this problem, you see AZ becomes Z * 26^0 + A * 26^1 = 26*1 + 1*26 = 52
            To get the decimal value of the alphabet, simply convert ASCII to Decimal. i.e. subtract 64. Since A is 65 in ASCII.

*/
/**
 * @param {string} s
 * @return {number}
 */
var titleToNumber = function (s) {
    var ans = 0;
    var i = 0;
    while (i < s.length) {
        ans += Math.pow(26, s.length - i - 1) * (s.charCodeAt(i) - 64);
        i++;
    }
    return ans;
};