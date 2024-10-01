/**
11. 盛最多水的容器

给定一个长度为 n 的整数数组 height 。有 n 条垂线，第 i 条线的两个端点是 (i, 0) 和 (i, height[i]) 。
找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。
返回容器可以储存的最大水量。
 */

const height = [1,8,6,2,5,4,8,3,7]
// const height = height = [1,1]
console.log(maxArea(height))

/**
 * 左右，往中间指
 * 找下标之差 * 值之差 的最大
 */

function maxArea(height) {
  let n = height.length
  let i = 0, j = n-1
  let maxArea = 0;
  while(i < j) {
    let ans = (Math.min(height[i], height[j])) * (j - i);
    maxArea = Math.max(maxArea, ans);

    if(height[i] > height[j]) 
      j--
    else 
      i++
  }
  return maxArea
};





