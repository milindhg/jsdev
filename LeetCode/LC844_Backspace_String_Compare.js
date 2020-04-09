/* 
https://leetcode.com/problems/backspace-string-compare/description/

Given two strings S and T, return if they are equal when both are typed into empty text editors. # means a backspace character.

TYPE: LINEAR, ARRAY, LINEAR ARRAY, STACK, PARENTHESES

Example 1:

Input: S = "ab#c", T = "ad#c"
Output: true
Explanation: Both S and T become "ac".
Example 2:

Input: S = "ab##", T = "c#d#"
Output: true
Explanation: Both S and T become "".
Example 3:

Input: S = "a##c", T = "#a#c"
Output: true
Explanation: Both S and T become "c".
Example 4:

Input: S = "a#c", T = "b"
Output: false
Explanation: S becomes "c" while T becomes "b".
Note:

1 <= S.length <= 200
1 <= T.length <= 200
S and T only contain lowercase letters and '#' characters.
Follow up:

Can you solve it in O(N) time and O(1) space?

Solution:   https://leetcode.com/submissions/detail/322018798/  beats 94.88 % JS Submissions.
            Very basic - Think of this problem similar to parenthesis completion problem. or well formed parenthesis.S
            Use a stack to keep track of whenever backspace is pressed, pop the stack and then form the effective string in stack.
            Do this for both S and T.
            Later compare the stacks formed for S and T.
            If length is not same then no need to compare further. If same, then compare each character.


*/


/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function(S, T) {
    let stkS = [];
    let stkT = [];
    let i = 0;
    while(i<S.length){
        if(S.charAt(i)=='#')
            stkS.pop();
        else
            stkS.push(S.charAt(i));
        i++;
    }
    i=0;
    while(i<T.length){
        if(T.charAt(i)=='#')
            stkT.pop();
        else
            stkT.push(T.charAt(i));
        i++;
    }
    return stkS.length==stkT.length ? compareStk(stkS, stkT) : false;
};
    
var compareStk = (stkS, stkT)=>{
    let i = 0;
    while(i<stkS.length){
        if(stkS[i]!=stkT[i])
            return false;
        i++;
    }
    return true;
}

var main = () => {
    console.log(backspaceCompare("ab#c","ad#c"));
    console.log(backspaceCompare("ab#c","ad#c"));
    console.log(backspaceCompare("ab##","c#d#"));
    console.log(backspaceCompare("a##c","#a#c"));
    console.log(backspaceCompare("a#c","b"));
};

main();