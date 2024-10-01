/*
201. 数字范围按位与

给你两个整数 left 和 right ，表示区间 [left, right] ，返回此区间内所有数字 按位与 的结果（包含 left 、right 端点）。
*/







/**
 * 抽象题直接，看答案啦
 */
var rangeBitwiseAnd = function(m, n) {
  let shift = 0;
  // 找到公共前缀
  while (m < n) {
      m >>= 1;
      n >>= 1;
      ++shift;
  }
  return m << shift;
};


const left = 5, right = 7
//输出：4
console.log(rangeBitwiseAnd(left, right))