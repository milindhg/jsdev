/*
https://leetcode.com/problems/3sum/
Given an array S of n integers, are there elements a, b, c in S such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.

For example, given array S = [-1, 0, 1, 2, -1, -4],

A solution set is:
[
  [-1, 0, 1],
  [-1, -1, 2]
]

Solution:   https://leetcode.com/submissions/detail/91227497/

            First sort the numbers and have 3 pointers i,j,k on first, second and last index. and then keep i index constant and keep checking 2 numbers sum from j to k.
            Trick is to store the answer as found in hashmap with unique signature = here for signature we use sort the triplet and convert to string.

            Runtime: O(n^2)

            Better approach without storing anything in map
            ```
            Step 1: Sort the array (nlogn)
            Step 2: Now in n^2 we can find all combinations for nums[i] + nums[j] + nums[k] = 0
            Step 3: To optimize for nums[i], while nums[i] = nums[i+1], do i += 1
            Step 4: Similary for j and k,
                        while nums[j] = nums[j+1], do j += 1
                        while nums[k] = nums[k-1], k -= 1
            ```

*/


/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    var returnans = [];
    var hm = {};
    //console.log(hm);
    if (nums.length < 3) {
        return returnans;
    }
    sortfn(nums);
    //console.log(nums);

    i = 0;
    var j = 1;
    var k = (nums.length - 1);
    while (i < (nums.length - 2)) {
        while (j < k) {
            //console.log("i=" + i + " j=" + j + " k=" + k);
            //console.log(hm);
            if (nums[i] + nums[j] + nums[k] === 0) {
                if (!hm[sortfn([nums[i], nums[j], nums[k]])
                        .join('')]) {
                    returnans.push([nums[i], nums[j], nums[k]]);
                    hm[sortfn([nums[i], nums[j], nums[k]])
                        .join('')] = true;
                }
                j++;
            } else if (nums[i] + nums[j] + nums[k] < 0) {
                j++;
            } else {
                k--;
            }
        }
        i++;
        j = i + 1;
        k = nums.length - 1;
    }
    return returnans;
};

var sortfn = function (arr) {
    return arr.sort(function (a, b) {
        return a - b;
    });
};

var main = function () {
    var nums = new Array(-1, 0, 1, 2, -1, -4);
    //console.log(nums);
    console.log(threeSum(nums));
};

main();
