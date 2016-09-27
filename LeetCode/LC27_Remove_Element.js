/*
 * Given an array and a value, remove all instances of that value in place and return the new
 * length. Do not allocate extra space for another array, you must do this in place with constant
 * memory. The order of elements can be changed. It doesn't matter what you leave beyond the new
 * length.
 *
 * Example: Given input array nums = [3,2,2,3], val = 3
 * Your function should return length = 2, with the first two elements of nums being 2.
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
    while (i <= j && j >= 0) {
        if (nums[i] == val) {
            var temp = nums[i];
            nums[i] = nums[j];
            nums[j] = temp;
            i += 1;
            j -= 1;
            while (nums[j] == val && j >= 0) {
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

// console.log( removeElement( [4,2,0,2,2,1,4,4,1,4,3,2], 4 ) );
console.log(removeElement([], 0));
