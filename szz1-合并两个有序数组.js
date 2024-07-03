/*
88. 合并两个有序数组
给你两个按 非递减顺序 排列的整数数组 nums1 和 nums2，
另有两个整数 m 和 n ，分别表示 nums1 和 nums2 中的元素数目。
请你 合并 nums2 到 nums1 中，使合并后的数组同样按 非递减顺序 排列。

注意：最终，合并后数组不应由函数返回，而是存储在数组 nums1 中。
为了应对这种情况，nums1 的初始长度为 m + n，
其中前 m 个元素表示应合并的元素，后 n 个元素为 0 ，应忽略。nums2 的长度为 n 。
*/

/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge1 = function(nums1, m, nums2, n) {
  // 思路1：双指针
  let p1 = m-1 // p1 nums2的尾
  let p2 = n-1 // p2 nums1的尾
  let p = m+n-1 // p 指向合并后的尾
  // 两个数组存在
  while(p1>=0 && p2>=0) {
    // 1-1. 思想： 从后往前，谁大谁放nums1后面
    if(nums1[p1] > nums2[p2]) { // nums1比nums2长
      nums1[p] = nums1[p1]
      p1--
    }else {
      nums1[p] = nums2[p2]
      p2--
    }
    p--
    console.log(nums1)
  }
  // nums1不存在
  while (p2 >= 0) {
    nums1[p] = nums2[p2]
    p2--
    p--
  }
  
};

var merge2 = function(nums1, m, nums2, n) {
  // 思路2：直接合并后排序
  nums1.splice(m, nums1.length-m, ...nums2);
            //开始位置， 删除个数， 要插的元素
  console.log(nums1)
  nums1.sort((a, b) => a-b)

}

const nums1 = [1,2,3,0,0,0], m = 3, nums2 = [2,5,6], n = 3
// merge1(nums1, m, nums2, n)
merge2(nums1, m, nums2, n)
console.log(nums1)
/*
示例 2：输入：nums1 = [1], m = 1, nums2 = [], n = 0
输出：[1]
解释：需要合并 [1] 和 [] 。
合并结果是 [1] 。
*/
/*
示例 3：输入：nums1 = [0], m = 0, nums2 = [1], n = 1
输出：[1]
解释：需要合并的数组是 [] 和 [1] 。
合并结果是 [1] 。
注意，因为 m = 0 ，所以 nums1 中没有元素。nums1 中仅存的 0 仅仅是为了确保合并结果可以顺利存放到 nums1 中。
*/