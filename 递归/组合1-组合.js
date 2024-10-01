const n = 4, k = 3 // 输出：[ [2,4], [3,4], [2,3], [1,2], [1,3], [1,4]]
console.log(combine(n,k))

function combine(n, k) {
  let res = [],  path = []; // 存储 数字
  backtrack(1);
  return res;

  function backtrack (start) {
    if (path.length === k) {
      res.push([...path])
      return;
    }
    for (let i = start; i <= n; i++) { // start 控制起点， 避免重复：如[1, 3] [2, 3]
      path.push(i);
      backtrack(i + 1); // 向下递归
      path.pop();
    }
  };

};


