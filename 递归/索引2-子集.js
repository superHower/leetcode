const nums = [1,2,3] // [[],[1],[2],[1,2],[3],[1,3],[2,3],[1,2,3]]
console.log(subsets(nums))

function subsets(nums) {
  let res = [], path = []
  backTrack(0)
  return res

  function backTrack(index) {
    if(index == nums.length) {
      res.push([...path])
      return 
    }

    path.push(nums[index])
    backTrack(index+1)
    path.pop()
    backTrack(index+1)
  }
  
};