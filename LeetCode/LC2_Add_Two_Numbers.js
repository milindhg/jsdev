/**
 * You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 */

/*
 * Logic: Since ethe numbers are in reverse order the unit's place is head of the list and the highest order bit is the last element of the list.
 * Hence similar to the addition of numbers logic, we'll add the corresponding bit numbers and attach to the new linked list. 
 * Special conditions where one of the list might be null or one list ends and other remains are handled by iterating through the remaining list.
 * 
*/
/**
 * Definition for singly-linked list. function ListNode(val) { this.val = val; this.next = null; }
 */

function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
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

var printList = function(list) {
    var trav = list;
    var output = "";
    while (trav.next !== null) {
	output += trav.val + " -> ";
	trav = trav.next;
    }
    output += trav.val;
    console.log(output);
};

var reverse = function(list) {
    var prev = null;
    var trav = list;
    var nextnode = list.next;
    while (nextnode !== null) {
	// console.log(trav.val);
	trav.next = prev;
	prev = trav;
	trav = nextnode;
	nextnode = trav.next;
    }
    trav.next = prev;
    return trav;
}

var main = function() {
    var list = new ListNode(10);
    var head = list;
    for (var i = 2; i < 7; i++) {
	list.next = new ListNode(i * 10);
	list = list.next;
    }
    head = reverse(head);
    
    l1 = new ListNode(2);
    l1head = l1;
    l1.next = new ListNode(4);
    l1 = l1.next;
    l1.next = new ListNode(3);
    printList(l1head);
    
    l2 = new ListNode(5);
    l2head = l2;
    l2.next = new ListNode(6);
    l2 = l2.next;
    l2.next = new ListNode(4);
    printList(l2head);
    
    var l3 = addTwoNumbers(l1head, l2head);
    printList(l3);
}

main();