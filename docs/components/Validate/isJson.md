### json字符串校验

### 使用
```bash
this.$cUtils.validate.isJson(str)
```

### 添加版本
1.1.0

### 参数
```bash
str: json字符串
```

### 返回
```bash
true/false
```

### 例子
```bash
this.$cUtils.validate.isJson('{"a": "123"}')
// => true
this.$cUtils.validate.isJson('{a: 123}')
// => false
```
