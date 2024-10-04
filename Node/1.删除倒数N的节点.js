const head = [1,2,3,4,5], n = 2 // 输出：[1,2,3,5]
console.log(removeNthFromEnd(head, n))

function removeNthFromEnd(head, n) {
    let ret = new ListNode(0, head),  slow = fast = ret;
    while(n--) fast = fast.next;
    if(!fast) return ret.next;
    while (fast.next) {
        fast = fast.next; 
        slow = slow.next
    };
    slow.next = slow.next.next;
    return ret.next;
};




function ListNode (val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}