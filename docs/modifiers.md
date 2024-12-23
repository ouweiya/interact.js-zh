---
title: 修改器
---

```js
// 创建一个restrict修改器来防止元素被拖拽出其父元素
const restrictToParent = interact.modifiers.restrict({
  restriction: 'parent',
  elementRect: { left: 0, right: 0, top: 1, bottom: 1 },
})

// 创建一个snap修改器，将事件坐标修改为网格最近的角点
const snap100x100 = interact.modifiers.snap({
  targets: [interact.snappers.grid({ x: 100, y: 100 })],
  relativePoints: [{ x: 0.5, y: 0.5 }],
})

interact(target)
  .draggable({
    // 将restrict和snap修改器依次应用于拖拽事件
    modifiers: [restrictToParent, snap100x100],
  })
  .on('dragmove', event => console.log(event.pageX, event.pageY))
```

`interact` 的 `modifiers` 允许你改变动作事件的坐标。传递给动作方法的选项对象可以包含一个 `modifiers` 数组，这些修改器将被应用到该动作类型的事件上。**数组中的修改器会按顺序依次应用**，它们的顺序可能会影响最终结果。

```js
const snapAtEnd = interact.modifiers.snap({
  endOnly: true,
  targets: [/* ... */],
})
```

通过设置修改器的 `endOnly` 选项为 `true`，可以让修改器仅应用于交互的最后一个移动事件。当一个 `endOnly` 修改器与启用了 `inertia` 的动作一起使用时，事件坐标将从松开时的坐标平滑过渡到修改后的坐标。

interact.js 内置了几种不同类型的修改器，用于[对齐吸附](/docs/snapping)和[限制](/docs/restriction)元素。
