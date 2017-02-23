/**
 * 
 */
// https://leetcode.com/problems/swap-nodes-in-pairs/?tab=Description
// Given a linked list, swap every two adjacent nodes and return its head.
//
// For example,
// Given 1->2->3->4, you should return the list as 2->1->4->3.
//
// Your algorithm should use only constant space. You may not modify the values in the list, only
// nodes itself can be changed.
// Definition for singly-linked list.
function ListNode (val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
    if (head === null) {
        return head;
    }
    var trav = head;
    var prev = null;
    while (trav !== null && trav.next !== null) {
        trav = swap(head ? prev : head, trav, trav.next);
        if (prev === null)
            head = trav;
        prev = trav.next;
        trav = trav.next.next;
    }
    return head;
};

var swapPairsRecursive = function (head) {
    if (head == null || head.next == null) {
        return head;
    }
    var n = head.next;
    head.next = swapPairsRecursive(head.next.next);
    n.next = head;
    return n;
}

var printList = function (head) {
    var str = "";
    if (head === null) {
        console.log(head);
        return str;
    }

    var trav = head;
    while (trav.next !== null) {
        str += trav.val + ' -> '
        trav = trav.next;
    }
    str += trav.val;
    console.log(str);
}

var swap = function (prev, node1, node2) {
    if (node1 === null || node2 === null)
        return;
    node1.next = node2.next;
    node2.next = node1;
    if (prev !== null) {
        prev.next = node2;
    }
    return node2;
}

var main = function () {
    // var nums = [ 1, 2, 3, 4 ];
    var nums = [];
    var head = null;
    for ( var i in nums) {
        var trav = new ListNode(nums[nums.length - i - 1]);
        if (head === null) {
            head = trav;
        } else {
            trav.next = head;
            head = trav;
        }
    }
    printList(head);
    head = swapPairs(head);
    printList(head);
}

main();