function t3() {
  var a = {}, b = Object.prototype;

 
  console.log([a.prototype === b, Object.getPrototypeOf(a) === b]) // [ false, true ]

  console.log('空对象的原型：', {}.prototype)
  console.log('{apple: 123}对象的原型：', {apple: 123}.prototype)
  // 说明，孤零零的对象 的原型是 null

  console.log('{} 的构造函数的原型：', Object.getPrototypeOf({})) // 返回这个对象的构造函数的原型
  // {} 的构造函数的原型 是 Object.prototype

  console.log('Object的原型的原型：', Object.prototype.prototype)

}
t3()


