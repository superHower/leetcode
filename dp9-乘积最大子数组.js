/*
152. 乘积最大子数组

给你一个整数数组 nums ，请你找出数组中乘积最大的非空连续 子数组
（该子数组中至少包含一个数字），并返回该子数组所对应的乘积。

测试用例的答案是一个 32-位 整数。
*/
 

const nums = [2,3,-2,4] // 6  解释: 子数组 [2,3] 有最大乘积 6。
// const  nums = [-2,0,-1] // 0  解释: 结果不能为 2, 因为 [-2,-1] 不是子数组

/**
 * 
 * 
 * 
**/

console.log(maxProduct(nums))
function maxProduct (nums) {
  let res = nums[0]
  let prevMin = nums[0]
  let prevMax = nums[0]
  
  let temp1 = 0, temp2 = 0
  for (let i = 1; i < nums.length; i++) {
    temp1 = prevMin * nums[i]
    temp2 = prevMax * nums[i]
    prevMin = Math.min(temp1, temp2, nums[i])
    prevMax = Math.max(temp1, temp2, nums[i])
    res = Math.max(prevMax, res)
  }
  return res
}


/**
 * 屎代码： 完全忘记动态规划
 */
function maxProduct1(nums) {
  let max = 0
  for(let i = 1; i< nums.length; i++) {
    for(let j = 0; j < i; j++) {
      let res = 1
      for(let k =j; k < i; k++) {
        res *= nums[k]
        // console.log(res)
      }
      max = Math.max(max, res)
    }
  }
  return max

};