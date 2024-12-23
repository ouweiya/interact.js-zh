---
title: 事件
---

## 交互事件 (InteractEvents)

<!-- <LiveDemo :demoHtml="import('@/demos/events/actions.html?raw')" :removeNext="3"/> -->
[LiveDemo]

```html
<div>拖拽、调整大小或执行多点触控手势</div>
```

```css
.target {
  display: inline-block;
  min-height: 3rem;
  background-color: #29e;
  color: white;
  padding: 1rem;
  border-radius: 0.75rem;
}
```

```javascript
function listener(event) {
  event.target.textContent = `${event.type} at ${event.pageX}, ${event.pageY}`
}

interact(target)
  .on('dragstart', listener)
  .on('dragmove dragend', listener)
  .on(['resizemove', 'resizeend'], listener)
  .on({
    gesturestart: listener,
    gestureend: listener,
  })

interact(target).draggable({
  onstart: listener,
  onmove: listener,
  onend: listener,
})

interact(target).resizable({
  listeners: [
    {
      start: function (event) {
        console.log(event.type, event.pageX, event.pageY)
      },
    },
  ],
})
```

`InteractEvent` 事件会在不同操作时触发。事件类型包括:

- 可拖拽: `dragstart`, `dragmove`, `draginertiastart`, `dragend` 
- 可调整大小: `resizestart`, `resizemove`, `resizeinertiastart`, `resizeend`
- 可手势: `gesturestart`, `gesturemove`, `gestureend`

要响应 `InteractEvent` 事件,你必须为配置了相应操作的 interactable 添加事件类型的监听器。创建的事件对象会作为第一个也是唯一的参数传递给这些函数。

`InteractEvent` 属性包含鼠标/触摸事件的常用属性,如 `pageX/Y`、`clientX/Y`、修饰键等,同时还包含一些提供坐标变化信息和特定事件数据的属性。下表显示了所有这些事件。

### 通用属性

| 属性 | 描述 |
|------|------|
| `target` | 正在交互的元素 |
| `interactable` | 正在交互的 Interactable 对象 |
| `interaction` | 事件所属的交互对象 |
| `x0`, `y0` | 起始事件的页面 x 和 y 坐标 |
| `clientX0`, `clientY0` | 起始事件的客户端 x 和 y 坐标 |
| `dx`, `dy` | 鼠标/触摸坐标的变化量 |
| `velocityX`, `velocityY` | 指针的速度 |
| `speed` | 指针的速率 |
| `timeStamp` | 事件对象的创建时间 |

### 拖拽事件属性

| 属性 | 描述 |
|------|------|
| **dragmove** | |
| `dragEnter` | 此 Interactable 被拖入的放置区域 |
| `dragLeave` | 此 Interactable 被拖出的放置区域 |

### 调整大小事件属性

| 属性 | 描述 |
|------|------|
| `edges` | 正在改变的元素边缘 |
| `rect` | 包含目标新尺寸的对象 |
| `deltaRect` | 相比上一个事件的尺寸变化 |

### 手势事件属性

| 属性 | 描述 |
|------|------|
| `distance` | 事件的前两个触摸点之间的距离 |
| `angle` | 两个触摸点形成的线的角度 |
| `da` | 相比上一个事件的角度变化 |
| `scale` | 当前事件距离与起始事件距离的比率 |
| `ds` | 相比上一个事件的缩放比例变化 |
| `box` | 包含所有触摸点的边界框 |

在手势事件中,页面和客户端坐标是触摸坐标的平均值,速度是根据这些平均值计算的。

## 放置事件

```javascript
interact(dropTarget)
  .dropzone({
    ondrop: function (event) {
      alert(event.relatedTarget.id + ' was dropped into ' + event.target.id)
    },
  })
  .on('dropactivate', function (event) {
    event.target.classList.add('drop-activated')
  })
```

放置区域可以接收以下事件: `dropactivate`, `dropdeactivate`, `dragenter`, `dragleave`, `dropmove`, `drop`。

放置区域事件是具有以下属性的普通对象:

| 属性 | 描述 |
|------|------|
| `target` | 放置区域元素 |
| `dropzone` | 放置区域 Interactable |
| `relatedTarget` | 正在被拖拽的元素 |
| `draggable` | 正在被拖拽的 Interactable |
| `dragEvent` | 相关的拖拽事件 – `drag{start,move,end}` |
| `timeStamp` | 事件时间戳 |
| `type` | 事件类型 |

## 指针事件

```javascript
interact(target).on('hold', function (event) {
  console.log(event.type, event.target)
})
```

- `down`
- `move`
- `up`
- `cancel`
- `tap`
- `doubletap`
- `hold`

我使用 `pointerEvents`(小写"p")是因为它们大致按照真实的 `PointerEvent` 接口呈现事件,特别是:

- `event.pointerId` 提供 `TouchEvent#identifier` 或 `PointerEvent#pointerId` 或 MouseEvents 的 `undefined`
- `event.pointerType` 提供指针类型
- 触摸事件后没有模拟的鼠标事件

:::warning
事件的属性可能因浏览器和设备支持的事件接口不同而有所差异。例如,来自 `touchstart` 的 `down` 事件不会提供 `PointerEvent` 接口中指定的倾斜度或压力。
:::

### 配置指针事件

```javascript
interact(target).pointerEvents({
  holdDuration: 1000,
  ignoreFrom: '[no-pointer]',
  allowFrom: '.handle',
  origin: 'self',
})
```

`pointerEvent` 不会被捕捉或限制,但可以通过原点修改进行修改。`tap` 事件有一个 `dt` 属性,表示相关的 `down` 和 `up` 事件之间的时间。对于 `doubletap` 而言,`dt` 是两次之前的点击之间的时间。`hold` 事件的 `dt` 是指针被按住的时间长度(约 600ms)。

### 快速点击

```javascript
// fast click
interact('a[href]').on('tap', function (event) {
  window.location.href = event.currentTarget.href
  event.preventDefault()
})
```

`tap` 和 `doubletap` 在移动设备上没有 `click` 事件的延迟,所以它非常适合快速按钮和锚链接。此外,与常规点击事件不同,如果在释放之前移动了指针,则不会触发点击。
