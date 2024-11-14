
/**
 * other
 * ----------------------------------------------------------------------------------------------------------
 * 1. 合并数组-有序 const arr1 = [1, 3, 5], arr2 = [2, 12, 4, 6]; // [ 1, 2, 3, 4, 5, 6 ]
 * 2. 颜色分类      const nums3 = [2,0,2,1,1,2] // 输出：[0,0,1,1,2,2] 解释：前面存0，中间存1，后面存2
 * 
 *----------------------------------------------------------------------------------------------------------*/


// 【合并数组-有序】
const arr1 = [1, 3, 5], arr2 = [2, 12, 4, 6]; // [ 1, 2, 3, 4, 5, 6 ]
/**
 * while(没指到头) -> 谁小谁进res,并右移  -> 最后结束肯定有个剩下的，把他全部放进res
 */
function mergeSortedArraysUsingMergeSort(arr1, arr2) {
  let result = [], p1 = 0, p2 = 0;

  while (p1 < arr1.length && p2 < arr2.length) {
    if (arr1[p1] < arr2[p2]) { result.push(arr1[p1]); p1++; }
    else { result.push(arr2[p2]); p2++; }
  }
  // 可能左或者右， 没有指完，继续接着指
  while (p1 < arr1.length) { result.push(arr1[p1]); p1++; }
  while (p2 < arr2.length) { result.push(arr2[p2]); p2++; }

  return result;
}

// 【颜色分类】
const nums3 = [2,0,2,1,1,2] // 输出：[0,0,1,1,2,2] 解释：前面存0，中间存1，后面存2
/**
 * 是2：让当前不是2， 交换right, 并--
 * 是0：让0在1前面，  交换left , 并++，自己也走: 
 * 是1：自己正常走
 */
console.log(sortColors(nums))
function sortColors(nums) {
  let left = -1          // p刚开始处于 左外
  let right = nums.length // q刚开始处于 右外
  let cur = 0
  
  while (cur < right) {
    if (nums[cur] == 0) {
      swap(cur, left + 1) // 保证：0在1前面
      left++
      cur++
    } else if (nums[cur] == 2) {
      swap(cur, right-1) // 保证： 当前不是2
      right--
    } else if (nums[cur] == 1) {
      cur++ // 剩下的就是1, 直接正常走
    }
  }
  return nums

  function swap(a, b) {
    let tmp = nums[a];
    nums[a] = nums[b]
    nums[b] = tmp;
  }
};
