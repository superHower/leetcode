const nums = [2,3,-2,4] // 6  解释: 子数组 [2,3] 有最大乘积 6。
// const  nums = [-2,0,-1] // 0  解释: 结果不能为 2, 因为 [-2,-1] 不是连续子数组

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
