/* https://leetcode.com/problems/valid-palindrome/description/

Given a string, determine if it is a palindrome, considering only alphanumeric characters and ignoring cases.

Note: For the purpose of this problem, we define empty string as valid palindrome.

Example 1:

Input: "A man, a plan, a canal: Panama"
Output: true
Example 2:

Input: "race a car"
Output: false
 */
/* 
 Solution:  https://leetcode.com/submissions/detail/152660630/  - beats 98.47% of js submissions
            The idea is to check palindrome. So the 2 pointer apporach from start and end works fine.
            However in this problem there is an extra condition checking whether string is palindrome even if there are non alpha numeric characters present.
            To do this add extra checks to ignore non alphanumeric characters.
            Run time: O(n/2) - linear time

 */
/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    var left = 0;
    var right = s.length - 1;
    while (left < right) {
        var currCharLeft = s.charAt(left);
        var currCharRight = s.charAt(right);

        while (!isAlphanumeric(currCharLeft) && left < right) {
            left++;
            currCharLeft = s.charAt(left);
            // console.log('now x = ' + x);
        }
        while (!isAlphanumeric(currCharRight) && left < right) {
            right--;
            currCharRight = s.charAt(right);
        }
        if (currCharLeft.toLowerCase() == currCharRight.toLowerCase()) {
            // console.log('x = ' + x + ' value = ' + currCharX + ' | y = ' + y + ' value = ' + currCharY);
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
};

var isAlphanumeric = function (character) {
    return (character >= 'a' && character <= 'z') || (character >= 'A' && character <= 'Z') || (character >= '0' && character <= '9');
}


var main = function () {
    console.log(isPalindrome("A man, a plan, a canal: Panama"));
    console.log(isPalindrome("race a car"));
}

main();
