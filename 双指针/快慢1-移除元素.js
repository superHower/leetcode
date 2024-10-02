// const nums = [3,2,2,3], val = 3 // 输出：2, nums = [2,2]
const nums = [1,2,2,3,4,2], val = 2 // 输出：5, nums = [0,1,3,0,4]
console.log(removeElement(nums, val))

function removeElement1(nums, val) {
  let arr = []
  // nums.map(item => { if(item !== val) arr.push(item) }) 
  // nums.filter((item, index, self) => {  if(self.indexOf(item) !== val) arr.push(item) })
  arr = nums.reduce((acc, cur)=> { if(cur !== val) acc.push(cur); return acc }, [])
  return arr
};

function removeElement(nums, val) {
  let slow = 0;
  for (let fast = 0; fast < nums.length; fast++) { // 快指针不停移动
    if (nums[fast] !== val) { // 快指针 没找到val, 慢指针就跟着移动
        nums[slow++] = nums[fast]; // 慢位置，被快位置覆盖掉 ==》 就实现删除元素
    }
  }
  return slow;
};