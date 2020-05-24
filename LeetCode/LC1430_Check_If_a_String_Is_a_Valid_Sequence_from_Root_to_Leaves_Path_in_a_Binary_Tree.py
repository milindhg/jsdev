""" Given a binary tree where each path going from the root to any leaf form a
valid sequence, check if a given string is a valid sequence in such binary tree.


We get the given string from the concatenation of an array of integers arr and
the concatenation of all values of the nodes along a path results in a sequence
in the given binary tree.

 

Example 1:



Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,1,0,1]
Output: true
Explanation: 
The path 0 -> 1 -> 0 -> 1 is a valid sequence (green color in the figure). 
Other valid sequences are: 
0 -> 1 -> 1 -> 0 
0 -> 0 -> 0
Example 2:



Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,0,1]
Output: false 
Explanation: The path 0 -> 0 -> 1 does not exist, therefore it is not even a sequence.
Example 3:



Input: root = [0,1,0,0,1,0,null,null,1,0,0], arr = [0,1,1]
Output: false
Explanation: The path 0 -> 1 -> 1 is a sequence, but it is not a valid sequence.
 

Constraints:

1 <= arr.length <= 5000
0 <= arr[i] <= 9
Each node's value is between [0 - 9].
   Hide Hint #1  
Depth-first search (DFS) with the parameters: current node in the binary tree
and current position in the array of integers.
   Hide Hint #2  
When reaching at final position check if it is a leaf node. """

 # TYPE:  TREE, TREE TRAVERSAL

class Solution(object):
    def isValidSequence(self, root, arr):
        """
        :type root: TreeNode
        :type arr: List[int]
        :rtype: bool
        """
        if root == None and len(arr) == 0:
            return True
        return self.checkValidSequence(root, arr, 0)

    def checkValidSequence(self, root, arr, level):

        if root.left == None and root.right == None:
            if level == len(arr)-1 and root.val == arr[level]:
                return True
            return False
        elif level >= len(arr) or root.val != arr[level]:
            return False
        left = False
        if root.left:
            left = self.checkValidSequence(root.left, arr, level+1)
        right = False
        if root.right:
            right = self.checkValidSequence(root.right, arr, level+1)
        return left or right
