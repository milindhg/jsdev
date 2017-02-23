/*
https://leetcode.com/problems/first-unique-character-in-a-string/?tab=Description
Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

Examples:

s = "leetcode"
return 0.

s = "loveleetcode",
return 2.
Note: You may assume the string contain only lowercase letters.


Solution:   https://leetcode.com/submissions/detail/78623556/
            First run a loop and note all character indexes. If repeat found, then update the count.
            Then loop on the hashmap and check first char entry with count 1.

*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
    hm = {};
    var i = 0;
    var retans = -1;
    // Iterate through the string
    while (i < s.length) {
        // if character found again, increment its count
        if (hm[s[i]]) {
            hm[s[i]].cnt += 1;
        }
        // if character found first time , set it in map
        else {
            hm[s[i]] = {
                index : i,
                cnt : 1
            };
        }
        i += 1;
    }

    for ( var char in hm) {
        if (parseInt(hm[char].cnt) === 1) {
            retans = hm[char].index;
            return retans;
        }
    }
    return retans;
};

var main = function () {
    var s = "loveleetcode";
    console.log(firstUniqChar(s));
    var s = "leetcode";
    console.log(firstUniqChar(s));
    var s = "ll";
    console.log(firstUniqChar(s));
};

main();
