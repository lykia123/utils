## 身份证号码校验

### 使用
```bash
this.$cUtils.validate.isCardId(number)
```

### 添加版本
0.0.1

### 参数
num: 15位数字/18位数字/17为数字+(X/x)

### 返回
true/false

### 例子
```bash
this.$cUtils.validate.isCardId('421122199001012222')
// => true
this.$cUtils.validate.isCardId('421122199001012')
// => true
this.$cUtils.validate.isCardId('42112219900101222x')
// => true
this.$cUtils.validate.isCardId('42112219900101222')
// => false
```
