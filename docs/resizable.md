---
title: 可调整大小
---

```javascript
interact(target)
  .resizable({
    edges: {
      top   : true,       // 使用指针坐标检查大小调整
      left  : false,      // 禁用左边缘调整大小
      bottom: '.resize-s',// 如果指针目标匹配选择器则调整大小
      right : handleEl    // 如果指针目标是给定的元素则调整大小
    }
  })
```

调整大小事件具有 `rect` 和 `deltaRect` 属性。`rect` 在每次 `resizemove` 事件中更新，而 `deltaRect` 中的值反映了变化。在 `resizestart` 中，`rect` 将与 `interactable.getRect(element)` 返回的矩形相同，而 `deltaRect` 的所有属性值都为零。

| 调整大小事件属性 | 描述 |
| --------------- | ---- |
| `edges` | 正在改变的元素边缘 |
| `rect` | 包含目标新尺寸的对象 |
| `deltaRect` | 自上一个事件以来尺寸的变化 |

可调整大小的选项具有 `edges` 属性，它指定了可以从哪些边缘（上、左、下或右）调整元素大小。

<!-- <LiveDemo :demoHtml="import('@/demos/resizable/basic.html?raw')" :removeNext="2" /> -->
[LiveDemo]

```html
<div data-x="0" data-y="0" class="resizable">
  <!-- 左上调整大小手柄 -->
  <div class="resize-top resize-left"></div>

  <!-- 右下调整大小手柄 -->
  <div class="resize-bottom resize-right"></div>
</div>
```

```js
interact('.resizable').resizable({
  edges: { top: true, left: true, bottom: true, right: true },
  listeners: {
    move (event) {
      let { x, y } = event.target.dataset

      x = (parseFloat(x) || 0) + event.deltaRect.left
      y = (parseFloat(y) || 0) + event.deltaRect.top

      Object.assign(event.target.style, {
        width: `${event.rect.width}px`,
        height: `${event.rect.height}px`,
        transform: `translate(${x}px, ${y}px)`,
      })

      Object.assign(event.target.dataset, { x, y })
    },
  },
})
```

:::warning
记得使用 CSS `touch-action: none` 以防止用户使用触摸指针拖动时浏览器发生平移，使用 `user-select: none` 禁用文本选择，如果你的元素有会影响其宽度的内边距和边框，请使用 `box-sizing: border-box`。
:::

如果你想让一个元素作为调整大小的角落，让它匹配两个相邻边缘的选择器。

调整大小的手柄元素必须是可调整大小元素的子元素。如果你需要将手柄放在目标元素之外，那么你需要使用 [`Interaction#start`](interaction-start)。

### `invert`

```javascript
interact(target).resizable({
  edges: { bottom: true, right: true },
  invert: 'reposition'
})
```

默认情况下，调整大小的操作不能使 `event.rect` 小于 `0x0`。使用 `invert` 选项来指定当目标将被调整为小于 `0x0` 的尺寸时应该发生什么。可能的值包括：

- `'none'`（默认值）将调整矩形的最小限制为 `0x0`
- `'negate'` 将允许矩形具有负宽度/高度
- `'reposition'` 将通过交换顶部和底部边缘和/或交换左右边缘来保持宽度/高度为正

<!-- <LiveDemo :demoHtml="import('@/demos/resizable/invert.html?raw')" /> -->
[LiveDemo]

### 纵横比

```js
interact(target).resizable({
  modifiers: [
    interact.modifiers.aspectRatio({
      // 确保宽度始终是高度的两倍
      ratio: 2,
      // 通过嵌套另一个修饰符来限制大小
      modifiers: [
        interact.modifiers.restrictSize({ max: 'parent' }),
      ],
    }),
  ],
})
```

interact.js 带有一个 `aspectRatio` 修饰符，可用于强制调整大小的矩形保持特定的纵横比。该修饰符有 3 个选项：

| 属性 | 类型 | 描述 |
| ---- | ---- | ---- |
| `ratio` | 数字或 'preserve' | 要维持的纵横比，或值 'preserve' 以维持起始比例 |
| `equalDelta` | 布尔值 | 以相同的量增加边缘，而不是维持相同的比例 |
| `modifiers` | 修饰符数组 | 应用于将遵守纵横比选项的调整大小的修饰符 |

要确保纵横比选项被其他修饰符尊重，这些修饰符必须在 `aspectRatio.modifiers` 数组选项中，**而不是**在与 `aspectRatio` 相同的 `resize.modifiers` 数组中。

[interaction-start]: http://interactjs.io/api/#Interaction.start
