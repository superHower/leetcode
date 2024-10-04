/*
200. 岛屿数量
给你一个由 '1'（陆地）和 '0'（水）组成的的二维网格，请你计算网格中岛屿的数量。

岛屿总是被水包围，并且每座岛屿只能由水平方向和/或竖直方向上相邻的陆地连接形成。

此外，你可以假设该网格的四条边均被水包围。
*/
 
var numIslands = function(grid) {
  let cols = grid[0].length;
  let rows = grid.length;
  let num = 0

  function dfs(i,j) {
    /**
     * 这里一定要先判断是否越界，再判断是否是水
     */
    if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] === '0' ) return // 如果是水，直接返回

    grid[i][j] = '0';

    const directions = [[0,1],[1,0],[0,-1],[-1,0]]
    for(let k = 0; k < directions.length; k++) {
      let newi = i + directions[k][0];
      let newj = j + directions[k][1];

      dfs(newi, newj)

    }

  }

  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
      if (grid[i][j] == 1) { // 如果是陆地
        dfs(i,j)
        num++ // 岛屿数量加1
      }
    }
  }

  return num

    
};
const grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
// 输出：1

// const grid = [
//   ["1","1","0","0","0"],
//   ["1","1","0","0","0"],
//   ["0","0","1","0","0"],
//   ["0","0","0","1","1"]
// ]
// 输出：3

console.log(numIslands(grid))
