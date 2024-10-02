/*背包问题
  有一个背包，容量为W，有n个商品，每个商品有自己的重量和价值
  现在要求用这个背包装下价值最大的商品，求最大价值
  限制条件：背包容量W为正整数，商品价值和重量均为正整数

*/
const products = [
  {id:1, v: 5, w: 1}, 
  {id:2, v: 8, w: 2}, 
  {id:3, v: 7, w: 3}
];
const w = 5;  
console.log(backpack(w, products))

/**
 * 子问题划分： 容量w的背包, 装列表前i个商品的最大价值：
 *                  背包容量不够--> 只能 不装  依赖于dp[w][i-1]：上个前列表商品的最大价值
 *                  背包容量够  --> max{不装  依赖于 dp[w][i-1]：
 *                                                 上个前列表商品的最大价值
 *                                      装 }  依赖于dp[剩余容量][i-1] + 前商品价值：
 *                                                剩余容量下上个前列表商品的最大价值 + 上个前列表商品的价值 
 *                                  
 */

function backpack(W, products) {
  // 初始化动态规划表格
  let n = products.length;
  let dp = Array(W + 1).fill(0).map(() => Array(n + 1).fill(0));// dp[w][i]表示背包容量为w，商品列表为前i个商品时的最大价值

  // 动态规划过程
  for (let i = 1; i <= n; i++) { // 遍历商品
    for (let w = 1; w <= W; w++) { // 遍历背包

      if (products[i - 1].w > w) {// 此时的容量 装不下 前一个商品的重量
        dp[w][i] = dp[w][i - 1]; // 不装
      } else {// 背包容量够
        let notChoose = dp[w][i - 1];// 不选择该商品时，装列表前i-1个商品的最大价值

        let left = w - products[i - 1].w;// 剩余容量
        let choose = dp[left][i - 1] + products[i - 1].v;// 选择该商品时，装列表前i-1个商品的最大价值 = 剩余容量的最大价值 + 该商品价值
        dp[w][i] = Math.max(notChoose, choose); // 该容量 装前i个商品的最大价值 = 装和不装 比谁大
      }
    }
  }

  // 最后一个元素dp[W][n]即为最大价值
  return dp[W][n];
}


// 测试一下
