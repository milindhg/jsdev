/*
https://leetcode.com/problems/jump-game/description/
Given an array of non-negative integers, you are initially positioned at the first index of the array.

Each element in the array represents your maximum jump length at that position.

Determine if you are able to reach the last index.

For example:
A = [2,3,1,1,4], return true.

A = [3,2,1,0,4], return false.



Solution:   https://leetcode.com/submissions/detail/215117753/ beats 100% JS Submissions.

Start from the first index and start with the initial number of jumps you can
have.  Then take a greedy approach and try to jump and reduce number of steps
left in counter. If you jump on an index with more steps, add those to remaining
steps so that you can jump more/longer.  finally if you can reach the end of the
array, you are good. If not, then return false.

One good point in between while jumping through could be to keep checking if my
current remaining steps are long enough to jump directly to the end of array or
out of the array.
*/

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function(nums) {
    if(nums.length==0)
        return true;
    var jumpsRemaining = nums[0];
    var i = 0;
    while(i<nums.length){
        if (jumpsRemaining>=nums.length-1-i || (i==nums.length-1 && jumpsRemaining>0))
            return true;
        if(jumpsRemaining<=0 && i<nums.length-1)
            return false;
        i++;
        jumpsRemaining--;
        jumpsRemaining = Math.max(jumpsRemaining, nums[i]);
    }
    return false;
};


// This is the other approach of looking at the answer or array from behind/end of the array.
var canJumpEasy = function (nums) {
  var last = nums.length - 1;
  var n = nums.length;
  for (i = n - 2; i >= 0; i--) {
    if (i + nums[i] >= last) 
        last = i;
  }
  return last <= 0;
};

var main = function () {
    var nums = [ 0 ];
    console.log(nums + ' ' + canJump(nums));
    nums = [ 1 ];
    console.log(nums + ' ' + canJump(nums));
    nums = [];
    console.log(nums + ' ' + canJump(nums));
    nums = [ 0, 1 ];
    console.log(nums + ' ' + canJump(nums));
    nums = [ 1, 1 ];
    console.log(nums + ' ' + canJump(nums));
    nums = [ 1, 0, 2 ];
    console.log(nums + ' ' + canJump(nums));
    nums = [ 2, 3, 1, 1, 4 ];
    console.log(nums + ' ' + canJump(nums));
    nums = [ 3, 2, 1, 0, 4 ];
    console.log(nums + ' ' + canJump(nums));
    nums = [1,1,2,2,0,1,1];
    console.log(nums + ' ' + canJump(nums));
};

main();
