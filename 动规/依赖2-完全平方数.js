const n = 12 // 3 解释：12 = 4 + 4 + 4
// const n = 13 // 2 解释：13 = 4 + 9

function numSquares(n) {
  if(n <= 0) return 0
  const dp = new Array(n+1).fill(Infinity)
  dp[0] = 0;

  for (let i = 1; i <= n; i++) { // 每个数字：1，2,3,4,5
      for (let j = 1; j * j <= i; j++) { // 每个平方数：1,4,9,16,25
          dp[i] = Math.min(dp[i], dp[i - j*j] + 1);
      }
  }

  return dp[n];

}