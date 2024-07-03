/*
202. 快乐数

编写一个算法来判断一个数 n 是不是快乐数。
「快乐数」 定义为：

对于一个正整数，每一次将该数替换为它每个位置上的数字的平方和。
然后重复这个过程直到这个数变为 1，也可能是 无限循环 但始终变不到 1。
如果这个过程 结果为 1，那么这个数就是快乐数。
如果 n 是 快乐数 就返回 true ；不是，则返回 false 。
*/

/**
 * 
 * 改用集合set来优化时间复杂度
 * 
 */
var isHappy = function(n) {
  if(n === 1) return true;

  let str = String(n);
  let set = new Set();
  set.add(n);
  while(Number(str) !== 1){
      let sum = 0;
      for(let i = 0;i < str.length;i++){
        sum += (Number(str[i]) * Number(str[i]));
      }
      if(sum === 1)  return true; // 找到了
      if(set.has(sum)) return false;// 无限循环
      set.add(sum);
      console.log(set)
      str = String(sum); // 更新str
  }
};
const n = 2
console.log(isHappy(n))
/*
输出：true
解释：
12 + 92 = 82
82 + 22 = 68
62 + 82 = 100
12 + 02 + 02 = 1
*/



/***
 * 0702-10:26 AI解答用hash表记录是否已经有过sum,有就陷入了无限循环
 *            时间复杂度太高
 */
var isHappy_2 = function(n) {
  let sum; // 声明 sum 变量
  let map = new Map(); // 创建哈希表来存储已经计算过的 sum

  while (true) { // 使用无限循环
    sum = 0; // 每次循环开始时重置 sum
    let str = n.toString();
    for (let i = 0; i < str.length; i++) {
      sum += parseInt(str[i]) * parseInt(str[i]);
    }
    if (map.has(sum)) { // 如果 sum 已经出现过，说明进入了循环，不是快乐数
      return false;
    }
    map.set(sum, true); // 将当前的 sum 存储到 map 中
    console.log(map)

    if (sum === 1) { // 如果 sum 为 1，是快乐数
      return true;
    }
    n = sum; // 将 n 更新为新的 sum 并继续循环
  }
};

/**
 * 0702-10:23 尝试用while不停的找sum===1,但是万一无限循环怎么办？
 */
var isHappy_1 = function(n) {
  let map = new Map()

  let arr = Array.from(n.toString())
  for(let i = 0; i< arr.length; i++) {
    let sum = sum + arr[i]*arr[i]
  }

  while(sum !== 1) {
    let arr = Array.from(sum.toString())
    for(let i = 0; i< arr.length; i++) {
      let sum = sum + arr[i]*arr[i]
    }
  }
  return false

};


