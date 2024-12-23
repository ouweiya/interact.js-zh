---
title: 拖拽
---

拖拽是 interact.js 提供的最简单的操作。要使一个元素可拖拽，
只需创建一个带有目标元素的交互对象，然后使用所需的选项调用
`draggable` 方法。

<!-- <LiveDemo :demoHtml="import('@/demos/draggable/basic.html?raw')" :removeNext="3" hide-demo-only /> -->
[LiveDemo]

```html
<div class="draggable">可拖拽元素</div>
```

```css
.draggable {
  touch-action: none;
  user-select: none;
}
```

```js
const position = { x: 0, y: 0 }

interact('.draggable').draggable({
  listeners: {
    start (event) {
      console.log(event.type, event.target)
    },
    move (event) {
      position.x += event.dx
      position.y += event.dy

      event.target.style.transform = `translate(${position.x}px, ${position.y}px)`
    },
  },
})
```

除了常见的 [`InteractEvent`](/docs/events#interactevents) 属性外，
`dragmove` 事件还包含以下属性：

| 拖拽事件属性 | 说明 |
| ----------- | ---- |
| `dragEnter` | 该交互对象被拖入的放置区域 |
| `dragLeave` | 该交互对象被拖出的放置区域 |

:::warning
记得使用 CSS `touch-action: none` 来防止用户使用触摸指针拖动时浏览器发生平移，
并使用 `user-select: none` 来禁用文本选择。
:::

## `lockAxis` 和 `startAxis`

```javascript
// 将拖动锁定在起始方向
interact(singleAxisTarget).draggable({
  startAxis: 'xy'
  lockAxis: 'start'
});

// 仅当水平方向开始拖动时才触发
interact(horizontalTarget).draggable({
  startAxis: 'x'
  lockAxis: 'x'
});
```

有两个选项可以控制拖动操作的轴向：`startAxis` 和 `lockAxis`。

`startAxis` 设置开始动作必须遵循的方向。使用 `'x'` 要求用户必须水平开始拖动，
或使用 `'y'` 要求垂直开始拖动。

`lockAxis` 使拖动事件仅在给定轴向上发生变化。如果使用 `'start'` 值，
则拖动将被锁定在开始的方向上。
