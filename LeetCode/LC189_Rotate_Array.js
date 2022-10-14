/*
https://leetcode.com/problems/rotate-array/#/description
    Rotate an array of n elements to the right by k steps.

    For example, with n = 7 and k = 3, the array [1,2,3,4,5,6,7] is rotated to [5,6,7,1,2,3,4].

    Note:
    Try to come up as many solutions as you can, there are at least 3 different ways to solve this problem.

    [show hint]

    Related problem: Reverse Words in a String II
*/

/*
Solution:   beats 76.51% of js submissions: https://leetcode.com/submissions/detail/102679280/
            The main constraint here is to do this in place.
            Basic crux of the solution is thinking it in terms of solving the problem of reversing the order of words in a sentence.
            So basically we take the k as the splitting point in the array to make this array into 2.
            Then reverse left half, reverse right half (both inplace)
            Finally reverse the whole array. And you get the answer automatically. 
            Depending on which side you want to rotate the array, change the k value.
            If rotation is towards left, then keep k as it is.
            If rotation is towards right, then update k = nums.length-k.
*/

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function (nums, k) {
    if (k > nums.length) {
        k = k % nums.length;
    }
    k = nums.length - 1 - k;
    rotateFromTo(nums, 0, k);
    rotateFromTo(nums, k + 1, nums.length - 1);
    rotateFromTo(nums, 0, nums.length - 1);
};

var rotateFromTo = function (nums, start, end) {
    while (start < end) {
        temp = nums[start];
        nums[start] = nums[end];
        nums[end] = temp;
        start++;
        end--;
    }
};

var main = function () {
    var nums = [ 1, 2 ];
    var k = 3;
    rotate(nums, k);
    console.log(nums);
};

main();