/*
Given a linked list, remove the nth node from the end of list and return its head.

For example,

   Given linked list: 1->2->3->4->5, and n = 2.

   After removing the second node from the end, the linked list becomes 1->2->3->5.
Note:
Given n will always be valid.
Try to do this in one pass.
*/

//Definition for singly-linked list.
function ListNode (val) {
    this.val = val;
    this.next = null;
};

/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
    var fastnode = head;
    var slownode = head;
    var prev = null;

    // Move the fast pointer n places ahead to get the nth plac efrom last element after this.
    while (n > 0) {
        fastnode = fastnode.next;
        n--;
    }

    // Check if it is last element from the last element
    // i.e. first element from front to be removed.
    // Then simply remove the first element and return remaining list.
    if (fastnode == null) {
        head = slownode.next;
        return head;
    }

    // Keep traversing till the fastpointer reached null i.e. end of list.
    // At this point the slowpointer is n elements away from end of list.
    while (fastnode !== null) {
        prev = slownode;
        slownode = slownode.next;
        fastnode = fastnode.next;
    }

    // check whether is is the first element of a single element list to be removed.
    if (prev == null) {
        return null;
    } else {
        prev.next = slownode.next;
        return head;
    }
};

var printList = function (head) {
    var str = "";
    var trav = head;
    while (trav !== null) {
        str += trav.val;
        trav = trav.next;
        if (trav != null) {
            str += " -> ";
        }
    }
    console.log(str);
}

var main = function () {
    var nums = [ 11, 22 ];
    var head = null;
    var trav = null;
    for ( var i in nums) {
        if (head === null) {
            trav = new ListNode(nums[i]);
            head = trav;
        } else {
            trav.next = new ListNode(nums[i]);
            trav = trav.next;
        }
    }
    printList(head);
    head = removeNthFromEnd(head, 2);
    printList(head);
};

main();

