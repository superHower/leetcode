/**
 * 42. 接雨水
 * 
 * 有高有低的柱子，接多少水
 */


const height = [0,1,0,2,1,0,1,3,2,1,2,1]  // 6
console.log(trap(height))

/**
 * 变量：左max[]，右max[], ans
 * 
 * 子问题1： 每个位置左max高度[]（for第二个开始：当前左max值 = 选大的(当前高度,前一个max值)）
 * 子问题2： 每个位置右max高度[]（for倒二个开始：当前右max值 = 选大的(当前高度,后一个max值)）
 * 子问题3： 每个位置能接多少水：依赖于 ———— 这个位置左右最小的高度 - 这个位置的高度
 * 
 * 
 * 状态转移方程：leftMax[i]和rightMax[i]的计算就是状态转移的过程。
 * 重叠子问题：在计算leftMax和rightMax时，每个位置的计算都依赖于之前（或之后）已经计算过的位置
 * 最优子结构：每个位置能够接住的雨水量：取决于其左侧最大高度和右侧最大高度中的较小值 - 当前高度
**/

function trap(height) {
  const n = height.length;
  if (n == 0) {
      return 0;
  }
  // 每个位置的左边 最大高度
  const leftMax = new Array(n).fill(0);
  leftMax[0] = height[0];
  for (let i = 1; i < n; ++i) {
      leftMax[i] = Math.max(leftMax[i - 1], height[i]);
  }
  // 每个位置的右边 最大高度
  const rightMax = new Array(n).fill(0);
  rightMax[n - 1] = height[n - 1];
  for (let i = n - 2; i >= 0; --i) {
      rightMax[i] = Math.max(rightMax[i + 1], height[i]);
  }
  // 每个位置能接到多少水
  let ans = 0;
  for (let i = 0; i < n; ++i) {
      ans += Math.min(leftMax[i], rightMax[i]) - height[i];
  }
  return ans;
}