## 邮箱校验

### 使用
```bash
this.$cUtils.validate.isEmail(number)
```

### 添加版本
0.0.1

### 参数
num: 整型数字/数字字符串

### 返回
true/false

### 例子
```bash
this.$cUtils.validate.isEmail('635263@qq.com')
// => true
this.$cUtils.validate.isEmail('027-2121222')
// => true
this.$cUtils.validate.isEmail('635263@foxmail.com')
// => true
this.$cUtils.validate.isEmail('12334')
// => false
```
