utils
基于javascript,用rollup进行打包成不同格式的
## 打包流程
1、在src里面定义一些js方法，format用于加入一些格式化的方法，validate用于加入一些校验的方法，如果有其他的类型的js也可以重新建一个js文件夹，在src/main.js里面引入就可以

2、改完提交的代码之后，运行 `npm run build` 进行打包

3、打包成功之后，再将代码Push到远程

4、运行 `npm run release` 会自动更改changelog、并根据git提交信息自动变更`package.json`中的`version`，并根据变更后的 `version` 生成对应的 `tag`，之后根据控制台的提示将tag推到gitlab,并发布到Verdaccio私服
## package.json 命令说明
### 构建
```bash
npm run build
```
### 构建
```bash
npm run lint
```
### 测试
```bash
npm run test
```
### 可视化测试
```bash
npm run test:ui
```
### 代码提交(符合 commitizen 规范)
```bash
npm run commit
```
### 发布
```bash
// 注意：运行以下命令后，还需根据提示进行下一步操作:
// 例：git push --follow-tags origin dev  && npm publish
npm run release
```
注意：若.npmrc中没有配置registry，则还发布包时需加上 --registry=http://172.20.155.102:4873
即：git push --follow-tags origin dev  && npm publish --registry=http://172.20.155.102:4873
## 安装

私有仓库安装：[前端模块私有仓库说明](http://wiki.skyoss.com/pages/viewpage.action?pageId=35726422)
```bash
npm install @ccprivate/utils --registry=http://172.20.155.102:4873
```

## 使用
### 全局注册
```javascript
// cjs模块
// 1、先通过import引入
import cUtils from '@ccprivate/utils/bundle'
// 2、再在全局注册
Vue.prototype.$cUtils = cUtils
// 3、在vue单页面使用：比如说要使用千分位用逗号分隔的格式化方法，找到format下面对应的numberSplitWithComma方法
this.$cUtils().format.numberSplitWithComma(number)
```
### 局部注册
```javascript
// AMD模块使用方法
// AMD是required.js在推广使用过程中对模块定义规范化的产物，在需要时引入required.js
// 1、先通过required引入
// 可以直接在单页面的data里面定义一个变量
data () {
    return {
        cUtils:require('@ccprivate/utils')
        }
    }
// 2、使用方法：直接调用该方法
// 比如说要使用校验手机号的校验方法，找到validate下面对应的isMobile方法
this.cUtils.validate.isMobile(number)
```

### Attribute
所有的校验方法都在validate对象里，所有的格式化方法都在format对象里，pc键盘响应和TV遥控器响应在coocaaKeyMap里面


