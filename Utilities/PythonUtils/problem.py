from binary_tree_helper import BinaryTree

class Solution(object):
    def bstToGst(self, root):
        """
        :type root: TreeNode
        :rtype: TreeNode
        """
        self.traverse(root, 0)
        return root
    
    def traverse(self, root, sm):
        if root == None:
            return sm
        right = self.traverse(root.right, sm)
        root.value = root.value + right
        sm = root.value
        left = self.traverse(root.left, sm)
        return left

            

bt = BinaryTree()
root = bt.build_binary_tree([4,1,6,0,2,5,7,None,None,None,3,None,None,None,8])
# tree = bt.print_binary_tree(root)
# print(tree)

s = Solution()
s.bstToGst(root)
print(bt.print_binary_tree(root))

