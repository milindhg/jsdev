/*
https://leetcode.com/problems/container-with-most-water/
Given n non-negative integers a1, a2, ..., an, where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of line i is at (i, ai) and (i, 0). Find two lines, which together with x-axis forms a container, such that the container contains the most water.

Note: You may not slant the container.

*/
/*
Solution:   https://leetcode.com/submissions/detail/91222799/
            Iterate with 2 pointers from the 2 extremes of the height array. In every iteration, 
            keep calculating and updating area only if it is greater than maxArea. At the end of the iteration you get the answer.

*/
/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    var arrayLength = height.length;
    var maxArea = 0;
    if (arrayLength < 2) {
        return maxArea;
    }
    var i = 0, j = arrayLength - 1;
    while (i < j) {
        var leftHeight = height[i];
        var rightHeight = height[j];
        maxArea = Math
                .max(maxArea, Math.min(leftHeight, rightHeight) * (j - i));
        // We use this condition to calculate the max area mostly when we may have a larger line.
        // Basically maximization
        if (leftHeight < rightHeight) {
            i++;
        } else if (leftHeight > rightHeight) {
            j--;
        } else { // Adding this condition to progress both when left ==right, increases
            // performance to 99%
            i++;
            j--;
        }
    }
    return maxArea;
};

main = function () {
    var height = [ 1, 1 ];
    console.log(maxArea(height));
};

main();