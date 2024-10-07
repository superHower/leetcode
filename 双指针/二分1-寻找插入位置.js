

var searchInsert = function(nums, target) {
  let left = 0, right = nums.length - 1

  while (left <= right) { // 区间不为空
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] < target) left = mid + 1; // 范围缩小到 [mid+1, right]
      else                   right = mid - 1; // 范围缩小到 [left, mid-1]
  }
  return left;
}