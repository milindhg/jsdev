/**
 * Reverse String
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
