/* https://leetcode.com/problems/sort-colors/description/

Given an array with n objects colored red, white or blue, sort them in-place so that objects of the same color are adjacent, with the colors in the order red, white and blue.

Here, we will use the integers 0, 1, and 2 to represent the color red, white, and blue respectively.

Note: You are not suppose to use the library's sort function for this problem.

Example:

Input: [2,0,2,1,1,0]
Output: [0,0,1,1,2,2]
Follow up:

A rather straight forward solution is a two-pass algorithm using counting sort.
First, iterate the array counting number of 0's, 1's, and 2's, then overwrite array with total number of 0's, then 1's and followed by 2's.
Could you come up with a one-pass algorithm using only constant space?


Solution:   https://leetcode.com/submissions/detail/457063459/  beats 99.78% JS Submissions.
            This is dutch flag problem.
            The approach is basically the partition logic of the typical quick sort algorithm.
            Only caveat here is that the regular partition logic has a pivot as an index. While in this case it will be the middle color of the flag. i.e. 1.
            Another caveat is we basically need 3 pointers, one at start for tracking 0, one at end tracking 2 and one iterating pointer for middle color 1.


 */

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function(nums) {
    var i = 0;
    var j = 0;
    var k = nums.length-1;
    while(j<=k){
        if(nums[j]<1){
            var temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;
            i++;
            j++;
        }else if(nums[j]>1){
            var temp = nums[j];
            nums[j] = nums[k];
            nums[k] = temp;
            k--;
        }else{
            j++;
        }
    }
};

var main = () => {
    console.log(sortColors([2,0,2,1,1,0]));
};

main();