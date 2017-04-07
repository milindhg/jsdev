/*

Implement strStr().

Returns the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

*/

/*
Solution:   https://leetcode.com/submissions/detail/95894581/ - beats 71% js submissions.
            Basic approach is to iterate through the haystack and 
            for each time we find that current element in haystack is the starting point of needle, we try to see how much of the needle characters matches haystack further from that point sequentially.
            If we see a break, we continue the similar approach from the next character in haystack.
            
            Thus the runtime of this approach in worst case becomes O(m*n) where m is size of haystack and n is size of needle.
            
            //TODO another approach is to use the KMP algorithm. Understand and implement.
*/

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 * @runtime O(m*n) where m and n are size of haystack and needle respectively.
 */
var strStr = function (haystack, needle) {
    if (haystack == null || needle == null)
        return -1;
    if (needle.length == 0)
        return 0;
    if (haystack.length == 0)
        return -1;
    for (var i = 0; i < haystack.length; i++) {
        if (i + needle.length > haystack.length)
            return -1;

        var m = i;
        for (var j = 0; j < needle.length; j++) {
            if (haystack[m] == needle[j]) {
                if (j == needle.length - 1)
                    return i;
                m++;
            } else {
                break;
            }
        }
    }
    return -1;
};

var main = function () {
    console.log(strStr("mississippi", "issip"));
};

main();