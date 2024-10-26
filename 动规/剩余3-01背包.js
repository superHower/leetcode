
const products = [
  {id:1, v: 5, w: 1}, 
  {id:2, v: 8, w: 2}, 
  {id:3, v: 7, w: 3}
];
const w = 5;  
console.log(backpack(w, products))

/**
 * 
 *    装不下：   当前容量最大价值 = 之前容量最大价值
 *    装的下：   当前容量最大价值 = {
 *                            不装：之前容量最大价值
 *                            装  ：[剩余容量下][装之前商品]的最大价值 + 之前商品价值
 *                          } 
 *    }
 */

function backpack(W, products) {
  // 初始化动态规划表格
  let n = products.length;
  let dp = Array(W + 1).fill(0).map(() => Array(n + 1).fill(0));// 容量为w，装前i个商品时的最大价值

  // 动态规划过程
  for (let i = 1; i <= n; i++) { // 遍历商品
    for (let w = 1; w <= W; w++) { // 遍历背包

      if (products[i - 1].w > w) {// 装不下， 就不装
        dp[w][i] = dp[w][i - 1];
      } else {// 装的下
        let notChoose = dp[w][i - 1]; // 可以不装

        let left = w - products[i - 1].w;// 剩余容量
        let choose = dp[left][i - 1] + products[i - 1].v; // 也可以装
        dp[w][i] = Math.max(notChoose, choose);
      }
    }
  }

  // 最后一个元素dp[W][n]即为最大价值
  return dp[W][n];
}
