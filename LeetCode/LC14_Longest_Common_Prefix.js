/*
https://leetcode.com/problems/longest-common-prefix/
Write a function to find the longest common prefix string amongst an array of strings.

*/
/*
Solution:   https://leetcode.com/submissions/detail/91225916/ 
            This cannot be done in linear time ideally. You may be tempted to use hashmap. But it will need a lot of space. 
            and as the map grows its manipulations also becomes more costly.
            
            So what we can do here is
            1. Assume that the first word is the common prefix.
            2. Keep iterating from the next word untill end of array. 
            3. In each iteration, compare maximum number of letters that can match between our assumed prefix and the current word from array. 
            4. In this each iteration, update the commonprefix by taking substring of the word from 0 to the maximum matching letters count.
            5. At the end of the outer loop when all words are completed, you get your answer.
            6. Good checks can be anytime, the current word is of length 0, return blank answer.

            Runtime: O(m*n) where m is number of strings, n is average length of longest common prefix.
            
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
        // Counting maximum number of letters that match in while loop.
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
    var inputarray = ["OKOK", "OK", "OKIE"];
    console.log("LongestCommonPrefix is: " + longestCommonPrefix(inputarray));
}

main();