/*
 * 
 * https://leetcode.com/problems/remove-element/
 * Given an array and a value, remove all instances of that value in place and return the new
 * length. Do not allocate extra space for another array, you must do this in place with constant
 * memory. The order of elements can be changed. It doesn't matter what you leave beyond the new
 * length.
 *
 * Example: Given input array nums = [3,2,2,3], val = 3
 * Your function should return length = 2, with the first two elements of nums being 2.
 *
 */

/*
Solution:   https://leetcode.com/submissions/detail/91950979/
            Keep 2 pointers on the 2 extremes of the array.
            Keep decreasing the higher pointer to always see and decrement if pointing to the given value.
            Iterate with the lower pointer to find any places with given value and swap them with higher pointer.
            In such a way, we can swap in place in Single Pass and give the answer with the given values removed/segregated at the end of the array.
            
            https://leetcode.com/submissions/detail/91951641/
            Easier to read approach. Just iterate over the array, and whenever the given value is not found, sweep the numbers to the front, 1by1.
            
*
*/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function (nums, val) {
    var i = 0;
    var j = nums.length - 1;
    while (nums[j] == val) {
        j -= 1;
    }
    while (i <= j && j >= 0) { // Keeping j>=0 is not very trivial to think. but is a very imp
        // condition.
        if (nums[i] == val) {
            var temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i += 1;
            j -= 1;
            while (nums[j] == val && j >= 0) { // Again the same loop to decrement j since target
                // number can be present anywhere.
                j -= 1;
            }
            // console.log( i );
            // console.log( j );
            // console.log( nums );
        } else {
            i += 1;
        }
    }
    // console.log(i);
    // console.log(j);
    // console.log(nums);
    while (nums[j] == val && j >= 0) {
        j -= 1;
    }
    return j + 1;
};

/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElementEasy = function (nums, val) {
    var begin = 0;
    for (var i = 0; i < nums.length; i++) {
        if (nums[i] != val)
            nums[begin++] = nums[i];
    }
    return begin;
};

console.log(removeElementEasy([ 4, 2, 0, 2, 2, 1, 4, 4, 1, 4, 3, 2 ], 4));
console.log(removeElementEasy([], 0));
