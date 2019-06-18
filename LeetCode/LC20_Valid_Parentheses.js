/* https://leetcode.com/problems/valid-parentheses/description/

Given a string containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

An input string is valid if:

Open brackets must be closed by the same type of brackets.
Open brackets must be closed in the correct order.
Note that an empty string is also considered valid.

Example 1:

Input: "()"
Output: true
Example 2:

Input: "()[]{}"
Output: true
Example 3:

Input: "(]"
Output: false
Example 4:

Input: "([)]"
Output: false
Example 5:

Input: "{[]}"
Output: true


Solution:       https://leetcode.com/submissions/detail/236887701/ beats 93.47% JS Submissions.
                Very trivial stack based push compare and pop approach.

 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stk = [];
    for(var i in s){
        if(stk.length==0){
            stk.push(s[i]);
        }else if(stk[stk.length-1]=="(" && (s[i]=='}' || s[i]==']')) return false;
        else if(stk[stk.length-1]=="[" && (s[i]==')' || s[i]=='}')) return false;
        else if(stk[stk.length-1]=="{" && (s[i]==')' || s[i]==']')) return false;
        else{
            if((stk[stk.length-1]=="{" && s[i]=='}') || (stk[stk.length-1]=="[" && s[i]==']') || (stk[stk.length-1]=="(" && s[i]==')')) stk.pop();
            else stk.push(s[i]);
        }
    }
    return stk.length===0;
};

let main = () => {
    var input = ["()",
    "()[]{}",
    "(]",
    "([)]",
    "{[]}",
    ""];
    for(var i in input){
        console.log("Input: \"" + input[i] + "\" Output: " + isValid(input[i]));
    }
};

main();