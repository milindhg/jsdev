/*
https://leetcode.com/problems/longest-palindrome/?tab=Description
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
/*
Solution:   https://leetcode.com/submissions/detail/79672825/
            The crux of the solution is the fact that to form a palindrome you should have at max 1 letter with odd count. 
            All other letters should be with even count. To form the 2 sides of the odd count letter.
            Other case can be all letters with even count. In that case the length of the palindrome will also be even.
            
            So in first loop over the input string we note the counts of all the letters.
            In second loop over the hashmap, we check if there is a single letter with odd count.
            If we have a odd count letter, we count that and set flag to count it extra once.
            At last we return the last count.
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

var main = function () {
    var s = "aaabbbccc";
    console.log(longestPalindrome(s));
};

main();
