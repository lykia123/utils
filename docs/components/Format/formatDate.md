## 日期格式化

### 使用
```bash
this.$cUtils.format.formatDate(time, str)
```

### 添加版本
0.0.1

### 参数
```bash
time: 时间,如2020-01-01或者new Date(),默认为new Date()
str: 格式化之后的日期格式,如yyyy/MM/dd,默认yyyy/MM/dd hh:mm:ss
```

### 返回
```bash
第二个参数传过来的参数格式，默认为'yyyy/MM/dd hh:mm:ss'
```

### 例子
```bash
this.$cUtils.format.formatDate('2020/5/30','yyyy-MM-dd')
// => '2020-05-30'
this.$cUtils.format.formatDate('2020/05/02','yyyy-MM-dd')
// => '2020-05-02'
this.$cUtils.format.formatDate(new Date(),'yyyy-MM-dd')
// => '2020-12-09'(调用该方法当天的)
```
