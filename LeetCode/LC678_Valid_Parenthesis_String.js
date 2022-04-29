/* 
https://leetcode.com/problems/valid-parenthesis-string/description/

Given a string containing only three types of characters: '(', ')' and '*',
write a function to check whether this string is valid. We define the validity
of a string by these rules:

Any left parenthesis '(' must have a corresponding right parenthesis ')'. Any
right parenthesis ')' must have a corresponding left parenthesis '('. Left
parenthesis '(' must go before the corresponding right parenthesis ')'. '*'
could be treated as a single right parenthesis ')' or a single left parenthesis
'(' or an empty string. An empty string is also valid.

Example 1:
Input: "()"
Output: True
Example 2:
Input: "(*)"
Output: True
Example 3:
Input: "(*))"
Output: True

Note:
The string size will be in the range [1, 100].

 */

/**
 * @param {string} s
 * @return {boolean}
 */
var checkValidStringIncomplete = function (s) {
    let i = 0;
    let stk = new Array();
    let starStk = new Array();
    let starCnt = 0;
    while (i < s.length) {
        let currChar = s.charAt(i);
        switch (currChar) {
            case "(":
                stk.push(i);
                break;

            case "*":
                starStk.push(i);
                break;

            case ")":
                if (stk.length > 0)
                    stk.pop();
                else if (starStk.length > 0)
                    starStk.pop();
                else
                    return false;
                break;

            default:
                break;
        }
        i++;
    }

    while (stk.length > 0 && starStk.length > 0) {
        if (stk.pop() > starStk.pop())
            return false;   //i.e. if ( is found after *, then return false.
    }
    return starStk.length == 0 ? true : false;
};


/**
 * @param {string} s
 * @return {boolean}
 * MuchBetter
 * Space: O(1)
 * Time: O(n)
 * https://leetcode.com/submissions/detail/325554014/   beats 74% JS Submissions.
 * 
 */
var checkValidString = function (s) {
    let low = 0;
    let high = 0;
    let i = 0;
    while (i < s.length) {
        let currChar = s.charAt(i);
        switch (currChar) {
            case "(":
                low++;
                high++;
                break;

            case "*":
                if (low > 0)
                    low--;
                high++;
                break;

            case ")":
                if (low > 0)
                    low--;
                high--;
            default:
                break;
        }

        if (high < 0)
            return false;

        i++
    }

    return low == 0;

};

var main = () => {
    console.log(checkValidString("()"));
    console.log(checkValidString("**"));
    console.log(checkValidString(")*"));
    console.log(checkValidString("*)"));
    console.log(checkValidString("(*"));
    console.log(checkValidString("(((**)"));
    console.log(checkValidString("()*"));
    console.log(checkValidString("()"));
    console.log(checkValidString("(*)"));
    console.log(checkValidString("(((***"));
    console.log(checkValidString("(()"));
    console.log(checkValidString("((*)"));
    console.log(checkValidString("(()*"));
    console.log(checkValidString("(())*)"));
    console.log(checkValidString("(()*)"));
    console.log(checkValidString("(())*"));
    console.log(checkValidString(""));
    console.log(checkValidString("(())((())()()(*)(*()(())())())()()((()())((()))(*"));
    console.log(checkValidString("(())((())()()(*)(*()(())())())()()((()())((()))(**"));
    console.log(checkValidString("(*))"));
};

/// 

main();