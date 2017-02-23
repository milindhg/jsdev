/*
https://leetcode.com/problems/intersection-of-two-arrays/?tab=Description
Given two arrays, write a function to compute their intersection.

Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2].

Note:
Each element in the result must be unique.
The result can be in any order.


*/
/*
Solution:   https://leetcode.com/submissions/detail/93626481/
            First traverse through first array and keep all the numbers in a hashmap.
            Then traverse through other array and compare with the elements in the first array.
*/

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    var hm1 = {};
    var hm2 = {};
    for ( var i in nums1) {
        if (hm1[nums1[i]] !== true) {
            hm1[nums1[i]] = true;
        }
    }
    for ( var j in nums2) {
        if (hm1[nums2[j]] === true) {
            hm2[nums2[j]] = true;
        }
    }

    ans = [];
    for ( var key in hm2) {
        ans.push(parseInt(key));
    }
    return ans;
};

var main = function () {
    nums1 = [ 1, 2, 2, 1 ];
    nums2 = [ 2, 2 ];
    console.log(intersection(nums1, nums2));
};

main();