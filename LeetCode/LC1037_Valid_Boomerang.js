/* 
https://leetcode.com/problems/valid-boomerang/description/

A boomerang is a set of 3 points that are all distinct and not in a straight line.

Given a list of three points in the plane, return whether these points are a boomerang.

 

Example 1:

Input: [[1,1],[2,3],[3,2]]
Output: true
Example 2:

Input: [[1,1],[2,2],[3,3]]
Output: false
 

Note:

points.length == 3
points[i].length == 2
0 <= points[i][j] <= 100


TYPE:   VERY SIMPLE, TOO EASY

Solution:   https://leetcode.com/submissions/detail/273595605/  beats 92.81% JS Submissions.
            Main problem is to know the slope formule i.e. delta y / delta x.
            very simple approach 
            1. check if any points are same - if so then return false;
            2. get the slope of point 1 and 2.
            3. get the slope of point 2 and 3 and check if it is same as above slope.
            4. If slopes are same return false else return true

 */

/**
 * @param {number[][]} points
 * @return {boolean}
 */
var isBoomerang = function(points) {
    //check if any points are same
    if(arePointsSame(points)) return false;
    //get the slope of point 1 and 2.
    //get the slope of point 2 and 3 and check if it is same as above slope.
    var slope1 = getSlope(0,1,points);
    var slope2 = getSlope(1,2,points);
    return !(slope1==slope2);
};

var getSlope = function(pt1, pt2, points){
    return (points[pt2][1] - points[pt1][1]) / (points[pt2][0] - points[pt1][0]);
};

var arePointsSame = function(points){
    var point1 = points[0];
    var point2 = points[1];
    var point3 = points[2];
    return ((point1[0]==point2[0] && point1[1]==point2[1]) || (point2[0]==point3[0] && point2[1]==point3[1]) || (point1[0]==point3[0] && point1[1]==point3[1]));
};