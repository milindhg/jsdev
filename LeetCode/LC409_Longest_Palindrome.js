/*

Given a string which consists of lowercase or uppercase letters, find the length of the longest palindromes that can be built with those letters.

This is case sensitive, for example "Aa" is not considered a palindrome here.

Note:
Assume the length of given string will not exceed 1,010.

Example:

Input:
"abccccdd"

Output:
7

Explanation:
One longest palindrome that can be built is "dccaccd", whose length is 7.

*/

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
    var hm = {};
    for ( var i in s) {
        if (hm[s[i]]) {
            hm[s[i]] = hm[s[i]] + 1;
        } else {
            hm[s[i]] = 1;
        }
    }

    var ans = 0;
    var flag = false;
    for ( var entry in hm) {
        if (hm[entry] % 2 === 0) {
            ans += hm[entry];
        } else {
            ans += hm[entry] - 1;
            flag = true;
        }
    }
    if (flag === true) {
        ans += 1;
    }
    return ans;
};