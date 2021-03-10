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


            Found a better solution
            https://leetcode.com/submissions/detail/218441108/  beats 95.72% JS Submissions.
            This is a better easier and efficient approach.
            Keep 2 pointers. start j from 2 (i.e. 3rd index) intentionally because you want to check whether the first number is already repeated and you want to allow 2 duplicates.
            Always overwrite numbers because we want to do this in-place in the array.
            i.e. effectively we slide the numbers from right to left.
*/

/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicatesComplicated = function (nums) {
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


/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    var j = 2;  // This is basically because we can assume first 2 numbers are already 2 counts of first number in the sorted array.
    for(var i=2; i<nums.length; i++){
        if(nums[i]==nums[j-1] && nums[i]==nums[j-2])
            continue;       //i.e. such a number needs to be overwritten further so don't increase j index.
        else
            nums[j++]=nums[i];  //always keep overwriting numbers. 
        //We always overwrite to get the answer inplace.
    }
    return j;
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