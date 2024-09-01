/*
279. 完全平方数

给你一个整数 n ，返回 和为 n 的完全平方数的最少数量 。

完全平方数 是一个整数，其值等于另一个整数的平方；
换句话说，其值等于一个整数自乘的积。例如，1、4、9 和 16 都是完全平方数，而 3 和 11 不是。
*/
 

const n = 12 // 3 解释：12 = 4 + 4 + 4
// const n = 13 // 2 解释：13 = 4 + 9
console.log(numSquares(12))

/**
 *  每个数字 i {
 *     每个平方数 j*j {
 *         数字i的最少数量
 *                 此平方数能构成 dp[i-j*j] + 1  
 *               此平方数不能构成 dp[i]
 *     }
 *  }
 * 
 */

function numSquares(n) {
  if(n <= 0) return 0
  const dp = new Array(n+1).fill(Infinity)
  dp[0] = 0;

  for (let i = 1; i <= n; i++) { // 每个数字
      for (let j = 1; j * j <= i; j++) { // 每个平方数
        // console.log('平方',j*j, '数字',i, '的最少数量'+dp[i])
        // console.log('平方',j*j, '数字',(i-j*j), '的最少数量'+(dp[i - j*j] + 1) )
        // console.log('--------------')
          dp[i] = Math.min(dp[i], dp[i - j*j] + 1);
      }
  }

  return dp[n];

}