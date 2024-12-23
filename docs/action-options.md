---
title: 交互选项
---

`Interactable` 的方法 `draggable()`、`resizable()` 和 `gesturable()` 用于启用和配置目标元素的交互动作。它们都有一些通用选项以及特定于动作的选项和事件属性。

拖拽、调整大小和手势交互会触发 `InteractEvent` 事件，所有动作类型都具有以下共同的属性：

| InteractEvent 属性      | 描述                                |
| ---------------------- | ---------------------------------- |
| `target`               | 正在交互的元素                        |
| `interactable`         | 正在交互的 Interactable 对象          |
| `interaction`          | 事件所属的交互对象                     |
| `x0`, `y0`            | 起始事件的页面 x 和 y 坐标             |
| `clientX0`, `clientY0` | 起始事件的客户端 x 和 y 坐标           |
| `dx`, `dy`            | 鼠标/触摸坐标的变化量                  |
| `velocityX`, `velocityY`| 指针的速度分量                       |
| `speed`               | 指针的速度                           |
| `timeStamp`           | 事件对象的创建时间                     |

## 通用交互选项

Interactable 方法 `draggable`、`resizable` 和 `gesturable` 可以接受 `true` 或 `false` 来简单地允许/禁止操作，也可以接受一个包含属性的对象来更改某些设置。

### `max`

`max` 用于限制可以同时针对一个 interactable 的交互数量。默认情况下，任意数量的交互都可以针对一个 interactable。

### `maxPerElement`

默认情况下，每个 interactable+元素组合只能有 1 个交互。如果你想允许同一目标元素上有多个交互，请将对象的 `maxPerElement` 属性设置为 `>= 2` 的值。

### `manualStart`

如果设置为 `true`，则拖拽、调整大小和手势操作必须通过调用 [`Interaction#start`][interaction-start] 来启动，因为通常的 `down`、`move`、`<action>start`... 序列将不会启动操作。参见 [auto-start](/docs/auto-start)。

### `hold`

操作将在指针按下并保持指定的毫秒数后才开始。

### `inertia`

更改拖拽和调整大小的惯性设置。参见 [docs/inertia](/docs/inertia)。

### `styleCursor`

如果启用了 [auto-start](/docs/auto-start) 功能，当你悬停在可拖拽和可调整大小的元素上时，interact 将会设置相应的鼠标样式。

```js
interact(target).styleCursor(false)
```

要禁用所有操作的这个功能，请将 `styleCursor` 选项设置为 `false`

### `cursorChecker`

```js
interact(target)
  .resizable({
    edges: { left: true, right: true },
    cursorChecker (action, interactable, element, interacting) {
      // the library uses biderectional arrows <-> by default,
      // but we want specific arrows (<- or ->) for each diriection
      if (action.edges.left) { return 'w-resize' }
      if (action.edges.right) { return 'e-resize' }
    },
  })
  .draggable({
    cursorChecker () {
      // don't set a cursor for drag actions
      return null
    },
  })
```

你可以使用 `interact(target).styleCursor(false)` 禁用默认光标，但这将禁用所有操作的光标样式。要禁用或更改每个操作的光标，你可以设置一个 `cursorChecker` 函数，该函数接收当前交互的信息并返回要设置在目标元素上的 CSS 光标值。

### `autoScroll`

```javascript
interact(element)
  .draggable({
    autoScroll: true,
  })
  .resizable({
    autoScroll: {
      container: document.body,
      margin: 50,
      distance: 5,
      interval: 10,
      speed: 300,
    }
  })
```

当拖拽或调整大小的移动发生在容器边缘时，滚动容器（`window` 或 HTMLElement）。

### `allowFrom`（句柄）

```html
<div class="movable-box">
  <div class="drag-handle" />
  Content
  <div class="resize-handle" />
</div>
```

```javascript
interact('.movable-box')
  .draggable({
    allowFrom: '.drag-handle',
  })
  .resizable({
    allowFrom: '.resize-handle',
  })
  .pointerEvents({
    allowFrom: '*',
  })
```

`allowFrom` 选项允许你指定一个目标 CSS 选择器或元素，只有当指针按下事件的目标是这个元素时，操作才能开始。这个选项适用于拖拽、调整大小和手势操作，以及 `pointerEvents`（按下、移动、保持等）。使用 `allowFrom` 选项，你可以为每个操作和所有 pointerEvents 监听器分别指定句柄。

:::warning
`allowFrom` 元素**必须**是目标 interactable 元素的子元素。
:::

### `ignoreFrom`

```html
<div id="movable-box">
  <p class="content">Selectable text</p>
  <div no-pointer-event>Should not fire tap, hold, etc. events</div>
</div>
```

```javascript
var movable = document.querySelector('#movable-box')

interact(movable)
  .draggable({
    ignoreFrom: '.content',
    onmove: function (event) {
      /* ... */
    }
  })
  .pointerEvents({
    ignoreFrom: '[no-pointer-event]',
  })
  .on('tap', function (event) {
  })
```

作为 `allowFrom` 的补充，`ignoreFrom` 允许你指定目标元素内要避免启动操作的元素。当某些元素需要保持默认行为时，这很有用。例如，通过将文本/contentEditable 包装在可拖动元素中并忽略可编辑内容，你可以保持突出显示文本的能力而不移动元素。

### `enabled`

为 Interactable 启用操作。如果选项对象没有 `enabled` 属性或属性值为 `true`，则启用该操作。如果 `enabled` 为 false，则禁用该操作。

[interaction-start]: /docs/auto-start
