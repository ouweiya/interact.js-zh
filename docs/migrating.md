---
title: 从 v1.2 版本迁移
---

最新版本修复了多个 bug，允许在每个操作的基础上设置更多选项，为 `pointerEvents` 添加了配置选项，并添加了一些新的方法和选项。[更新日志][changelog] 列出了所有主要变更。

### 每个操作的修饰符数组

修饰符现在通过 `interact.modifiers[modifierName](options)` 方法创建。这些方法返回的值会被放入 `actionOptions.modifiers` 数组中。这让你可以更轻松地重用修饰符配置并指定它们的执行顺序。

```js
// 创建一个限制修饰符，防止元素被拖出其父元素
const restrictToParent = interact.modifiers.restrict({
  restriction: 'parent',
  elementRect: { left: 0, right: 0, top: 1, bottom: 1 },
})

// 创建一个捕捉修饰符，将事件坐标变更为网格最近的角点
const snap100x100 = interact.modifiers.snap({
  targets: [interact.snappers.grid({ x: 100, y: 100 })],
  relativePoints: [{ x: 0.5, y: 0.5 }],
})

interact(target)
  .draggable({
    // 先应用限制修饰符，然后应用捕捉修饰符到拖拽事件
    modifiers: [restrictToParent, snap100x100],
  })
  .on('dragmove', event => console.log(event.pageX, event.pageY))
```

### 改进的调整大小捕捉和限制

针对调整大小操作，新增了几个捕捉和限制修饰符：

[限制](/docs/restriction)：

- 基于指针坐标的 `restrict`
- 基于元素矩形的 `restrictRect`
- 基于元素大小的 `restrictSize`（仅用于调整大小）
- 基于元素边缘的 `restrictEdges`（仅用于调整大小）

[捕捉](/docs/snapping)：

- 基于指针坐标的 `snap`，最适合拖拽操作
- `snapSize` 仅用于调整大小操作，让你可以为目标元素的大小设置捕捉目标
- `snapEdges` 类似于 `snapSize`，但让你可以设置目标元素边缘的目标位置

```js
interact(target).resize({
  edges: { bottom: true, right: true },

  // 在固定网格点的大小
  snapSize: {
    targets: [
      interact.snappers.grid({ x: 25, y: 25, range: Infinity }),
    ],
  },

  // 最小大小
  restrictSize: {
    min: { width: 100, height: 50 },
  },

  // 保持边缘在父元素内
  restrictEdges: {
    outer: 'parent',
    endOnly: true,
  },
})
```

### 调整大小的 `aspectRatio` 修饰符

调整大小的 `preserveAspectRatio` 和 `square` 选项已被 `aspectRatio` 修饰符替代，它可以与其他修饰符协同工作。

```js
interact(target).resizable({
  edges: { left: true, bottom: true },
  modifiers: [
    interact.modifiers.aspectRatio({
      // ratio 可以是字符串 'preserve' 以保持初始宽高比，
      // 或任何数字以强制指定宽高比
      ratio: 'preserve',
      // 要添加其他遵循宽高比的修饰符，
      // 将它们放在 aspectRatio.modifiers 数组中
      modifiers: [interact.modifiers.restrictSize({ max: 'parent' })],
    }),
  ],
})
```

```js
interact(target).resizable({
  modifiers: [
    interact.modifiers.aspectRatio({
      // equalDelta 选项替代了旧的 resize.square 选项
      equalDelta: true,
    }),
  ],
})
```

### 已移除的方法

下表中的方法已被移除，改用操作方法选项和新的修饰符数组 API 的修饰符方法：

| 方法                                                      | 替代为                                                  |
| --------------------------------------------------------- | ------------------------------------------------------ |
| `interactable.squareResize(bool)`                          | `interact.modifiers.aspectRatio({ equalDelta: true })` |
| `interactable.snap({ actions: ['drag'], ...snapOptions })` | `interact.modifiers.snap(snapOptions)`                 |
| `interactable.restrict(restrictOptions)`                   | `interact.modifiers.restrict(restrictOptions)`         |
| `interactable.inertia(true)`                               | `interactable.draggable({ inertia: true })`            |
| `interactable.accept('.can-be-dropped')`                   | `interactable.dropzone({ accept: '.can-be-dropped' })` |
| `interact.margin(50)`                                      | `interactable.resizable({ margin: 50 })`               |

### 操作结束事件的 dx/dy

在 `dragend`、`resizeend` 和 `gestureend` 事件中的 `dx` 和 `dy` 字段之前是起始和结束坐标之间的差值。现在它们始终为 `0`（结束和最后一个移动事件之间的差值）。使用 `event.X0` 和 `event.Y0`（或 `event.clientX0` 和 `event.clientY0`）获取起始坐标，并从结束事件坐标中减去它们。

```js
interact(target).draggable({
  onend: function (event) {
    console.log(event.pageX - event.X0, event.pageY - event.Y0)
  },
})
```

### 拖放事件

`dragend` 事件现在在 `drop` 事件之前触发。使用 `dragendEvent.relatedTarget` 获取将要触发 drop 事件的放置区域元素。

### 鼠标按钮

默认情况下，只有鼠标左键可以开始操作。可以使用 `mouseButtons` 操作选项来更改这一设置。

[changelog]: https://github.com/taye/interact.js/blob/master/CHANGELOG.md
