/* 

https://leetcode.com/problems/number-of-days-between-two-dates/

Write a program to count the number of days between two dates.

The two dates are given as strings, their format is YYYY-MM-DD as shown in the examples.

 

Example 1:

Input: date1 = "2019-06-29", date2 = "2019-06-30"
Output: 1
Example 2:

Input: date1 = "2020-01-15", date2 = "2019-12-31"
Output: 15
 

Constraints:

The given dates are valid dates between the years 1971 and 2100.
Accepted
29,541
Submissions
63,063


Solution:   https://leetcode.com/submissions/detail/706025970/ beats 72.12% JS Submissions.

            Create a function f(date) that counts the number of days from 1971-01-01 to date. How can we calculate the answer ?
            The answer is just |f(date1) - f(date2)|.
            How to construct f(date) ?

            For each year from 1971 to year - 1 sum up 365 or 366 in case of leap years. Then sum up for each month the number of days, consider the case when the current year is leap, finally sum up the days.

 */


/**
 * @param {string} date1
 * @param {string} date2
 * @return {number}
 */
var daysBetweenDates = function (date1, date2) {
    // console.log(f(date1));
    // console.log(f(date2));
    return Math.abs(f(date1) - f(date2));
};

//Function to count days from 1971-01-01
var f = function (date) {
    var YYYYMMDD = date.split('-');
    var year = YYYYMMDD[0];
    var month = YYYYMMDD[1];
    var days = YYYYMMDD[2];
    var isCurrYearLeapYear = isLeapYear(year);

    var totalDays = 0;
    //365 or 366 in case of leap years for each year from 1971 to curr-1 year
    for (var i = 1971; i < parseInt(year); i++) {
        totalDays += (isLeapYear(i) ? 366 : 365);
    }

    //Add days in month from Jan to curr-1 month
    var monthDays = { 1: 31, 2: 28, 3: 31, 4: 30, 5: 31, 6: 30, 7: 31, 8: 31, 9: 30, 10: 31, 11: 30, 12: 31 };
    for (var j = 1; j < parseInt(month); j++) {
        totalDays += ((isCurrYearLeapYear && j == 2) ? 29 : monthDays[j]);
    }

    //Add days
    totalDays += parseInt(days);

    return totalDays;

}

var isLeapYear = function (year) {
    return (year % 4 == 0) && ((year % 100 == 0 && year % 400 == 0) || (year % 100 != 0));
}


var daysBetweenDatesHack = function (date1, date2) {
    date1 = new Date(date1);
    date2 = new Date(date2)
    let time1 = date1.getTime();
    let time2 = date2.getTime();

    return Math.abs(time1 - time2) / (24*60*60*1000)
};

var main = () => {
    console.log(daysBetweenDates("2019-06-29", "2019-06-30"));
    console.log(daysBetweenDates("2019-06-29", "2020-06-30"));
    console.log(daysBetweenDates("2020-06-29", "2019-06-30"));
    console.log(daysBetweenDates("2019-12-31", "2020-01-15"));
    console.log(daysBetweenDatesHack("2019-06-29", "2019-06-30"));
    console.log(daysBetweenDatesHack("2019-06-29", "2020-06-30"));
    console.log(daysBetweenDatesHack("2020-06-29", "2019-06-30"));
    console.log(daysBetweenDatesHack("2019-12-31", "2020-01-15"));

};
main();