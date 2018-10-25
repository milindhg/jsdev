/*
https://leetcode.com/problems/word-pattern/#/description
Given a pattern and a string str, find if str follows the same pattern.

Here follow means a full match, such that there is a bijection between a letter in pattern and a non-empty word in str.

Examples:
pattern = "abba", str = "dog cat cat dog" should return true.
pattern = "abba", str = "dog cat cat fish" should return false.
pattern = "aaaa", str = "dog cat cat dog" should return false.
pattern = "abba", str = "dog dog dog dog" should return false.
Notes:
You may assume pattern contains only lowercase letters, and str contains lowercase letters separated by a single space.


Solution:   https://leetcode.com/submissions/detail/185200632/ beats 100% JS SUbmissions.
            Approach is simple. Do 3 steps.
            1. Split the words string into an array of words. Match the count of words and pattern array. If not same return false.
            2. Traverse and keep forming 2 dictionaries. one with key as word and value as pattern and second with key as pattern and value as word. 
            3. If there is a mismatch like multiple words being mapped to multiple pattern letter or multiple pattern letter being mapped to same word then return false. 

*/

/**
 * @param {string} pattern
 * @param {string} str
 * @return {boolean}
 */
var wordPattern = function (pattern, str) {
    var i = 0;
    var j = 0;
    var map = {};
    var reverseMap = {};
    var words = str.split(' ');
    if(words.length!=pattern.length)
        return false;
    while (i < pattern.length) {
        console.log('words[i]: ' + words[i]);
        console.log('pattern[i]: ' + pattern[i]);
        if ((map[pattern[i]] && (words[i] != map[pattern[i]])))
            return false;
        if (!map[pattern[i]]) {
            map[pattern[i]] = words[i];
        }
        if(!reverseMap[words[i]]){
            reverseMap[words[i]]=pattern[i];
        }
        if(map[pattern[i]] && reverseMap[words[i]] != pattern[i])
            return false;
        console.log(map[pattern[i]]);
        i++;
    }
    if (i == pattern.length)
        return true;
    return false;
};

var main = function () {
    pattern = "abbb";
    str = "dog cat cat cat";
    console.log(wordPattern(pattern, str));
};

main();