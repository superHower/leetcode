/**
 * 搜索
 * ----------------------------------------------------------------------------------------------------------
 * 1. 寻找指定位置-普通数组-------------经典二分（3区间）
 * 2. 寻找插入位置---------------------最终的left就是要插的位置
 * 3. 寻找指定值-矩阵------------------对每一行二分
 * 4. 寻找指定值-有序矩阵--------------从右上角 往 左下角找
 * 5. 寻找指定位置-旋转排序数组---------经典二分（5区间）
 * 6. 寻找最小值-旋转排序数组----------[HARD]
 * ----------------------------------------------------------------------------------------------------------
 *   while (left <= right) {
 *    let mid = Math.floor((left + right) / 2)
 *      if (arr[mid] == target)     return mid
 *      else if (arr[mid] < target) left = mid + 1
 *      else                       right = mid - 1; 
 *   }
 * --------------------------------------------------------------------------------------------------------
 * 注意！
 * 
 * while循环是 left <= right
 * --------------------------------------------------------------------------------------------------------*/
// 【寻找指定位置-普通数组】
/**
 * |    <           arr[mid]       <         |
 *  left=mid+1     return mid    right=mid-1
 */
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  
  while (left <= right) {
      let mid = Math.floor((left + right) / 2)
      
      if (arr[mid] == target)     return mid
      else if (arr[mid] < target) left = mid + 1
      else                       right = mid - 1; 
  }
  return -1
}



// 【寻找插入位置】
var searchInsert = function(nums, target) {
  let left = 0, right = nums.length - 1

  while (left <= right) { // 区间不为空
      const mid = Math.floor((left + right) / 2);

      if (nums[mid] < target) left = mid + 1;
      else                   right = mid - 1;
  }
  return left;
}


// 【寻找指定值-矩阵】O(logn)
function searchMatrix(matrix, target) {
  for (let row of matrix) {
    if(binarySearch(row, target) !== -1) return true
  }
  return false
}

// 【寻找指定值-有序矩阵】O(m + n)
function searchMatrix1(matrix, target) {
  const rows = matrix.length , cols = matrix[0].length
  let i = 0, j = cols - 1
  
  while (i < rows && j >= 0) { // 右上角开始， 往左下角找
    if (matrix[i][j] === target) return true
    else if (matrix[i][j] > target)  j--
    else  i++
  }
  return false
};

// 【寻找指定位置-旋转排序数组】
/**
 * 3中情况
 * 1. nums[mid] == target
 * 2. nums[left] <= nums[mid] :  nums[left] <= target < nums[mid]   
 * 3. else                    :  nums[mid] < target <= nums[right]   
 */
console.log(search([5,1,3], 3))

function search(nums, target) {
  if (!nums.length) return -1
  let left = 0, right = nums.length - 1, mid

  while (left <= right) {
      mid = Math.floor((left+right)/2)

      if (nums[mid] === target) return mid
      
      if (nums[mid] >= nums[left]) {
          if (target >= nums[left] && target < nums[mid])  right = mid - 1
          else                                             left = mid + 1
      } else {
          if (target > nums[mid] && target <= nums[right]) left = mid + 1
          else                                             right = mid - 1
      }
  }
  return -1
}
// 【寻找最小值-旋转排序数组】
const nums = [3,4,5,1,2] //输出：1
function findMin(nums) {
  let left = 0, right = nums.length - 1;
  while (left < right) {
    let mid = Math.floor((left + right) / 2)

    if (nums[mid] > nums[right])      left = mid + 1;
    else if (nums[mid] < nums[right]) right = mid;
    else mid--
  }
  return nums[left];
};