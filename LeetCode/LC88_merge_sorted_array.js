/*
 * @lc app=leetcode id=88 lang=javascript
 *
 * [88] Merge Sorted Array
 *
 * https://leetcode.com/problems/merge-sorted-array/description/
 *
 * algorithms
 * Easy (38.56%)
 * Likes:    1934
 * Dislikes: 3859
 * Total Accepted:    540.5K
 * Total Submissions: 1.4M
 * Testcase Example:  '[1,2,3,0,0,0]\n3\n[2,5,6]\n3'
 *
 * Given two sorted integer arrays nums1 and nums2, merge nums2 into nums1 as
 * one sorted array.
 * 
 * Note:
 * 
 * 
 * The number of elements initialized in nums1 and nums2 are m and n
 * respectively.
 * You may assume that nums1 has enough space (size that is greater or equal to
 * m + n) to hold additional elements from nums2.
 * 
 * 
 * Example:
 * 
 * 
 * Input:
 * nums1 = [1,2,3,0,0,0], m = 3
 * nums2 = [2,5,6],       n = 3
 * 
 * Output: [1,2,2,3,5,6]
 * 
 * 
 * Solution:    https://leetcode.com/submissions/detail/335469218/
 *              beats 99.08% JS Submissions.
 * 
 * 
 * 

Simple approach as applied in linked list.
Keep 2 pointers on 2 arrays. and keep comparing respective elements and merging
the smaller elements from num2 into num1.
In a linked list we can insert in the middle easily. 
In JS Array, we're using splice function to do this. Since we want to do this
in-place.

 * 
 * 
 */

// @lc code=start
/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 * 
 * @runtime O(m+n)
 * @space O(1)
 */
var merge = function(nums1, m, nums2, n) {
    let i1 = 0;
    let i2 = 0;
    while(i2<n && i1<m){
        if(nums1[i1]>nums2[i2]){
            nums1.splice(i1++, 0, nums2[i2++]);
            m++;
        }
        else
            i1++;
    }
    console.log(nums1);
    while(i2<n){
        nums1.splice(i1++, 0, nums2[i2++]);
        m++;
    }
    nums1.splice(m, nums1.length - m);
};
// @lc code=end

let main = () => {
    let nums1 = [1,2,3,0,0,0];
    let nums2 = [2,5,6];
    merge(nums1, 3, nums2, 3);
    console.log(nums1);
};

main();