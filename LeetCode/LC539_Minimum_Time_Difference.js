/* https://leetcode.com/problems/minimum-time-difference/description/

Given a list of 24-hour clock time points in "Hour:Minutes" format, find the minimum minutes difference between any two time points in the list.
Example 1:
Input: ["23:59","00:00"]
Output: 1
Note:
The number of time points in the given list is at least 2 and won't exceed 20000.
The input time is legal and ranges from 00:00 to 23:59.


Solution:   https://leetcode.com/submissions/detail/200902955/ beats 80% of JS Submissions.
            First we convert each time given in input array into an integer equivalent indicating total number of minutes.
            Then Simple approach is to convert this problem into a problem to find minimum difference between integers given in a sorted array.
            Now in this case, we know that at max there can be 24 * 60 = 1440 minutes max. So we can work with an array of size 1440 pre initialized.
            Then just tick the times found.
            So we dont need to sort the array.
            But the most tricky part is to have a circular comparision between times. I.e. compare midnight and 1 am in night as 1 hour i.e. (60 minutes) instead of 23*60 minutes. 
            For this you need to compare the first value of the sorted minutes array with the last value of the sorted minutes array with 1440 offset. Something like below.
            [assuming timesArr is array representing all the minutes in sorted order. ]
            diff = Math.min(diff, 1440+timesArr[0]-timesArr[timesArr.length-1]);


 */

/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifference = function(timePoints) {
    for(var i in timePoints){
        var integerTime = timePoints[i].split(':');
        var hoursInMinutes = convertToMinutes(parseInt(integerTime[0]));
        var minutesInMinutes = parseInt(integerTime[1]);
        var timeInMinutes = hoursInMinutes+minutesInMinutes;
        timePoints[i] = timeInMinutes;
    }
    //console.log(timePoints);
    
    timePoints.sort(function(a,b){
        return a-b;
    });
    console.log(timePoints);
    var diff = 1441;
    for(var i=1; i<timePoints.length; i++){
        diff = Math.min(diff,Math.abs(Math.abs(timePoints[i])-Math.abs(timePoints[i-1])));
    }
    diff = Math.min(diff, 1440+timePoints[0]-timePoints[timePoints.length-1]);
    return diff
};

/**
 * @param {string[]} timePoints
 * @return {number}
 */
var findMinDifferenceBetter = function(timePoints) {    //No need to sort.
    var timesFlagArr = [];
    for(i = 0; i<1440; i++) timesFlagArr.push(false);
    for(var i in timePoints){
        var integerTime = timePoints[i].split(':');
        var hoursInMinutes = convertToMinutes(parseInt(integerTime[0]));
        var minutesInMinutes = parseInt(integerTime[1]);
        var timeInMinutes = hoursInMinutes+minutesInMinutes;
        timePoints[i] = timeInMinutes;
        if(timesFlagArr[timeInMinutes]) return 0;
        timesFlagArr[timeInMinutes] = true;
    }
    //console.log(timePoints);
    var timesArr = [];
    for(var i=0; i<1440; i++) if(timesFlagArr[i]) timesArr.push(i);
    console.log(timesArr);
    var diff = 1441;
    for(var i=1; i<timesArr.length; i++){
        diff = Math.min(diff,Math.abs(Math.abs(timesArr[i])-Math.abs(timesArr[i-1])));
    }
    diff = Math.min(diff, 1440+timesArr[0]-timesArr[timesArr.length-1]);
    return diff
};


var convertToMinutes = function(hours){
    return hours*60;
};


var main  = function(){
    var timePoints = ["12:00","23:59","05:30"];
    console.log(findMinDifferenceBetter(timePoints));
    timePoints = ["23:59","00:00"];
    console.log(findMinDifferenceBetter(timePoints));
    timePoints = ["00:00","01:00"];
    console.log(findMinDifferenceBetter(timePoints));
};

main();

