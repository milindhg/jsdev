/*
Write a function to find the longest common prefix string amongst an array of strings.

*/

/**
 * Description
 * 
 * @method longestCommonPrefix
 * @param {} strs
 * @return
 */
var longestCommonPrefix = function (strs) {
    if (strs.length === 0) {
        return "";
    }
    var letterIndex = 0;
    var commonPrefix = strs[0];
    var i = 1;
    var commPreLength = commonPrefix.length;
    while (i < strs.length) {
        var currWordLength = strs[i].length;
        if (currWordLength === 0) {
            return "";
        }
        var trav = 0;
        while (trav < commPreLength && trav < currWordLength
                && strs[i][trav] === commonPrefix[trav]) {
            trav++;
        }
        commonPrefix = commonPrefix.substr(0, trav);
        commPreLength = trav + 1;
        i++;
    }
    return commonPrefix;
};

/**
 * Description
 * 
 * @method main
 * @return
 */
var main = function () {
    var inputarray = [];
    console.log("LongestCommonPrefix is: " + longestCommonPrefix(inputarray));
}

main();