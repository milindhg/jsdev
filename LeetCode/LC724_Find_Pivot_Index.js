/* https://leetcode.com/problems/find-pivot-index/description/

Given an array of integers nums, write a method that returns the "pivot" index of this array.

We define the pivot index as the index where the sum of the numbers to the left of the index is equal to the sum of the numbers to the right of the index.

If no such index exists, we should return -1. If there are multiple pivot indexes, you should return the left-most pivot index.

Example 1:

Input: 
nums = [1, 7, 3, 6, 5, 6]
Output: 3
Explanation: 
The sum of the numbers to the left of index 3 (nums[3] = 6) is equal to the sum of numbers to the right of index 3.
Also, 3 is the first index where this occurs.
 

Example 2:

Input: 
nums = [1, 2, 3]
Output: -1
Explanation: 
There is no index that satisfies the conditions in the problem statement.
 

Note:

The length of nums will be in the range [0, 10000].
Each element nums[i] will be an integer in the range [-1000, 1000].
 

Solution:       https://leetcode.com/submissions/detail/207072573/ beats 41% of JS Submissions
                Simple approach is to keep 2 values leftSum rightSum and keep updating and comparing them as you go along.
                To calculate rightSum from the start, you need to calculate the total sum beforehand.

 */


/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function(nums) {
    if(nums.length==0) return -1;
    var totalSum = 0;
    nums.forEach(function(a){ 
        totalSum+=a;
    });
    
    var leftSum = 0;
    var rightSum = totalSum - nums[0];
    if(leftSum==rightSum) return 0;
    
    var i = 0;
    while(i<nums.length){
        leftSum+=nums[i++];
        rightSum-=nums[i];
        if(leftSum==rightSum) return i;
    }
    
    return -1;
};

var main = function(){
    var nums = [1, 7, 3, 6, 5, 6];
    console.log(pivotIndex(nums));
};

main();