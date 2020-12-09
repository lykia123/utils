(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{353:function(t,a,s){"use strict";s.r(a);var e=s(40),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h1",{attrs:{id:"ccprivate-utils"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ccprivate-utils"}},[t._v("#")]),t._v(" @ccprivate/utils")]),t._v(" "),s("p",[t._v("基于javascript,用rollup进行打包成不同格式的公共方法库")]),t._v(" "),s("h2",{attrs:{id:"开发说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#开发说明"}},[t._v("#")]),t._v(" 开发说明")]),t._v(" "),s("p",[t._v("1、"),s("strong",[t._v("开发")]),t._v("：在"),s("code",[t._v("src")]),t._v("里面定义一些js方法，"),s("code",[t._v("format")]),t._v("用于加入一些格式化的方法，"),s("code",[t._v("validate")]),t._v("用于加入一些校验的方法，如果有其他的类型的js也可以重新建一个js文件夹，在"),s("code",[t._v("src/main.js")]),t._v("里面引入就可以")]),t._v(" "),s("p",[t._v("2、"),s("strong",[t._v("测试")]),t._v("：改完提交的代码之后，运行 "),s("code",[t._v("npm run test")]),t._v(" 重新进行测试，若测试不通过请修改对应的代码或测试用例，若有新增加的功能记得在"),s("code",[t._v("test")]),t._v("目录中添加对应的测试用例再运行测试, "),s("strong",[s("span",{staticStyle:{color:"red"}},[t._v("注意：测试不通过的话是无法正常提交代码的")])])]),t._v(" "),s("p",[t._v("3、"),s("strong",[t._v("提交代码")]),t._v("：测试通过后运行"),s("code",[t._v("npm run commit")]),t._v("根据提示提交代码，或者也可以手动 git commit -m 'messgae',但是'message'必须符合"),s("a",{attrs:{href:"http://wiki.skyoss.com/pages/viewpage.action?pageId=36724620",target:"_blank",rel:"noopener noreferrer"}},[t._v("commitizen规范"),s("OutboundLink")],1),t._v(",建议直接运行"),s("code",[t._v("npm run commit")]),t._v("，因为 "),s("strong",[t._v("步骤5")]),t._v(" 会根据提交的信息变更 "),s("strong",[t._v("版本号")])]),t._v(" "),s("p",[t._v("4、"),s("strong",[t._v("构建")]),t._v("："),s("code",[t._v("npm run build")])]),t._v(" "),s("p",[t._v("5、"),s("strong",[t._v("发布")]),t._v("：运行 "),s("code",[t._v("npm run release")]),t._v(", 后会自动更改 changelog 、并根据git提交信息自动变更 "),s("code",[t._v("package.json")]),t._v(" 中的 "),s("code",[t._v("version")]),t._v(" ，并根据变更后的 "),s("code",[t._v("version")]),t._v(" 生成对应的 "),s("code",[t._v("tag")]),t._v("，之后根据控制台的提示将tag推到gitlab,并发布到Verdaccio私服")]),t._v(" "),s("h2",{attrs:{id:"package-json-命令说明"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#package-json-命令说明"}},[t._v("#")]),t._v(" package.json 命令说明")]),t._v(" "),s("h3",{attrs:{id:"构建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#构建"}},[t._v("#")]),t._v(" 构建")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run build\n")])])]),s("h3",{attrs:{id:"格式化"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#格式化"}},[t._v("#")]),t._v(" 格式化")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run lint\n")])])]),s("h3",{attrs:{id:"测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#测试"}},[t._v("#")]),t._v(" 测试")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run "),s("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("test")]),t._v("\n")])])]),s("h3",{attrs:{id:"可视化测试"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#可视化测试"}},[t._v("#")]),t._v(" 可视化测试")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run test:ui\n")])])]),s("h3",{attrs:{id:"代码提交-符合-commitizen-规范"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码提交-符合-commitizen-规范"}},[t._v("#")]),t._v(" 代码提交(符合 commitizen 规范)")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run commit\n")])])]),s("h3",{attrs:{id:"发布"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#发布"}},[t._v("#")]),t._v(" 发布")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("// 注意：运行以下命令后，还需根据提示进行下一步操作:\n// 例：git push --follow-tags origin dev  "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" publish\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run release\n")])])]),s("p",[t._v("注意：若.npmrc中没有配置registry，则还发布包时需加上 --registry=http://172.20.155.102:4873\n即：git push --follow-tags origin dev  && npm publish --registry=http://172.20.155.102:4873")]),t._v(" "),s("h2",{attrs:{id:"安装"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#安装"}},[t._v("#")]),t._v(" 安装")]),t._v(" "),s("p",[t._v("私有仓库安装："),s("a",{attrs:{href:"http://wiki.skyoss.com/pages/viewpage.action?pageId=35726422",target:"_blank",rel:"noopener noreferrer"}},[t._v("前端模块私有仓库说明"),s("OutboundLink")],1)]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" @ccprivate/utils --registry"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("http://172.20.155.102:4873\n")])])]),s("h3",{attrs:{id:"文档构建"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文档构建"}},[t._v("#")]),t._v(" 文档构建")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run docs:dev\n")])])]),s("h3",{attrs:{id:"文档打包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#文档打包"}},[t._v("#")]),t._v(" 文档打包")]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[t._v("npm")]),t._v(" run docs:build\n")])])]),s("h2",{attrs:{id:"使用"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用"}},[t._v("#")]),t._v(" 使用")]),t._v(" "),s("h3",{attrs:{id:"全局注册"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#全局注册"}},[t._v("#")]),t._v(" 全局注册")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// cjs模块")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1、先通过import引入")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" cUtils "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@ccprivate/utils/dist/ccUtil.cjs'")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2、再在全局注册")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Vue")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$cUtils "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" cUtils\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3、在vue单页面使用：比如说要使用千分位用逗号分隔的格式化方法，找到format下面对应的numberSplitWithComma方法")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$cUtils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("format"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("numberSplitWithComma")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"局部注册"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#局部注册"}},[t._v("#")]),t._v(" 局部注册")]),t._v(" "),s("div",{staticClass:"language-javascript extra-class"},[s("pre",{pre:!0,attrs:{class:"language-javascript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// AMD模块使用方法")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// AMD是required.js在推广使用过程中对模块定义规范化的产物，在需要时引入required.js")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 1、先通过required引入")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 可以直接在单页面的data里面定义一个变量")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("data")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        cUtils"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("require")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@ccprivate/utils/dist/ccUtil.amd'")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 2、使用方法：直接调用该方法")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 比如说要使用校验手机号的校验方法，找到validate下面对应的isMobile方法")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("this")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("cUtils"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("validate"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("isMobile")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("number"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),s("h3",{attrs:{id:"attribute"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#attribute"}},[t._v("#")]),t._v(" Attribute")]),t._v(" "),s("p",[t._v("所有的校验方法都在validate对象里，所有的格式化方法都在format对象里，pc键盘响应和TV遥控器响应在coocaaKeyMap里面")])])}),[],!1,null,null,null);a.default=r.exports}}]);