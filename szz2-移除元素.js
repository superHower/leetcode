/*
27. 移除元素
给你一个数组 nums 和一个值 val，你需要 原地 移除所有数值等于 val 的元素，
并返回移除后数组的新长度。
不要使用额外的数组空间，你必须仅使用 O(1) 额外空间并 原地 修改输入数组。
元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。

示例 1：输入：nums = [3,2,2,3], val = 3
输出：2, nums = [2,2]
解释：函数应该返回新的长度 2, 并且 nums 中的前两个元素均为 2。你不需要考虑数组中超出新长度后面的元素。
例如，函数返回的新长度为 2 ，而 nums = [2,2,3,3] 或 nums = [2,2,0,0]，也会被视作正确答案。
示例 2：输入：nums = [0,1,2,2,3,0,4,2], val = 2
输出：5, nums = [0,1,3,0,4]
解释：函数应该返回新的长度 5, 并且 nums 中的前五个元素为 0, 1, 3, 0, 4。注意这五个元素可为任意顺序。
你不需要考虑数组中超出新长度后面的元素。
*/
/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement1 = function(nums, val) {
  // 思路1：map方法遍历 =》导致splice 方法改变数组的长度和索引，从而导致后续的迭代出现问题。
  nums.map((item, index) => {
    if(item === val) {
      console.log('item:' + item)
      nums.splice(index, 1)
    }

    console.log(nums)
  })
  return nums.length
};
// 思路2： 用filter过滤不符合条件的元素
const removeElement2 = function(nums, val) {
  nums = nums.filter(item => item !== val);
  return nums
};

var removeElement = function(nums, val) {
  // 思路3：双指针
  let left = 0, right = nums.length-1;
  while (left < right) {
    // 左指针元素 变成 右指针的元素
    // console.log("左" + nums[left] + "右" + nums[right])
      if (nums[left] === val) {
        // console.log("左变成右" + nums[right])
          nums[left] = nums[right];
          right--;
      } else {
          left++;
      }
      console.log(nums)
  }
  return left + 1;
};

// const nums = [3,2,2,3], val = 3
const nums = [0,1,2,2,3,0,4,2], val = 2
const res = removeElement(nums, val)
console.log(res)
