/**
 * 
 */

//Given an array nums, write a function to move all 0's to the end of it while maintaining the relative order of the non-zero elements.
//
//For example, given nums = [0, 1, 0, 3, 12], after calling your function, nums should be [1, 3, 12, 0, 0].
//Note:
//You must do this in-place without making a copy of the array.
//Minimize the total number of operations.
//Solution: First run an iteration and count number of zeroes. Then keep two pointers and shift all numbers to left.
/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
    var lastzeroindex = 0;
    var lastnonzeroindex = 0;
    while(lastnonzeroindex<nums.length && nums[lastnonzeroindex]!==0){
        lastnonzeroindex++;
    }
    lastzeroindex=lastnonzeroindex;
    while(lastnonzeroindex<nums.length){
        while(lastzeroindex<nums.length && nums[lastzeroindex]!==0){
            lastzeroindex++;
        }
        while(lastnonzeroindex<nums.length && nums[lastnonzeroindex]===0){
            lastnonzeroindex++;
        }
        
        //Check for an array with NO non zero elements at all.
        if(lastnonzeroindex>=nums.length){
            return;
        }
        console.log(lastzeroindex);
        console.log(lastnonzeroindex);
        var temp = nums[lastnonzeroindex];
        nums[lastnonzeroindex] = nums[lastzeroindex];
        nums[lastzeroindex] = temp;
        lastnonzeroindex++;
        lastzeroindex++;
    }
};

var main = function () {
    var nums = [ 0 ];
    moveZeroes(nums);
    console.log(nums);
}

main();