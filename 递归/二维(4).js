/**
 * 1. 单词搜索
 * 2. 岛屿数量
 * 3. 被围绕的区域
 * 4. N皇后
 * 
 */



// 【单词搜索】
const board1 = [
  ["A","B","C","E"],
  ["S","F","C","S"],
  ["A","D","E","E"]
]
const word = "ABCCED"
console.log(exist(board1, word)) // 输出：true

function exist(board, word) {
  let rows = board.length, cols = board[0].length
  for(let i=0; i<rows; i++){
    for(let j=0; j<cols; j++) {
      if(dfs(i,j,0)) return true
    }
  }

  return false

  function dfs(i, j , index) { // 能否找到 word[index]
    if(index == word.length) return true
    if(i<0 || j>cols-1 || i>rows-1 || j<0 || word[index] !== board[i][j]) return false

    let dir = [[0,1], [0,-1], [1,0], [-1,0]]
    let record = board[i][j]
    board[i][j] = '#'

    for(let k=0; k<dir.length; k++){
        if(dfs(i+dir[k][0], j+ dir[k][1], index+1)) return true
    }

    board[i][j] = record
    return false
  }
}


const grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
// 输出：3
console.log(numIslands(grid)) // 被0包围的1是岛屿


/*
  这个就像是在1里面：把1变0， 一直dfs, 最后没有1了，就说明这个岛屿 找到了
*/

function numIslands(grid) {
  let rows = grid.length, cols = grid[0].length
  let num = 0

  for(let i = 0; i < rows; i++) 
    for(let j = 0; j < cols; j++) 
      if(grid[i][j] == '1') { // 只要进入岛屿（1）
        dfs(i, j)
        num++ // 岛屿数+1
      }
  return num

  function dfs(i,j) { // 岛屿（1） --->  海洋（0）
    if(i<0 || j<0 || i>rows-1 || j>cols-1 || grid[i][j] == '0') return
    

    grid[i][j] = '0'

    let dir = [[0,1],[0,-1],[1,0],[-1,0]]
    for(let k=0; k<dir.length; k++) {
      dfs(i+dir[k][0], j+dir[k][1])
    }
  }
}

// 【被围绕的区域】
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


// 【N皇后】
const n = 4
console.log(totalNQueens(n))// 输出：2


/**
 *  某行哪个位置能否放置皇后？ { 列、左上、右上 }都没有 Q ，就可以放
 *  逐行: 验证每个位置是否有效？放置 Q
 */

function totalNQueens3(n) {
  const board = new Array(n).fill('.').map(() => new Array(n).fill('.'))

  let res = 0, rows = board.length, cols = board[0].length
  dfs(board, 0)
  return res


  function dfs(board, row) { // 目标： 验证每个位置是否有效？放置 Q
    if (row === board.length) {
      res++
      return
    }

    for (let col = 0; col < board[row].length; col++) {
      if (!isValid(board, row, col)) continue
      board[row][col] = 'Q'
      dfs(board, row + 1)
      board[row][col] = '.'
    }

  }

  function isValid(board, row, col) {
    // 遍历行， 以检查列
    for (let i = 0; i < rows; i++) {
      if (board[i][col] == 'Q') return false
    }
    // 检查右上方
    for (let i = row - 1, j = col + 1; i >= 0 && j < cols; i--, j++) {
      if (board[i][j] == 'Q') return false
    }
    // 检查左上方
    for (let i = row - 1, j = col - 1; i >= 0 && j >= 0; i--, j--) {
      if (board[i][j] == 'Q') return false
    }
    return true
  }

}
