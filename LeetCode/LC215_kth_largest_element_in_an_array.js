/*
 * @lc app=leetcode id=215 lang=javascript
 *
 * [215] Kth Largest Element in an Array
 *
 * https://leetcode.com/problems/kth-largest-element-in-an-array/description/
 *
 * algorithms
 * Medium (53.27%)
 * Likes:    3291
 * Dislikes: 228
 * Total Accepted:    576K
 * Total Submissions: 1.1M
 * Testcase Example:  '[3,2,1,5,6,4]\n2'
 *
 * Find the kth largest element in an unsorted array. Note that it is the kth
 * largest element in the sorted order, not the kth distinct element.
 * 
 * Example 1:
 * 
 * 
 * Input: [3,2,1,5,6,4] and k = 2
 * Output: 5
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [3,2,3,1,2,4,5,5,6] and k = 4
 * Output: 4
 * 
 * Note: 
 * You may assume k is always valid, 1 ≤ k ≤ array's length.
 * 
 * 
This is the brute force solution of simply sorting all elements and returning
the kth largest. 
!!!But there should be a better approach of divide and conquer
using something like QuickSort and Partition.
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
    return nums.sort((a, b) => b - a)[k - 1];
};

var PQ = require('../Utilities/PriorityQueue');


//Somehow according the tests done in leetcode, this approach is considerably slower than just sorting the given input elements in the array in descending order and returning k-1th index element.
//However it probably makes sense since array methods are probably faster when the array size is < 1000 elements. But the min heap approach is perhaps the best approach when the input elements are in an infinite stream.
var findKthLargestUsingHeap = function (nums, k) {
    var pq = new PQ((a, b) => a < b);
    pq.push(nums[0]);
    for (let i = 1; i < nums.length; i++) {
        if (pq.size() < k) {
            pq.push(nums[i]);
        } else if (nums[i] > pq.peek()) {
            if (pq.size() == k)
                pq.pop();
            pq.push(nums[i]);
        }
    }
    return pq.peek();
}
// @lc code=end


//Need to code another approach which is to use to use the partition logic in quick sort to get the kth largest element using the divide and conquer method.
var findKthLargestUsingPartition = function (nums, k) {
}

let main = (() => {
    console.log(findKthLargest([3, 2, 3, 1, 2, 5, 4, 5, 6], 4));
    console.log(findKthLargest([3, 2, 3, 1, 2, 5, 4, 5, 6], 2));
    console.log(findKthLargest([3, 2, 3, 1, 2, 5, 4, 5, 6], 3));
    console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
    console.log(findKthLargestUsingHeap([3, 2, 3, 1, 2, 5, 4, 5, 6], 4));
    console.log(findKthLargestUsingHeap([3, 2, 1, 5, 6, 4], 2));
    console.log(findKthLargestUsingHeap([3, 2, 3, 1, 2, 5, 4, 5, 6], 2));
    console.log(findKthLargestUsingHeap([3, 2, 3, 1, 2, 5, 4, 5, 6], 3));
    console.log(findKthLargestUsingHeap([2, 1], 2));
});

main();