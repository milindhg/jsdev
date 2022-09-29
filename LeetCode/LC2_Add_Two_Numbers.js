/**
 * https://leetcode.com/problems/add-two-numbers/
 * You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 */

/*
 * Solution: https://leetcode.com/submissions/detail/74556531/
 * Logic: Since the numbers are in reverse order the unit's place is head of the list and the highest order bit is the last element of the list.
 * Hence similar to the addition of numbers logic, we'll add the corresponding bit numbers and attach to the new linked list. 
 * Special conditions where one of the list might be null or one list ends and other remains are handled by iterating through the remaining list.
 * 
*/
/**
 * Definition for singly-linked list. function ListNode(val) { this.val = val; this.next = null; }
 */

/* function ListNode (val) {
    this.val = val;
    this.next = null;
}
 */

var List = require('../Utilities/LinkedList');
var ListNode = require('../Utilities/ListNode');

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers1 = function (l1, l2) {
    var l3;
    var carry = 0;
    var l3Head;
    while (l1 !== null && l2 !== null) {
        var num = l1.val + l2.val + carry;
        carry = 0;
        if (num > 9) {
            carry = 1;
            num = num % 10;
        }
        if (l3 === undefined || l3 === null) {
            l3 = new ListNode(num);
            l3Head = l3;
        } else {
            l3.next = new ListNode(num);
            l3 = l3.next;
        }
        l1 = l1.next;
        l2 = l2.next;
    }
    if (l1 !== null) {
        while (l1 !== null) {
            num = l1.val + carry;
            carry = 0;
            if (num > 9) {
                carry = 1;
                num = num % 10;
            }
            if (l3 === undefined || l3 === null) {
                l3 = new ListNode(num);
                l3Head = l3;
            } else {
                l3.next = new ListNode(num);
                l3 = l3.next;
            }
            l1 = l1.next;
        }
    }
    if (l2 !== null) {
        while (l2 !== null) {
            num = l2.val + carry;
            carry = 0;
            if (num > 9) {
                carry = 1;
                num = num % 10;
            }
            if (l3 === undefined || l3 === null) {
                l3 = new ListNode(num);
                l3Head = l3;
            } else {
                l3.next = new ListNode(num);
                l3 = l3.next;
            }
            l2 = l2.next;
        }
    }
    if (carry > 0) {
        l3.next = new ListNode(carry);
        l3 = l3.next;
    }
    return l3Head;
};


var addTwoNumbers = function (l1, l2) {
    let carry = 0;
    let l3 = null;
    let l3Head = null;
    while (l1 !== null || l2 !== null) {
        //Calc num as (val1) + (val2) + (carry over if any).
        let num = (l1 != null ? l1.val : 0) + (l2 != null ? l2.val : 0) + carry;
        
        //Keep track of carry
        if (num > 9) {
            num = num % 10;
            carry = 1;
        }else{
            carry = 0;
        }

        //Maintain the l3 pointer to keep adding nodes to list headed by l3Head
        if (!l3Head || l3Head == undefined || l3Head == null) {
            l3Head = new ListNode(num);
            l3 = l3Head;
        } else {
            let newNode = new ListNode(num);
            if (l3) {
                l3.next = newNode;
                l3 = l3.next;
            }
        }
        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;
    }

    //Do a final carry check since the num calc cannot be done after both l1 and l2 are pointers are null
    if (carry > 0) {
        l3.next = new ListNode(carry);
        l3 = l3.next;
    }
    return l3Head;
};

var main = function () {
    var l1head = List.prototype.constructList([2, 4, 3]);
    var l2head = List.prototype.constructList([5, 6, 4]);
    List.prototype.printList(l1head);
    List.prototype.printList(l2head);
    var l3 = addTwoNumbers(l1head, l2head);
    List.prototype.printList(l3);

    var l1head = List.prototype.constructList([2, 4]);
    var l2head = List.prototype.constructList([5, 6, 4]);
    List.prototype.printList(l1head);
    List.prototype.printList(l2head);
    var l3 = addTwoNumbers(l1head, l2head);
    List.prototype.printList(l3);

    var l1head = List.prototype.constructList([9, 9, 9, 9, 9, 9, 9]);
    var l2head = List.prototype.constructList([9, 9, 9, 9]);
    List.prototype.printList(l1head);
    List.prototype.printList(l2head);
    var l3 = addTwoNumbers(l1head, l2head);
    List.prototype.printList(l3);
}

main();