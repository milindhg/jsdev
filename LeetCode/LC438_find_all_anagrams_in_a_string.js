/*
 * @lc app=leetcode id=438 lang=javascript
 *
 * [438] Find All Anagrams in a String
 *
 * https://leetcode.com/problems/find-all-anagrams-in-a-string/description/
 *
 * algorithms
 * Medium (41.17%)
 * Likes:    2748
 * Dislikes: 166
 * Total Accepted:    236.9K
 * Total Submissions: 562.3K
 * Testcase Example:  '"cbaebabacd"\n"abc"'
 *
 * Given a string s and a non-empty string p, find all the start indices of p's
 * anagrams in s.
 * 
 * Strings consists of lowercase English letters only and the length of both
 * strings s and p will not be larger than 20,100.
 * 
 * The order of output does not matter.
 * 
 * Example 1:
 * 
 * Input:
 * s: "cbaebabacd" p: "abc"
 * 
 * Output:
 * [0, 6]
 * 
 * Explanation:
 * The substring with start index = 0 is "cba", which is an anagram of "abc".
 * The substring with start index = 6 is "bac", which is an anagram of
 * "abc".
 * 
 * 
 * 
 * Example 2:
 * 
 * Input:
 * s: "abab" p: "ab"
 * 
 * Output:
 * [0, 1, 2]
 * 
 * Explanation:
 * The substring with start index = 0 is "ab", which is an anagram of "ab".
 * The substring with start index = 1 is "ba", which is an anagram of "ab".
 * The substring with start index = 2 is "ab", which is an anagram of "ab".
 * 
 * 
 * Solution:    https://leetcode.com/submissions/detail/341095179/
 *              beats 93.91% JS SUbmissions.
 * 
 * 

Paper futla. This is a sure shot problem asked and little complicated but can be
easily understood with the anagram or substring problems template as given in
this discussion.
https://leetcode.com/problems/find-all-anagrams-in-a-string/discuss/92007/Sliding-Window-algorithm-template-to-solve-all-the-Leetcode-substring-search-problem.

MUST SEE. MUST REVISE for sure. 
Many problems can be solved using exact same code or template of code with
minimum modifications.

 * 
 */

// @lc code=start
/**
 * @param {string} s
 * @param {string} p
 * @return {number[]}
 */
var findAnagrams = function (s, p) {
    let ans = new Array();
    if(p.length > s.length)
        return ans;

    let pCharMap = new Map();
    for (let char of p) {
        pCharMap.set(char, (pCharMap.has(char) ? pCharMap.get(char) + 1 : 1));
    }

    let counter = [...pCharMap.keys()].length;

    let begin = 0;
    let end = 0;
    let len = Infinity;

    while(end < s.length){
        let c = s.charAt(end);

        if(pCharMap.has(c)){
            pCharMap.set(c, pCharMap.get(c)-1);
            if(pCharMap.get(c) == 0)
                counter--;
        }
        end++;

        while(counter == 0){
            let tempC = s.charAt(begin);
            if(pCharMap.has(tempC)){
                pCharMap.set(tempC, pCharMap.get(tempC) + 1);
                if(pCharMap.get(tempC) > 0)
                    counter++;
            }

            if(end - begin == p.length){
                ans.push(begin);
            }

            begin++;
        }
    }

    return ans;
};
// @lc code=end

let main = () => {
    console.log(findAnagrams("cbaebabacd", "abc"));
};

main();