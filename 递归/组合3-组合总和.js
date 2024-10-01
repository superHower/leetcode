const candidates = [2,3,6,7], target = 7 // 输出：[[2,2,3],[7]]
console.log(combinationSum(candidates, target))


function combinationSum(candidates, target) {
  let res = [], path = []
  candidates.sort((a, b)=> { return a-b })
  backTrack(0,0)
  return res
  
  function backTrack(start, sum) {
    if(sum === target) {
      res.push([...path])
      return 
    }
    if (sum > target) return


    for(let i = start; i< candidates.length; i++) {
      path.push(candidates[i])
      backTrack(i, sum + candidates[i])
      path.pop()
    }
  }


}

















// var combinationSum = function(candidates, target) {

//   const res = [], path = []
//   candidates.sort((a, b)=> { return a-b })
//   backtrack(0, 0)
//   return res

//   function backtrack(start, sum) {
//     if (sum === target) {  // 如果当前和等于目标值 --> 成功啦
//       res.push([...path]);
//       return;
//     }
//     if (sum > target) return; // 如果当前和已经超过目标值，停止当前递归

//     for (let i = start; i < candidates.length; i++) { // 从 start开始， 避免重复
//       path.push(candidates[i]); 
//       backtrack(i, sum + candidates[i]); // 递归调用，i 作为新的起始点，sum 更新为当前和
//       path.pop(); 
//     }
//   }
// };
// const candidates = [2,3,6,7], target = 7 // 输出：[[2,2,3],[7]]
// console.log(combinationSum(candidates, target))