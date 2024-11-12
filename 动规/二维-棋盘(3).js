/**
 * 
 * 1. 最小路径和 （打家劫舍2.0）
 * 2. 不同路径
 * 3. 杨辉三角
 */

// 【最小路径和 （打家劫舍2.0）】
/*  
    从右下往左上走
   
    最小路径和 = {
        最后一行：只走右边的和 + 自己
        最后一列：只走下边的和 + 自己
        其他情况：{ 走右边 or 走下边 } + 自己
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

// 【不同路径】
const m = 3, n = 2 // 输出：3  解释：从左上角开始，总共有 3 条路径可以到达右下角。

/**
 * [m][n]的路径数 = 左边的路径数 + 上边的路径数
 * 
 */
var uniquePaths = function(m, n) {
  const f = new Array(m).fill(0).map(() => new Array(n).fill(0));
  // 初始化边界
  for (let i = 0; i < m; i++) { f[i][0] = 1; }
  for (let j = 0; j < n; j++) { f[0][j] = 1; }

  for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
          f[i][j] = f[i - 1][j] + f[i][j - 1];
      }
  }
  return f[m - 1][n - 1];
};


// 【杨辉三角】
/*
  值 = 左上值 + 正上值
*/

function generate(n) {
    let dp = []; 
  
    for (let row = 0; row < n; row++) {
        dp[row] = new Array(row + 1).fill(0);
  
        dp[row][0] = 1;   // 头是1
        dp[row][row] = 1; // 尾是1
  
        for (let col = 1; col < row; col++) {
            dp[row][col] = dp[row - 1][col - 1] + dp[row - 1][col];
        }
    }
  
    // 返回整个杨辉三角
    return dp;
  }
  