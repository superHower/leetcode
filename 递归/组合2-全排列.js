const nums = [1,2,3] // 输出：[[1,2,3],[1,3,2],[2,1,3],[2,3,1],[3,1,2],[3,2,1]]
console.log(permute(nums))

var permute = function(nums) {
  const res = [], path = [], len = nums.length;
  backtracking([]); // 一开始 就是全都没有用过
  return res;
  
  function backtracking(used) { // used表示每个位置是否用过
      if(path.length === len) {
        res.push([...path]);
        return;
      }
      
      for (const num of nums) { // 遍历nums
        if (used[num]) continue; // 判断这个数字有没有用过

        path.push(num); // 放入数字
        used[num] = true; // 这个数字用过了

        backtracking( used.slice()); // 向下递归，并复制used数组

        // 回溯结束
        path.pop();
        used[num] = false; // 重置used数组中当前数字的状态
    }
  }
};


