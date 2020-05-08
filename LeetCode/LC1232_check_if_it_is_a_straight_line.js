/*
 * @lc app=leetcode id=1232 lang=javascript
 *
 * [1232] Check If It Is a Straight Line
 *
 * https://leetcode.com/problems/check-if-it-is-a-straight-line/description/
 *
 * algorithms
 * Easy (46.65%)
 * Likes:    192
 * Dislikes: 26
 * Total Accepted:    24.3K
 * Total Submissions: 51.2K
 * Testcase Example:  '[[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]'
 *
 * You are given an array coordinates, coordinates[i] = [x, y], where [x, y]
 * represents the coordinate of a point. Check if these points make a straight
 * line in the XY plane.
 * 
 * 
 * TYPE:    TRICKY, ARRAY, LINEAR, COORDS, COORDINATES
 * 
 * Example 1:
 * 
 * 
 * 
 * 
 * Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
 * Output: true
 * 
 * 
 * Example 2:
 * 
 * 
 * 
 * 
 * Input: coordinates = [[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]
 * Output: false
 * 
 * 
 * 
 * Constraints:
 * 
 * 
 * 2 <= coordinates.length <= 1000
 * coordinates[i].length == 2
 * -10^4 <= coordinates[i][0], coordinates[i][1] <= 10^4
 * coordinates contains no duplicate point.
 * 
 * 
 * Solution:    https://leetcode.com/submissions/detail/336148702/
 *              beats 100% JS Submissions.
 * 
 * 
 * Time: O(n)
 * Space: O(1)
 * 
 * A very simple geometric formula.
 * Don't think about y = mx+c. Since finding c can be complex.
Think about (y1-y2)/(x1-x2) = slope. i.e. m and the slope will be same for all
the coordinates if they're on the same line.

However lines could be different. So the slope between any combination of the
points should be same for the slopes to be on the same line. Effectively we are
saying that the c i.e. Y intercept part is same for all the points or all the
lines formed by all the points and hence we assume c = 0 in y = mx+c.

Now formula becomes simple.

We say dy/dx = m.
And Any point to check whether on line applies => y = dy/dx * x
Hence dy/dx = y-y1/x-1.
However there is a problem with division because this can result in handling for
zero. We don't want that.

So convert the formula into multiplication form only.
So dy * x-x1 = dx * y-y1
It is same as dy * x-x0 = dx * y-y0

Very good Explanation here as well ==================
https://leetcode.com/problems/check-if-it-is-a-straight-line/discuss/408984/JavaPython-3-check-slopes-short-code-w-explanation-and-analysis.

The slope for a line through any 2 points (x0, y0) and (x1, y1) is (y1 - y0) /
(x1 - x0); Therefore, for any given 3 points (denote the 3rd point as (x, y)),
if they are in a straight line, the slopes of the lines from the 3rd point to
the 2nd point and the 2nd point to the 1st point must be equal:

(y - y1) / (x - x1) = (y1 - y0) / (x1 - x0)
In order to avoid being divided by 0, use multiplication form:

(x1 - x0) * (y - y1) = (x - x1) * (y1 - y0) =>
dx * (y - y1) = dy * (x - x1), where dx = x1 - x0 and dy = y1 - y0
Now imagine connecting the 2nd points respectively with others one by one, Check
if all of the slopes are equal.
========================================================================
 * 
 * 
 * 
 */

// @lc code=start
/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
    let [[x0, y0], [x1, y1]] = coordinates.splice(0, 2);    //take first 2 points as x1,y1 and x0,y0. And 
    return coordinates.every( coord => (x0 - x1) * (coord[1] - y1) == (y0 - y1) * (coord[0] - x1) );    
};
// @lc code=end

let main = () => {
    console.log(checkStraightLine([[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]));
    console.log(checkStraightLine([[1,1],[2,2],[3,4],[4,5],[5,6],[7,7]]));
};

main();