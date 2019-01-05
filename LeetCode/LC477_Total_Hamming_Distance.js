/* https://leetcode.com/problems/total-hamming-distance/description/

The Hamming distance between two integers is the number of positions at which the corresponding bits are different.

Now your job is to find the total Hamming distance between all pairs of the given numbers.

Example:
Input: 4, 14, 2

Output: 6

Explanation: In binary representation, the 4 is 0100, 14 is 1110, and 2 is 0010 (just
showing the four bits relevant in this case). So the answer will be:
HammingDistance(4, 14) + HammingDistance(4, 2) + HammingDistance(14, 2) = 2 + 2 + 2 = 6.
Note:
Elements of the given array are in the range of 0 to 10^9
Length of the array will not exceed 10^4.


Solution:   https://leetcode.com/submissions/detail/199248228/  beats 69.57% JS Submissions
            There are 2 approaches to solving this.

            Approach 1: Basic
            In this approach we basically calculate the hamming distance between 2 given numbers and we do this process for all the numbers in 2 loops.
            Only inner loop follows outer loop so that we don't do recalculation for same 2 numbers again.

            Approach 2: Formula and logic based.
            In this we use an important property of the binary numbers. 
            every bit position can be 1 or 0. for every bit position in corresponding numbers we multiply number of 1s with number of 0s. 
            and hence we get the contribution of that bit position in the hamming distance.
            Taking a simple case of 0 and 1. The hamming distance = 1 * (2 - 1) = 1
            Taking a simple case of 0 and 0. The hamming distance = 0 * (2 - 0) = 0
            Taking a simple case of 1 and 1. The hamming distance = 1 * (2 - 1) = 1
            Taking a simple case of 01 and 10 (i.e. 1 and 2). The hamming distance = 1 * (2 - 1) = [1] + 1 * (2 - 1) = [1] = [2]

 */            

/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistance = function(nums) {
    var ans = 0;
    for(var j=0; j<32; j++){
        var bitsCount = 0;
        for(var i=0; i<nums.length; i++){
            if(nums[i] >> j & 1) bitsCount++;
        }
        ans += bitsCount * (nums.length - bitsCount);
    }
    return ans;
};



/**
 * @param {number[]} nums
 * @return {number}
 */
var totalHammingDistanceBasic= function(nums) {
    var ans = 0;
    for(var i=0; i<nums.length-1; i++){
        for(var j=i+1; j<nums.length; j++){
            ans+=hammingDistance(nums[i],nums[j]);
        }
    }
    return ans;
};

var hammingDistance = function(a, b){
    var ans = a ^ b;
    var retCnt = 0;
    //console.log("ans is " + ans);
    while(ans>=1){
        if((ans & 1) == 1) retCnt++;
        //console.log(ans);
        ans = ans >> 1;
        
    }
    return retCnt;
}

var main = function(){
    console.log(totalHammingDistanceBasic([4, 14, 2]));
    console.log(totalHammingDistance([4, 14, 2]));
}

main();