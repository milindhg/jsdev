/*
https://leetcode.com/problems/contains-duplicate/
Given an array of integers, find if the array contains any duplicates. Your function should return true if any value appears at least twice in the array, and it should return false if every element is distinct.

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    var hm = {
        'unique' : {},
        'duplicate' : {}
    };
    for ( var i in nums) {
        if (hm['duplicate'][nums[i]]) {
            hm['duplicate'][nums[i]] = hm['duplicate'][nums[i]] + 1;
        } else if (hm['unique'][nums[i]]) {
            hm['duplicate'][nums[i]] = hm['unique'][nums[i]] + 1;
            delete hm['unique'][nums[i]];
        } else {
            hm['unique'][nums[i]] = 1;
        }
    }

    if (Object.keys(hm['duplicate']).length === 0) {
        return false;
    }
    return true;
};


