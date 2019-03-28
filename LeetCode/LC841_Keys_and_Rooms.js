/* https://leetcode.com/problems/keys-and-rooms/description/


There are N rooms and you start in room 0.  Each room has a distinct number in 0, 1, 2, ..., N-1, and each room may have some keys to access the next room. 

Formally, each room i has a list of keys rooms[i], and each key rooms[i][j] is an integer in [0, 1, ..., N-1] where N = rooms.length.  A key rooms[i][j] = v opens the room with number v.

Initially, all the rooms start locked (except for room 0). 

You can walk back and forth between rooms freely.

Return true if and only if you can enter every room.

Example 1:

Input: [[1],[2],[3],[]]
Output: true
Explanation:  
We start in room 0, and pick up key 1.
We then go to room 1, and pick up key 2.
We then go to room 2, and pick up key 3.
We then go to room 3.  Since we were able to go to every room, we return true.
Example 2:

Input: [[1,3],[3,0,1],[2],[0]]
Output: false
Explanation: We can't enter the room with number 2.
Note:

1 <= rooms.length <= 1000
0 <= rooms[i].length <= 1000
The number of keys in all rooms combined is at most 3000.


Solution:   https://leetcode.com/submissions/detail/218155563/  beats 85.82% JS Submissions.
            The basic idea is to visualise the problem as a graph problem.
            Each node is the door and each edge is key.
            So if you get a connected graph (not necessarily cyclic though) then return true else false.
            So to check if the graph is connected we basically do a DFS.
            Starting from the 0th door, 
                We keep adding keys (i.e. target nodes from current door) to the unvisited nodes queue.
                we keep looking into the queue of edges and keep adding doors to visited set as we visit each dooe doors.
                One condition is anytime adding keys to the unvisited queue, we check if the target door is already visited or not and add to the queue only if not visited.


 */


/**
 * @param {number[][]} rooms
 * @return {boolean}
 */
var canVisitAllRooms = function(rooms) {
    var unvisited = [];
    var visited = new Set();
    addKeys(0, visited, rooms, unvisited);
    while(unvisited.length>0){
        var door = unvisited.pop();
        addKeys(door, visited, rooms, unvisited);
    }
    
    // console.log(visited);
    // console.log(unvisited);
    
    return (visited.size==rooms.length);
};

var addKeys = function(door,visited,rooms,unvisited){
    visited.add(door);
    for(var i in rooms[door]){
        var key = rooms[door][i];
        if(!visited.has(key))
            unvisited.push(key);
    }
};

var main =function(){
    var ans = canVisitAllRooms([[1],[2],[3],[]]);
    console.log((ans==true ? 'Correct' : 'Incorrect'));
    var ans = canVisitAllRooms([[1,3],[3,0,1],[2],[0]]);
    console.log((ans==false ? 'Correct' : 'Incorrect'));
    
};

main();