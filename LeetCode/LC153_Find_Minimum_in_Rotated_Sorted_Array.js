/* 
https://leetcode.com/problems/find-minimum-in-rotated-sorted-array/

Suppose an array of length n sorted in ascending order is rotated between 1 and n times. For example, the array nums = [0,1,2,4,5,6,7] might become:

[4,5,6,7,0,1,2] if it was rotated 4 times.
[0,1,2,4,5,6,7] if it was rotated 7 times.
Notice that rotating an array [a[0], a[1], a[2], ..., a[n-1]] 1 time results in the array [a[n-1], a[0], a[1], a[2], ..., a[n-2]].

Given the sorted rotated array nums of unique elements, return the minimum element of this array.

You must write an algorithm that runs in O(log n) time.

 

Example 1:

Input: nums = [3,4,5,1,2]
Output: 1
Explanation: The original array was [1,2,3,4,5] rotated 3 times.
Example 2:

Input: nums = [4,5,6,7,0,1,2]
Output: 0
Explanation: The original array was [0,1,2,4,5,6,7] and it was rotated 4 times.
Example 3:

Input: nums = [11,13,15,17]
Output: 11
Explanation: The original array was [11,13,15,17] and it was rotated 4 times. 
 

Constraints:

n == nums.length
1 <= n <= 5000
-5000 <= nums[i] <= 5000
All the integers of nums are unique.
nums is sorted and rotated between 1 and n times.


Solution:   https://leetcode.com/submissions/detail/707510879/  beats 85.92% JS Submissions.
            In this modified version of binary search algorithm, we are looking for this point.


Algorithm

Find the mid element of the array.

If mid element > first element of array this means that we need to look for the inflection point on the right of mid.

If mid element < first element of array this that we need to look for the inflection point on the left of mid.


In the above example mid element 6 is greater than first element 4. Hence we continue our search for the inflection point to the right of mid.

4 . We stop our search when we find the inflection point, when either of the two conditions is satisfied:

nums[mid] > nums[mid + 1] Hence, mid+1 is the smallest.

nums[mid - 1] > nums[mid] Hence, mid is the smallest.


In the above example. With the marked left and right pointers. The mid element is 2. The element just before 2 is 7 and 7>2 i.e. nums[mid - 1] > nums[mid]. Thus we have found the point of inflection and 2 is the smallest element.


 */

/**
 * @param {number[]} nums
 * @return {number}
 */
 var findMin = function(nums) {
    var l = 0;
    var h = nums.length-1;
    if(nums[h] > nums[0] || nums.length == 1)
        return nums[0];
     
    while(l<=h){
        var mid = Math.floor((l+h)/2);
        if(nums[mid] > nums[mid+1])
            return nums[mid+1];         // This is a dip immediately AFTER mid, and hence next element after mid is smallest.
        
        if(nums[mid-1] > nums[mid])
            return nums[mid];           // This is a dip immediately AT mid, and hence mid element is smallest.
        
        if(nums[l] < nums[mid])         //then influction point is somewhere after mid
            l = mid + 1;
        else                            //then influction point is somewhere before mid
            h = mid - 1;
        
    }
    return -1;
};


let main = () => {
    console.log(findMin([3,4,5,1,2]));
    console.log(findMin([4,5,6,7,0,1,2]));
    console.log(findMin([11,13,15,17]));
    console.log(findMin([3,1,2]));
    console.log(findMin([5,1,2,3,4]));
    console.log(findMin([1]));
};

main();