/* 
https://leetcode.com/problems/all-paths-from-source-to-target/description/

Given a directed, acyclic graph of N nodes.  Find all possible paths from node 0 to node N-1, and return them in any order.

The graph is given as follows:  the nodes are 0, 1, ..., graph.length - 1.  graph[i] is a list of all nodes j for which the edge (i, j) exists.

Example:
Input: [[1,2], [3], [3], []] 
Output: [[0,1,3],[0,2,3]] 
Explanation: The graph looks like this:
0--->1
|    |
v    v
2--->3
There are two paths: 0 -> 1 -> 3 and 0 -> 2 -> 3.
Note:

The number of nodes in the graph will be in the range [2, 15].
You can print different paths in any order, but you should keep the order of nodes inside one path.


Solution:   https://leetcode.com/submissions/detail/308571179/  beats 43.92% JS Submissions.
            This is a problem of BFS or DFS graph traversal.

 */

/**
 * @param {number[][]} graph
 * @return {number[][]}
 */
var allPathsSourceTarget = function(graph) {
    var targetNode = graph.length-1;
    var ans = [];
    var Q = [];
    Q.push([0]);
    Q.push('$');
    while(Q.length>1){
        var qItem = Q.shift();
        if(qItem=='$')
            Q.push('$');
        else{
            var lastElemOfQItem = qItem[qItem.length-1];
            if(lastElemOfQItem==targetNode) 
                ans.push(qItem);
            graph[lastElemOfQItem].forEach((innerElem)=>{
                var newQitem = qItem.concat();
                newQitem.push(innerElem);
                Q.push(newQitem);
            });
        }
    }
    return ans;
};

var main = () => {
    allPathsSourceTarget([[1,2], [3], [3], []]);
};

main();