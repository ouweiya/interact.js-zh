---
title: 安装
---

interact.js 提供两种免费的包供您添加到项目中：

1.  如果想快速开始，您可以使用 npm 上名为 `interactjs` 的包。
    这个包包含了库的所有功能，以 _ES5 打包版本_ 提供。
2.  如果您想保持 JS 体积较小，可以使用 `@interactjs/` 作用域下的 npm 包，
    让您可以选择需要包含的功能。这些包以 _ES6 模块_ 的形式分发，可能需要
    为旧版浏览器进行转译。

### npm 预打包版本

```sh 
# 安装包含所有功能的预打包版本
$ npm install --save interactjs
```

```js
// es6 导入
import interact from 'interactjs'
```

```js
// 或者如果使用 commonjs 或 AMD
const interact = require('interactjs')
```

要通过 [npm](https://docs.npmjs.com/about-npm/) 使用预打包版本，
请使用 `npm install interactjs` 将包安装为依赖项，然后在 JavaScript 文件中导入或
require 该包。

### CDN 预打包版本

```html
<script src="https://cdn.jsdelivr.net/npm/interactjs/dist/interact.min.js"></script>
<!-- 或 -->
<script src="https://unpkg.com/interactjs/dist/interact.min.js"></script>
```

您也可以通过添加指向 [jsDelivr](https://www.jsdelivr.com/package/npm/interactjs)
或 [unpkg](https://unpkg.com/interactjs) CDN 服务器的 `<script>` 标签来使用。

`interact` 会根据环境支持的情况被暴露为 CommonJS 模块、AMD 模块或全局变量。

```sh
# 仅安装类型定义
$ npm install --save-dev @interactjs/types
```

如果您仅通过 CDN 使用该库并想要用于开发的 TypeScript 类型
定义，可以将 `@interactjs/types` 包安装为开发依赖。

### npm 精简版本

```sh
# 仅安装您需要的功能
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

为了获得更精简的 JS 体积，您可以为每个需要的功能安装并导入相应的包：

| 包名                                                    | 描述                                                                                                         |
| ------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------ |
| `@interactjs/interact`                                 | **(必需)** 提供 `interact()` 方法                                                                           |
| [`@interactjs/actions`](action-options)                | 拖拽、调整大小、手势等动作                                                                                  |
| [`@interactjs/auto-start`](auto-start)                 | 通过指针按下、移动序列开始动作                                                                              |
| [`@interactjs/modifiers`](modifiers)                   | 捕捉、限制等修饰符                                                                                          |
| `@interactjs/snappers`                                 | 提供 `interact.snappers.grid()` 工具                                                                         |
| [`@interactjs/inertia`](inertia)                       | 拖拽和调整大小的惯性抛掷效果                                                                                |
| [`@interactjs/reflow`](reflow)                         | `interactable.reflow(action)` 方法用于触发修饰符和事件监听器                                               |
| [`@interactjs/dev-tools`](tooling#interactjsdev-tools) | 常见错误的控制台警告（在 `NODE_ENV === 'production'` 时优化掉）和用于优化生产构建的 babel 插件            |

### CDN 精简版本

```html
<script type="module">
  import 'https://cdn.interactjs.io/v1.9.20/auto-start/index.js'
  import 'https://cdn.interactjs.io/v1.9.20/actions/drag/index.js'
  import 'https://cdn.interactjs.io/v1.9.20/actions/resize/index.js'
  import 'https://cdn.interactjs.io/v1.9.20/modifiers/index.js'
  import 'https://cdn.interactjs.io/v1.9.20/dev-tools/index.js'
  import interact from 'https://cdn.interactjs.io/v1.9.20/interactjs/index.js'

  interact('.item').draggable({
    onmove(event) {
      console.log(event.pageX, event.pageY)
    },
  })
</script>
```

上述包也可以在 `https://cdn.interactjs.io/v[VERSION]/[UNSCOPED_NAME]` 获取。
您可以在支持 ES6 `import` 的现代浏览器中导入它们。

### Ruby on Rails

[Rails 5.1+](https://rubyonrails.org/) 支持 [yarn](http://yarnpkg.com/)
包管理器，所以您可以通过运行 `yarn add interactjs` 将 interact.js 添加到您的应用中。然后使用以下方式引入库：

```rb
//= require interactjs/interact
```
