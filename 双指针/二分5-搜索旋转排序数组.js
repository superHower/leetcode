const nums = [4,5,6,7,0,1,2], target = 0  // 输出：4
// const nums = [4,5,6,7,0,1,2], target = 3  // 输出：-1; 

console.log(search(nums, target))

function search(nums, target) {
  if (!nums.length) return -1
  let left = 0, right = nums.length - 1, mid

  while (left <= right) {
      mid = Math.floor((left+right)/2)

      if (nums[mid] === target) return mid
      
      if (nums[mid] >= nums[left]) {
          if (target >= nums[left] && target < nums[mid])  // 左值 < target < 中值
            right = mid - 1
          else                                             
            left = mid + 1
      } else {
          if (target > nums[mid] && target <= nums[right]) // 中值 < target < 右值
            left = mid + 1
          else                                             
            right = mid - 1
      }
  }
  return -1
}

