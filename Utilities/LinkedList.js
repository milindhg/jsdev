var ListNode = require('./ListNode');
class LinkedList {
    constructList(arr) {
        var head = null, trav = null;
        arr.forEach(elem => {
            var node = new ListNode(elem);
            if (!head) {
                head = node;
                trav = head;
            }
            else {
                trav.next = node;
                trav = trav.next;
            }
        });
        return head;
    }
    reverse(head) {
        var prev = null;
        var trav = head;
        var nextnode = head.next;
        while (nextnode !== null) {
            trav.next = prev;
            prev = trav;
            trav = nextnode;
            nextnode = trav.next;
        }
        trav.next = prev;
        return trav;
    }
    printList(head) {
        var trav = head;
        var listStr = [];
        while (trav != null) {
            listStr.push(trav.val);
            trav = trav.next;
        }
        console.log(listStr.join(' -> '));
    }

    getTail(head){
        var trav = head;
        while(trav.next!=null){
            trav=trav.next;
        }
        return trav;
    }
}
module.exports = LinkedList;

//Usage like below
// var List = require('./LinkedList');
/* var main = function(){
    var l1 = List.prototype.constructList([1,2,3,4,5]);
    List.prototype.printList(l1);
    l1 = List.prototype.reverse(l1);
    List.prototype.printList(l1);
};
main(); */