const nums = [-1,0,1,2,-1,-4]    // [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
console.log(threeSum(nums))
/**
 * 先排序
 * for i 遍历 nums {
 *   去重：nums[i]==之前？continue
 *   if（sum==0）{
 *     ans.push([nums[i], nums[left], nums[right]])
 *     左移
 *     左移后去重：nums[left] ==之前？左移
 *     右移
 *     右移后去重：nums[right]==之前？右移
 *   }else if(小) 左移
 *    else if(大) 右移
 * }
 * 
 */
function threeSum(nums) { 
  if(nums.length < 3 || !nums) return []

  let ans = []
  nums.sort((a,b)=> a-b)

  for(let i = 0; i< nums.length - 2; i++) {
    let left = i+1, right = nums.length-1

    if(nums[i] > 0) break; // 可以加上， 优化速度
    if(i>0 && nums[i] == nums[i-1]) continue // 自己 去重

    while(left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      if(sum == 0) {
         ans.push([nums[i], nums[left], nums[right]])

         left++
         while(left < right && nums[left] == nums[left-1]) left++ // 左 去重

         right--
         while(left < right && nums[right] == nums[right+1]) right-- // 右 去重

      }else if(sum < 0)   left++
      else right-- 
    }
  }
  return ans
}