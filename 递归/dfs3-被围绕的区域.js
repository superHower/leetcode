const board = [
  ["X","X","X","X"],
  ["X","X","O","X"],
  ["X","O","X","X"],
  ["X","O","X","X"]
]
console.log(solve(board)) // 即包围着的'O' 要变成 'X'
/*  输出：[
  ["X","X","X","X"],
  ["X","X","X","X"],
  ["X","X","X","X"],
  ["X","O","X","X"]
]
*/

/**
 * 逆向思维：
 * 把所有边界的O 都标记'#'，那么不是'#'的'O', 就是被包围的区域， 
 */
function solve(board) {
  let rows = board.length, cols = board[0].length

  for(let i = 0; i < rows; i++) 
    for(let j = 0; j < cols; j++) 
      if ((i == 0 || i == rows - 1 || j == 0 || j == cols - 1) && board[i][j] == 'O') { //  边界的'O'进入
          dfs(i, j)
      }

  // 搜索结束， 处理标记
  for(let i = 0; i < rows; i++) {
    for(let j = 0; j < cols; j++) {
      if (board[i][j] == '#')     board[i][j] = 'O'  // 边界处的'O'
      else if (board[i][j] == 'O') board[i][j] = 'X' // 被包围的'O'
    }
  }
  return board


  function dfs(i,j) { // 目标： 'O' --> '#' 
    if (i < 0 || j < 0 || i>rows-1 || j>cols-1 || board[i][j] !== 'O') return

    board[i][j] = '#'

    const dir = [[0,1],[1,0],[0,-1],[-1,0]]
    for(let k = 0; k < dir.length; k++) {
      dfs(i + dir[k][0], j + dir[k][1])
    }
  }
};
