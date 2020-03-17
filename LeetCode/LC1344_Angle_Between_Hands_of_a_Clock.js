/* 
https://leetcode.com/problems/angle-between-hands-of-a-clock/description/

Given two numbers, hour and minutes. Return the smaller angle (in sexagesimal units) formed between the hour and the minute hand.

 

Example 1:



Input: hour = 12, minutes = 30
Output: 165
Example 2:



Input: hour = 3, minutes = 30
Output: 75
Example 3:



Input: hour = 3, minutes = 15
Output: 7.5
Example 4:

Input: hour = 4, minutes = 50
Output: 155
Example 5:

Input: hour = 12, minutes = 0
Output: 0
 

Constraints:

1 <= hour <= 12
0 <= minutes <= 59
Answers within 10^-5 of the actual value will be accepted as correct.

Solution:   https://leetcode.com/submissions/detail/313370471/  beats 97.53% JS Submissions.]

            ALGORITHM:
            1. Minute Hand Angle:
                In 60 minutes, minute hand covers 360 degree rotation.
                In 1 minute, minute hand moves 360/60 = 6 degrees
                In x minutes, x * 6 degrees
            2. Hour Hand Angle:
                In 12 hours, hour hand covers 360 degree rotation
                In 1 hour, hour hand moves 360/12 = 30 degrees
                In x hours, x * 30 degrees
            3. Delta Hour Hand for x Minutes:
                In 60 minutes, hour hand moves (360/12) = 30 degrees
                In x minutes, hour hand will move (x * 30)/60 = x/2 degrees
            4. Total hour_hand_angle = hour_hand_angle + delta
            5. Angle = minute_angle - hour_angle
            6. Return minimum 0f angle and 360 - angle to get smaller angle. 

            RUNTIME COMPLEXITY : O(1)
            SPACE COMPLEXITY : O(1)


 */

/**
 * @param {number} hour
 * @param {number} minutes
 * @return {number}
 */
var angleClock = function(hour, minutes) {
    var minuteAngle = minutes * 6;
    var hourAngle = (hour%12) * 30;
    hourAngle = hourAngle + minutes/2;
    var ans = Math.abs(minuteAngle - hourAngle);
    return Math.min(ans, 360-ans);
};

var main = () => {
    console.log(angleClock(1,53));
    console.log(angleClock(3,13));
    console.log(angleClock(12,00));
    console.log(angleClock(12,59));
    console.log(angleClock(6,30));
};

main();