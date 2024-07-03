/*
169. 多数元素

给定一个大小为 n 的数组 nums ，返回其中的多数元素。
多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。

你可以假设数组是非空的，并且给定的数组总是存在多数元素。

 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
  // 用map存储每个元素出现的次数
  let map = new Map()
  nums.forEach((item) => {
    // 判断map有无元素
    if (map.has(item)) {
      
      map.set(item, map.get(item) + 1)
    } else {
      map.set(item, 1)
    }
  })
// 找到map中value最大的key
let max = 0, maxKey = 0
  map.forEach((value, key) => {
    if (value > max) {
      max = value
      maxKey = key
    }

  })

  return maxKey

};


// const nums = [3,2,3]
const nums = [2,2,1,1,1,2,2]
const res = majorityElement(nums)
console.log(res)
/*
示例 1：

输入：nums = [3,2,3]
输出：3
示例 2：

输入：nums = [2,2,1,1,1,2,2]
输出：2
*/