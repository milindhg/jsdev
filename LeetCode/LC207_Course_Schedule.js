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

