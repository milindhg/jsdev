/* https://leetcode.com/problems/valid-palindrome-ii

Given a non-empty string s, you may delete at most one character. Judge whether you can make it a palindrome.

Example 1:
Input: "aba"
Output: True
Example 2:
Input: "abca"
Output: True
Explanation: You could delete the character 'c'.
Note:
The string will only contain lowercase characters a-z. The maximum length of the string is 50000.

Solution:   https://leetcode.com/submissions/detail/200776652/ beats 33.33% JS Submissions.
            Similar logic to palindrome - where we have 2 pointers one at start and one at end.
            However the main aspect here is that whenever we find mismatch, we dont return false immediately. 
            Instead we have a helper function where we check whether remaining inner string is palindrome with 2 combinations.
            When there is a mismatch between i and jth elements. we check palindrome for 2 strings - 1. One from i+1 to j and 2. Second from i to j-1. 
            If either of these strings is palindrome we return true. Otherwise we return false.

 */
/**
 * @param {string} 
 * @return {boolean}
 */
var validPalindrome = function(s) {
    var i = 0;
    var j = s.length-1;
    var numMismatchFound = 0;
    while(i<j){
        if(s[i]!=s[j] && numMismatchFound<1){
            numMismatchFound++;
            if(s[i]==s[j-1] || s[i+1]==s[j]){
                return (palindromeHelper(s,i,j-1) || palindromeHelper(s,i+1,j));
            }
            else return false;
        }else if(s[i]==s[j]){
            i++;
            j--;
        }else{
            return false;
        }
    }
    return true;
};


var palindromeHelper = function(s, i, j){
    while(i<j){
        if(s[i]==s[j]){
            i++;
            j--;
        }else return false;
    }
    return true;
}

var main = function(){
    var s = "abcfcbas";
    //s = "aguokepatgbnvfqmgmlcupuufxoohdfpgjdmysgvhmvffcnqxjjxqncffvmhvgsymdjgpfdhooxfuupuculmgmqfvnbgtapekouga";
    // s = "acuyzyucua";
    // s = "ebcbbececabbacecbbcbe";
    // s = "afbdfa";
    // s = "aa";
    console.log(validPalindrome(s));
};

main();