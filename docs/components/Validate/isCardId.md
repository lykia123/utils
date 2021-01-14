### 身份证号码校验

### 使用
```bash
this.$cUtils.validate.isCardId(number)
```

### 添加版本
1.0.0

### 参数
```bash
num: 18位数字/17为数字+(X/x)
```

### 返回
```bash
true/false
```

### 例子
```bash
this.$cUtils.validate.isCardId('421122199001012222')
// => false
this.$cUtils.validate.isCardId('421127199312302866')
// => false
```
