const n = 12 // 3 解释：12 = 4 + 4 + 4
// const n = 13 // 2 解释：13 = 4 + 9
console.log(numSquares(n))
/*
  依赖关系： [i]最少个数 = ( [i] , [剩余] + 1 )
  初始化： 0
*/
function numSquares(n) {
  const dp = new Array(n+1).fill(Infinity) // 某数 i 的完全平方数 最少个数
  dp[0] = 0

  for (let i = 1; i <= n; i++) {
      for(let j = 1; j <= n; j++)  {
        let leave = i - j*j // 剩余 = 某数 - 平方数
        if(leave>=0) 
          dp[i] = Math.min(dp[i], dp[leave] + 1);
      }   
  }
  return dp[n];
}
