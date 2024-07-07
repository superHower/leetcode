/*
136. 只出现一次的数字
给你一个 非空 整数数组 nums ，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

你必须设计并实现线性时间复杂度的算法来解决此问题，且该算法只使用常量额外空间。

*/


var singleNumber = function(nums) {
  if (nums.length == 1) return nums[0]
  nums.sort((a, b)=>{return a-b})
  // console.log(nums)
  for(let i = 0; i < nums.length; i = i+2) {
    if(nums[i] !== nums[i+1] || i == nums.length - 1) {
      return nums[i]
    }
  }
};





// const nums = [4,1,2,1,2] // 4
const nums = [2,2,1] // 1
console.log(singleNumber(nums))