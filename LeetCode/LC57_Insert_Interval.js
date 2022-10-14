/*

https://leetcode.com/problems/insert-interval/

You are given an array of non - overlapping intervals intervals where intervals[i] = [starti, endi] represent the start and the end of the ith interval and intervals is sorted in ascending order by starti.You are also given an interval newInterval = [start, end] that represents the start and end of another interval.

Insert newInterval into intervals such that intervals is still sorted in ascending order by starti and intervals still does not have any overlapping intervals(merge overlapping intervals if necessary).

Return intervals after the insertion.



    Example 1:

Input: intervals = [[1, 3], [6, 9]], newInterval = [2, 5]
Output: [[1, 5], [6, 9]]
Example 2:

Input: intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]], newInterval = [4, 8]
Output: [[1, 2], [3, 10], [12, 16]]
Explanation: Because the new interval[4, 8] overlaps with [3, 5], [6, 7], [8, 10].


    Constraints:

0 <= intervals.length <= 104
intervals[i].length == 2
0 <= starti <= endi <= 105
intervals is sorted by starti in ascending order.
    newInterval.length == 2
0 <= start <= end <= 105
Accepted
517, 114
Submissions
1, 379, 058

*/
/*

Solution:   https://leetcode.com/submissions/detail/715179343/ beats 57.06% submissions
            1. Return newInterval if the intervals input empty.
            2. insert all non-overlapping intervals completely less than newInterval into answer.
            3. For overlapping intervals, keep modifying the newInterval to account for the overlapping interval slots. And finally merge the modified newInterval into answer essentially merging the newInterval with all overlapping intervals.
            4. Finally insert all non-overlapping intervals completely greater than newInterval into answer
            

*/

/**
 * 
 * https://leetcode.com/submissions/detail/715179343/ beats 57.06% submissions
 * 
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    let curr = 0;
    const ans = [];
    let start = 0;
    let end = 1;

    //Return newInterval if the intervals input empty.
    if (intervals.length == 0)
        return [newInterval];

    //insert all non-overlapping intervals completely less than newInterval into answer.
    while (curr < intervals.length && intervals[curr][end] < newInterval[start]) {
        ans.push(intervals[curr]);
        curr++;
    }

    //For overlapping intervals, keep modifying the newInterval to account for the overlapping interval slots.
    //And finally merge the modified newInterval into answer essentially merging the newInterval with all overlapping intervals.
    while (curr < intervals.length && intervals[curr][start] <= newInterval[end]) {
        newInterval[start] = Math.min(intervals[curr][start], newInterval[start]);
        newInterval[end] = Math.max(intervals[curr][end], newInterval[end]);
        curr++;
    }
    ans.push(newInterval);

    //Finally insert all non-overlapping intervals completely greater than newInterval into answer
    while (curr < intervals.length) {
        ans.push(intervals[curr]);
        curr++;
    }
    return ans;
};


//study this approach
/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
    const result = [];
    const start = 0;
    const end = 0;

    for (let i = 0; i < intervals.length; i++) {
        let currInterval = intervals[i];

        // If overlaps
        if (Math.max(currInterval[start], newInterval[start]) <= Math.min(currInterval[end], newInterval[end])) {
            newInterval = [Math.min(currInterval[start], newInterval[start]), Math.max(currInterval[end], newInterval[end])];
            continue;
        }

        // If newInterval slot is lower than the current interval slot then insert newInterval in between
        if (newInterval[end] < currInterval[start]) {
            result.push(newInterval, ...intervals.slice(i));  //inject newInterval before remaining intervals and then push remaining intervals. All in one function using slice and push.
            return result;
        }

        //Keep pushing current interval in answer since newInterval does not overlap and is coming later.
        result.push(currInterval);
    }

    result.push(newInterval);
    return result;
};

var main = function () {
    var intervals = [[1, 3], [6, 9]];
    var newInterval = [2, 5];
    console.log(insert(intervals, newInterval));
    intervals = [[1, 2], [3, 5], [6, 7], [8, 10], [12, 16]];
    newInterval = [4, 8];
    console.log(insert(intervals, newInterval));
};

main();