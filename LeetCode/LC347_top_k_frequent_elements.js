/*
 * @lc app=leetcode id=347 lang=javascript
 *
 * [347] Top K Frequent Elements
 *
 * https://leetcode.com/problems/top-k-frequent-elements/description/
 *
 * algorithms
 * Medium (59.61%)
 * Likes:    2649
 * Dislikes: 195
 * Total Accepted:    351.7K
 * Total Submissions: 588.6K
 * Testcase Example:  '[1,1,1,2,2,3]\n2'
 * TRICKY
 * VERY GOOD
 * FAVORITE
 *
 * Given a non-empty array of integers, return the k most frequent elements.
 * 
 * Example 1:
 * 
 * 
 * Input: nums = [1,1,1,2,2,3], k = 2
 * Output: [1,2]
 * 
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: nums = [1], k = 1
 * Output: [1]
 * 
 * 
 * Note: 
 * 
 * 
 * You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
 * Your algorithm's time complexity must be better than O(n log n), where n is
 * the array's size.
 * It's guaranteed that the answer is unique, in other words the set of the top
 * k frequent elements is unique.
 * You can return the answer in any order.
 * 
 * 
Solution:   https://leetcode.com/submissions/detail/334717169/
            beats 94.35% JS Submissions.

Simple 3 step approach esepcially performant using ES6
Step 1: Prepare a map of letter and counts
Step 2: Sort the map entries by count in descending order.
Step 3: Slice the result array to get only k first elements in array.
Step 4: Respond with only numbers by preparing an array of only Keys in the
sorted entries array of tuples. This should be done using a simple map function.
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    /**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
    let countsMap = new Map();
    nums.forEach(num=>countsMap.set(num, (countsMap.get(num) || 0) + 1 ));
    // console.log(countsMap);
    
    return [...countsMap.entries()].sort(([, countA], [, countB])=>countB-countA).slice(0,k).map(a=>a[0]);
    
};
};
// @lc code=end

