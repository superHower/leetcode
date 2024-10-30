/* 
  首先搜寻这个值在数组中， 能插入的位置。这个值一定在左边

  如果能找到左边，一定能找到右边

  只要找(target+1)这个数能插入的位置 即可
*/



var searchRange = function (nums, target) {
  const start = searchInsert(nums, target)
  if (start === nums.length || nums[start] !== target) return [-1, -1]; // nums 中没有 target
  
  // 如果 start 存在，那么 end 必定存在
  const end = searchInsert(nums, target + 1)
  return [start, end-1];

  // 搜索插入位置
  function searchInsert(nums, target) {
    let left = 0, right = nums.length - 1
  
    while (left <= right) { // 区间不为空
        const mid = Math.floor((left + right) / 2);
  
        if (nums[mid] < target) left = mid + 1; // 范围缩小到 [mid+1, right]
        else                   right = mid - 1; // 范围缩小到 [left, mid-1]
    }
    return left;
  }
};

