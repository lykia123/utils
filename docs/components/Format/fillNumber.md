## 数字任意长度分割填充

### 使用
```bash
this.$cUtils.format.fillNumber(number,len,fill)
```

### 添加版本
0.0.1

### 参数
```bash
num: 整型数字(例如：1234567)
len: 整型数字,分割长度,默认为3
fill: 分割填充符，默认为","
```

### 返回
```bash
任意长度分割填充的字符串，如'1,234,567'
```

### 例子
```bash
this.$cUtils.format.fillNumber(123456789)
// => 123,456,789
this.$cUtils.format.fillNumber(123456789,4,' ')
// => 1 2345 6789
```
