// const grid = [
//   ["1","1","1","1","0"],
//   ["1","1","0","1","0"],
//   ["1","1","0","0","0"],
//   ["0","0","0","0","0"]
// ]
// 输出：1

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
      if(grid[i][j] == '1') {
        dfs(i, j) //能进入1 并且出来的，就是岛屿
        num++
      }


  return num

  function dfs(i,j) {
    if(i<0 || j<0 || i>rows-1 || j>cols-1 || grid[i][j] == '0') return
    

    grid[i][j] = '0'

    let dir = [[0,1],[0,-1],[1,0],[-1,0]]
    for(let k=0; k<dir.length; k++) {
      dfs(i+dir[k][0], j+dir[k][1])
    }
  }
}

function numIslands1(grid) {
  let cols = grid[0].length, rows = grid.length
  let num = 0

  for(let i = 0; i < rows; i++) 
    for(let j = 0; j < cols; j++) 
      if (grid[i][j] == 1) { // 如果是陆地
        dfs(i,j)
      }

  return num

  function dfs(i,j) {
    if (i < 0 || j < 0 || i >= rows || j >= cols || grid[i][j] === '0' ){ // 越界 || 是水
      num++ 
      return 
    } 

    grid[i][j] = '0'; //

    const dir = [[0,1],[1,0],[0,-1],[-1,0]]
    for(let k = 0; k < dir.length; k++) {
      dfs(i + dir[k][0], j + dir[k][1])
    }

  }
}