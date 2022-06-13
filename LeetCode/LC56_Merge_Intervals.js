/*
https://leetcode.com/problems/merge-intervals/description/

Given a collection of intervals, merge all overlapping intervals.

For example,
Given [1,3],[2,6],[8,10],[15,18],
return [1,6],[8,10],[15,18].

Solution: https://leetcode.com/submissions/detail/134818631/ beats 75% submissions.
           The idea is to first sort the array by start.
           Then use 2 pointers - 1 to point to the first node and second for traversing checking if we found the end pointer.
           Then starting from the first node, keep checking whether you have found the end of first tuple in result.
           As soon as you find the tuple, add it to the resultset. 
           Then move the current node pointer and start preparing the new node of the result set.

*/

// Definition for an interval.
function Interval(start, end) {
    this.start = start;
    this.end = end;
}

/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function (intervals) {
    var outputs = [];
    var curr = 0;
    var next = 0;
    var candidateEnd = 0;
    intervals.sort(function (obj1, obj2) {
        return obj1.start - obj2.start;
    });
    //console.log(intervals);

    while (curr < intervals.length) {
        next = curr;
        candidateEnd = Math.max(intervals[next].end, candidateEnd);
        while (next < intervals.length
            && candidateEnd >= intervals[next].start) {
            candidateEnd = Math.max(intervals[next].end, candidateEnd);
            next = next + 1;
        }
        outputs.push([intervals[curr].start, candidateEnd]);
        curr = next;
        next = next + 1;
    }
    return outputs;
};

//With different input data type as 2D array instead of a Interval class
//https://leetcode.com/submissions/detail/715436489/ beats 88.78% js submissions
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var mergeNew = function (intervals) {
    let outputs = [];
    let start = 0, end = 1;
    //Sort the intervals in increasing order of start values.
    intervals.sort((interval1, interval2) => {
        return interval1[start] - interval2[start];
    });

    let curr = 0, next = 0, candidateEndVal = 0;
    while (curr < intervals.length) {
        next = curr;
        candidateEndVal = Math.max(intervals[next][end], candidateEndVal);
        while (next < intervals.length && candidateEndVal >= intervals[next][start]) {
            candidateEndVal = Math.max(intervals[next][end], candidateEndVal);
            next += 1;
        }
        outputs.push([intervals[curr][start], candidateEndVal]);
        curr = next;
        next += 1;
    }
    return outputs;

};

var main = function () {
    var intervals = [];
    // intervals.push(new Interval(1, 3));
    // intervals.push(new Interval(2, 6));
    // intervals.push(new Interval(3, 7));
    // intervals.push(new Interval(8, 10));
    // intervals.push(new Interval(1, 11));
    // intervals.push(new Interval(15, 18));
    intervals.push(new Interval(1, 4));
    intervals.push(new Interval(0, 2));
    intervals.push(new Interval(3, 5));
    console.log(intervals);
    intervals.sort(function (obj1, obj2) {
        return obj1.start - obj2.start;
    });

    console.log(merge(intervals));

    var intervals = [[1, 3], [2, 6], [8, 10], [15, 18]];
    console.log(mergeNew(intervals));
};

main();