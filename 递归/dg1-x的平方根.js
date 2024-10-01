/*
69. x 的平方根 
给你一个非负整数 x ，计算并返回 x 的 算术平方根 。

由于返回类型是整数，结果只保留 整数部分 ，小数部分将被 舍去 。

注意：不允许使用任何内置指数函数和算符，例如 pow(x, 0.5) 或者 x ** 0.5 。
*/


var mySqrt = function(x) {
  if (x == 0 || x == 1) {
    return x;
  }
  // 分治思想
  let find = function (layer, left, right) {
    console.log('层数：'+layer, left, right)
      if (right - left <= 1) { // 搜索区间不够时，找到了答案
          return left;
      }
      mid = Math.floor((left + right) / 2);
      console.log(mid)
      // 根据答案更新 左右边界
      if (mid * mid > x) right = mid;
      else left = mid 
      
      return find(layer + 1, left, right);
  }
  return find(0, 1, x);
};


const x = 4
// 输出：2

console.log(mySqrt(x))

