const nums = [1,2,3,4,5,6,7], k = 3
// const nums = [-1,-100,3,99], k = 2
console.log(rotate(nums, k)) // [5,6,7,1,2,3,4]

// 思路一：数组splice法
function rotate1(nums, k) {
k = k % nums.length; 
let part1=nums.splice(nums.length-k,k) // 21. 取出并删除后面的
return nums.unshift(...part1)          // 2. 插到前面去
};

// 思路二：数组地址法
function rotate2(nums, k) {
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

  return nums
};







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

