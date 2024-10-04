const PENDING = 'pending';
const FULLFILLED = 'fullfilled';
const REJECTED = 'rejected';

// Promise A+ 规范
class Promise {
  constructor(fn) {
    // （0）控制状态： 使用了一次之后，接下来的都不被使用
    this.status = PENDING; // 状态
    this.value = undefined; // 成功结果
    this.reason = undefined; // 失败原因

    this.fullFilledCallbacks = []; // 存储状态转变之前的注册的onFulfilled
    this.rejectedCallbacks = []; // 存储状态转变之前的注册的onRejected

    // （1） 成功回调
    let resolve = (value) => {
      if(this.status === PENDING){
        this.status = FULLFILLED;
        this.value = value;
        this.fullFilledCallbacks.forEach(callback => callback(value));
      }
    }

    // （2） 失败回调
    let reject = (reason) => {
      if(this.status === PENDING){
        this.status = REJECTED;
        this.reason = reason;
        this.rejectedCallbacks.forEach(callback => callback(reason));
      }
    }

    try{
      fn(resolve,reject) //将resolve和reject函数给使用者   
    }catch(e){
      reject(e) //如果在函数中抛出异常则将它注入reject中
    }

  }

  // （3） then 方法

  then(onFulfilled, onRejected){
    // 1. 处理 onFullfilled 和 onRejected 没有传值, 必须被忽略 
    onFufilled = typeof onFufilled === 'function' ? onFufilled:y=>y
    onRejected = typeof onRejected === 'function' ? onRejected:err=>{ throw err }

    // 2. 声明一个promise对象
    let promise2
    // A. 状态为fullfilled
    if(this.status === 'fullfilled'){
      promise2 = new Promise((resolve,reject)=>{ // 因为在.then之后又是一个promise对象，所以这里肯定要返回一个promise对象
        setTimeout(()=>{
          try{
            let x = onFufilled(this.value)
            resolvePromise(promise2,x,resolve,reject)//抽离出一个公共方法来判断他们是否为promise对象
          }catch(e){ //  因为穿透值的缘故，在默认的跑出一个error后，不能再用下一个的reject来接受，只能通过try，catch    
            reject(e)
          }
        },0)
      })
    }
    // B. 状态为reject
    if(this.status === 'reject'){
      promise2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
          try{
            let x = onRejected(this.reason)
            resolvePromise(promise2,x,resolve,reject)
          }catch(e){
            reject(e)
          }
        },0)
      })
    }
    // C. 状态为pendding
    if(this.status === 'pendding'){
      promise2 = new Promise((resolve,reject)=>{
        // 1. 成功回调数组里 存进去
        this.fullFilledCallbacks.push(()=>{
          setTimeout(()=>{
            try{
              let x = onFufilled(this.value)
              resolvePromise(promise2,x,resolve,reject)
            }catch(e){
              reject(e)
            }
          },0)
        })
        // 2. 失败回调数组里 存进去
        this.rejectedCallbacks.push(()=>{
          setTimeout(()=>{
            try{
              let x = onRejected(this.reason)
              resolvePromise(promise2,x,resolve,reject)
            }catch(e){
              reject(e)
            }
          })
        })
      })
    }
    return promise2;
  }
  // （4）resolvePromise方法
  //      因为你的then可以返回任何职，当然包括Promise对象，而如果是Promise对象，我们就需要将他拆解，直到它不是一个Promise对象，取其中的值。
  resolvePromise(promise2, x, resolve, reject){
    // 1. 判断x和promise2之间的关系
    //      因为promise2是上一个promise.then后的返回结果，所以如果相同，会导致下面的.then会是同一个promise2，一直都是，没有尽头
    if(x === promise2){//相当于promise.then之后return了自己，因为then会等待return后的promise，导致自己等待自己，一直处于等待
      return reject(new TypeError('循环引用'))
    }

    // 2. 判断 x不是null，是对象或者方法
    if(x !== null && (typeof x === 'object' || typeof x === 'function')){
      let called
      try{
        //  2.1  x.then是一个函数， 要继续拆解
        if(typeof x.then === 'function'){
          //我们就认为他是promise,call他,因为then方法中的this来自自己的promise对象
          x.then.call(x,y=>{//第一个参数是将x这个promise方法作为this指向，后两个参数分别为成功失败回调
            if(called) return;
            called = true
            resolvePromise(promise2,y,resolve,reject) // 因为可能promise中还有promise，所以需要递归
          },err=>{
            if(called) return;
            called = true
            reject(err) // 一次错误就直接返回
          })
        }

        // 2.2  x.then是一个普通对象
        else{
          resolve(x) // 直接返回resolve作为结果
        }
      }catch(e){
        if(called) return;
        called = true
        reject(e)
      }
    }else{
      resolve(x) // 其他情况， 直接resolve
    }
  }
}


// 1. catch
Promise.prototype.catch = function(onRejected){
  return this.then(undefined, onRejected);
}


// 2. resolve方法 : 直接调用class中的对象
Promise.resolve = function(val){
  return new Promise((resolve,reject)=>{
    resolve(val)
  })
}
// 3. reject方法： 直接调用class中的对象
Promise.reject = function(val){
  return new Promise((resolve,reject)=>{
    reject(val)
  })
}

// 4. all方法： 【所有的都成功，才统一解决； 一旦失败，立刻返回】
Promise.all = function(promises){
  let results = new Array(promises.length);
  let count = 0;

  return new Promise((resolve,reject)=>{
    promises.forEach((promise, idx) => {
      promise.then(
        (value) => {
          results[idx] = value; // 成功的就 放进数组，等待最后处理
          if (++count === promises.length) resolve(results); // 等所有的都执行完，才解析
        },
        (err) => {
          reject(err); // 任何失败的promise都会立即拒绝，并返回第一个失败的
        }
      );
    });
  })
}

// allSettled方法：【啥样都行，统一解决】等待所有的promise都完成（无论是成功还是失败），然后返回一个数组
Promise.allSettled = function(promises) {
  let results = new Array(promises.length);
  let count = 0;

  return new Promise((resolve, reject) => {
    promises.forEach((promise, index) => {
      promise.then(
        (value) => {
          results[index] = { status: 'fulfilled', value: value };
          if (++count === promises.length) 
            resolve(results);
        },
        (err) => {
          results[index] = { status: 'rejected', reason: err };
          if (++count === promises.length)
             resolve(results);
        }
      );
    });
  });
};

// 5. race方法： 【关注速度， 无论成功失败，都立即返回】
Promise.race = function(promises){
  return new Promise((resolve,reject)=>{
    promises.forEach((promise) => {
      promise.then(resolve, reject); // 立刻解决第一个过来的。
    });
  })
}

// 6. any方法：【关注成功，一旦碰到成功，立即返回】若全都失败，返回聚合错误
Promise.any = function(promises) {
  return new Promise((resolve, reject) => {
    let isRejected = true;
    let rejectReasons = [];

    promises.forEach((promise, index) => {
      promise.then(
        (value) => {
          if (isRejected) { // 成功了， 立刻解决， 后面的都不用考虑了
            isRejected = false;
            resolve(value);
          }
        },
        (reason) => {
          if (isRejected) { // 失败的，就放到数组里面存着
            rejectReasons[index] = reason;
          }
        }
      );
    });

    if (rejectReasons.length === promises.length) { // 全都失败， 返回聚合的错误
      reject(new AggregateError('All promises were rejected', rejectReasons));
    }
  });
};

// 语法糖 deferred
Promise.deferred = Promise.defer = function(){
  let dfd = {}
  dfd.promise = new Promise((resolve,reject)=>{
    dfd.resolve = resolve
    dfd.reject = reject
  })
  return dfd
}


