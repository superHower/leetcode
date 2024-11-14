class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  // 比较函数，用于确定元素的优先级顺序
  compareFn(a, b) {
    if (a.priority === b.priority) return 0;
    return a.priority > b.priority ? -1 : 1;
  }

  // 入队
  enqueue(element) {
    this.heap.push(element); // 放入堆尾 
    this.heapUp(this.heap.length - 1); // 上浮堆
  }

  // 出队
  dequeue() {
    if (this.heap.length === 0) return null;
    const head = this.heap[0]; // 记录 堆顶
    const last = this.heap.pop(); // 1. 弹出 堆尾
    if (this.heap.length > 0) {
      this.heap[0] = last;        // 2. 堆顶 变成 堆尾
      this.heapDown(0);           // 3. 从堆顶 下沉堆
    }
    return head;
  }

  // 上浮调整堆
  heapUp(index) {
    let parent = Math.floor((index - 1) / 2);
    while (index > 0 && this.compareFn(this.heap[parent], this.heap[index]) > 0) {
      [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];
      index = parent;
      parent = Math.floor((index - 1) / 2);
    }
  }

  // 下沉调整，构建大根堆
  heapDown(index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;
    let largest = index;

    if (left  < this.heap.length && this.compareFn(this.heap[left],  this.heap[largest]) < 0) largest = left;
    if (right < this.heap.length && this.compareFn(this.heap[right], this.heap[largest]) < 0) largest = right;

    if (largest !== index) {
      [this.heap[index], this.heap[largest]] = [this.heap[largest], this.heap[index]];
      this.heapDown(largest);
    }
  }

  // 获取优先队列的大小
  size() {
    return this.heap.length;
  }

  // 查看优先队列的前端元素
  peek() {
    return this.heap[0];
  }
}

// 使用示例
const pq = new PriorityQueue();
pq.enqueue({ element: 'task1', priority: 2 });
pq.enqueue({ element: 'task2', priority: 1 });
pq.enqueue({ element: 'task3', priority: 3 });

console.log(pq.dequeue()); // { element: 'task3', priority: 3 }
console.log(pq.dequeue()); // { element: 'task1', priority: 2 }
console.log(pq.dequeue()); // { element: 'task2', priority: 1 }
