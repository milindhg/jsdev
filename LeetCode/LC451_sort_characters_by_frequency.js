/*
 * @lc app=leetcode id=451 lang=javascript
 *
 * [451] Sort Characters By Frequency
 *
 * https://leetcode.com/problems/sort-characters-by-frequency/description/
 *
 * algorithms
 * Medium (59.53%)
 * Likes:    1204
 * Dislikes: 97
 * Total Accepted:    140.1K
 * Total Submissions: 234.5K
 * Testcase Example:  '"tree"'
 *
 * Given a string, sort it in decreasing order based on the frequency of
 * characters.
 * 
 * Example 1:
 * 
 * Input:
 * "tree"
 * 
 * Output:
 * "eert"
 * 
 * Explanation:
 * 'e' appears twice while 'r' and 't' both appear once.
 * So 'e' must appear before both 'r' and 't'. Therefore "eetr" is also a valid
 * answer.
 * 
 * 
 * 
 * Example 2:
 * 
 * Input:
 * "cccaaa"
 * 
 * Output:
 * "cccaaa"
 * 
 * Explanation:
 * Both 'c' and 'a' appear three times, so "aaaccc" is also a valid answer.
 * Note that "cacaca" is incorrect, as the same characters must be together.
 * 
 * 
 * 
 * Example 3:
 * 
 * Input:
 * "Aabb"
 * 
 * Output:
 * "bbAa"
 * 
 * Explanation:
 * "bbaA" is also a valid answer, but "Aabb" is incorrect.
 * Note that 'A' and 'a' are treated as two different characters.
 * 
 * 
Solution:    https://leetcode.com/submissions/detail/334711514/ beats 96.72% JS
Submissions.
3 step easy solution especially using ES6 
Step 1: Prepare a map of all the letters and counts.
Step 2: Sort the entries in map in non-increasing order.
Step 3: Prepare ans by joining the entries in the map by writing each letter 
count number of times in output.

 * 
 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @return {string}
 * 
 * Space:   O(n)
 * Time: O(nlogk) where n is total number of elements and k is number of repeat 
 * charcters.
 * 
 * https://leetcode.com/submissions/detail/334711514/ beats 96.72% JS Submissions.
 * 
 */
var frequencySort = function(s) {
    //Step 1: Prepare a map of all the letters and counts.
    const counts = new Map();
    for(let char of s) {
        if(!counts.has(char))
            counts.set(char, 0)
        counts.set(char, counts.get(char) + 1);
    }

    //Step 2: Sort the entries in map in non-increasing order.
    const pairs = [...counts.entries()]
      .sort(([, countA],[, countB]) => countB-countA);
    
    // Prepare ans by joining the entries in the map by writing each letter
    // count number of times in output.
    let ans = "";
    pairs.forEach(([letter, count])=> ans += letter.repeat(count));
    
    return ans;
};
// @lc code=end

