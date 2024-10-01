/*
137. 只出现一次的数字 II

给你一个整数数组 nums ，除某个元素仅出现 一次 外，其余每个元素都恰出现 三次 。请你找出并返回那个只出现了一次的元素。

你必须设计并实现线性时间复杂度的算法且使用常数级空间来解决此问题。
*/

var singleNumber = function(nums) {
  if(nums.length == 1) return nums[0]
  nums.sort((a, b)=> {return a-b})

  if(nums[0] !== nums[1]) 
    return nums[0]

  if(nums[nums.length - 1] !== nums[nums.length - 2]) 
    return nums[nums.length - 1]
  for (let i = 0 ; i < nums.length; i = i+3){
    if( nums[i] !== nums[i+1] ) 
      return nums[i]

  }

};


const nums = [30000,500,100,30000,100,30000,100] // 3
// const nums = [0,1,0,1,0,1,99] // 99
console.log(singleNumber(nums))



// 2223
// 00011199
// 3444
// 2223444