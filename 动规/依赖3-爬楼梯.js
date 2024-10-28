let n = 2 // 输出：2  
// let n = 3 //输出：3 

/*
  当前这层 方法数 = 【上层】 方法数 + 【上上层】 方法数
*/
console.log(climbStairs(3))
function climbStairs(n) {
  if (n <= 2) {
      return n;
  }
  
  let dp = new Array(n+1).fill(0) // 到 i 级台阶 的方法数
  //初始化
  dp[1] = 1; 
  dp[2] = 2; 
  
  for (let i = 3; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2]; // 依赖关系
  }
  
  return dp[n];
};