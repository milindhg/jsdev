/**
https://leetcode.com/problems/reverse-string/?tab=Description
Reverse String
 */

/*
Solution:   https://leetcode.com/submissions/detail/93616598/
            beats 98% of js submissions.
            Very easy and efficient with 2 pointers. 
            1 from start and 1 from end. 
            Keep swapping numbers till the middle of the string.
            Runtime: O(n)
            Space: O(1)
*/

/**
 * @param {string} s
 * @return {string}
 */
var reverseString = function (s) {
    var chararray = s.split('');
    var i = 0;
    var j = s.length - 1;
    while (i < j) {
        var temp = chararray[i];
        chararray[i] = chararray[j];
        chararray[j] = temp;
        i++;
        j--;
    }
    return chararray.join('');
};


let main = () => {
    console.log(reverseString("Hello"));
};

main();