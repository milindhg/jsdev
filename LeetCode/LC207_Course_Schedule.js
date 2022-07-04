/*

https://leetcode.com/problems/course-schedule/

207. Course Schedule
Medium

9460

384

Add to List

Share
There are a total of numCourses courses you have to take, labeled from 0 to numCourses - 1. You are given an array prerequisites where prerequisites[i] = [ai, bi] indicates that you must take course bi first if you want to take course ai.

For example, the pair [0, 1], indicates that to take course 0 you have to first take course 1.
Return true if you can finish all courses. Otherwise, return false.

 

Example 1:

Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0. So it is possible.
Example 2:

Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take. 
To take course 1 you should have finished course 0, and to take course 0 you should also have finished course 1. So it is impossible.
 

Constraints:

1 <= numCourses <= 2000
0 <= prerequisites.length <= 5000
prerequisites[i].length === 2
0 <= ai, bi < numCourses
All the pairs prerequisites[i] are unique.
Accepted
882,667
Submissions
1,957,312


Solution:   https://leetcode.com/submissions/detail/737855917/ beats 96.67% js submissions
            This is basically detection of a cycle in DAG. (directed acyclic graph)
            Now ideal way to completely prepare a graph of vertices and edges is to do basically topological sorting. And if there is a cycle anywhere in the graph then the courses cannot be completed.
            However since we just need to detect cycle, basically preparing graph as adjacency list will do. And vertices we already know i.e. the list of courses to take.
            Main intuition should be to do this by DFS. i.e. using queue or recursion.
            So isCycle is going to be the recusive function. However similar to fibonacci sequence, you can end up in recalculation of same values again and again to detect is there a cycle in subgraph. So line number 115 makes all the difference. I.e. line 115 basically says that there is no cycle from a given matrix further.
            This step is very important


*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function (numCourses, prerequisites) {
    //Prepare an adjacency list of vertices with edges.
    let adjList = {};
    for (var i = 0; i < numCourses; i++) {  //Prepare empty graph with vertices.
        adjList[i] = [];
    }

    let edgeStart = 1;
    let edgeEnd = 0;
    for (let i in prerequisites) {  //Add the logic to fill up the target edge vertices from each vertex in graph
        let edge = prerequisites[i];
        let vertexStart = edge[edgeStart];
        let vertexEnd = edge[edgeEnd];
        adjList[vertexStart].push(vertexEnd);
    }

    if (!hasSink(adjList))  //This is just to short circuit to return false for completing the courses if there is not sink in the DAG. Similar short circuit logic can also be written if there is not a single source of DAG.
        return false;


    for (var i = 0; i < numCourses; i++) {  //Check cycle presence from each vertex in graph.
        let visitedSet = new Set();
        // console.log("isCycle? in chain from " + i);
        if (isCycle(adjList, i, visitedSet))
            return false;
    }
    return true;
};


var hasSink = (adjList) => Object.keys(adjList).some(key => {
    if (adjList[key].length === 0)
        return true;
});

var isCycle = function (adjList, vertex, visitedSet) {
    if (visitedSet.has(vertex))
        return true;
    if (adjList[vertex].length === 0)
        return false;

    visitedSet.add(vertex);
    for (let i = 0; i < adjList[vertex].length; i++) {
        let neighbor = adjList[vertex][i];
        if (isCycle(adjList, neighbor, visitedSet))
            return true;
    }
    visitedSet.delete(vertex);
    adjList[vertex] = [];

    return false;
}

var main = function () {
    console.log(canFinish(2, [[1, 0], [0, 1]]) === false ? "Correct" : "Incorrect");
    console.log(canFinish(5, [[1, 0], [1, 2], [2, 3], [0, 3], [4, 1]]) === true ? "Correct" : "Incorrect");
    console.log(canFinish(5, [[1, 0], [1, 2], [2, 3], [0, 3], [4, 1], [2, 4]]) === false ? "Correct" : "Incorrect");
    console.log(canFinish(5, [[1, 0], [1, 2], [2, 3], [0, 3], [4, 1], [4, 2]]) === true ? "Correct" : "Incorrect");
    console.log(canFinish(3, [[1, 0], [2, 0], [0, 2]]) === false ? "Correct" : "Incorrect");
    console.log(canFinish(100, [[1, 0], [2, 0], [2, 1], [3, 1], [3, 2], [4, 2], [4, 3], [5, 3], [5, 4], [6, 4], [6, 5], [7, 5], [7, 6], [8, 6], [8, 7], [9, 7], [9, 8], [10, 8], [10, 9], [11, 9], [11, 10], [12, 10], [12, 11], [13, 11], [13, 12], [14, 12], [14, 13], [15, 13], [15, 14], [16, 14], [16, 15], [17, 15], [17, 16], [18, 16], [18, 17], [19, 17], [19, 18], [20, 18], [20, 19], [21, 19], [21, 20], [22, 20], [22, 21], [23, 21], [23, 22], [24, 22], [24, 23], [25, 23], [25, 24], [26, 24], [26, 25], [27, 25], [27, 26], [28, 26], [28, 27], [29, 27], [29, 28], [30, 28], [30, 29], [31, 29], [31, 30], [32, 30], [32, 31], [33, 31], [33, 32], [34, 32], [34, 33], [35, 33], [35, 34], [36, 34], [36, 35], [37, 35], [37, 36], [38, 36], [38, 37], [39, 37], [39, 38], [40, 38], [40, 39], [41, 39], [41, 40], [42, 40], [42, 41], [43, 41], [43, 42], [44, 42], [44, 43], [45, 43], [45, 44], [46, 44], [46, 45], [47, 45], [47, 46], [48, 46], [48, 47], [49, 47], [49, 48], [50, 48], [50, 49], [51, 49], [51, 50], [52, 50], [52, 51], [53, 51], [53, 52], [54, 52], [54, 53], [55, 53], [55, 54], [56, 54], [56, 55], [57, 55], [57, 56], [58, 56], [58, 57], [59, 57], [59, 58], [60, 58], [60, 59], [61, 59], [61, 60], [62, 60], [62, 61], [63, 61], [63, 62], [64, 62], [64, 63], [65, 63], [65, 64], [66, 64], [66, 65], [67, 65], [67, 66], [68, 66], [68, 67], [69, 67], [69, 68], [70, 68], [70, 69], [71, 69], [71, 70], [72, 70], [72, 71], [73, 71], [73, 72], [74, 72], [74, 73], [75, 73], [75, 74], [76, 74], [76, 75], [77, 75], [77, 76], [78, 76], [78, 77], [79, 77], [79, 78], [80, 78], [80, 79], [81, 79], [81, 80], [82, 80], [82, 81], [83, 81], [83, 82], [84, 82], [84, 83], [85, 83], [85, 84], [86, 84], [86, 85], [87, 85], [87, 86], [88, 86], [88, 87], [89, 87], [89, 88], [90, 88], [90, 89], [91, 89], [91, 90], [92, 90], [92, 91], [93, 91], [93, 92], [94, 92], [94, 93], [95, 93], [95, 94], [96, 94], [96, 95], [97, 95], [97, 96], [98, 96], [98, 97], [99, 97]]) === true ? "Correct" : "Incorrect");
};

main();

