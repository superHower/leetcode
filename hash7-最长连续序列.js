/*
128. 最长连续序列
给定一个未排序的整数数组 nums ，找出数字连续的最长序列（不要求序列元素在原数组中连续）的长度。
请你设计并实现时间复杂度为 O(n) 的算法解决此问题。
*/

/**
 * 0702-20:09 终于自己做出来啦，历经波折啊
 */

var longestConsecutive = function(nums) {

  nums.sort((a, b)=> {return a-b})
  nums = [...new Set(nums)]

  if(nums.length == 1) return 1

  let list = new Array()
  let flag = false
  let max = 0
  for(let i = 0; i<nums.length-1; i++){
    if(nums[i+1]-nums[i] === 1) {
      flag = true
      list.push(nums[i])
    }else {
      flag = false
      list.push(nums[i])
      max = Math.max(max, list.length)
      list = []
    }
  }

  if(flag) {
    list.push(nums[nums.length-1])
    max = Math.max(max, list.length)
  }
  return max

};

// const nums = [100,4,200,1,3,2] //4
const nums = [0,3,7,2,5,8,4,6,0,1]//9
console.log(longestConsecutive(nums))