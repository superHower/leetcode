/**
 * 堆是啥？
 * 就是完全二叉树：即只允许最后一行的最右边有空缺的二叉树
 * 
 *    大根堆               小根堆
 *     大                    小
 *  小    小               大   大
 * 
 * 堆的存储 【一维数组】
 *       （0）
 *        10
 *   （1）       （2）
 *    7           9
 *（3） （4） （5）
 * 6     4     3
 * heap = [10, 7, 9, 6, 4, 3]
 * 
 * 堆的下标规律
 * 根节点 i, 左子节点 2i+1  右子节点 2i+2
 * 
 * 乱序数组，怎么转化成堆？
 *   操作1：插入新元素到堆尾部 --> 上浮  
 *   操作2：倒2排的根节点 -->下沉
 * 
 * 
 * 应用1： 优先队列: 小根堆 + 上浮
 * 应用2： 堆排序：  
 * 
 */



// 【数组中第k个最大的元素】
const nums = [3, 2, 1, 5, 6, 4], k = 2 //输出: 5
// const nums = [3,2,3,1,2,4,5,5,6], k = 4 //输出: 4

function findKthLargest(nums, k) {
  let heapSize = nums.length
  // 自下而上构建一颗大顶堆
  for (let i = Math.floor(heapSize / 2) - 1; i >= 0; i--) {
    maxHeapify(i)
  }
  console.log(nums)
  // 进行下沉 大顶堆是最大元素下沉到末尾
  let index = nums.length - 1
  while(k>1) { // 堆尾开始 迭代k-1次
    [nums[0], nums[index]] = [nums[index], nums[0]] // 交换
    heapSize-- 
    maxHeapify(0) // 下沉
    index--
    k--
  }

  return nums[0]


  // 下沉调整，构建大根堆
  function maxHeapify(i) {
    let l = i * 2 + 1
    let r = i * 2 + 2
    let largest = i

    if (l < heapSize && nums[l] > nums[largest]) largest = l
    if (r < heapSize && nums[r] > nums[largest]) largest = r

    if (largest !== i) {
      [nums[i], nums[largest]] = [nums[largest], nums[i]]
      maxHeapify(largest)
    }
  }
};

