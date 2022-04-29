/* 
https://leetcode.com/problems/generate-a-string-with-characters-that-have-odd-counts/description/

Given an integer n, return a string with n characters such that each character in such string occurs an odd number of times.

The returned string must contain only lowercase English letters. If there are multiples valid strings, return any of them.  

 

Example 1:

Input: n = 4
Output: "pppz"
Explanation: "pppz" is a valid string since the character 'p' occurs three times and the character 'z' occurs once. Note that there are many other valid strings such as "ohhh" and "love".
Example 2:

Input: n = 2
Output: "xy"
Explanation: "xy" is a valid string since the characters 'x' and 'y' occur once. Note that there are many other valid strings such as "ag" and "ur".
Example 3:

Input: n = 7
Output: "holasss"
 

Constraints:

1 <= n <= 500


Solution:       https://leetcode.com/submissions/detail/311119109/  beats 89.33% JS Submissions
                This problem is so easy and with very few constraints. That there is no need to even revise it.
                Since in the problem its given that given n we have to return a string of size n such that all the characters in that string appear odd number of times. 
                So we don't even need to have 26 characters. Just have 2 characters in your set - a and b. 
                Keep populating a or b with odd count. Done.

 */

/**
 * @param {number} n
 * @return {string}
 */
var generateTheString = function(n) {
    let oddFunc = (size, elem) => {var arr = new Array(size); arr.fill(elem); return arr;};
    var ansArr = [];
    ansArr = oddFunc(n-1,'a');
    if(n%2==0)
        ansArr.push('b');
    else
        ansArr.push('a')
    return ansArr.join('');
};

var main = () => {
    var input = [1,2,3,4,5,6,7,123,11,10];
    input.forEach((n)=>{
        console.log(generateTheString(n));
    })
    
};

main();