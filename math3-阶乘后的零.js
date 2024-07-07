/*
172. 阶乘后的零
给定一个整数 n ，返回 n! 结果中尾随零的数量。

提示 n! = n * (n - 1) * (n - 2) * ... * 3 * 2 * 1
*/
/**
 * 优化：使用一个 while 循环来计算 n! 中包含多少对 2 和 5 的因子。
 * 由于 2 的数量总是比 5 的数量多，因此只需要计算 5 的数量。
 * Math.floor(n / i) 用于计算 n! 中包含的 5 的因子的数量，因为每 5、10、15... 都会贡献至少一个 5 的因子。
 * 循环直到 n / i < 1，这时已经没有足够的 5 的因子可以贡献到阶乘中了。
 */
var trailingZeroes = function(n) {
  let count = 0;
  // 不断除以 5，直到商小于 1
  while (n >= 5) {
      count += Math.floor(n / 5); // 商就是 5 的倍数的个数
      n = Math.floor(n / 5);
      console.log(n)
  }
  return count;
};

const n = 7
// 输出：0
// 解释：3! = 6 ，不含尾随 0
console.log(trailingZeroes(n))

/**
 * 0707-18:14  这里只能用于比较小的数，如果太大就报错
 */
var trailingZeroes_1 = function(n) {
  if(n==0) return 0
  let res = 1, sum = 0
  for(let i = 1; i<=n;i++) {
    res = i*res
  }
  let str = res.toString()
  console.log(str)
  for(let i = str.length-1; i >=0  ;i--)
  {
    console.log(str[i])
    if(str[i] == 0){
      sum++
    }else {
      break
    }
  }
  return sum
};

