utils
基于javascript,用rollup进行打包成不同格式的
## 打包流程
1、在src里面定义一些js方法，format用于加入一些格式化的方法，validate用于加入一些校验的方法，如果有其他的类型的js也可以重新建一个js文件夹，在main.js里面引入就可以
2、改完提交的代码之后，用rollup -c进行打包
3、打包成功之后，再将代码Push到远程
4、通过npm publish --registry http://172.20.155.102:4873进行发包到私服，具体请参考http://wiki.skyoss.com/pages/viewpage.action?pageId=35726422

## 安装

私有仓库安装：[前端模块私有仓库说明](http://wiki.skyoss.com/pages/viewpage.action?pageId=35726422)
```
npm install @ccprivate/utils --registry=http://172.20.155.102:4873
```

## 使用
### 全局注册
```

cjs模块
1、先通过import引入
import cUtils from '@ccprivate/utils/bundle'
2、再在全局注册
Vue.prototype.$cUtils = cUtils
3、在vue单页面使用
比如说要使用千分位用逗号分隔的格式化方法，找到format下面对应的numberSplitWithComma方法
this.$cUtils().format.numberSplitWithComma(number)
```
### 局部注册
```
AMD模块使用方法
AMD是required.js在推广使用过程中对模块定义规范化的产物，在需要时引入required.js
1、先通过required引入
可以直接在单页面的data里面定义一个变量
data () {
    return {
        cUtils:require('@ccprivate/utils/amd')
        }
    }
2、使用方法：直接调用该方法
比如说要使用校验手机号的校验方法，找到validate下面对应的isMobile方法
this.cUtils().validate.isMobile(number)
```

### Attribute
所有的校验方法都在validate对象里，所有的格式化方法都在format对象里，pc键盘响应和TV遥控器响应在coocaaKeyMap里面


