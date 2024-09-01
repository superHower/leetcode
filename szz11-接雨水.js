/**
 * 接雨水
 * 
 * 有高有低的柱子，接多少水
 */

const height = [0,1,0,2,1,0,1,3,2,1,2,1] // 6
console.log(trap(height))

/**
 * 变量：ans, leftMax, rightMax, 左右指针
 * 两指针居中循环
 *   更新左、右两边max高度
 *   当前位置比较
 *     左大  -> ans +=（当前高度-左max），左移
 *     右大  -> ans +=（当前高度-右max），右移
 */

// 双指针
function trap(height) {
  let ans = 0;
  let left = 0, right = height.length - 1;
  let leftMax = 0, rightMax = 0;
  while (left < right) {
      leftMax = Math.max(leftMax, height[left]);
      rightMax = Math.max(rightMax, height[right]);
 
      if (height[left] < height[right]) {
          ans += leftMax - height[left];
          ++left;
      } else {
          ans += rightMax - height[right];
          --right;
      }
  }
  return ans;
};

