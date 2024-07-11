/*
130. 被围绕的区域

给你一个 m x n 的矩阵 board ，由若干字符 'X' 和 'O' 组成，捕获 所有 被围绕的区域：

连接：一个单元格与水平或垂直方向上相邻的单元格连接。
区域：连接所有 'O' 的单元格来形成一个区域。
围绕：如果您可以用 'X' 单元格 连接这个区域，并且区域中没有任何单元格位于 board 边缘，则该区域被 'X' 单元格围绕。
通过将输入矩阵 board 中的所有 'O' 替换为 'X' 来 捕获被围绕的区域。
*/


/**
 * 这题的思路是，从边界的O开始DFS，将所有与边界O相连的O标记为NO，
 * 然后再遍历一遍，将所有O变为X，将NO变为O
 * 
 * 十分重要的一点是， 在 'O' 的情况下才进行dfs 
 */
const board = [["X","X","X","X"],["X","O","O","X"],["X","X","O","X"],["X","O","X","X"]]
var solve = function(board) {
  let cols = board[0].length;
  let rows = board.length;
  if (rows == 0) return;   


  function dfs(i,j) {

    if (i < 0 || j < 0 || i == rows || j == cols ) return // 越界

    if (board[i][j] == 'O') { // 在 'O' 的情况下才进行dfs   
      board[i][j] = 'NO';     

      const directions = [[0,1],[1,0],[0,-1],[-1,0]]
      for(let k = 0; k < directions.length; k++) {
        dfs(i + directions[k][0], j + directions[k][1])
      }
    }
  }

  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
      if (i == 0 || i == rows - 1 || j == 0 || j == cols - 1) {
        if (board[i][j] == 'O') dfs(i, j); // 只有最外层边界处的O，才会开始DFS
      }
    }
  }
  console.log('此时')
  console.log('与边界O相连的O已经标记为NO')

  console.log(board)

  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
      if (board[i][j] == 'NO') 
        board[i][j] = 'O'
      else if (board[i][j] == 'O') 
        board[i][j] = 'X'
    }
  }
  return board

    
};
// 输出：[["X","X","X","X"],["X","X","X","X"],["X","X","X","X"],["X","O","X","X"]]

console.log(solve(board))