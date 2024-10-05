class LinkedList {
  constructor() {
    this.head = null;
  }

  // 头插
  insertHead(value) {
    const newNode = new ListNode(value);

    newNode.next = this.head; // 头插, 指向head
    this.head = newNode;
  }

  // 尾插
  insertTail(value) {
    const newNode = new ListNode(value);
    if (!this.head) {

      newNode.next = this.head; // 头插, 指向head
      this.head = newNode;

    } else { 

      let current = this.head;
      while (current.next)   current = current.next;
      newNode.next = null;    // 尾插，最后指向null
      current.next = newNode;

    }
  }

  // 在链表中插入节点，保持链表排序（升序）
  insertSorted(value) {
    const newNode = new ListNode(value);
    if (!this.head || this.head.value >= newNode.value) { // 不存在head或head值大了

      newNode.next = this.head; // 头插, 指向head
      this.head = newNode;

    } else { // head值小了

      let current = this.head;
      while (current.next && current.next.value < newNode.value)  current = current.next;
      newNode.next = current.next; // 中插，最后指向current.next
      current.next = newNode;

    }
  }

  // 删除节点
  delete(value) {
    // 没头结点
    if (!this.head) return;

    // 删头节点
    if (this.head.value === value) {
      this.head = this.head.next; // 头删
      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value)  current = current.next;
    if (current.next) {
      current.next = current.next.next;  // 中删
    }
  }

  // 更新节点
  update(oldValue, newValue) {
    let current = this.head;
    while (current) {
      if (current.value === oldValue) {
        current.value = newValue;
        return true;
      }
      current = current.next;
    }

    return false; // 如果没有找到oldValue，则返回false
  }

  // 打印链表
  print() {
    let current = this.head;
    let result = [];
    while (current) {
      result.push(current.value);
      current = current.next;
    }
    console.log(result.join(' -> '));
  }
  // 数组转链表
  createLinkedList(elements) {
    let head = null, current = null;
  
    for (const element of elements) {
      const node = { val: element, next: null };
      if (!head) { head = node;         current = node; } 
      else       { current.next = node; current = node; }
    }
  
    return head;
  }
}


function ListNode (val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}