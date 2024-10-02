// const numbers = [2,7,11,15], target = 9 // [1,2]
// const numbers = [2,3,4], target = 6      // [1,3]
const numbers = [-1,0], target = -1       // [1,2]
console.log(twoSum(numbers, target))


function twoSum(numbers, target) {
  let left = 0, right = numbers.length-1
  while(left < right) {
    if( numbers[left] + numbers[right] === target)     return [left+1, right+1]
    else if( numbers[left] + numbers[right] < target)  left++
    else                                               right--
  }

  return []
};


