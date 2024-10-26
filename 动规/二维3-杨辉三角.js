console.log(generate(5))

/*
  依赖关系：值 = 左上值+ 正上值
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

