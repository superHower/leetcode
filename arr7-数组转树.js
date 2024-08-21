function arrayToTree(items) {
  let obj = {}
  let res = []
  for(let item of list){
      obj[item.id] = item
  }
  for(let item of list){
      if(obj[item.parent_id]){
          (obj[item.parent_id].children || (obj[item.parent_id].children = [])).push(item)
      }else{
          res.push(item)
      }
  }
  return res
}

// 示例数组
let list =  [
  { "id": 12, "parent_id": 1, "name": "朝阳区" },
  { "id": 241, "parent_id": 24, "name": "田林街道" },
  { "id": 31, "parent_id": 3, "name": "广州市" },
  { "id": 13, "parent_id": 1, "name": "昌平区" },
  { "id": 2421, "parent_id": 242, "name": "上海科技绿洲" },
  { "id": 21, "parent_id": 2, "name": "静安区" },
  { "id": 242, "parent_id": 24, "name": "漕河泾街道" },
  { "id": 22, "parent_id": 2, "name": "黄浦区" },
  { "id": 11, "parent_id": 1, "name": "顺义区" },
  { "id": 2, "parent_id": 0, "name": "上海市" },
  { "id": 24, "parent_id": 2, "name": "徐汇区" },
  { "id": 1, "parent_id": 0, "name": "北京市" },
  { "id": 2422, "parent_id": 242, "name": "漕河泾开发区" },
  { "id": 32, "parent_id": 3, "name": "深圳市" },
  { "id": 33, "parent_id": 3, "name": "东莞市" },
  { "id": 3, "parent_id": 0, "name": "广东省" }
]


// const tree = arrayToTree(list);
// console.log(tree);



let tree1 = [
  { "id": 2, 
    "parent_id": 0, 
    "name": "上海市", 
    "children": [
      { 
        "id": 21, 
        "parent_id": 2, 
        "name": "静安区" 
      }, 
      { "id": 22, 
        "parent_id": 2, 
        "name": "黄浦区" 
      }, 
      { 
        "id": 24, 
        "parent_id": 2, 
        "name": "徐汇区", 
        "children": [
          { 
            "id": 241, 
            "parent_id": 24, 
            "name": "田林街道" 
          }, 
          { 
            "id": 242, 
            "parent_id": 24, 
            "name": "漕河泾街道", 
            "children": [
              { 
                "id": 2421,
                 "parent_id": 242, 
                 "name": "上海科技绿洲"
              }, 
              { "id": 2422, 
                "parent_id": 242, 
                "name": "漕河泾开发区" 
              }
            ] 
          }
        ] 
      }
    ] 
  }, 
  { 
    "id": 1, 
    "parent_id": 0, 
    "name": "北京市", 
    "children": [
      { 
        "id": 12, 
        "parent_id": 1, 
        "name": "朝阳区" 
      }, 
      {
        "id": 13, 
        "parent_id": 1, 
        "name": "昌平区" 
      }, 
      { 
        "id": 11, 
        "parent_id": 1, 
        "name": "顺义区" 
      }
    ] 
  }
]

function treeToArr(list){
    let arr = []
    let a = [].concat(list)
    while(a.length>0){
        let first = a.unshift()
        if (first.children && first.children.length > 0) {
            a = a.concat(first.children)
            delete first.children
        }
        arr.push(first)
    }
    return arr
}
console.log(treeToArr(tree1))
