var Tree = require('./Tree');
var List = require('./LinkedList');

// tree.TreeNode(4);
var t1 = Tree.prototype.buildBinaryTree([1,2,3,null,5]);
Tree.prototype.printTree(t1);
// tree.printBinaryTree(t1);
// // console.log('\n');

var head = List.prototype.constructList([1,2,3,4]);
List.prototype.printList(head);
