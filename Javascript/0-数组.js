
// 数组过滤
function t2() {
  var ary = [0, 1,2]
  ary[10] = 10
  let res = ary.filter(function(x) {return x === undefined})
  
  console.log(ary) // [ 0, 1, 2, <7 empty items>, 10 ]
  console.log(res) // []
}
// t2()




//实现一个自定义数组方法，扩大二倍
function t4() {
  Array.prototype.myMap = function(callback) {
    const result = [];
    for (let i = 0; i < this.length; i++) {
      result.push(callback(this[i]));// 执行回调函数，并将结果添加到新数组中
    }
    return result;
  };

  const nums = [1, 2,3]
  const doubled = nums.myMap((i) => i*2)
  console.log(doubled) // [2, 4, 6]
}
t4()

// 实现自定义 reduce 累加器
function t5() { 
  Array.prototype.myReduce = function(callback, initialValue) {
    let acc = initialValue !== undefined ? initialValue : this[0]
    let index = initialValue !== undefined ? 0 : 1

    for(; index < this.length; index++) {
      acc = callback(acc, this[index]);
    }
    return acc;
  }
  
  const arr = [1,2,3,4,5]
  const initialValue = 0;
  const sum = arr.reduce((acc, curValue) => acc + curValue)
  
  console.log(sum)
}
t5()