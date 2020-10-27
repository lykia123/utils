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

cjs模块
1、先通过import引入
import ccPrivateUtils from '@ccprivate/utils/bundle'
2、再在全局注册
Vue.prototype.$ccPrivateUtils = ccPrivateUtils
3、在vue单页面使用
比如说要使用千分位用逗号分隔的格式化方法，找到format下面对应的numberSplitWithComma方法
this.$ccPrivateUtils().format.numberSplitWithComma(number)
```
### 局部注册
```
AMD模块使用方法
AMD是required.js在推广使用过程中对模块定义规范化的产物，在需要时引入required.js
1、先通过required引入
可以直接在单页面的data里面定义一个变量
data () {
    return {
        ccPrivateUtils:require('@ccprivate/utils/amd')
        }
    }
2、使用方法：直接调用该方法
比如说要使用校验手机号的校验方法，找到validate下面对应的isMobile方法
this.ccPrivateUtils().validate.isMobile(number)
```

### Attribute
所有的校验方法都在validate对象里，所有的格式化方法都在format对象里


