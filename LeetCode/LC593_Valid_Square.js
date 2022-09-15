/* 

https://leetcode.com/problems/valid-square/

Similar Geeks problem - https://www.geeksforgeeks.org/check-given-four-points-form-square/

593. Valid Square
Medium

783

815

Add to List

Share
Given the coordinates of four points in 2D space p1, p2, p3 and p4, return true if the four points construct a square.

The coordinate of a point pi is represented as [xi, yi]. The input is not given in any order.

A valid square has four equal sides with positive length and four equal angles (90-degree angles).

 

Example 1:

Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,1]
Output: true
Example 2:

Input: p1 = [0,0], p2 = [1,1], p3 = [1,0], p4 = [0,12]
Output: false
Example 3:

Input: p1 = [1,0], p2 = [-1,0], p3 = [0,1], p4 = [0,-1]
Output: true
 

Constraints:

p1.length == p2.length == p3.length == p4.length == 2
-104 <= xi, yi <= 104
Accepted
89,645
Submissions
203,368

Solution:   https://leetcode.com/submissions/detail/800168432/  beats 68.29% JS Submissions
            This is a very tricky problem. The first intuition is always to compare all 4 sides and 2 diagonals. 
            The intuition is right, however with this check we can get false positives.
            To avoid getting false positives, sequencing the points is important. Hence sort the points on x coordinate and y coordinate if x coordinate are same.

 */

/**
 * @param {number[]} p1
 * @param {number[]} p2
 * @param {number[]} p3
 * @param {number[]} p4
 * @return {boolean}
 */
var validSquare = function (p1, p2, p3, p4) {
    if (!areAllPointsDifferent([p1, p2, p3, p4])) return false;
    let points = [p1, p2, p3, p4];
    points = points.sort(([x1, y1], [x2, y2]) => {
        return x1 == x2 ? y1 - y2 : x1 - x2;
    });
    [p1, p2, p3, p4] = points;
    return getDistance(p1, p2) == getDistance(p2, p4)
        && getDistance(p1, p2) == getDistance(p1, p3)
        && getDistance(p2, p4) == getDistance(p3, p4)
        && getDistance(p1, p4) == getDistance(p2, p3);
};


let getDistance = ([x1, y1], [x2, y2]) => {
    return Math.pow((x2 - x1), 2) + Math.pow((y2 - y1), 2);
};

/* let calculateDiagonalLength = (sideLength) => {
    return 2 * sideLength;
} */

let areAllPointsDifferent = (points) => {
    let set = new Set();
    let [[x1, y1], [x2, y2], [x3, y3], [x4, y4]] = points;
    points.forEach(([x, y]) => set.add(x + "$" + y));
    return set.size == 4;
}

let main = () => {
    let utils = require("../Utilities/GeneralUtils");
    let u = new utils();
    u.answerValidator(validSquare([1, 0], [0, 1], [-1, 0], [0, -1]), true);
    u.answerValidator(validSquare([0, 0], [1, 1], [1, 0], [0, 12]), false);
    u.answerValidator(validSquare([1, 0], [-1, 0], [0, 1], [0, -1]), true);
    u.answerValidator(validSquare([1, 0], [0, 1], [-1, 0], [0, -1]), true);
    u.answerValidator(validSquare([0, 0], [0, 0], [0, 0], [0, 0]), false);
    u.answerValidator(validSquare([0, 1], [0, 2], [0, 3], [0, 4]), false);
    u.answerValidator(validSquare([2, 1], [2, 2], [2, 0], [0, 1]), false);
    u.answerValidator(validSquare([1134, -2539], [492, -1255], [-792, -1897], [-150, -3181]), true);
    u.answerValidator(validSquare([1, 1], [0, 1], [1, 2], [0, 0]), false);

};

main();
