/*
https://leetcode.com/problems/employees-earning-more-than-their-managers/#/description

The Employee table holds all employees including their managers. Every employee has an Id, and there is also a column for the manager Id.

+----+-------+--------+-----------+
| Id | Name  | Salary | ManagerId |
+----+-------+--------+-----------+
| 1  | Joe   | 70000  | 3         |
| 2  | Henry | 80000  | 4         |
| 3  | Sam   | 60000  | NULL      |
| 4  | Max   | 90000  | NULL      |
+----+-------+--------+-----------+
Given the Employee table, write a SQL query that finds out employees who earn more than their managers. For the above table, Joe is the only employee who earns more than his manager.

+----------+
| Employee |
+----------+
| Joe      |
+----------+

**/

/*
 * Solution: Trials of 3 queries below.
 * 
 * */

-- Query 1: gave percentile score of 26.60
SELECT NAME "EMPLOYEE" from (SELECT A.NAME "Name",A.SALARY "SELFSALARY",B.SALARY "MANAGERSALARY" from EMPLOYEE as A inner join EMPLOYEE B on A.MANAGERID=B.ID where A.SALARY > B.SALARY) AS NEWTABLE

-- Query 2: 
SELECT A.NAME "EMPLOYEE" from EMPLOYEE A inner join EMPLOYEE B on A.MANAGERID=B.ID where A.SALARY > B.SALARY

-- Query 3:
SELECT NAME "EMPLOYEE" FROM EMPLOYEE A WHERE A.SALARY > (SELECT SALARY FROM EMPLOYEE B WHERE A.MANAGERID=B.ID)

