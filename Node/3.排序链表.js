/* 归并排序：合并 都是升序的左右链表

递归（头，尾）:
  结束：头空          返回头
  结束：头.next==尾   返回 空了的头

  中 = 快慢指针
  左 = 排好序的（头，中）
  右 = 排好序的（中，尾）

  返回：合并好的左右链表
*/


const toSortList = (head, tail) => {
    if (head === null) return head;
    if (head.next === tail) { head.next = null; return head }

    let slow = fast = head;

    while (fast !== tail) { // 快的移动两步， 慢的移动一步
        slow = slow.next;
        fast = fast.next;
        if (fast !== tail) fast = fast.next;
    }

    const mid = slow; // 找到了中值
    let LNode = toSortList(head, mid)
    let RNode = toSortList(mid, tail)

    // 下面开始合并
    let temp = dummyHead = new ListNode(0) // 空链表

    while (LNode && RNode) {
        if (LNode.val <= RNode.val) { 
            temp.next = LNode;
            LNode = LNode.next;
        } else {
            temp.next = RNode;
            RNode = RNode.next;
        }
        temp = temp.next; // temp 不断移动
    }
    temp.next = LNode ? LNode : RNode // 最后剩个【大的】没有加进去
    return dummyHead.next;
}

var sortList = function(head) {
    return toSortList(head, null); // 让整个链表都是升序
};
