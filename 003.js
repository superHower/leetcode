setTimeout(()=>{ 
  new Promise(resolve =>{
    resolve();
  }).then(()=>{
    console.log('test'); // 宏 微7
  });

  console.log(4); // 宏6
});

new Promise(resolve => {
  resolve();
  console.log(1) // 同1
}).then( () => {
  console.log(3); // 微3
  Promise.resolve().then(() => {
    console.log('before timeout'); // 微 微4
  }).then(() => {
    Promise.resolve().then(() => {
      console.log('also before timeout') // 微 微 微5
    })
  })
})
console.log(2); // 同2
//输出：1 2 3 before timeout also before timeout 4 test




setTimeout(() => { 
  console.log("4");// 宏4
  setTimeout(() => {
    console.log("8");// 宏 宏8
  }, 0);
  new Promise((r) => {
    console.log("5");// 宏5
    r();
  }).then(() => {
    console.log("7");// 宏 微7
  });
  console.log("6"); // 宏6
}, 0);

new Promise((r) => {
  console.log("1");//同1
  r();
}).then(() => {
  console.log("3");//微3
});
console.log("2");// 同2
//输出顺序：1 2 3 4 5 6 7 8 

// 同 同步代码1， async1 start， async2，同步代码2, Promise 2, 同步代码3
// 微 async1 end,  promise.then2, Promise 3, promise.then3
// 宏 setTimeout1 , Promise 1， （promise.then1）， setTimeout2, setTimeout3 

console.log('同步代码1'); //  同1
async function async1 () {
   console.log('async1 start') // 立刻微2
   await async2()
   console.log('async1 end') // 微6
}
async function async2 () {
   console.log('async2') // 立刻微3
}
async1()
    
setTimeout(() => {
    console.log('setTimeout1') // 宏11
    new Promise((resolve) => {
        console.log('Promise 1') // 宏12
        resolve()
    }).then(() => {
        console.log('promise.then1') // 宏 微13
    })
}, 10)

new Promise((resolve) => {
    console.log('同步代码2, Promise 2') // 同4
    setTimeout(() => {
        console.log('setTimeout2') // 宏14
    }, 10)
    resolve()
}).then(() => {
    console.log('promise.then2');//微7
    setTimeout(() => {
        console.log('setTimeout3')//宏15
    }, 10);
    new Promise((resolve) => {
        console.log('Promise 3') // 微8
        resolve()
    }).then(() => {
        console.log('promise.then3')// 微9
    });
})

console.log('同步代码3');// 同5

/* 宏任务队列中第1个宏任务script的打印：*/
// 同步代码1
// async1 start
// async2
// 同步代码2, Promise 2
// 同步代码3
// async1 end
// promise.then2
// Promise 3
// promise.then3

/* 宏任务队列中第2个宏任务setTimeout1的打印：*/
// setTimeout1
// Promise 1
// promise.then1

/* 宏任务队列中第3个宏任务setTimeout2的打印：*/
// setTimeout2

/* 宏任务队列中第3个宏任务setTimeout3的打印：*/
// setTimeout3



  console.log(4)   // 同1
      
  // h1   
  setTimeout(() => {      
  	// h3     
    setTimeout(()=>{console.log(6)},0)// 宏 宏 9    
    console.log(1) // 宏5
    var p2 = new Promise((n1, n2) => {
      n1(1000)
    })
    p2.then(()=>{console.log(7)}) // 宏 微6
  }, 0)
  
  // h2
  setTimeout(() => {
  	// h4
    setTimeout(() => {console.log(2)}, 200) // 宏宏  10
    var p3 = new Promise((n1, n2) => {
      n1(1000)
    })
    p3.then(()=>{console.log(8)})// 宏 微8
    console.log(2)// 宏7
  }, 0)

  var p1 = new Promise((n1, n2) => {
    n1(1000)
  })

  p1.then(() => {console.log(3)})// 微3

  console.log(5)//2
  // 输出：4  5  3 ( 1  7)  (2  8  6  2 )
同 1 7 |
微 4 |
宏 0 3 |

  setTimeout(() => {   
		console.log(0); 宏
	});
	new Promise(resolve => {
		console.log(1); 同
		setTimeout(() => { 
			resolve(); //这里！！！！！！！
			var p1=new Promise((n1,n2)=>{n1(20)})
			p1.then(() => console.log(2)); 宏 微
			console.log(3); 宏
			setTimeout(()=>{console.log(9)},0)   宏 宏
		});
		new Promise((n1,n2)=>{n1(20)}).then(() => console.log(4)); 微
	}).then(() => { //这里的then函数要等resolve()执行后才能执行  一点注意！！！
		console.log(5); 回
		var p2=new Promise((n1,n2)=>{n1(20)})
		p2.then(() => console.log(8)); 回 微
		setTimeout(() => console.log(6));   回 宏
	});
	console.log(7); 同
	// 输出： 1  7  4  0  3  5  2  8  9  6



  function test() {
    console.log("start");
  
  setTimeout(() => {
      console.log("children2");
  Promise.resolve().then(() => {
        console.log("children2-1");
      });
    }, 0);
  
  setTimeout(() => {
      console.log("children3");
  Promise.resolve().then(() => {
        console.log("children3-1");
      });
    }, 0);
  
  Promise.resolve().then(() => {
      console.log("children1");
    });
  
    console.log("end");
  }
  // 结果 start end children1 children2 children2-1 children3 children3-1
  