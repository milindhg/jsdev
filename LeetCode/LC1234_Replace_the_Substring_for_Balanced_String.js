/* 

https://leetcode.com/problems/replace-the-substring-for-balanced-string/

You are given a string containing only 4 kinds of characters 'Q', 'W', 'E' and 'R'.

A string is said to be balanced if each of its characters appears n/4 times where n is the length of the string.

Return the minimum length of the substring that can be replaced with any other string of the same length to make the original string s balanced.

Return 0 if the string is already balanced.

 

Example 1:

Input: s = "QWER"
Output: 0
Explanation: s is already balanced.
Example 2:

Input: s = "QQWE"
Output: 1
Explanation: We need to replace a 'Q' to 'R', so that "RQWE" (or "QRWE") is balanced.
Example 3:

Input: s = "QQQW"
Output: 2
Explanation: We can replace the first "QQ" to "ER". 
Example 4:

Input: s = "QQQQ"
Output: 3
Explanation: We can replace the last 3 'Q' to make s = "QWER".
 

Constraints:

1 <= s.length <= 10^5
s.length is a multiple of 4
s contains only 'Q', 'W', 'E' and 'R'.




 */

/**
 * @param {string} s
 * @return {number}
 */
 var balancedString = function(s) {
    var n = s.length/4;
    var ans = 0;
    var myArr = [0, 0, 0, 0];
    var charArr = s.split('');
    charArr.forEach((character) => {
        switch(character){
            case 'Q': 
                myArr[0]++;
                if(myArr[0]>n) ans++;
                break;
            case 'W': 
                myArr[1]++;
                if(myArr[1]>n) ans++;
                break;
            case 'E': 
                myArr[2]++;
                if(myArr[2]>n) ans++;
                break;
            case 'R': 
                myArr[3]++;
                if(myArr[3]>n) ans++;
                break;
        }
    });
    return ans;
};

var main = () => {
    var s = "QQQQ";
    //console.log(balancedString(s));
    s = "WWEQERQWQWWRWWERQWEQ";
    console.log(balancedString(s));
};

main();