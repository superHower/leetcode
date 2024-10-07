const nums = [-1,0,1,2,-1,-4]    // [ [ -1, -1, 2 ], [ -1, 0, 1 ] ]
console.log(threeSum(nums))

function threeSum(nums) { 
  let len = nums.length, ans = []
  
  if(len < 3 || !nums) return []
  nums.sort((a,b)=> a-b)

  for(let i = 0; i< len - 2; i++) {
    let left = i+1, right = len-1

    if(nums[i] > 0) break; // 可以加上， 优化
    if(i>0 && nums[i] == nums[i-1]) continue // 自己 去重

    while(left < right) {
      let sum = nums[i] + nums[left] + nums[right]
      console.log(nums[i] , nums[left] , nums[right])
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