/* https://leetcode.com/problems/car-fleet/description/

N cars are going to the same destination along a one lane road.  The destination is target miles away.

Each car i has a constant speed speed[i] (in miles per hour), and initial position position[i] miles towards the target along the road.

A car can never pass another car ahead of it, but it can catch up to it, and drive bumper to bumper at the same speed.

The distance between these two cars is ignored - they are assumed to have the same position.

A car fleet is some non-empty set of cars driving at the same position and same speed.  Note that a single car is also a car fleet.

If a car catches up to a car fleet right at the destination point, it will still be considered as one car fleet.


How many car fleets will arrive at the destination?

 

Example 1:

Input: target = 12, position = [10,8,0,5,3], speed = [2,4,1,1,3]
Output: 3
Explanation:
The cars starting at 10 and 8 become a fleet, meeting each other at 12.
The car starting at 0 doesn't catch up to any other car, so it is a fleet by itself.
The cars starting at 5 and 3 become a fleet, meeting each other at 6.
Note that no other cars meet these fleets before the destination, so the answer is 3.

Note:

0 <= N <= 10 ^ 4
0 < target <= 10 ^ 6
0 < speed[i] <= 10 ^ 6
0 <= position[i] < target
All initial positions are different.


Solution:   https://leetcode.com/submissions/detail/163689681/  beats 90.54% of JS submissions.

            Note the position, speed of all the cars and also calculate the time required for reach car to reach the target. Add time to reach target for every car into an object map.
            Now sort the map based on position of the car in descending. So that the farthest car is last and nearest car to target is first in map.
            Now starting from the first car, (i.e. nearest to target) car check if next car's time to reach is greater than previous car's time to reach. If it is greater, then add car fleet count. 
            and set the next car's time to reach as the comparator for further cars to see if they reach before this car or after this car.
            If next car's time to reach is less than the previous car's time to reach, i.e. even though the next car is farther but because it is faster, it can reach before. 
            So you must combine this car with the previous car as a fleet of 2 cars going together towards target and thus both take same time as first car to reach.
 */

/**
 * @param {number} target
 * @param {number[]} position
 * @param {number[]} speed
 * @return {number}
 */
var carFleet = function (target, position, speed) {
    var map = [];
    if(position.length==0)
        return 0;

    for (var i in position) {
        var tuple = {};
        tuple.pos = position[i];
        tuple.speed = speed[i];
        var time = (target - tuple.pos) / tuple.speed;
        tuple.timeToReach = time;
        map.push(tuple);
    }

    console.log(map);
    map.sort(function (a, b) {
        return b.pos - a.pos;
    });
    console.log(map);

    var fleetCount = 1;

    var comparator = map[0].timeToReach;
    for (var i=1; i<map.length; i++) {
        if(map[i].timeToReach>comparator){
            fleetCount++;
            comparator=map[i].timeToReach;
        }
    }
    return fleetCount;

};

var main = function () {
    console.log(carFleet(12, [10, 8, 0, 5, 3], [2, 4, 1, 1, 3]));
    console.log(carFleet(10, [0,4,2], [2,1,3]));


};

main();