// 打家劫舍2.0
/*  
    最小路径和 = {
        最后一行：只能走右边
        最后一列：只能走下边
        其他情况：右边，下边；随便走个小的
    }
*/
var minPathSum2 = function(grid) {
  const m = grid.length, n = grid[0].length
  const dp = new Array(m).fill(0).map(() => new Array(n).fill(0)) // 最小路径和

  // 状态初始化
  dp[m - 1][n - 1] = grid[m - 1][n - 1]

  for (let i = m - 1; i >= 0 ; i--) {
      for (let j = n - 1; j >= 0 ; j--) {
          if (i == m - 1 && j != n - 1)      dp[i][j] = grid[i][j] + dp[i][j + 1] // 最后一行
          else if (i != m - 1 && j == n - 1) dp[i][j] = grid[i][j] + dp[i + 1][j] // 最后一列
          else if (i != m - 1 && j != n - 1) dp[i][j] = grid[i][j] + Math.min(dp[i + 1][j], dp[i][j + 1]) // 既不是最后一行，已不是最后一列
      }
  }

  // 返回结果
  return dp[0][0]
}
