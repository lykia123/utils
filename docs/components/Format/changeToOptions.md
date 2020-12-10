## 数组格式化成下拉框label/value格式

### 使用
```bash
this.$cUtils.format.changeToOptions(arr, name, id)
```

### 添加版本
0.0.1

### 参数
```bash
arr: 接口返回的原数组
name: 要转化成label的字段名，一般是名字
id: 要转化成value的字段名，一般是id
```

### 返回
```bash
格式化之后的数组[{label: '1',value: 1},{label: '2',value: 2}]
```

### 例子
```bash
this.$cUtils.format.changeToOptions(changeToOptions([{id: 1,name: '影视'},{id: 2,name: '教育'},{id: 3,name: '体育'}],'name','id')
// => [{label: '影视',value: 1},{label: '教育',value: 2},{label: '体育',value: 3}]
```
