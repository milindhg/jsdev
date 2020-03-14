""" 
https://leetcode.com/problems/employee-importance/description/

You are given a data structure of employee information, which includes the employee's unique id, his importance value and his direct subordinates' id.

For example, employee 1 is the leader of employee 2, and employee 2 is the leader of employee 3. They have importance value 15, 10 and 5, respectively. Then employee 1 has a data structure like [1, 15, [2]], and employee 2 has [2, 10, [3]], and employee 3 has [3, 5, []]. Note that although employee 3 is also a subordinate of employee 1, the relationship is not direct.

Now given the employee information of a company, and an employee id, you need to return the total importance value of this employee and all his subordinates.

Example 1:

Input: [[1, 5, [2, 3]], [2, 3, []], [3, 3, []]], 1
Output: 11
Explanation:
Employee 1 has importance value 5, and he has two direct subordinates: employee 2 and employee 3. They both have importance value 3. So the total importance value of employee 1 is 5 + 3 + 3 = 11.
 

Note:

One employee has at most one direct leader and may have several subordinates.
The maximum number of employees won't exceed 2000.


Solution:   https://leetcode.com/submissions/detail/312425092/  beats 78.63% py Submissions.
            The idea is very simple. Its like traversing a nested linked list.
            Just first prepare a map of all the employee id and their index in the map. Or you can also prepare a map of employee id and their employee object.
            Then just with the given id in the input, start adding up the importance. 
            Then deep dive and keep diving into all the subordinates and their subordinates via queue.
            For deepdiving into the subordinates think of Level order tree traversal. BFS. i.e. using a queue
            You can also do DFS if needed using a stack.

 """


# Employee info
class Employee(object):
    def __init__(self, id, importance, subordinates):
    	#################
        # :type id: int
        # :type importance: int
        # :type subordinates: List[int]
        #################
        # It's the unique id of each node.
        # unique id of this employee
        self.id = id
        # the importance value of this employee
        self.importance = importance
        # the id of direct subordinates
        self.subordinates = subordinates


import Queue

class Solution(object):
    def getImportance(self, employees, id):
        """
        :type employees: List[Employee]
        :type id: int
        :rtype: int
        """
        totalImportance = 0
        map = dict()
        i=0
        for index,employee in enumerate(employees):
            map[employee.id]=index
        
        q = Queue.Queue()
        q.put(id)
        while(q.qsize()>0):
            currEmpId = q.get()
            employeeNode = employees[map[currEmpId]]
            totalImportance+=employeeNode.importance
            for empId in employeeNode.subordinates:
                q.put(empId)

        return totalImportance

    def main(self): 
        inputArr = [[2,3,[]],[1,2,[2]]]
        employees = []
        for id, importance, subordinates in inputArr:
            employee = Employee(id, importance, subordinates)
            employees.append(employee)
        print employees
        print(self.getImportance(employees, 2))

        inputArr = [[1, 5, [2, 3]], [2, 3, []], [3, 3, []]]
        employees = []
        for id, importance, subordinates in inputArr:
            employee = Employee(id, importance, subordinates)
            employees.append(employee)
        print employees
        print(self.getImportance(employees, 1))
            


s = Solution() 
s.main()