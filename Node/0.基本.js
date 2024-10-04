class LinkedList {
  constructor() {
    this.head = null;
  }

  // 头插
  insertHead(value) {
    const newNode = new ListNode(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  // 尾插
  insertTail(value) {
    const newNode = new ListNode(value);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
  }

  // 在链表中插入节点，保持链表排序（升序）
  insertSorted(value) {
    const newNode = new ListNode(value);
    if (!this.head || this.head.value >= newNode.value) {
      newNode.next = this.head;
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next && current.next.value < newNode.value) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
    }
  }

  // 删除节点
  delete(value) {
    if (!this.head) return;

    // 如果要删除的是头节点
    if (this.head.value === value) {
      this.head = this.head.next;
      return;
    }

    let current = this.head;
    while (current.next && current.next.value !== value) {
      current = current.next;
    }

    if (current.next) {
      current.next = current.next.next;
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
}


function ListNode (val, next) {
  this.val = (val===undefined ? 0 : val)
  this.next = (next===undefined ? null : next)
}