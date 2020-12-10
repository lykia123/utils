### 手机号码校验

### 使用
```bash
this.$cUtils.validate.isMobile(number)
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
this.$cUtils.validate.isMobile(18888888888)
// => true
this.$cUtils.validate.isMobile('18888888888')
// => true
this.$cUtils.validate.sMobile(11111)
// => false
this.$cUtils.validate.sMobile('0752-8888888')
// => false
```
