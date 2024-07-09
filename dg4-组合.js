/*
77. 组合
给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

你可以按 任何顺序 返回答案。
*/

var combine = function(n, k) {
  let res = []; // 存储结果的数组
  const backtrack = (start, path) => {
    if (path.length === k) {
      res.push(path.slice());// 如果路径长度等于k，将其复制到结果数组
      return;
    }
    for (let i = start; i <= n; i++) {
      path.push(i); // 将i加入路径
      backtrack(i + 1, path); // 继续添加下一个数
      path.pop(); // 回溯，移除i
    }
  };
  backtrack(1, []);
  return res;
};


const n = 4, k = 2
// 输出：[ [2,4], [3,4], [2,3], [1,2], [1,3], [1,4],]

console.log(combine(n,k))