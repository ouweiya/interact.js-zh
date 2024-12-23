---
title: 吸附
---

interact.js 通过 `interact.modifiers` 对象提供了3种吸附修饰符：

- 基于指针坐标的 `snap`，最适合拖拽操作
- `snapSize` 仅适用于调整大小操作，让你可以为目标元素设置大小目标
- `snapEdges` 类似于 `snapSize`，但让你可以设置目标元素边缘的目标位置

在创建吸附修饰符时，选项中包含一个 `targets` 数组。动作事件将吸附到该数组中最近的且在范围内的目标。

## `snap()`

`snap` 修饰符会在指针坐标进入指定范围内时，将其更改为指定的目标坐标。

```js
const mySnap = interact.modifiers.snap({
  targets: [
    { x: 200, y: 200 },
    { x: 250, y: 350 },
  ],
})
```

在拖拽时使用 `snap` 修饰符，拖拽事件监听器接收到的指针坐标将被修改为吸附目标的坐标。此选项也可用于可调整大小的目标，但可能不会产生直观的结果。

`snap` 目标具有 `x` 和 `y` 数值属性，以及一个可选的 `range` 数值属性。

### `relativePoints`

```javascript
interact(element).draggable({
  modifiers: [
    interact.modifiers.snap({
      targets: [ { x: 300, y: 300 } ],
      relativePoints: [
        { x: 0  , y: 0   },   // 相对于元素的左上角吸附
        { x: 0.5, y: 0.5 },   // 相对于中心
        { x: 1  , y: 1   }    // 相对于右下角
      ]
    })
  ]
})
```

如果你想为 `snap`（不是 `snapSize` 或 `snapEdges`）指定元素上进行相对吸附的点，可以使用 `relativePoints` 数组。数组中的每个项目都应该是一个具有 `x` 和 `y` 属性的对象，这些属性是指定元素上应该进行相对吸附的位置的标量。如果未指定 `relativePoints` 数组或数组为空，则吸附将相对于指针坐标（默认）。

在进行吸附计算时，实际上有 `targets.length * max(relativePoints.length, 1)` 个吸附目标。吸附函数会在每个 `relativePoint` 的坐标处多次调用。

### `offset`

```javascript
interact(element1).draggable({
  modifiers: [
    interact.modifiers.snap({
      targets: [ { x: 300, y: 300 } ],
      offset: { x: 20, y: 20 }
    })
  ]
})

interact(element2).resizable({
  modifiers: [
    interact.modifiers.snap({
      targets: [ { x: 300, y: 300 } ],
      offset: 'startCoords'
    })
  ]
})
```

`offset` 选项允许你偏移 `snap` 修饰符的目标坐标。该值可以是：

- 具有 `x` 和 `y` 属性的对象
- `'startCoords'` 将使用动作开始时的 `pageX` 和 `pageY`
- `'self'` 将使用目标元素的左上角坐标
- 或 `'parent'` 将使用目标父元素的左上角坐标

## `snapSize()`

```js
interact(target).resizable({
  edges: { top: true, left: true },
  modifiers: [
    interact.modifiers.snapSize({
      targets: [
        { width: 100 },
        interact.snappers.grid({ width: 100, height: 100 }),
      ],
    }),
  ],
})
```

`snapSize` 修饰符在调整大小时吸附目标的尺寸。`snapSize` 目标是一个具有 `x` 和 `y` 数值属性或 `width` 和 `height` 数值属性以及一个可选的 `range` 的对象。其目标具有 `x` 和 `y` 数值属性或 `width` 和 `height` 数值属性以及一个可选的 `range`。

## `snapEdges()`

```js
interact(target).resizable({
  edges: { top: true, left: true },
  modifiers: [
    interact.modifiers.snapEdges({
      targets: [
        interact.snappers.grid({ top: 100, left: 100 }),
      ],
    }),
  ],
})
```

`snapEdges` 修饰符在调整大小时吸附目标的边缘。其目标具有 `x` 和 `y` 数值属性，以分别吸附左/右和上/下边缘，`top`、`left`、`width` 和 `height` 数值属性以吸附每个边缘，以及一个可选的 `range`。

### `targets` 选项

动作事件的坐标与提供的吸附修饰符的目标进行比较。如果多个目标在范围内，则使用最近的目标。

```js
interact.modifiers.snap({
  targets: [
    function (
      // x 和 y 页面坐标
      x,
      y,
      // 当前交互
      interaction,
      // 偏移信息，如果设置了 relativePoint
      { x: offsetX, y: offsetY, relativePoint, index: relativePointIndex },
      // 该函数在 options.targets 数组中的索引
      index,
    ) {
      return {
        x: x,
        y: 75 + 50 * Math.sin(x * 0.04),
        range: 40,
      }
    },
  ],
})
```

你可以在 `targets` 数组中使用函数。如果吸附目标是一个函数，则会调用该函数，并将事件的 `x` 和 `y` 坐标作为前两个参数，交互作为第三个参数。函数的返回值将用作目标。

如果目标省略了某个轴或边缘属性，则相应的轴不会被更改。例如，如果目标定义为 `{ y: 100, range Infinity }`，则吸附的移动将是水平的 `(100, pointerEventPageX)`。

### 吸附网格

```javascript
var gridTarget = interact.snappers.grid({
  // 可以是 x 和 y、left 和 top、right 和 bottom 或 width 和 height 的一对
  x: 50,
  y: 50,

  // 可选
  range: 10,

  // 可选
  offset: { x: 5, y: 10 },

  // 可选
  limits: {
    top: 0,
    left: 0,
    bottom: 500,
    height: 500
  }
})

interact(element).draggable({
  modifiers: [
    interact.modifiers.snap({ targets: [gridTarget] })
  ]
})
```

你可以使用 `interact.snappers.grid()` 方法创建一个吸附到网格的目标。该方法接受一个描述网格的对象，并返回一个吸附到该网格角的函数。

网格的属性有：

- `x`、`y`：水平和垂直网格线之间的间距。
- `range`（可选）：指针坐标将在此距离内吸附到网格角。
- `offset`（可选）：具有 `x` 和 `y` 属性的对象，用于偏移网格线
- `limits`（可选）：具有 `top`、`left`、`bottom` 和 `right` 属性的对象，用于设置网格的边界

### `range`

```javascript
interact(element).draggable({
  modifiers: [
    interact.modifiers.snap({
      targets: [
        { x: 20, y: 450, range: 50 }
        { x: 10, y: 0 /* 使用下面的默认范围 */ }
      ],
      range: 300 // 对于未指定范围的目标
    })
  ]
})
```

可以在吸附修饰符选项中指定范围，每个目标也可以有自己的范围。吸附目标的 `range` 是指针必须距离目标坐标的距离，以使吸附成为可能。

即 `inRange = distance <= range`。

### 事件吸附信息

```js
interact(target).draggable({
  modifiers: [
    interact.modifiers.snap({ targets: [(x, y) => ({ x: x + 20 })] }),
  ],
  listeners: {
    move (event) {
      console.log(event.modifiers[0].target.source)
    },
  },
})
```

`InteractEvent.modifiers` 将是一个包含为动作设置的修饰符信息的数组。吸附修饰符提供一个包含最近目标和计算偏移的对象。

| 属性        | 类型                      | 描述                                                                   |
| ----------- | ------------------------- | ----------------------------------------------------------------------------- |
| `x` 和 `y` | 数值                    | 吸附到的坐标，应用了原点、偏移和相对点 |
| `source`    | 目标对象或函数 | 目标数组选项中的目标对象或函数                     |
| `index`     | 数值                    | 目标数组中的源索引                                  |
| `range`     | 数值                    | 目标的范围                                                       |
| `offset`    | 对象                    | 应用于源的偏移                                              |
