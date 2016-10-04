/**
 * 
 */

//Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//
//For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].
//Note:
//You must do this in-place without making a copy of the array.
//Minimize the total number of operations.
//Solution: Keep 2 variables, one to iterate and second to count number of zeroes. While counting, wherever you find zero in iteration, overwrite next non-zero numbers into it. 
//So basically move the non-zero elements to the left and finally write all zeroes to the end.
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 * 
 * This solution runtime beats 38% with for loops in the below. But as soon as those for loops are
 * made into while - This solution beats a whooping 77.83% of the JavaScript solutions.
 * 
 */
var moveZeroes = function (nums) {
    var cnt0 = 0;
    var nonzero = 0;
    var iter = 0;
    while (iter < nums.length) {
        if (nums[iter] === 0) {
            cnt0++;
        } else {
            nums[nonzero] = nums[iter];
            nonzero++;
        }
        iter++;
    }

    iter = 0;
    while (iter < cnt0) {
        nums[nonzero] = 0;
        nonzero++;
        iter++;
    }
}

/*
 * This solution runtime beats 51% 
 * 
 * */
var moveZeroesOldSolution_notbetter = function (nums) {
    var lastzeroindex = 0;
    var lastnonzeroindex = 0;

    // get the first place for non zero element to be placed. [i.e. first zero] This check is
    // required in case there are leading NON Zero elements in the input.
    while (lastnonzeroindex < nums.length && nums[lastnonzeroindex] !== 0) {
        lastnonzeroindex++;
    }

    // if there are leading NON Zero elements in the input then we basically ignore them and move
    // forward.
    lastzeroindex = lastnonzeroindex;

    // starting from first zero element, we check further
    while (lastnonzeroindex < nums.length) {
        // Get the first place for non-zero element.
        while (lastzeroindex < nums.length && nums[lastzeroindex] !== 0) {
            lastzeroindex++;
        }
        // Get the first place for zero element.
        while (lastnonzeroindex < nums.length && nums[lastnonzeroindex] === 0) {
            lastnonzeroindex++;
        }

        // Check for an array with NO non zero elements at all.
        if (lastnonzeroindex >= nums.length) {
            return;
        }
        console.log(lastzeroindex);
        console.log(lastnonzeroindex);

        // swap the current zero element with first non-zero element after zero.
        var temp = nums[lastnonzeroindex];
        nums[lastnonzeroindex] = nums[lastzeroindex];
        nums[lastzeroindex] = temp;
        lastnonzeroindex++;
        lastzeroindex++;
    }
};

var main = function () {
    // var nums = [ 1, 1, 0, 0, 1 ];
    // var nums = [ 1, 2, 3, 0, 0, 4 ];
    var nums = [ 0, 0, 1, 2, 3 ];
    moveZeroes(nums);
    console.log(nums);
}

main();
