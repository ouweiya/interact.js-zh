---
title: 常见问题
---

本页包含了在 [Gitter 聊天室][gitter] 和 [Github issues][gh-issues] 中经常提出的问题。

## 延迟开始拖动

使用 `hold` 选项来设置指针必须按住多少毫秒才能开始拖动。

```javascript
interact(target)
  .draggable({
    // 按住1秒后开始拖动
    hold: 1000
  })
```

如果你遇到浏览器默认行为(如滚动、上下文菜单等)的问题,可以查看 [`Interactable#preventDefault`][prevent-default] 方法和这个 [Github 上的讨论](https://github.com/taye/interact.js/issues/138)。

## 克隆目标元素进行拖动

```html
<div class="item"></div>
```

```javascript
interact('.item')
  .draggable({ manualStart: true })
  .on('move', function (event) {
    var interaction = event.interaction

    // 如果指针在按下时移动
    // 并且交互还没有开始
    if (interaction.pointerIsDown && !interaction.interacting()) {
      var original = event.currentTarget,
        // 创建当前目标元素的克隆
        clone = event.currentTarget.cloneNode(true)

      // 将克隆元素插入页面
      // TODO: 适当定位克隆元素
      document.body.appendChild(clone)

      // 开始一个以克隆元素为目标的拖动交互
      interaction.start({ name: 'drag' }, event.interactable, clone)
    }
  })
```

没有直接的API来拖动目标元素的克隆。不过,你可以使用 [`Interaction#start`][interaction-start] 来将交互的目标更改为你创建的任何元素。

## 移除/销毁/释放

```javascript
interact(target).draggable(true).resizable(true)

interact.isSet(target) // true

interact(target).unset()

interact.isSet(target) // false
interact(target).draggable() // false
interact(target).resizable() // false
```

要移除一个 Interactable,使用 `interact(target).unset()`。这会移除所有事件监听器并使 interact.js 完全忘记该目标。

## 拖动时改变放置区域

```javascript
interact.dynamicDrop(true)
```

如果你在拖动过程中添加或删除放置区域元素或改变它们的尺寸,你可能需要将 [`dynamicDrop`][dynamic-drop] 设置为 true,这样每次 `dragmove` 后都会重新计算放置区域的矩形。

## 拖动手柄

```html
<div class="item">
  一个可拖动项
  <div class="handle">手柄</div>
</div>
```

```javascript
interact('.item').draggable({
  allowFrom: '.handle',
})
```

要将一个元素设置为父级可拖动元素的手柄,使用 allowFrom 选项来只允许在匹配特定 CSS 选择器或特定元素的情况下才开始操作。

## 阻止子元素上的操作

```html
<div class="resizable">
  一个可调整大小的项
  <textarea></textarea>
</div>
```

```javascript
interact('.item')
  .draggable({
    // 不从 textarea 元素开始拖动
    ignoreFrom: 'textarea',
  });
```

使用 `ignoreFrom` 选项可以在指针按下时,如果目标元素匹配给定的选择器或 HTMLElement,则阻止操作开始。

## 恢复/回退/撤销拖动位置

没有直接的API可以将拖动的元素恢复到拖动前的位置。要实现这个功能,你必须在 `dragstart` 时存储位置,并在 `dragend` 时更改元素样式使其返回起始位置。你可以使用 CSS 过渡来让位置变化产生动画效果。

## 拖动变成了滚动

```css
.draggable, .resizable, .gesturable {
  -ms-touch-action: none;
  touch-action: none;
  user-select: none;
}
```

要允许触摸交互而不引起滚动或缩放,使用 [`touch-action` CSS 属性][touch-action]。

## 在 iFrame 之间拖动

interact.js 对跨 iFrame 使用提供[有限支持][iframe-pr]。目前存在浏览器兼容性问题和其他尚未解决的问题。

[gitter]: https://gitter.im/taye/interact.js
[gh-issues]: https://github.com/taye/interact.js/issues
[manual-start]: /docs#manualstart
[interaction-start]: /api/Interaction.html#start
[prevent-default]: /api/Interactable.html#preventDefault
[dynamic-drop]: /api/module-interact.html#.dynamicDrop
[touch-action]: https://developer.mozilla.org/en-US/docs/Web/CSS/touch-action
[iframe-pr]: https://github.com/taye/interact.js/pull/98
