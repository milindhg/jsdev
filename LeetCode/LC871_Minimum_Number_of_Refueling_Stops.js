/* https://leetcode.com/problems/minimum-number-of-refueling-stops/

A car travels from a starting position to a destination which is target miles east of the starting position.

Along the way, there are gas stations.  Each station[i] represents a gas station that is station[i][0] miles east of the starting position, and has station[i][1] liters of gas.

The car starts with an infinite tank of gas, which initially has startFuel liters of fuel in it.  It uses 1 liter of gas per 1 mile that it drives.

When the car reaches a gas station, it may stop and refuel, transferring all the gas from the station into the car.

What is the least number of refueling stops the car must make in order to reach its destination?  If it cannot reach the destination, return -1.

Note that if the car reaches a gas station with 0 fuel left, the car can still refuel there.  If the car reaches the destination with 0 fuel left, it is still considered to have arrived.

 

Example 1:

Input: target = 1, startFuel = 1, stations = []
Output: 0
Explanation: We can reach the target without refueling.
Example 2:

Input: target = 100, startFuel = 1, stations = [[10,100]]
Output: -1
Explanation: We can't reach the target (or even the first gas station).
Example 3:

Input: target = 100, startFuel = 10, stations = [[10,60],[20,30],[30,30],[60,40]]
Output: 2
Explanation: 
We start with 10 liters of fuel.
We drive to position 10, expending 10 liters of fuel.  We refuel from 0 liters to 60 liters of gas.
Then, we drive from position 10 to position 60 (expending 50 liters of fuel),
and refuel from 10 liters to 50 liters of gas.  We then drive to and reach the target.
We made 2 refueling stops along the way, so we return 2.
 

Note:

1 <= target, startFuel, stations[i][1] <= 10^9
0 <= stations.length <= 500
0 < stations[0][0] < stations[1][0] < ... < stations[stations.length-1][0] < target


Solution:   https://leetcode.com/submissions/detail/460021563/ beats 48.65% JS Submissions.
            Simple greedy approach.
            Keep using up fuel and reaching that much distance as much fuel is used so far.
            On the way take a note of the fuel stations you pass by and note down their fuel capacities.
            Now you can use an array to store these capacities found so far and take out max fuel from station when needed.
            !!!! However, Key here is to use Priority queue for efficient storage/retrieval of capacities. O(nlogn) VS O(n^2)
            Finally return number of stops taken or -1 depending on whether you reached your target.
 */

var PQ = require('../Utilities/PriorityQueue');

/**
 * @param {number} target
 * @param {number} startFuel
 * @param {number[][]} stations
 * @return {number}
 */
var minRefuelStops = function (target, startFuel, stations) {
    if (stations.length == 0 && target > startFuel)
        return -1;
    else if (target <= startFuel)
        return 0;
    else {
        var currFuelLeft = startFuel;
        var distanceTravelled = 0;
        var numOfStops = 0;
        var i = 0;
        var pq = new PQ();
        while (distanceTravelled < target) {
            // finish start/current available fuel and try to reach a distance.
            distanceTravelled += currFuelLeft;
            currFuelLeft = 0;

            // if you're reached target, return number of stops taken
            if (distanceTravelled >= target)
                return numOfStops;

            // mark the fuel amounts that you could've picked up from fuel stations found uptil distance travelled so far
            while (i < stations.length && stations[i][0] <= distanceTravelled) {
                pq.push(stations[i][1]);
                i++;
            }

            // fill up the fuel from a marked stations so far with maximum fuel and increment stops taken so far
            while (currFuelLeft <= 0 && !pq.isEmpty()) {
                currFuelLeft += pq.pop();
                numOfStops++;
            }

            // if fuel is over and no more fuel to pick from any of the fuel stations marked so far then break out and decide on answer.
            if (currFuelLeft <= 0 && pq.isEmpty()) {
                break;
            }

        }

        // if reached target then return number of stops taken else return -1
        if (distanceTravelled < target)
            return -1;
        else
            return numOfStops;
    }
};

let main = () => {
    console.log(minRefuelStops(1, 1, []));
    console.log(minRefuelStops(100, 1, [[10, 100]]));
    console.log(minRefuelStops(100, 10, [[10, 60], [20, 30], [30, 30], [60, 40]]));
    console.log(minRefuelStops(100, 25, [[25, 25], [50, 25], [75, 25]]));
    console.log(minRefuelStops(1000, 83, [[47, 220], [65, 1], [98, 113], [126, 196], [186, 218], [320, 205], [686, 317], [707, 325], [754, 104], [781, 105]]));
    console.log(minRefuelStops(1000000, 70768, [[12575, 171159], [81909, 101253], [163732, 164401], [190025, 65493], [442889, 31147], [481202, 166081], [586028, 206379], [591952, 52748], [595013, 9163], [611883, 217156]]));
};

main();