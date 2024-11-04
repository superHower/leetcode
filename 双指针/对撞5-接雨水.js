const height = [0,1,0,2,1,0,1,3,2,1,2,1] // 6
console.log(trap(height))
/**
 * while (left < right) {
 *   分别计算 左右两边最高的柱子
 * 
 *   左边低？ans += 左边高度差
 *   右边低？ans += 右边高度差
 * }
 * 
 */
function trap(height) {
  let ans = 0, left = 0, right = height.length - 1;
  let leftMax = 0, rightMax = 0;


  while (left < right) {
      leftMax = Math.max(leftMax, height[left]);
      rightMax = Math.max(rightMax, height[right]);
 
      if (height[left] < height[right]) {  ans += leftMax - height[left];   left++;  } 
      else                              {  ans += rightMax - height[right]; right--; }
  }

  return ans;
};

