/**
 * 1. 打家劫舍       const nums = [2,7,9,3,1, 2]  // 输出：13 解释：不能偷邻居的情况下 最多偷多少钱
 * 2. 爬楼梯         let n = 2                    // 输出：2  解释：爬三楼，有三种情况
 * 3. 不同路径--------依赖正左 + 正上
 * 4. 杨辉三角--------依赖左上 + 正上
 */

// 【打家劫舍】-------------------------------------------------------
const nums = [2,7,9,3,1, 2] // 13
/*
 *    屋子累计最大金额 = { 不偷当前屋子 or 偷当前屋子  }
 */
function rob(nums) {
  const n = nums.length;
  if (n === 0) return 0;
  if (n === 1) return nums[0];

  let dp = new Array(n).fill(0);  // 到第 i 间房屋，能偷的最大金额
  dp[0] = nums[0];
  dp[1] = Math.max(nums[0], nums[1]);

  for (let i = 2; i < n; i++) {
    dp[i] = Math.max(dp[i - 1],  dp[i - 2] + nums[i]);
  }
  return dp[n - 1];
};

// 【爬楼梯】-------------------------------------------------------
let n = 3 //输出：3 
/*
 * 当前这层 方法数 = 【上层】 方法数 + 【上上层】 方法数
 */
function climbStairs(n) {
  if (n <= 2) return n;
  
  let dp = new Array(n+1).fill(0) // 到 i 级台阶 的方法数
  dp[1] = 1; 
  dp[2] = 2; 
  
  for (let i = 3; i <= n; i++) {
      dp[i] = dp[i - 1] + dp[i - 2]; // 依赖关系
  }
  
  return dp[n];
};



// 【不同路径】
// const m = 3, n = 2 // 输出：3  解释：从左上角开始，总共有 3 条路径可以到达右下角。

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