/* 
https://leetcode.com/problems/valid-number/

65. Valid Number
Hard

707

1242

Add to List

Share
A valid number can be split up into these components (in order):

A decimal number or an integer.
(Optional) An 'e' or 'E', followed by an integer.
A decimal number can be split up into these components (in order):

(Optional) A sign character (either '+' or '-').
One of the following formats:
One or more digits, followed by a dot '.'.
One or more digits, followed by a dot '.', followed by one or more digits.
A dot '.', followed by one or more digits.
An integer can be split up into these components (in order):

(Optional) A sign character (either '+' or '-').
One or more digits.
For example, all the following are valid numbers: ["2", "0089", "-0.1", "+3.14", "4.", "-.9", "2e10", "-90E3", "3e+7", "+6e-1", "53.5e93", "-123.456e789"], while the following are not valid numbers: ["abc", "1a", "1e", "e3", "99e2.5", "--6", "-+3", "95a54e53"].

Given a string s, return true if s is a valid number.

 

Example 1:

Input: s = "0"
Output: true
Example 2:

Input: s = "e"
Output: false
Example 3:

Input: s = "."
Output: false
 

Constraints:

1 <= s.length <= 20
s consists of only English letters (both uppercase and lowercase), digits (0-9), plus '+', minus '-', or dot '.'.
Accepted
284,948
Submissions
1,543,553

Solution:       https://leetcode.com/submissions/detail/781875110/  beats 74.55% JS Submissions.
                Solve this by using regex string testing/matching with exact matching.
                Create 3 regexes - 1 for integer and 2 for decimal.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
 var isNumber = function(s) {
    let input = s;
    
    const integerRegex = /^[+-]{0,1}[0-9]+$/;
    const decimalRegex = /^[+-]{0,1}[0-9]*[.][0-9]+|[+-]{0,1}[0-9]+[.]$/;
    input = input.toLowerCase();
    if(integerRegex.test(input) || decimalRegex.test(input)){
        return true;
    }else if(input.indexOf('e')>0){
        let components = input.split('e');
        if(components.length==2){
            
            //Left component should be Decimal|Integer
            //AND Right component should be Integer
            if((integerRegex.test(components[0])||decimalRegex.test(components[0])) && integerRegex.test(components[1]) )
                return true;
        }
        
    }
    return false;
};


//Integer regex
//[+-]{0,1}[0-9]+

//[+-]{0,1}[0-9]*[.][0-9]+|[+-]{0,1}[0-9]+[.]

//[eE]{0,1}[+-]{0,1}[0-9]+

/* Test Cases

"0"
"2"
"0089"
"-0.1"
"+3.14"
"4."
"-.9"
"2e10"
"-90E3"
"3e+7"
"+6e-1"
"53.5e93"
"-123.456e789"
"abc"
"1a"
"1e"
"e3"
"99e2.5"
"--6"
"-+3"
"95a54e53"
".0e"
".0e0"
 */

var main = () => {
};

main();