function t1() {
  console.log(a) // [Function: a]
  var a = 1;
  var a = function() {
    console.log(2) 
  }
  function a() {
    console.log(3)
  }
}
// t1()

function t2() {
  var a = (function() {
    console.log(typeof arguments) // object
    return typeof arguments;
  })(); // 立即执行函数的结果Object 被a引用


  var d = function() {
    console.log(typeof arguments)
    return typeof arguments;
  } // d就是这个函数的引用， 所以这个函数不会被执行


  var x= [typeof x,typeof y][1]; // x的结果是undefined
  console.log(x,typeof x,typeof y) // typeof undefined 结果是string
  var b = typeof typeof x;         // typeof string    结果是string
  var c = (function(x) {
    console.log(x) // 1
    delete x; 
    console.log(x) // 1
    return x;
  }) (1)

  console.log(x, a, b,c, d)
}

t2()
