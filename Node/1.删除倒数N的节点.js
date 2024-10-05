// const head = [1,2,3,4,5],  // 输出：[1,2,3,5]
const head = { val: 1, next: { val: 2, next: { val: 3, next: { val: 4, next: { val: 5, next: null } } } } }, n = 2
console.log(removeNthFromEnd(head, n))

function removeNthFromEnd(head, n) {
  let dummy = new ListNode(0,head); // 创建一个虚拟头节点，避免头节点被删除
  let fast = slow = dummy; // dummy -> 1 -> 2 -> 3 -> 4 -> 5 -> null

 // 1. fast指针， 移动n个节点
  while (n--) fast = fast.next; 
    
  if(!fast) return ret.next;

  // 2. 同时移动fast和slow指针，直到fast指针null
  while (fast.next) {
    fast = fast.next; 
    slow = slow.next
  };
  // 3. 此时慢指针next的位置，就可删
  slow.next = slow.next.next;
  return dummy.next;
}




function ListNode (val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}


