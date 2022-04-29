/* 
https://leetcode.com/problems/frog-position-after-t-seconds/description/

Given an undirected tree consisting of n vertices numbered from 1 to n. A frog starts jumping from the vertex 1. In one second, the frog jumps from its current vertex to another unvisited vertex if they are directly connected. The frog can not jump back to a visited vertex. In case the frog can jump to several vertices it jumps randomly to one of them with the same probability, otherwise, when the frog can not jump to any unvisited vertex it jumps forever on the same vertex. 

The edges of the undirected tree are given in the array edges, where edges[i] = [fromi, toi] means that exists an edge connecting directly the vertices fromi and toi.

Return the probability that after t seconds the frog is on the vertex target.

 

Example 1:



Input: n = 7, edges = [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]], t = 2, target = 4
Output: 0.16666666666666666 
Explanation: The figure above shows the given graph. The frog starts at vertex 1, jumping with 1/3 probability to the vertex 2 after second 1 and then jumping with 1/2 probability to vertex 4 after second 2. Thus the probability for the frog is on the vertex 4 after 2 seconds is 1/3 * 1/2 = 1/6 = 0.16666666666666666. 
Example 2:



Input: n = 7, edges = [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]], t = 1, target = 7
Output: 0.3333333333333333
Explanation: The figure above shows the given graph. The frog starts at vertex 1, jumping with 1/3 = 0.3333333333333333 probability to the vertex 7 after second 1. 
Example 3:

Input: n = 7, edges = [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]], t = 20, target = 6
Output: 0.16666666666666666
 

Constraints:

1 <= n <= 100
edges.length == n-1
edges[i].length == 2
1 <= edges[i][0], edges[i][1] <= n
1 <= t <= 50
1 <= target <= n
Answers within 10^-5 of the actual value will be accepted as correct.


Solution:   

 */

/**
 * @param {number} n
 * @param {number[][]} edges
 * @param {number} t
 * @param {number} target
 * @return {number}
 */
var frogPosition = function(n, edges, t, target) {
    var map = {};
    var reversemap = {};
    edges.forEach((edge)=>{
        var u = Math.min(edge[0],edge[1]);
        var v = Math.max(edge[0],edge[1]);
        if(!map[u])
            map[u] = [];
        map[u].push(v);
        if(!reversemap[v])
        reversemap[v] = u;
    });

    if(isLeaf(target, map)){
        var resp = backTrackHelper(target, map, reversemap);
        return (resp[0].length-1>t) ? 0 : resp[1];
    }else{
        var resp = backTrackHelper(target, map, reversemap);
        return (resp[0].length<=t) ? 0 : resp[1];
    }

};

var backTrackHelper = (target, map, reversemap) => {
    var path = [target];
    var ans = 1;
    var nextNode = target;
    while(nextNode!=1){
        nextNode = reversemap[nextNode];
        ans *= 1/map[nextNode].length;
        path.push(nextNode);
    }
    return [path,ans];
};


var isLeaf = (node, map) => {
    return !(map.hasOwnProperty(node) && map[node].length>0);
};

var main = () => {
    // console.log(frogPosition(7, [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]], 2, 4));
    // console.log(frogPosition(7, [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]], 20, 4));
    // console.log(frogPosition(7, [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]], 2, 1));
    // console.log(frogPosition(7, [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]], 1, 1));
    // console.log(frogPosition(7, [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]], 2, 2));
    // console.log(frogPosition(7, [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]], 1, 2));
    // console.log(frogPosition(7, [[1,2],[1,3],[1,7],[2,4],[2,6],[3,5]], 20, 2));
    // console.log(frogPosition(1, [], 1, 1));
    // console.log(frogPosition(2, [[1,2]], 2, 2));
    // console.log(frogPosition(2, [[1,2]], 1, 2));
    console.log(frogPosition(3, [[2,1],[3,2]], 1, 2));
    console.log(frogPosition(91, [[2,1],[3,1],[4,1],[5,1],[6,4],[7,2],[8,4],[9,2],[10,5],[11,4],[12,11],[13,5],[14,9],[15,13],[16,11],[17,15],[18,11],[19,3],[20,3],[21,3],[22,8],[23,4],[24,17],[25,15],[26,23],[27,18],[28,15],[29,1],[30,20],[31,6],[32,15],[33,28],[34,8],[35,13],[36,1],[37,16],[38,20],[39,14],[40,34],[41,39],[42,19],[43,20],[44,17],[45,23],[46,18],[47,19],[48,4],[49,2],[50,1],[51,41],[52,50],[53,29],[54,3],[55,14],[56,5],[57,21],[58,29],[59,43],[60,20],[61,8],[62,16],[63,44],[64,56],[65,15],[66,25],[67,4],[68,25],[69,18],[70,4],[71,57],[72,4],[73,72],[74,30],[75,61],[76,23],[77,69],[78,2],[79,29],[80,18],[81,9],[82,3],[83,18],[84,42],[85,74],[86,11],[87,67],[88,70],[89,34],[90,25],[91,51]], 1, 70));
};

main();