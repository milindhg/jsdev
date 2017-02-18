/*
Write a function that takes a string as input and reverse only the vowels of a string.

Example 1:
Given s = "hello", return "holle".

Example 2:
Given s = "leetcode", return "leotcede".

Note:
The vowels does not include the letter "y".

*/
/*
Solution:   Need to check performance: https://leetcode.com/submissions/detail/93391122/ VERY LOW!!!
            Same as reversing the string. However just put condition on vowel detection in the string while you traverse using 2 pointers from start and end.

*/
function replaceAt (string, index, replace) {
    return string.substring(0, index) + replace + string.substring(index + 1);
}

/**
 * @param {string} s
 * @return {string}
 */
var reverseVowels = function (s) {
    var hm = {
        a : true,
        e : true,
        i : true,
        o : true,
        u : true,
        A : true,
        E : true,
        I : true,
        O : true,
        U : true
    };
    var x = 0;
    var y = s.length - 1;
    while (x < y) {
        // console.log(s[x] + ' ' + s[y]);
        if (hm[s[x]] && hm[s[y]]) {
            var temp = s[x];
            s = replaceAt(s, x, s[y]);
            s = replaceAt(s, y, temp);
            // console.log(temp + ' ' + s[x] + ' ' + s[y]);
            x++;
            y--;
        } else if (hm[s[x]]) {
            y--;
        } else if (hm[s[y]]) {
            x++;
        } else {
            x++;
            y--;
        }
    }
    return s;
};

var main = function () {
    var s = "hello";
    console.log(reverseVowels(s));
};

main();