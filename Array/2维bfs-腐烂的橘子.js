const grid = [
  [2, 1, 1],
  [1, 1, 0],
  [0, 1, 1]
]
console.log(orangesRotting(grid)) // 4

/**
 * fresh统计鲜橘子(1)个数, queue表示某分钟有多少新腐烂的橘子
 * 
 * while(fresh && queue) { // 某分钟
 *   记录上分钟的烂橘子
 *   清空queue
 *   
 *   遍历烂橘子{
 *     遍历四个方向： 鲜橘-->烂橘；鲜橘-- ； queue放新的烂橘 
 *   }
 * }
 */
function orangesRotting(grid) {
  const rows = grid.length, cols = grid[0].length;
  
  let fresh = 0;
  let queue = [];
  
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      if (grid[i][j] === 1)      fresh++;            // 统计新鲜橘子个数
      else if (grid[i][j] === 2) queue.push([i, j]); // queue放入开始就腐烂的橘子
    }
  }

  let ans = 0;
  while (fresh && queue) { // 循环一次，就代表经过了一分钟后，橘子状态
    ans++; // 经过一分钟
    const record = queue;
    queue = [];
    for (const [x, y] of record) { // 已经腐烂的橘子
      for (const [i, j] of [[x - 1, y], [x + 1, y], [x, y - 1], [x, y + 1]]) { // 四方向
        if (0 <= i && i < rows && 0 <= j && j < cols && grid[i][j] === 1) { // 新鲜橘子
          
          grid[i][j] = 2; // 变成腐烂橘子
          fresh--;
          queue.push([i, j]);
        }
      }
    }
  }

  return fresh ? -1 : ans;
};


