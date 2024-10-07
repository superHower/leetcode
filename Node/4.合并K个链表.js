// 输入： [[1,4,5],[1,3,4],[2,6]] 输出： 1->1->2->3->4->4->5->6
/*
  k个链表进行分左右
  分到（头==尾）说明分到头了

  合并左右链表
*/
var mergeKLists = function(lists) {
  if(!lists.length) return null;

  return mergeList(0, lists.length - 1);

  function mergeList(start, end) {
    if(start === end) return lists[start] // 说明分到头了，只剩一个元素了，直接返回
  
    let mid = start + Math.floor((end - start) / 2);
    let leftList = mergeList(start, mid);
    let rightList = mergeList(mid + 1, end)
    
    // 下面开始合并链表
    let temp = dummy = new ListNode(0)
  
    while(leftList && rightList) {
      if(leftList.val < rightList.val) {
        temp.next = leftList
        leftList = leftList.next
      }else {
        temp.next = rightList
        rightList = rightList.next
      }
      temp = temp.next
    }
  
    // 最后还剩个大的没加入， 把他加入dummy
    temp.next = leftList ? leftList : rightList
    return dummy.next
  }
  
};





function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
 
const lists = [
  {val: 1, next: {val: 4, next: {val: 5, next: null }}},
  {val: 1, next: {val: 3, next: {val: 4, next: null }}},
  {val: 2, next: {val: 6, next: null }}
]
console.log(mergeKLists(lists))