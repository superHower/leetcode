const n = 12 // 3 解释：12 = 4 + 4 + 4
// const n = 13 // 2 解释：13 = 4 + 9
console.log(numSquares(n))
/*
  某数 i 的完全平方数 最少个数 = 有平方数 ？ { [现]  or [剩] + 1 }
                              i >= j*j
*/
function numSquares(n) {
  const dp = new Array(n+1).fill(Infinity) // 某数 i 的完全平方数 最少个数
  dp[0] = 0

  for (let i = 1; i <= n; i++) {
      for(let j = 1; j <= n; j++)  {
        if(i >= j*j)  dp[i] = Math.min(dp[i], dp[i - j*j] + 1);
      }   
  }
  return dp[n];
}
