/* 
https://leetcode.com/problems/rectangle-area/description/

Find the total area covered by two rectilinear rectangles in a 2D plane.

Each rectangle is defined by its bottom left corner and top right corner as shown in the figure.

Rectangle Area

Example:

Input: A = -3, B = 0, C = 3, D = 4, E = 0, F = -1, G = 9, H = 2
Output: 45
Note:

Assume that the total area is never beyond the maximum possible value of int.

TYPE:   TRICKY, NICE, RECTANGLES, COORDINATE SYSTEM

Solution:   https://leetcode.com/submissions/detail/306917424/  beats 88.52% JS Submissions.
            Very easy problem. However you should sort of trust the geometric coordinate systems and 
            that the addition subtraction will be handled automatically given that we choose the correct X and Y values to multiply. (max and min as necessary)
            That WAY - We don't need to handle each case of overlapping rectangles or non-overlapping or inclusive exclusive rectangle cases separately. 
            

 */

/**
 * @param {number} A
 * @param {number} B
 * @param {number} C
 * @param {number} D
 * @param {number} E
 * @param {number} F
 * @param {number} G
 * @param {number} H
 * @return {number}
 */
var computeArea = function(A, B, C, D, E, F, G, H) {
    return ((C - A) * (D - B) + (G - E) * (H - F) - Math.max(0, Math.min(G, C) - Math.max(A, E)) * Math.max(0, Math.min(D, H) - Math.max(B, F)));
};

var main = () => {
    console.log(computeArea(-3, 0, 3, 4, 0, -1, 9, 2));
};

main();