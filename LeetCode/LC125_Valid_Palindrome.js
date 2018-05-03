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
var isPalindrome = function(s) {
    var x = 0;
    var y = s.length-1;
    while(x<y){
        var currCharX = s.charAt(x);
        var currCharY = s.charAt(y);
        while((currCharX<'A' || currCharX>'Z') && (currCharX<'a' || currCharX>'z') && (currCharX<'0' || currCharX>'9') && x<y){
            x++;
            currCharX=s.charAt(x);
            // console.log('now x = ' + x);
        }
        while((currCharY<'A' || currCharY>'Z') && (currCharY<'a' || currCharY>'z') && (currCharY<'0' || currCharY>'9') && x<y){
            y--;
            currCharY=s.charAt(y);            
        }
        if(currCharX.toLowerCase()==currCharY.toLowerCase()){
            // console.log('x = ' + x + ' value = ' + currCharX + ' | y = ' + y + ' value = ' + currCharY);
            x++;
            y--;
        }else{
            return false;
        }
    }
    return true;
};
