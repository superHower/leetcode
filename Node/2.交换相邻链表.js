
//输入：head = [1,2,3,4]  输出：[2,1,4,3]
//输入：head = [1,2,3]    输出：[2,1,3]
var swapPairs = function(head) {
  const dummy = new ListNode(0, head);
  let temp = dummy;
  while (temp.next !== null && temp.next.next !== null) {
      const node1 = temp.next;
      const node2 = temp.next.next;

      temp.next = node2; // 建议画图，一目了然
      node1.next = node2.next; 
      node2.next = node1;
      temp       = node1; // 真正的temp,直接就跨两个节点指

  }
  return dummy.next;
};

// const head = { val: 1, next: { val: 2, next: { val: 3, next:{ val: 4, next:  null }}}}
const head = { val: 1, next: { val: 2, next: { val: 3, next: null }}}
console.log(swapPairs(head))
