// 相交链表，找到相交点
var getIntersectionNode = function(headA, headB) {
  if(headA == null || headB == null) return null
  let pA = headA, pB = headB
  while(pA !== pB) { // 只要不相等，就不断移
      pA = pA == null ? headB : pA.next // 要是A到了最后，就重新从B开始移动
      pB = pB == null ? headA : pB.next // 要是B到了最后，就重新从A开始移动
  }
  return pA
};

// 反转链表
var reverseList = function(head) {
  let list = []
  while(head) {
    list.push(head.val)
    head = head.next
  }
  
  let temp = dummy = new ListNode(0)
  while( list.length > 0) {
      let newNode = new ListNode(list.pop())
      temp.next = newNode
      temp = newNode
  }
  return dummy.next
};

// 回环链表： 快慢指针
var hasCycle = function(head) {
  let fast = slow = head

  while(fast && fast.next) {
    fast = fast.next.next
    slow = slow.next
    if(fast == slow) return true
  }
  return false
};

// 回环链表-返回位置： 集合Set
var detectCycle = function(head) {
  const visited = new Set();
  while (head) {
      if (visited.has(head))  return head; // 如果重复出现出现，说明就是他了
      
      visited.add(head);
      head = head.next;
  }
  return null;
};




// 回文链表
// 方法一：放入数组，然后双指针比较数组
// 方法二：反转链表后， 比较两个链表是否相等
var isPalindrome = function(head) {
  const vals = [];
  while (head !== null) {
      vals.push(head.val);
      head = head.next;
  }
  for (let i = 0, j = vals.length - 1; i < j; ++i, --j) {
      if (vals[i] !== vals[j]) {
          return false;
      }
  }
  return true;
};
















let head = { val: 1, next: { val: 2, next: { val: 3, next: null  }}}
// console.log(reverseList(head))


function ListNode (val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}