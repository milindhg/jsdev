/* 

https://leetcode.com/problems/two-furthest-houses-with-different-colors/

2078. Two Furthest Houses With Different Colors
Easy

540

16

Add to List

Share
There are n houses evenly lined up on the street, and each house is beautifully painted. You are given a 0-indexed integer array colors of length n, where colors[i] represents the color of the ith house.

Return the maximum distance between two houses with different colors.

The distance between the ith and jth houses is abs(i - j), where abs(x) is the absolute value of x.

 

Example 1:


Input: colors = [1,1,1,6,1,1,1]
Output: 3
Explanation: In the above image, color 1 is blue, and color 6 is red.
The furthest two houses with different colors are house 0 and house 3.
House 0 has color 1, and house 3 has color 6. The distance between them is abs(0 - 3) = 3.
Note that houses 3 and 6 can also produce the optimal answer.
Example 2:


Input: colors = [1,8,3,8,3]
Output: 4
Explanation: In the above image, color 1 is blue, color 8 is yellow, and color 3 is green.
The furthest two houses with different colors are house 0 and house 4.
House 0 has color 1, and house 4 has color 3. The distance between them is abs(0 - 4) = 4.
Example 3:

Input: colors = [0,1]
Output: 1
Explanation: The furthest two houses with different colors are house 0 and house 1.
House 0 has color 0, and house 1 has color 1. The distance between them is abs(0 - 1) = 1.
 

Constraints:

n == colors.length
2 <= n <= 100
0 <= colors[i] <= 100
Test data are generated such that at least two houses have different colors.
Accepted
31,139
Submissions
46,123

Solution:   https://leetcode.com/submissions/detail/788919675/  beats 72.78% JS Submissions.
            Very simple approach. Main thing is the intuition.
            Intuition should be that the houses if are indeed of different colors, then to maximize the distance, one of the houses should be the extreme end. i.e. First house index=0 or last house index=colors.length-1
            1. Once we get this intuition, then simply run 2 forloops on all the elements in the array to compare with first and last house.
            2. If the colors are different, keel calculating the distance and maximize it in answer variable.
            3. Return answer variable.


 */

/**
 * @param {number[]} colors
 * @return {number}
 */
var maxDistance = function (colors) {
    let answer = Number.MIN_SAFE_INTEGER;
    [0, colors.length - 1].forEach(peggedElement => {
        colors.forEach((item, i) => {
            if (item != colors[peggedElement]) {
                let diff = Math.abs(i - peggedElement);
                answer = Math.max(answer, diff);
            }
        });
    });
    return answer;
};

var main = () => {
    console.log(maxDistance([1, 1, 1, 6, 1, 1, 1]));
    console.log(maxDistance([1,8,3,8,3]));
    console.log(maxDistance([0,1]));
};

main();