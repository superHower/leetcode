const n = 4, k = 2 // 输出：[ [ 1, 2 ], [ 1, 3 ], [ 1, 4 ], [ 2, 3 ], [ 2, 4 ], [ 3, 4 ] ]
console.log(combine(n,k))


function combine(n, k) {
  let path = [], res = []
  backtrack(1)
  return res

  function backtrack(start) {
    if(path.length == k) {
      res.push([...path])
      return 
    }

    for(let i = start; i <= n; i++ ) {
      path.push(i)
      backtrack(i+1) // backtrack(i+1)表示不包含[1, 1] ; 而backtrack(i)就会有重复的 
      path.pop()
    }

  }
}


function combine2(n, k) { // n表示在[1, n]范围的数字进行组合；k表示组合的长度
  let res = []
  let path = []
  backtrack(1) // 从 数字1 开始
  return res

  function backtrack(start) {
    if(path.length == k) {
      res.push([...path]) // 把浅拷贝副本push进去
      return 
    }

    for (let i = start; i <= n; i++) { // start 控制起点， 避免重复：如[1, 3] [2, 3]
      path.push(i);
      backtrack(i + 1); // 向下递归
      path.pop();
    }
  }
  
}

function combine1(n, k) {
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
  }
}

