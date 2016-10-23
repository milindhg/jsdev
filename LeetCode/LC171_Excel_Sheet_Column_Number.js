/*

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