const nums = [3,4,5,1,2] //输出：1
console.log(findMin(nums))

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