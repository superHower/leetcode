let matrix = [
  [1, 3, 5, 7 ],
  [10,11,16,20],
  [23,30,34,60]
]
let target = 3
console.log(searchMatrix(matrix, target))


function searchMatrix (matrix, target) {
  const m = matrix.length, n = matrix[0].length;
  let low = 0, high = m * n - 1;
  while (low <= high) {
      const mid = Math.floor((high - low) / 2) + low
      const midVal = matrix[Math.floor(mid / n)][mid % n]

      if (midVal < target)      low = mid + 1;
      else if (midVal > target) high = mid - 1;
      else                 return true;
      
  }
  return false;
};
