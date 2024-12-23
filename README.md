<a href="http://interactjs.io"><img alt="interact.js" src="https://c4d6f7d727e094887e93-4ea74b676357550bd514a6a5b344c625.ssl.cf2.rackcdn.com/ijs-solid.svg" height="70px" width="100%"></a>

<h2>
  适用于现代浏览器（以及IE9+）的JavaScript拖放、调整大小和多点触控手势库，支持惯性和对齐功能。
</h2>

<div align="center">
<a href="https://gitter.im/taye/interact.js"><img src="https://badges.gitter.im/taye/interact.js.svg" alt="Gitter"></a>
<a href="https://www.jsdelivr.com/package/npm/interactjs"><img src="https://data.jsdelivr.com/v1/package/npm/interactjs/badge" alt="jsDelivr"></a>
<a href="https://github.com/taye/interact.js/actions/workflows/workflow.yml"><img src="https://github.com/taye/interact.js/actions/workflows/workflow.yml/badge.svg" alt="Build Status"></a>
<a href="https://codeclimate.com/github/taye/interact.js/test_coverage"><img src="https://api.codeclimate.com/v1/badges/0168aeaeed781a949088/test_coverage"/></a>
</div>
<br>

主要特性：

- **惯性**和**对齐**功能
- **多点触控**，支持同时交互
- 跨浏览器和设备支持，兼容Chrome、Firefox和Opera的**桌面端和移动端**版本以及**IE9+**
- 支持[**SVG**](http://interactjs.io/#use_in_svg_files)元素交互
- **独立且可定制**
- 除了改变光标外**不会修改DOM**（且光标修改可禁用）

## 安装

- [npm](https://www.npmjs.org/): `npm install interactjs`
- [jsDelivr CDN](https://cdn.jsdelivr.net/npm/interactjs/): `<script src="https://cdn.jsdelivr.net/npm/interactjs/dist/interact.min.js"></script>`
- [unpkg CDN](https://unpkg.com/interactjs/): `<script src="https://unpkg.com/interactjs/dist/interact.min.js"></script>`
- [Rails 5.1+](https://rubyonrails.org/):
  1. `yarn add interactjs`
  2. `//= require interactjs/interact`
- [Webjars SBT/Play 2](https://www.webjars.org/): `libraryDependencies ++= Seq("org.webjars.npm" % "interactjs" % version)`

### TypeScript类型定义

该项目使用TypeScript编写，npm包中包含类型定义，但如果你只需要类型定义，可以通过以下命令安装：

```
npm install --save-dev @interactjs/types
```

## 文档

http://interactjs.io/docs

## 示例

```javascript
var pixelSize = 16;

interact('.rainbow-pixel-canvas')
  .origin('self')
  .draggable({
    modifiers: [
      interact.modifiers.snap({
        // snap to the corners of a grid
        targets: [
          interact.snappers.grid({ x: pixelSize, y: pixelSize }),
        ],
      })
    ],
    listeners: {
      // draw colored squares on move
      move: function (event) {
        var context = event.target.getContext('2d'),
            // calculate the angle of the drag direction
            dragAngle = 180 * Math.atan2(event.dx, event.dy) / Math.PI;

        // set color based on drag angle and speed
        context.fillStyle = 'hsl(' + dragAngle + ', 86%, '
                            + (30 + Math.min(event.speed / 1000, 1) * 50) + '%)';

        // draw squares
        context.fillRect(event.pageX - pixelSize / 2, event.pageY - pixelSize / 2,
                         pixelSize, pixelSize);
      }
    }
  })
  // clear the canvas on doubletap
  .on('doubletap', function (event) {
    var context = event.target.getContext('2d');

    context.clearRect(0, 0, context.canvas.width, context.canvas.height);
  });

  function resizeCanvases () {
    [].forEach.call(document.querySelectorAll('.rainbow-pixel-canvas'), function (canvas) {
      canvas.width = document.body.clientWidth;
      canvas.height = window.innerHeight * 0.7;
    });
  }

  // interact.js can also add DOM event listeners
  interact(document).on('DOMContentLoaded', resizeCanvases);
  interact(window).on('resize', resizeCanvases);
```

在 https://codepen.io/taye/pen/tCKAm 查看上述代码的实际效果

## 许可证

interact.js 基于 [MIT许可证](http://taye.mit-license.org) 发布。

[ijs-twitter]: https://twitter.com/interactjs
[upcoming-changes]: https://github.com/taye/interact.js/blob/main/CHANGELOG.md#upcoming-changes
