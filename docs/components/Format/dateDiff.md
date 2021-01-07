### 时间差显示

### 使用
```bash
this.$cUtils.format.dateDiff(hisTime)
```

### 添加版本
1.1.0

### 参数
```bash
hisTime: 时间,只支持 yyyy-MM-dd hh:mm:ss
```

### 返回
```bash
几年前/几个月前/几周前/几小时前/几分钟前/刚刚
```

### 例子
```bash
this.$cUtils.format.dateDiff('2016-07-18')
// => '4年前'
this.$cUtils.format.dateDiff('2020-12-22')
// => '2周前'
this.$cUtils.format.dateDiff('2021-01-02')
// => '5天前'
this.$cUtils.format.dateDiff('2021-01-07 14:00:00')
// => '1小时前'(调用该方法当天的)
```
