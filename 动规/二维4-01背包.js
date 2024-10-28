
const products = [
  {id:1, v: 5, w: 1}, 
  {id:2, v: 8, w: 2}, 
  {id:3, v: 7, w: 3}
];
const w = 5;  
console.log(backpack(w, products))

/**
 * 容量为w，装前i个商品时的最大价值 = 
 *                          装的下              ？   {       不装           or           装                       }
 *                       w >= products[i - 1].w      [现容量  装之前商品]   or     [剩余容量][装之前商品] + 前商品价值
 *                          装不下              ：          不装
 *
 */

function backpack(W, products) {
  // 初始化动态规划表格
  let n = products.length;
  let dp = Array(W + 1).fill(0).map(() => Array(n + 1).fill(0));// 容量为w，装前i个商品时的最大价值

  // 动态规划过程
  for (let i = 1; i <= n; i++) { // 遍历商品
    for (let w = 1; w <= W; w++) { // 遍历背包

      if(w >= products[i - 1].w) dp[w][i] = Math.max(dp[w][i - 1], 
                                                     dp[w - products[i - 1].w][i - 1] + products[i - 1].v);
      else                       dp[w][i] = dp[w][i - 1];

      
    }
  }

  // 最后一个元素dp[W][n]即为最大价值
  return dp[W][n];
}
