/*
https://leetcode.com/problems/contains-duplicate/
217. Contains Duplicate
Easy

6786

1033

Add to List

Share
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

 

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
 

Constraints:

1 <= nums.length <= 105
-109 <= nums[i] <= 109
Accepted
2,116,505
Submissions
3,457,753

Solution:   https://leetcode.com/submissions/detail/815495291/ beats 79.32% JS Submissions
            Very easy, keep a set or hashmap while you keep storing elements from the array. As soon as you find an element already exists in the set/map return true. since it means that element appears at least twice.

            Runtime: O(n)
            SpaceL O(n)


            We can also do it in constant space if the elements are sorted. but if not sorted already, then runtime will be O(nlogn)

*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
    var hm = {
        'unique': {},
        'duplicate': {}
    };
    for (var i in nums) {
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


/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicateEasy = function (nums) {
    let mySet = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (mySet.has(nums[i])) return true;
        else mySet.add(nums[i]);
    }
    return false;
};

let main = () => {
    console.log(containsDuplicateEasy([1, 2, 3, 1]));
    console.log(containsDuplicate([1, 2, 3, 4]));
    console.log(containsDuplicate([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]));
};

main();