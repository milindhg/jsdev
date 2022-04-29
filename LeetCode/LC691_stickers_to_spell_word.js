/*
 * @lc app=leetcode id=691 lang=javascript
 *
 * [691] Stickers to Spell Word
 *
 * https://leetcode.com/problems/stickers-to-spell-word/description/
 *
 * algorithms
 * Hard (41.84%)
 * Likes:    359
 * Dislikes: 34
 * Total Accepted:    14K
 * Total Submissions: 33.4K
 * Testcase Example:  '["with","example","science"]\n"thehat"'
 *
 * 
 * We are given N different types of stickers.  Each sticker has a lowercase
 * English word on it.
 * 
 * You would like to spell out the given target string by cutting individual
 * letters from your collection of stickers and rearranging them.
 * 
 * You can use each sticker more than once if you want, and you have infinite
 * quantities of each sticker.
 * 
 * What is the minimum number of stickers that you need to spell out the
 * target?  If the task is impossible, return -1.
 * 
 * 
 * Example 1:
 * Input:
 * ["with", "example", "science"], "thehat"
 * 
 * 
 * Output:
 * 3
 * 
 * 
 * Explanation:
 * We can use 2 "with" stickers, and 1 "example" sticker.
 * After cutting and rearrange the letters of those stickers, we can form the
 * target "thehat".
 * Also, this is the minimum number of stickers necessary to form the target
 * string.
 * 
 * 
 * Example 2:
 * Input:
 * ["notice", "possible"], "basicbasic"
 * 
 * 
 * Output:
 * -1
 * 
 * 
 * Explanation:
 * We can't form the target "basicbasic" from cutting letters from the given
 * stickers.
 * 
 * 
 * Note:
 * stickers has length in the range [1, 50].
 * stickers consists of lowercase English words (without apostrophes).
 * target has length in the range [1, 15], and consists of lowercase English
 * letters.
 * In all test cases, all words were chosen randomly from the 1000 most common
 * US English words, and the target was chosen as a concatenation of two random
 * words.
 * The time limit may be more challenging than usual.  It is expected that a 50
 * sticker test case can be solved within 35ms on average.
 * 
 */

// @lc code=start
/**
 * @param {string[]} stickers
 * @param {string} target
 * @return {number}
 */
var minStickers = function (stickers, target) {
    // let a = new Array(); 
    // for(let c=97; c<123; c++) { a.push(String.fromCharCode(c)); }

    let charSet = new Set(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", 
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]);
    stickers.forEach((sticker) => {
        let stickerCharSet = new Set(sticker.split(''));
        stickerCharSet.forEach((char) => {
            if (charSet.has(char))
                charSet.delete(char);
        });
    });

    //so now charSet is left with only characters which are not at all present in any of the stickers.
    //so now check if any of these remaining characters is present in the target string.
    let targetCharSet = target.split('');
    targetCharSet.forEach((char) => {
        if (charSet.has(char))
            return false;
    });

};
// @lc code=end

