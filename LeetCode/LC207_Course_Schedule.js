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
prerequisites[i].length == 2
0 <= ai, bi < numCourses
All the pairs prerequisites[i] are unique.
Accepted
882,667
Submissions
1,957,312





*/

/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */
var canFinish = function(numCourses, prerequisites) {
    var graph = {};
    for(var i in prerequisites){
        var edge = prerequisites[i];
        if(!graph[edge[1]]){
            graph[edge[1]] = new Set();
        }
        if(!graph[edge[0]]){
            graph[edge[0]] = new Set();
        }
        graph[edge[1]].add(edge[0]);
    }
    
    

    console.log(graph);
    console.log(graph[1].has(0));
};

var main = function(){
    canFinish(2, [[1,0],[0,1]]);
    var a = new Set();
    a.add(1);
    a.add(2);
    console.log(a);
    a.forEach(function(vertex){
        console.log(vertex);
    })
};

main();

