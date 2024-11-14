function heapSort(arr) {
  // 从最后一个非叶子节点开始调整每个节点，构建最大堆
  for (let i = Math.floor(arr.length / 2) - 1; i >= 0; i--) {
    heapify(arr, arr.length, i);
  }


  // 一个个从堆顶取出元素
  for (let i = arr.length - 1; i > 0; i--) {
    [arr[0], arr[i]] = [arr[i], arr[0]];// 交换 堆顶 和 堆尾
    heapify(arr, i, 0);// 重新调整为最大堆
  }

  return arr;

  // （array要存储堆的数组；len数组长度；index数组下标）
  function heapify(arr, len, index) {
    let largest = index; // 记录最大值
    let left = 2 * index + 1;  // 左节点位置
    let right = 2 * index + 2; // 右节点位置

    // 左节点大，更新最大值
    if (left < len && arr[left] > arr[largest]) largest = left;
    // 右节点大，更新最大值
    if (right < len && arr[right] > arr[largest]) largest = right;


    // 如果最大值不是当前节点
    if (largest !== index) {
      [arr[index], arr[largest]] = [arr[largest], arr[index]]; //交换它们
      heapify(arr, len, largest); // 继续调整
    }
  }
}

// 示例
let arr = [5, 3, 17, 10, 84, 19, 6, 22, 9];
console.log(heapSort(arr));