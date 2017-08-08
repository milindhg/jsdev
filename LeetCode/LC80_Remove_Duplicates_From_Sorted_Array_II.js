/*
https://leetcode.com/problems/remove-duplicates-from-sorted-array-ii/description/
Follow up for "Remove Duplicates":
What if duplicates are allowed at most twice?

For example,
Given sorted array nums = [1,1,1,2,2,3],

Your function should return length = 5, with the first five elements of nums being 1, 1, 2, 2 and 3. It doesn't matter what you leave beyond the new length.

*/

/*
Solution:   https://leetcode.com/submissions/detail/112996118/ beats 84% of other js submissions.
            The approach here is to try to copy the array into another array. So you will basically maintain 2 indices for source and target array.
            Then you realize keeping the similar indices logic you can also do it in place using i and j.
            Just use i as the iterator and j as the current index on the final array. Then pop all the elements from the end of the array till j.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    var numberOfOccurences = 1;
    var i = 0, j = 0;
    // The main loop to iterate over the array. i to iterate over and j to keep track of elements in
    // final array.
    while (i < nums.length - 1) {

        if (nums[i + 1] == nums[j] && numberOfOccurences < 2) {
            numberOfOccurences++;
            j++;
            nums[j] = nums[i++];

        } else if (nums[i + 1] == nums[j] && numberOfOccurences == 2) {
            i++

        } else {
            if (nums[i + 1] != nums[j])
                numberOfOccurences = 1;
            j++;
            nums[j] = nums[i + 1];
            i++;
        }
        console.log(' nums: ' + nums);
    }

    while (j + 1 < nums.length) {
        nums.pop();
    }

    return nums.length;
};

var main = function () {
    var nums = [ 1, 1, 1 ];
    nums = [ 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 3, 3, 4, 4, 4, 4, 4 ];
    nums = [ 1, 2, 3 ];
    nums = [ 1 ];
    nums = [ 1, 1, 1, 2, 2, 2, 3, 3 ];
    console.log(removeDuplicates(nums));
    console.log(nums);
};

main();