/* 

https://leetcode.com/problems/longer-contiguous-segments-of-ones-than-zeros/

1869. Longer Contiguous Segments of Ones than Zeros
Easy

344

6

Add to List

Share
Given a binary string s, return true if the longest contiguous segment of 1's is strictly longer than the longest contiguous segment of 0's in s, or return false otherwise.

For example, in s = "110100010" the longest continuous segment of 1s has length 2, and the longest continuous segment of 0s has length 3.
Note that if there are no 0's, then the longest continuous segment of 0's is considered to have a length 0. The same applies if there is no 1's.

 

Example 1:

Input: s = "1101"
Output: true
Explanation:
The longest contiguous segment of 1s has length 2: "1101"
The longest contiguous segment of 0s has length 1: "1101"
The segment of 1s is longer, so return true.
Example 2:

Input: s = "111000"
Output: false
Explanation:
The longest contiguous segment of 1s has length 3: "111000"
The longest contiguous segment of 0s has length 3: "111000"
The segment of 1s is not longer, so return false.
Example 3:

Input: s = "110100010"
Output: false
Explanation:
The longest contiguous segment of 1s has length 2: "110100010"
The longest contiguous segment of 0s has length 3: "110100010"
The segment of 1s is not longer, so return false.
 

Constraints:

1 <= s.length <= 100
s[i] is either '0' or '1'.
Accepted
32,407
Submissions
53,716

Solution:   https://leetcode.com/submissions/detail/791130253/  beats 76.36% JS Submissions.
            This can be done by Kadane's algorithm. The local and global count variables to calculate localCount and globalMax

 */

/**
 * @param {string} s
 * @return {boolean}
 */
var checkZeroOnes = function (s) {
    //This can be done by Kadane's algorithm. The local and global count variables to calculate localCount and globalMax

    let max_0 = 0;
    let max_1 = 0;
    let localCnt_0 = 0;
    let localCnt_1 = 0;
    for (let i = 0; i < s.length; i++) {
        if (s.charAt(i) == 0) {
            localCnt_0 += 1;
            max_0 = Math.max(max_0, localCnt_0);
            localCnt_1 = 0;
        } else {
            localCnt_1 += 1;
            max_1 = Math.max(max_1, localCnt_1);
            localCnt_0 = 0;

        }
    }

    return max_1 > max_0;

};

let main = () => {
    console.log(checkZeroOnes("110100010"));
    console.log(checkZeroOnes("111000"));
    console.log(checkZeroOnes("1111000"));
};

main();