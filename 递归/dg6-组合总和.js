/*
39. 组合总和
给你一个 无重复元素 的整数数组 candidates 和一个目标整数 target ，找出 candidates 中可以使数字和为目标数 target 的 所有 不同组合 ，并以列表形式返回。你可以按 任意顺序 返回这些组合。

candidates 中的 同一个 数字可以 无限制重复被选取 。如果至少一个数字的被选数量不同，则两种组合是不同的。 

对于给定的输入，保证和为 target 的不同组合数少于 150 个。
*/

var combinationSum = function(candidates, target) {

  const res = [], path = [], len = candidates.length
  candidates.sort((a, b)=> { return a-b })
  backtrack(0, 0)
  return res

  function backtrack(start, sum) {
    if (sum === target) {  // 如果当前和等于目标值 --> 成功啦
      res.push([...path]);
      return;
    }
    if (sum > target) return; // 如果当前和已经超过目标值，停止当前递归

    for (let i = start; i < candidates.length; i++) { // 从 start开始， 避免重复
      path.push(candidates[i]); 
      backtrack(i, sum + candidates[i]); // 递归调用，i 作为新的起始点，sum 更新为当前和
      path.pop(); 
    }
  }
};

const candidates = [2,3,6,7], target = 7
// 输出：[[2,2,3],[7]]
// 解释：
// 2 和 3 可以形成一组候选，2 + 2 + 3 = 7 。注意 2 可以使用多次。
// 7 也是一个候选， 7 = 7 。
// 仅有这两种组合。

console.log(combinationSum(candidates, target))