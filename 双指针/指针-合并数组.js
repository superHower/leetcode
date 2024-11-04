


// 示例
const arr1 = [1, 3, 5], arr2 = [2, 4, 6];
console.log(mergeSortedArraysUsingMergeSort(arr1, arr2));//[ 1, 2, 3, 4, 5, 6 ]


function mergeSortedArraysUsingMergeSort(arr1, arr2) {
  let result = [], p1 = 0, p2 = 0;
  
  while (p1 < arr1.length && p2 < arr2.length) {
      if (arr1[p1] < arr2[p2]) { result.push(arr1[p1]); p1++; } 
      else                     { result.push(arr2[p2]); p2++; }
  }
  // 可能左或者右， 没有指完，继续接着指
  while (p1 < arr1.length) { result.push(arr1[p1]); p1++; }
  while (p2 < arr2.length) { result.push(arr2[p2]); p2++; }
  
  return result;
}

