const height = [1,8,6,2,5,4,8,3,7]  // 49 解释：在8和7两根柱子之间盛水最多=7 * (8-1)
// const height = [1,1]                   // 1
console.log(maxArea(height))

/**
 * 左右，往中间指
 * 找下标之差 * 值之差 的最大
 */

function maxArea(height) {
  let left = 0, right = height.length-1, maxArea = 0;

  while(left < right) {
    let ans = (Math.min(height[left], height[right])) * (right - left);
    maxArea = Math.max(maxArea, ans);
        
    if(height[left] > height[right])   right--
    else                               left++
  }
  return maxArea
};





