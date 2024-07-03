/*
189. 轮转数组

给定一个整数数组 nums，将数组中的元素向右轮转 k 个位置，其中 k 是非负数。
*/
/**
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 思路一：数组splice法
var rotate1 = function(nums, k) {
  const n = nums.length;
  // 分割数组
  let left = nums.splice(n-k,k);
  let right = nums.splice(0, n-k);
  nums = left.concat(right);
  console.log(nums)
};

// 思路二：数组地址法
var rotate = function(nums, k) {
  const n = nums.length;
  const newArr = new Array(n);
  for (let i = 0; i < n; ++i) {
    // 旋转后的位置, 取模运算，使得下标不会超出数组长度
    let now = (i + k) % n
    newArr[now] = nums[i];
  }
  for (let i = 0; i < n; ++i) {
      nums[i] = newArr[i];
  }
};





const nums = [1,2,3,4,5,6,7], k = 3
// const nums = [-1,-100,3,99], k = 2
rotate(nums, k)
console.log(nums) // [5,6,7,1,2,3,4]

/*
示例 1:

输入: nums = [1,2,3,4,5,6,7], k = 3
输出: [5,6,7,1,2,3,4]
解释:
向右轮转 1 步: [7,1,2,3,4,5,6]
向右轮转 2 步: [6,7,1,2,3,4,5]
向右轮转 3 步: [5,6,7,1,2,3,4]
示例 2:

输入：nums = [-1,-100,3,99], k = 2
输出：[3,99,-1,-100]
解释: 
向右轮转 1 步: [99,-1,-100,3]
向右轮转 2 步: [3,99,-1,-100]
*/