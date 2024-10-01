BCC商霖华通
前端-笔试题
（1小时）
 1、假定有一个JS方法function task(n)，输入值n为0-N的整数，输出值为某个整数表示task(n)的执行开销。例如当N=2时，需要执行的任务有task(0)、task(1)、task(2)。随着输入值n的不同，task(n)的执行耗时具有显著不同，且具有一定IO开销。各task(n)执行互相独立，无论哪一个先执行都不会影响后执行的过程和结果。task(n)有可能执行失败，产生Error。
(1)假设执行开销与N都不大。编写JS代码，N确定时，执行所有task(n)，并打印出task(n)执行结果。如task(n)执行失败产生Error，则打印Error。
(2)假设执行开销与N都不大。编写JS代码，当task(n)存在至少一个执行成功时，停止并忽略剩余task(n)。
(3)假设执行开销与N都不大。当task(n)存在至少一个执行失败时，停止剩余task(n)，并回滚已执行的task(n)的结果。你将如何停止和回滚，写下你的若干思考点（无需编写代码）。
(4)假设执行开销与N大。task(n)执行开销与输入值n成正比，开销O= k * n， k为大于1的实数。编写JS代码，能充分调动系统资源使0-N的task(n)全部完成的总执行时间减少，并且并行执行任务不超过L，L为确定的整数。
 


const task = (n) => {
  try {
    return Math.random() * 100 // 返回 开销
  }catch {
    console.log(Error)
  }
  return 
}




const func1 = N => {
  for(let i = 0; i < N; i++) {
    console.log('task' + i + '的开销', task(i))

  }
}

const func2 = (N) => {
  for(let i = 0; i < N; i++) {
    if(task[i] !== null) {
      console.log('task' + i + '的开销', task(i))
      return
    }
  }
}
const func3 = (N) => {
  for(let i = 0; i < N; i++) {
    if(task[i] === null) {
      console.log('任务' + i + '执行失败')
      return
    }
    console.log('task' + i + '的开销', task(i))
  }
}

const func4 = N => {
  for(let i = 0; i < N; i++) {
    task(i)
  }
}











 
2、给定一个整数数组和一个整数 k ，编写JS代码，找到该数组中和为 k 的连续子数组的个数。
 
示例 1：
输入:nums = [1,1,1], k = 2
输出: 2
解释: 此题 [1,1] 与 [1,1] 为两种不同的情况
 
示例 2：
输入:nums = [1,2,3], k = 3
输出: 2
 
限制:
1 <= nums.length <= 2 * 104
-1000 <= nums[i] <= 1000
-107 <= k <= 107
 


const findArr = (nums, k) => {
  let count = 0, prefixSum = 0
  let map = new Map() 

  for(let i = 0; i< nums.length;i++) {
    prefixSum += nums[i]
    if(prefixSum === k) count++

    if(map.has(prefixSum - k))
      count += map.get(prefixSum- k)

    if(map.has(prefixSum)) {
      map.set(prefixSum, map.get(prefixSum) + 1)
    }else {
      map.set(prefixSum, 1)
    }
  }
  return count
}

const nums = [1,2,3], k = 3

console.log(findArr(nums, k))



