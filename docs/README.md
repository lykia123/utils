# @ccprivate/utils
基于javascript,用rollup进行打包成不同格式的公共方法库
## 开发说明
1、__开发__：在`src`里面定义一些js方法，`format`用于加入一些格式化的方法，`validate`用于加入一些校验的方法，如果有其他的类型的js也可以重新建一个js文件夹，在`src/main.js`里面引入就可以

2、__测试__：改完提交的代码之后，运行 `npm run test` 重新进行测试，若测试不通过请修改对应的代码或测试用例，若有新增加的功能记得在`test`目录中添加对应的测试用例再运行测试, __<span style="color:red">注意：测试不通过的话是无法正常提交代码的</span>__

3、__提交代码__：测试通过后运行`npm run commit`根据提示提交代码，或者也可以手动 git commit -m 'messgae',但是'message'必须符合[commitizen规范](http://wiki.skyoss.com/pages/viewpage.action?pageId=36724620),建议直接运行`npm run commit`，因为 __步骤5__ 会根据提交的信息变更 __版本号__

4、__构建__：`npm run build`

5、__发布__：运行 `npm run release`, 后会自动更改 changelog 、并根据git提交信息自动变更 `package.json` 中的 `version` ，并根据变更后的 `version` 生成对应的 `tag`，之后根据控制台的提示将tag推到gitlab,并发布到Verdaccio私服
## package.json 命令说明
### 构建
```bash
npm run build
```
### 格式化
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

### 文档构建
```bash
npm run docs:dev
```
### 文档打包
```bash
npm run docs:build
```

## 使用
### 全局注册
```javascript
// cjs模块
// 1、先通过import引入
import cUtils from '@ccprivate/utils/dist/ccUtil.cjs'
// 2、再在全局注册
Vue.prototype.$cUtils = cUtils
// 3、在vue单页面使用：比如说要使用千分位用逗号分隔的格式化方法，找到format下面对应的numberSplitWithComma方法
this.$cUtils.format.numberSplitWithComma(number)
```
### 局部注册
```javascript
// AMD模块使用方法
// AMD是required.js在推广使用过程中对模块定义规范化的产物，在需要时引入required.js
// 1、先通过required引入
// 可以直接在单页面的data里面定义一个变量
data () {
    return {
        cUtils:require('@ccprivate/utils/dist/ccUtil.amd')
        }
    }
// 2、使用方法：直接调用该方法
// 比如说要使用校验手机号的校验方法，找到validate下面对应的isMobile方法
this.cUtils.validate.isMobile(number)
```

### Attribute
所有的校验方法都在validate对象里，所有的格式化方法都在format对象里
