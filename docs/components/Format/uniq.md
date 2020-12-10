### 数组去重

### 使用
```bash
this.$cUtils.format.uniq(arr, filed)
```

### 添加版本
0.0.1

### 参数
```bash
arr: 需要去重的数组
filed: 如果数组里面有很多对象，要根据某一唯一字段(如id)去重数组数据
```

### 返回
```bash
去重之后的数组
```

### 例子
```bash
this.$cUtils.format.uniq([1,2,2,3,4,5])
// => [1,2,3,4,5]
this.$cUtils.format.uniq([{id: 1,name: '1'},{id: 1,name: '1'},{id: 2,name: '2'},{id: 2,name: '2'}],'id')
// => [{id: 1,name: '1'},{id: 2,name: '2'}]
```
