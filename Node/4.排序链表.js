/* 归并排序：合并 都是升序的左右链表

递归:
  结束：head 和 head.next 都不空

  找mid:  while(head){ 快的走两步; 慢的走一步 }
          mid就是慢的位置

   while（ 左右都有 ） { 
      谁小就把谁 加入 dummy, 并移动他;
      不停移动 temp;
   }

   最后剩下一个【大的】没有加进去， 把他加进dummy

   返回: 这个 dummy
*/


const toSortList = (head, tail) => {
    // 必须要保证head不是空的
    if (head === null) return head;
    if (head.next === null) { head.next = null; return head }

    let slow = fast = head;

    while (fast !== tail) { // 快的移动两步， 慢的移动一步
        slow = slow.next;
        fast = fast.next;
        if (fast !== tail) fast = fast.next;
    }

    const mid = slow; // 找到了中值
    let LNode = toSortList(head, mid)
    let RNode = toSortList(mid, tail)

    let temp = dummyHead = new ListNode(0) // 空链表

    while (LNode && RNode) {
        // 谁小就把谁 加入 dummy, 并移动
        if (LNode.val <= RNode.val) { 
            temp.next = LNode;
            LNode = LNode.next;
        } else {
            temp.next = RNode;
            RNode = RNode.next;
        }
        temp = temp.next; // temp 不断移动
    }
    // 最后剩下一个【大的】没有加进去， 把他加进去
    if (LNode) 
        temp.next = LNode;
    else if (RNode) 
        temp.next = RNode;
    
    return dummyHead.next; // dummy就是 两者合并
}

var sortList = function(head) {
    return toSortList(head, null); // 让整个链表都是升序
};
