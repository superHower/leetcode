
// 【颜色分类】
const nums = [2,0,2,1,1,2] // 输出：[0,0,1,1,2,2] 解释：前面存0，中间存1，后面存2
/**
 * 是2：让当前不是2， 交换right, 并--
 * 是0：让0在1前面，  交换left , 并++，自己也走: 
 * 是1：自己正常走
 */
console.log(sortColors(nums))
function sortColors(nums) {
  let left = -1          // p刚开始处于 左外
  let right = nums.length // q刚开始处于 右外
  let cur = 0
  
  while (cur < right) {
    if (nums[cur] == 0) {
      swap(cur, left + 1) // 保证：0在1前面
      left++
      cur++
    } else if (nums[cur] == 2) {
      swap(cur, right-1) // 保证： 当前不是2
      right--
    } else if (nums[cur] == 1) {
      cur++ // 剩下的就是1, 直接正常走
    }
  }
  return nums

  function swap(a, b) {
    let tmp = nums[a];
    nums[a] = nums[b]
    nums[b] = tmp;
  }
};


