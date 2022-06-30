/*

Given two strings s and t, write a function to determine if t is an anagram of s.

For example,
s = "anagram", t = "nagaram", return true.
s = "rat", t = "car", return false.

Note:
You may assume the string contains only lowercase alphabets.

Follow up:
What if the inputs contain unicode characters? How would you adapt your solution to such case?
        
*/

/*
Solution:   https://leetcode.com/submissions/detail/732899561/ beats 58.68% js submissions.
            The simple solution is to keep track of the alphabets occuring in the words.
            In first loop for first word, note counts of all the alphabets.
            In second loop for second word, reduce counts of all the alphabets occurring.
            At last if the alphabet counts are not zero return false.
            
            A normal way of doing it would be hashmap. However in some cases depending on the memory management of the language, its better to have an array of 26 size. 1 index for each alphabet.
            
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    var hm = {};
    for (var i in s) {
        if (hm[s[i]]) {
            hm[s[i]] = hm[s[i]] + 1;
        } else {
            hm[s[i]] = 1;
        }
    }

    for (var j in t) {
        if (!hm[t[j]]) {
            return false;
        } else {
            hm[t[j]] = hm[t[j]] - 1;
            if (hm[t[j]] === 0) {
                delete hm[t[j]];
            }
        }
    }
    if (Object.keys(hm).length === 0) {
        return true;
    }
    return false;
};

//This approach is really good but fails for very big strings. Since the product value goes beyond Infinity.
var isAnagramBetter = function (s, t) {
    if (s.length != t.length)
        return false;

    var first26Primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43,
        47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101];
    var sProd = 1;
    var tProd = 1;

    for (var i = 0; i < s.length; i++) {
        sProd *= first26Primes[s.charCodeAt(i) - 97];  //97 is ascii val of a.
    }

    for (var i = 0; i < t.length; i++) {
        tProd *= first26Primes[t.charCodeAt(i) - 97];  //97 is ascii val of a.
    }

    return sProd == tProd;
}

var main = function () {
    console.log(isAnagramBetter("anagram", "nagaram"));
    console.log(isAnagramBetter("rat", "car"));
};

main();