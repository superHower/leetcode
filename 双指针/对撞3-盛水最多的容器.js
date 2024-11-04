const height = [1,8,6,2,5,4,8,3,7]  // 49 解释：在8和7两根柱子之间盛水最多=7 * (8-1)
// const height = [1,1]                   // 1
console.log(maxArea(height))


function maxArea(height) {
  let left = 0; right = height.length-1;

  let max = 0
  while(left < right) {
      let area = Math.min(height[left], height[right]) * (right - left)
      max = Math.max(max, area)// 更新最大值

      if(height[left] > height[right]) right--
      else left++
  }

  return max
};




