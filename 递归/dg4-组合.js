/*
77. 组合
给定两个整数 n 和 k，返回范围 [1, n] 中所有可能的 k 个数的组合。

你可以按 任何顺序 返回答案。
*/

var combine = function(n, k) {
  let res = []; // 存储 总结果
  let path = []; // 存储 数字

  const backtrack = (start) => {
    if (path.length === k) {
      res.push([...path]); // 使用了扩展运算符 [...path] 来复制 path 数组
      return;
    }
    for (let i = start; i <= n; i++) {
      path.push(i);
      backtrack(i + 1); // 向下递归
      path.pop();
    }
  };
  backtrack(1);
  return res;
};


const n = 4, k = 2
// 输出：[ [2,4], [3,4], [2,3], [1,2], [1,3], [1,4],]

console.log(combine(n,k))