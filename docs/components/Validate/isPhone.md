### 电话号码校验

### 使用
```bash
this.$cUtils.validate.isPhone(number)
```

### 添加版本
1.0.0

### 参数
```bash
num: 整型数字/数字字符串
```

### 返回
```bash
true/false
```

### 例子
```bash
this.$cUtils.validate.isPhone('0713-2121222')
// => true
this.$cUtils.validate.isPhone('027-2121222')
// => true
this.$cUtils.validate.isPhone('18888888888')
// => false
this.$cUtils.validate.isPhone('0752-88888888')
// => true
```
