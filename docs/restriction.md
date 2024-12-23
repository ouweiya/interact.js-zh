---
title: 限制
---

interact.js 通过 `interact.modifiers` 对象提供了3种限制修饰符：

- 基于指针坐标的 `restrict`
- 基于元素矩形的 `restrictRect`
- 基于元素大小的 `restrictSize`（仅用于调整大小）
- 基于元素边缘的 `restrictEdges`（仅用于调整大小）

## `restrict()`

```javascript
interact(target).draggable({
  modifiers: [
    interact.modifiers.restrict({
      restriction: 'parent',
      endOnly: true
    })
  ]
})
```

`restriction` 值用于指定动作将被限制在的区域。
该值可以是：

- 一个包含 `top`、`left`、`bottom` 和 `right` 或 `x`、`y`、`width` 和 `height` 的矩形对象
- 一个元素，其尺寸将被用作限制区域
- 一个接收 `(x, y, element)` 参数并返回矩形或元素的函数
- 以下字符串之一：
  - `'self'` – 限制在目标元素的矩形区域内
  - `'parent'` – 限制在元素父节点的矩形区域内
  - CSS选择器字符串 – 如果目标元素的某个父元素匹配此选择器，将使用该元素的矩形区域作为限制区域

### `restrictRect()`

使用 `restrict` 变体时，限制默认是相对于指针坐标的，这样动作坐标（而不是元素尺寸）将被限制在限制区域内。你可以使用 `restrictRect` 变体，这样在拖动时会考虑元素的边缘。

```javascript
interact(target).draggable({
  modifiers: [
    interact.modifiers.restrictRect({
      restriction: 'parent'
    })
  ]
})
```

如果目标元素大于限制区域，则允许元素在限制区域内移动。

### `elementRect`

`restrictRect` 与 `restrict` 相同，但 `elementRect` 选项默认设置为 `{ left: 0, right: 0, top: 1, bottom: 1 }`。`elementRect` 选项通过从左上角边缘到右下角的标量值来指定要考虑的元素边缘区域。

对于 `left` 和 `right` 属性，`0` 表示元素的左边缘，`1` 表示右边缘。对于 `top` 和 `bottom`，`0` 表示元素的顶部边缘，`1` 表示底部。

`{ top: 0.25, left: 0.25, bottom: 0.75, right: 0.75 }` 将允许元素四分之一的部分悬挂在限制边缘之外。

## `restrictSize()`

```javascript
interact(target).resizable({
  modifiers: [
    interact.modifiers.restrictSize({
      min: { width: 100, height: 100 },
      max: { width: 500, height: 500 }
    })
  ]
})
```

`restrictSize` 允许你指定调整大小时目标元素必须具有的最小和最大尺寸。

## `restrictEdges()`

```javascript
interact(target).resizable({
  modifiers: [
    interact.modifiers.restrictEdges({
      inner: {
        left: 100,  // 左边缘必须 <= 100
        right: 200  // 右边缘必须 >= 200
      }
      outer: {
        left: 0,    // 左边缘必须 >= 0
        right: 300  // 右边缘必须 <= 300
      }
    })
  ]
})
```

`restrictEdges` 允许你指定调整大小时目标元素必须具有的 `inner`（内部）和 `outer`（外部）尺寸。你可以将 `inner` 理解为设置元素的最小尺寸，将 `outer` 理解为最大尺寸。
