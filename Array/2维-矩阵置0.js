const matrix = [
  [0,1,2,0],
  [3,4,5,2],
  [1,3,1,5]
]
/*输出：[
  [0,0,0,0],
  [0,4,5,0],
  [0,3,1,0]
]
*/
console.log(setZeroes(matrix))

function setZeroes(matrix) {
  let rows = matrix.length, cols = matrix[0].length
  let rowList = new Set(), colList = new Set()
  for(let i=0; i< rows; i++) {
    for(let j=0; j<cols; j++) {
      if(matrix[i][j] == 0) {
        rowList.add(i)
        colList.add(j)
      }
    }
  }

  for(let i=0; i< rows; i++) {
    for(let j=0; j<cols; j++) {
      if(rowList.has(i) || colList.has(j)) matrix[i][j] = 0

    }
  }

  return matrix    
};