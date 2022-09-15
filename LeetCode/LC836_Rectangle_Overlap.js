/* 

https://leetcode.com/problems/rectangle-overlap/

similar Geeks problem: https://www.geeksforgeeks.org/find-two-rectangles-overlap/

836. Rectangle Overlap
Easy

1535

404

Add to List

Share
An axis-aligned rectangle is represented as a list [x1, y1, x2, y2], where (x1, y1) is the coordinate of its bottom-left corner, and (x2, y2) is the coordinate of its top-right corner. Its top and bottom edges are parallel to the X-axis, and its left and right edges are parallel to the Y-axis.

Two rectangles overlap if the area of their intersection is positive. To be clear, two rectangles that only touch at the corner or edges do not overlap.

Given two axis-aligned rectangles rec1 and rec2, return true if they overlap, otherwise return false.

 

Example 1:

Input: rec1 = [0,0,2,2], rec2 = [1,1,3,3]
Output: true
Example 2:

Input: rec1 = [0,0,1,1], rec2 = [1,0,2,1]
Output: false
Example 3:

Input: rec1 = [0,0,1,1], rec2 = [2,2,3,3]
Output: false
 

Constraints:

rec1.length == 4
rec2.length == 4
-109 <= rec1[i], rec2[i] <= 109
rec1 and rec2 represent a valid rectangle with a non-zero area.
Accepted
110,296
Submissions
254,845

Solution:   https://leetcode.com/submissions/detail/800654871/  beats 75% JS Submissions.
            The best way to solve overlapping windows or rectangles kind of problem is to use Min Max functions.
            Take Max of start of the window coordination be it x or y or start time of appointment.
            Take Min of end of the window coordination be it x or y or end time of appointment.
            Now if the max value above is greater than min value above that means there is an overlap.

            Example = [] and {}
            If [{]} => Then (max of starts){ < (min of ends) ] i.e. there is overlap
            If {[}] => Then (max of starts)[ < (min of ends) } i.e. there is overlap
            If []{} => Then (max of starts){ > (min of ends) ] i.e. there is NO overlap
            If {}[] => Then (max of starts)[ > (min of ends) } i.e. there is NO overlap

            Very useful method to find overlaps


 */

/**
 * @param {number[]} rec1
 * @param {number[]} rec2
 * @return {boolean}
 */
var isRectangleOverlap = function (rec1, rec2) {
    let [x1, y1, x2, y2] = rec1;
    let [p1, q1, p2, q2] = rec2;
    return Math.max(x1, p1) < Math.min(x2, p2) && Math.max(y1, q1) < Math.min(y2, q2);
};

let main = () => {
    let util = require("../Utilities/GeneralUtils");
    let u = new util();
    u.answerValidator(isRectangleOverlap([0, 0, 2, 2], [1, 1, 3, 3]), true);
    u.answerValidator(isRectangleOverlap([0, 0, 1, 1], [1, 0, 2, 1]), false);
    u.answerValidator(isRectangleOverlap([0, 0, 1, 1], [2, 2, 3, 3]), false);
};

main();