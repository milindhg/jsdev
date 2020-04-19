/*
https://leetcode.com/problems/search-in-rotated-sorted-array/description/

Suppose an array sorted in ascending order is rotated at some pivot unknown to
you beforehand.

TYPE:   BINARY SEARCH, ARRAY, LOGn, ADJUSTMENT, TRICKY

(i.e., [0,1,2,4,5,6,7] might become [4,5,6,7,0,1,2]).

You are given a target value to search. If found in the array return its index,
otherwise return -1.

You may assume no duplicate exists in the array.

Your algorithm's runtime complexity must be in the order of O(log n).

Example 1:

Input: nums = [4,5,6,7,0,1,2], target = 0 Output: 4 Example 2:

Input: nums = [4,5,6,7,0,1,2], target = 3 Output: -1


Solution:   https://leetcode.com/submissions/detail/327067331/ beats 66.06% JS
Submissions.

Main crux of the problem is to do this by same binary search approach.

But work with adjustments made to the algorithm indices returned.

First find the smallest element in the array to get the adjusted starting index
of the pseudo sorted array.  
When low == high means that index is the start of the pseudo sorted array.  
Now find the element in the array with the regular binary search with
adjustment.

 */


/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    // First find the smallest element in the array to get the adjusted starting
    // index of the pseudo sorted array.
    let low = 0;
    let high = nums.length-1;
    while(low<high){
        let mid = Math.floor((low+high)/2);
        if(nums[mid]>nums[high])
            low = mid + 1;
        else
            high = mid;
    }
    
    //when low == high means that index is the start of the pseudo sorted array.
    //Now find the element in the array with the adjustment
    let rotationAdjustment = low;
    low = 0;
    high = nums.length - 1;
    while(low <= high){
        let mid = Math.floor((low+high)/2);
        let readMid = (mid + rotationAdjustment) % nums.length;
        if(nums[readMid] == target)
            return readMid;
        else if(target < nums[readMid])
            high = mid - 1;
        else
            low = mid + 1;
    }
    return -1;
};

let main = ()=>{
    console.log(search([4,5,6,7,0,1,2],0));
    console.log(search([4,5,6,7,0,1,2],3));
};

main();