/* https://leetcode.com/problems/design-linked-list/description/

Design your implementation of the linked list. You can choose to use the singly linked list or the doubly linked list. A node in a singly linked list should have two attributes: val and next. val is the value of the current node, and next is a pointer/reference to the next node. If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node in the linked list. Assume all nodes in the linked list are 0-indexed.

Implement these functions in your linked list class:

get(index) : Get the value of the index-th node in the linked list. If the index is invalid, return -1.
addAtHead(val) : Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list.
addAtTail(val) : Append a node of value val to the last element of the linked list.
addAtIndex(index, val) : Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted.
deleteAtIndex(index) : Delete the index-th node in the linked list, if the index is valid.
Example:

MyLinkedList linkedList = new MyLinkedList();
linkedList.addAtHead(1);
linkedList.addAtTail(3);
linkedList.addAtIndex(1, 2);  // linked list becomes 1->2->3
linkedList.get(1);            // returns 2
linkedList.deleteAtIndex(1);  // now the linked list is 1->3
linkedList.get(1);            // returns 3
Note:

All values will be in the range of [1, 1000].
The number of operations will be in the range of [1, 1000].
Please do not use the built-in LinkedList library.

Solution:   https://leetcode.com/submissions/detail/227023425/ beats 71.64% JS Submissions.
            This is basically keeping track of a lot of variables int the MyLinkedList class.

 */

var List = require('../Utilities/LinkedList');
var ListNode = require('../Utilities/ListNode');
/**
 * Initialize your data structure here.
 */
var MyLinkedList = function() {
    this.head = null;
    this.ListNode = function(val){
        this.val = val;
        this.next = null;
    }
    this.len = 0;
    this.tail = null;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(this.len==0 || index>=this.len || index<0) return -1;
    var iter = 0;
    var trav = this.head;
    while(iter<index){
        trav = trav.next;
        iter++;
    }
    return trav.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    if(!this.head){
        this.head = new this.ListNode(val);
        this.tail = this.head;
    }else{
        var node = new this.ListNode(val);
        node.next = this.head;
        this.head = node;
    }
    this.len++;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    if(!this.head){
        this.addAtHead(val);
    }else{
        var node = new this.ListNode(val);
        this.tail.next = node;
        this.tail = this.tail.next;
        this.len++;
    }
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    if(index<=0){
        this.addAtHead(val);
    }else if(index==this.len){
        this.addAtTail(val);
    }else if(index<this.len && index>=0){
        var trav = this.head;
        var iter = 1;
        while(iter<index){
            iter++;
            trav=trav.next;
        }
        var node = new this.ListNode(val);
        node.next = trav.next;
        trav.next = node;
        this.len++;
    }
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if(index<this.len && index>=0){
        if(index==0){
            this.head = this.head.next;
        }else{
            var trav = this.head;
            var iter = 1;
            while(iter<index){
                iter++;
                trav = trav.next;
            }
            if(trav.next==this.tail) this.tail = trav;
            trav.next = trav.next.next;
        }
        this.len--;
    }
};

/** 
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

var main = function(){
    console.log(prepareTest(["MyLinkedList","addAtHead","addAtTail","addAtIndex","get","deleteAtIndex","get"],[[],[1],[3],[1,2],[1],[1],[1]]));
    console.log(prepareTest(["MyLinkedList","addAtHead","get","addAtTail","deleteAtIndex","addAtHead","deleteAtIndex","get","addAtTail","addAtHead","addAtTail","addAtTail","addAtTail","addAtIndex","get","addAtIndex","addAtHead","deleteAtIndex","addAtIndex","addAtHead","addAtIndex","deleteAtIndex","get","addAtTail","deleteAtIndex","deleteAtIndex","addAtTail","addAtTail","addAtIndex","addAtHead","get","get","addAtTail","addAtTail","addAtTail","addAtTail","addAtIndex","addAtIndex","addAtHead","addAtIndex","addAtTail","addAtHead","addAtHead","addAtHead","addAtHead","addAtHead","addAtHead","addAtTail","addAtHead","deleteAtIndex","addAtHead","get","addAtHead","get","addAtHead","addAtHead","addAtHead","addAtIndex","deleteAtIndex","addAtTail","deleteAtIndex","get","addAtIndex","addAtHead","addAtTail","deleteAtIndex","addAtHead","addAtIndex","deleteAtIndex","deleteAtIndex","deleteAtIndex","addAtHead","addAtTail","addAtTail","addAtHead","addAtTail","addAtIndex","deleteAtIndex","deleteAtIndex","addAtIndex","addAtHead","addAtHead","addAtTail","get","addAtIndex","get","addAtHead","addAtHead","addAtHead","addAtIndex","addAtIndex","get","addAtHead","get","get","addAtTail","addAtHead","addAtHead","addAtTail","addAtTail","get","addAtTail"],[[],[8],[1],[81],[2],[26],[2],[1],[24],[15],[0],[13],[1],[6,33],[6],[2,91],[82],[6],[4,11],[3],[7,14],[1],[6],[99],[11],[7],[5],[92],[7,92],[57],[2],[6],[39],[51],[3],[22],[5,26],[9,52],[69],[5,58],[79],[7],[41],[33],[88],[44],[8],[72],[93],[18],[1],[9],[46],[9],[92],[71],[69],[11,54],[27],[83],[12],[20],[19,97],[77],[36],[3],[35],[16,68],[22],[36],[17],[62],[89],[61],[6],[92],[28,69],[23],[28],[7,4],[0],[24],[52],[1],[23,3],[7],[6],[68],[79],[45,90],[41,52],[28],[25],[9],[32],[11],[90],[24],[98],[36],[34],[26]]));
};

var prepareTest = function(instructions,inputs){
    var output = [null];
    var obj = new MyLinkedList();
    var i=1;
    while(i<inputs.length){
        var instruction = instructions[i];
        var input = inputs[i];
        switch(instruction){
            case "addAtHead": obj.addAtHead(input[0]);
            output.push(null);
            break;
            case "addAtTail": obj.addAtTail(input[0]);
            output.push(null);
            break;
            case "addAtIndex": obj.addAtIndex(input[0],input[1]);
            output.push(null);
            break;
            case "get": output.push(obj.get(input[0]));
            break;
            case "deleteAtIndex": obj.deleteAtIndex(input[0]);
            output.push(null);
            break;
        }
        i++;
    }
    return output;
};

main();