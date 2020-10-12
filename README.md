utils
基于javascript,用rollup进行打包成不同格式的

## 安装

私有仓库安装：[前端模块私有仓库说明](http://wiki.skyoss.com/pages/viewpage.action?pageId=35726422)
```
npm install @ccprivate/utils --registry=http://172.20.155.102:4873
```

## 使用
### 全局注册
```
敬请期待。。。
```
### 局部注册
```
敬请期待。。。
```

### 示例
+ 代码[http://gitlab.skysri.com/zhaoyijing/c-block-validate/blob/master/src/App.vue](http://gitlab.skysri.com/zhaoyijing/c-block-validate/blob/master/src/App.vue)

### Attribute
| 参数 | 类型 | 说明 | 默认值 |
| ---- | ---- | ---- | ---- |
| is-show-validate | Boolean | 是否显示组件界面 | false |
| validate-style | Object | 组件的可选样式top与left | top: '0px', left: '0px' |
| canvas-width | Number | 图片宽度 | 350 |
| canvas-height | Number | 图片高度 | 150 |
| slider-length | Number | 滑块长度 | 50 |
| block-length | Number | 拼图宽高 | 50 |
| block-radius | Number | 拼图半径 | 10 |

### Methods
| 方法名 | 说明 | 参数 |
| ---- | ---- | ---- |
| validate | 验证结果，返回'succeed-validate'或'fail-validate' | ---- |
| validateRefresh | 刷新组件，返回'reload-validate' | ---- |

