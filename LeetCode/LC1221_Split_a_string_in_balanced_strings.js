/* 
https://leetcode.com/problems/split-a-string-in-balanced-strings/description/

Balanced strings are those who have equal quantity of 'L' and 'R' characters.

Given a balanced string s split it in the maximum amount of balanced strings.

Return the maximum amount of splitted balanced strings.

 

Example 1:

Input: s = "RLRRLLRLRL"
Output: 4
Explanation: s can be split into "RL", "RRLL", "RL", "RL", each substring contains same number of 'L' and 'R'.
Example 2:

Input: s = "RLLLLRRRLR"
Output: 3
Explanation: s can be split into "RL", "LLLRRR", "LR", each substring contains same number of 'L' and 'R'.
Example 3:

Input: s = "LLLLRRRR"
Output: 1
Explanation: s can be split into "LLLLRRRR".
 

Constraints:

1 <= s.length <= 1000
s[i] = 'L' or 'R'

Solution:   https://leetcode.com/submissions/detail/271344047/ beats 86.89% JS Submissions.
            Very simple solution just have a counter and keep counting as you find L or R. 
            as soon as you see we're balanced, increment the answer count i.e. consider we can split the input at that point.

 */

/**
 * @param {string} s
 * @return {number}
 */
var balancedStringSplit = function(s) {
    var i = 0;
    var cnt=0;
    var answer = 0;
    while(i<s.length){
        // console.log(s[i++]);
        if(s[i]=='R') cnt++
        if(s[i]=='L') cnt--;
        if(cnt==0) answer++;
        i++;
    }
    return answer;
};

var main = () => {
    var input = "RLRRLLRLRL";
    var answer = balancedStringSplit(input);
    console.log("Input: " + input + " answer= " + answer + " " + (answer==4 ? "Correct" : "Incorrect"));
    input = "RLLLLRRRLR";
    answer = balancedStringSplit(input);
    console.log("Input: " + input + " answer= " + answer + " " + (answer==3 ? "Correct" : "Incorrect"));
    input = "LLLLRRRR";
    answer = balancedStringSplit(input);
    console.log("Input: " + input + " answer= " + answer + " " + (answer==1 ? "Correct" : "Incorrect"));
}

main();