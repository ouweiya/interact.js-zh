---
title: 工具和优化
---

## 功能选择

```sh
# 仅安装你需要的功能
$ npm install --save @interactjs/interact \
  @interactjs/auto-start \
  @interactjs/actions \
  @interactjs/modifiers \
  @interactjs/dev-tools
```

```js
import '@interactjs/auto-start'
import '@interactjs/actions/drag'
import '@interactjs/actions/resize'
import '@interactjs/modifiers'
import '@interactjs/dev-tools'
import interact from '@interactjs/interact'

interact('.item').draggable({
  listeners: {
    move (event) {
      console.log(event.pageX, event.pageY)
    },
  },
})
```

将未限定作用域的 `interactjs` npm 包添加到你的项目中是开始使用该库最简单的方式，因为它已经包含了所有预先打包并编译为 ES5 语法的功能。但是，这可能会导致许多未使用的功能增加你的 JS 负载大小。

为了获得更精简的构建，你可以导入每个所需功能的包。查看 [npm 精简安装文档](/docs/installation#npm-streamlined) 了解更多详情，包括可用包的列表。

## `@interactjs/dev-tools`

`@interactjs/dev-tools` 包提供了一些提示，可以帮助你在开发应用程序时避免常见问题（例如缺少事件处理程序和有用的 CSS 样式）。虽然这些提示很有帮助，但最好避免在生产部署中包含它们。以下是一些实现方法。

## 生产环境优化

### Babel 插件

```json
// babel 配置
{
  "env": {
    "production": {
      "plugins": [
        "@interactjs/dev-tools/babel-plugin-prod",
      ]
    }
  }
}
```

```js
// 源文件
import '@interactjs/actions/drag'
import interact from '@interactjs/interact'
```

```js
// 结果
import '@interactjs/actions/drag/index.prod'
import interact from '@interactjs/interact/index.prod'
```

如果你在部署工作流程中使用 babel，只需在生产环境的 babel 配置的插件部分添加 `@interactjs/dev-tools/babel-plugin-prod`，所有 `@interactjs/**` 导入都将更改为优化后的生产版本，并去除开发提示。

### 不使用构建工具

```js
import '@interactjs/actions/drag/index.prod'
import interact from '@interactjs/interact/index.prod'
```

如果你不使用 babel，那么你需要修改导入语句以包含 `.prod` 扩展名。对于目录的索引文件，你需要添加文件名（例如：`@interactjs/actions -> @interactjs/actions/index.prod`）。
