-- https://leetcode.com/problems/combine-two-tables/
-- https://leetcode.com/submissions/detail/791137771/   beats 86.10% JS Submissions
-- # Write your MySQL query statement below
SELECT P.firstName,
    P.lastName,
    A.city,
    A.state
FROM Person P
    LEFT JOIN Address A ON P.personId = A.personId;
-- # Learning here in Databases is that the table variable in the join is very important. So while selecting columns it is better to use the table variable name to dot walk to the respective columns from the table.

