### 数字以及范围校验

### 使用
```bash
this.$cUtils.validate.isNumRange(num,min,max)
```

### 添加版本
1.1.0

### 参数
```bash
num: 整型数字
min: 整型数字,数字区间最小值
max: 整型数字,数字区间最大值
```

### 返回
```bash
true/false
```

### 例子
```bash
this.$cUtils.validate.isNumRange(15,5,20)
// => true
this.$cUtils.validate.isNumRange(5,10,20)
// => false
this.$cUtils.validate.isNumRange(5,'2',20)
// => false
this.$cUtils.validate.isNumRange('2')
// => false
```
