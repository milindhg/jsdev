/*
 * @lc app=leetcode id=13 lang=javascript
 *
 * [13] Roman to Integer
 *
 * https://leetcode.com/problems/roman-to-integer/description/
 *
 * algorithms
 * Easy (53.76%)
 * Likes:    1557
 * Dislikes: 2998
 * Total Accepted:    528.8K
 * Total Submissions: 983.7K
 * Testcase Example:  '"III"'
 *
 * Roman numerals are represented by seven different symbols: I, V, X, L, C, D
 * and M.
 * 
 * 
 * Symbol       Value
 * I             1
 * V             5
 * X             10
 * L             50
 * C             100
 * D             500
 * M             1000
 * 
 * For example, two is written as II in Roman numeral, just two one's added
 * together. Twelve is written as, XII, which is simply X + II. The number
 * twenty seven is written as XXVII, which is XX + V + II.
 * 
 * Roman numerals are usually written largest to smallest from left to right.
 * However, the numeral for four is not IIII. Instead, the number four is
 * written as IV. Because the one is before the five we subtract it making
 * four. The same principle applies to the number nine, which is written as IX.
 * There are six instances where subtraction is used:
 * 
 * 
 * I can be placed before V (5) and X (10) to make 4 and 9. 
 * X can be placed before L (50) and C (100) to make 40 and 90. 
 * C can be placed before D (500) and M (1000) to make 400 and 900.
 * 
 * 
 * Given a roman numeral, convert it to an integer. Input is guaranteed to be
 * within the range from 1 to 3999.
 * 
 * Example 1:
 * 
 * 
 * Input: "III"
 * Output: 3
 * 
 * Example 2:
 * 
 * 
 * Input: "IV"
 * Output: 4
 * 
 * Example 3:
 * 
 * 
 * Input: "IX"
 * Output: 9
 * 
 * Example 4:
 * 
 * 
 * Input: "LVIII"
 * Output: 58
 * Explanation: L = 50, V= 5, III = 3.
 * 
 * 
 * Example 5:
 * 
 * 
 * Input: "MCMXCIV"
 * Output: 1994
 * Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.
 * 

Solution:   https://leetcode.com/submissions/detail/281002063/ beats 86.62% JS Submissions.
            Basic idea is very simple. 

            Just prepare a map of all the possible characters in roman and their corresponding atomic value.
            Then just iterate over the roman characters in the given input roman number and convert each one into integer based on the mapping and add all.
            Only the tricky part here is to mind the numbers where next character is greater than the current character. example IV, IX.
            So in such cases instead of adding the current char to int conversion, subtract it from the ongoing answer.

            In our case when we think of comparing the characters we think of comparing the debug levels in log. We assign integer levels to each character to easier and faster comparison.
            Also another idea is to store the levels in the same map where we store the int values of characters. This can be a separate map too.

 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    var map = {};
    map["I"] = {};
    map["I"].val = 1;
    map["I"].level = 1;
    map["V"] = {};
    map["V"].val = 5;
    map["V"].level = 2;
    map["X"] = {};
    map["X"].val = 10;
    map["X"].level = 3;
    map["L"] = {};
    map["L"].val = 50;
    map["L"].level = 4;
    map["C"] = {};
    map["C"].val = 100;
    map["C"].level = 5;
    map["D"] = {};
    map["D"].val = 500;
    map["D"].level = 6;
    map["M"] = {};
    map["M"].val = 1000;
    map["M"].level = 7;
    
    var output = 0;
    var prev = null;
    for(var i = s.length-1; i>=0; i--){
        // console.log(map[s[i]].val);
        if(prev && map[s[prev]].level>map[s[i]].level)
            output-= map[s[i]].val;
        else
            output+=map[s[i]].val;
        prev = i;
    }
    return output;
};

var main = () => {
    console.log(romanToInt("III"));
    console.log(romanToInt("IV"));
    console.log(romanToInt("IX"));
    console.log(romanToInt("LVIII"));
    console.log(romanToInt("MCMXCIV"));
};

main();