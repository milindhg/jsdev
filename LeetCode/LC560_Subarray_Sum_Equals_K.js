/* 
https://leetcode.com/problems/subarray-sum-equals-k/description/

Given an array of integers and an integer k, you need to find the total number of continuous subarrays whose sum equals to k.

TYPE:   LINEAR, ARRAY, TRICKY, PROPERTY, CONSTANT SPACE

Example 1:
Input:nums = [1,1,1], k = 2
Output: 2
Note: The length of the array is in range [1, 20,000].  The range of numbers in
the array is [-1000, 1000] and the range of the integer k is [-1e7, 1e7].

   Hide Hint #1  
Will Brute force work here? Try to optimize it.
   Hide Hint #2  
Can we optimize it by using some extra space?
   Hide Hint #3  
What about storing sum frequencies in a hash table? Will it be useful?
   Hide Hint #4  
sum(i,j)=sum(0,j)-sum(0,i), where sum(i,j) represents the sum of all the
elements from index i to j-1. Can we use this property to optimize it.

Solution:   https://leetcode.com/submissions/detail/328732457/
            beats 71.60% JS Submissions.

This is a very tricky problem in the array type. Mainly it can be done easily in
O(n^2) time. But to do it in linear time is really tricky.
We need to use some kind of property of the array.

Good Explanation below.
Approach 4: Using Hashmap
Algorithm

The idea behind this approach is as follows: If the cumulative sum(repreesnted
by sum[i]sum[i] for sum upto i^{th}i th index) upto two indices is the same, the
sum of the elements lying in between those indices is zero. Extending the same
thought further, if the cumulative sum upto two indices, say ii and jj is at a
difference of kk i.e. if sum[i] - sum[j] = ksum[i]−sum[j]=k, the sum of elements
lying between indices ii and jj is kk.

Based on these thoughts, we make use of a hashmap mapmap which is used to store
the cumulative sum upto all the indices possible along with the number of times
the same sum occurs. We store the data in the form: (sum_i, no. of occurences of
sum_i)(sum i,no.ofoccurencesofsum i). We traverse over the array numsnums and
keep on finding the cumulative sum.  Every time we encounter a new sum, we make
a new entry in the hashmap corresponding to that sum. If the same sum occurs
again, we increment the count corresponding to that sum in the hashmap. Further,
for every sum encountered, we also determine the number of times the sum
sum-ksum−k has occured already, since it will determine the number of times a
subarray with sum kk has occured upto the current index. We increment the
countcount by the same amount.

After the complete array has been traversed, the countcount gives the required
result.

The animation below depicts the process.

Explanation here - https://leetcode.com/problems/subarray-sum-equals-k/solution/


 */

/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var subarraySum = function (nums, k) {
    let count = 0;
    let sum = 0;
    let map = new Object();
    map[0] = 1;
    nums.forEach((num) => {
        sum += num;
        if (map.hasOwnProperty(sum - k))
            count += map[sum - k];
        if (!map.hasOwnProperty(sum))
            map[sum] = 0;
        map[sum] += 1;
    });
    return count;
};


let main = () => {
    console.log(subarraySum([1,1,1], 2));
    console.log(subarraySum([1], 2));
    console.log(subarraySum([1], 1));
    console.log(subarraySum([1], 0));
};

main();