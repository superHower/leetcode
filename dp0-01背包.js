/*背包问题是一个经典的动态规划问题
  有一个背包，容量为W，有n个商品，每个商品有自己的重量和价值
  现在要求用这个背包装下价值最大的商品，求最大价值
  限制条件：背包容量W为正整数，商品价值和重量均为正整数

*/

function backpack(W, products) {
  // 初始化动态规划表格
  let n = products.length;
  let dp = Array(W + 1).fill(0).map(() => Array(n + 1).fill(0));// dp[w][i]表示背包容量为w，商品列表为前i个商品时的最大价值

  // 动态规划过程
  for (let i = 1; i <= n; i++) {
    for (let w = 1; w <= W; w++) {
      if (products[i - 1].w > w) {// 背包容量容量不够
        dp[w][i] = dp[w][i - 1]; // 不选择该商品
      } else {// 背包容量够
        let notChoose = dp[w][i - 1];// 不选择该商品

        let left = w - products[i - 1].w;// 剩余容量
        let choose = dp[left][i - 1] + products[i - 1].v;// 选择该商品 = 剩余容量的最大价值 + 该商品价值
        dp[w][i] = Math.max(notChoose, choose);
      }
    }
  }

  // 最后一个元素dp[W][n]即为最大价值
  return dp[W][n];
}


// 测试一下
const products = [
  {id:1, v: 5, w: 1}, 
  {id:2, v: 8, w: 2}, 
  {id:3, v: 7, w: 3}
];    // 新建一个数组表示商品列表，每个商品加个id用于标识
const w = 5;  // 背包容量
const result = backpack(w, products);
console.log(result);