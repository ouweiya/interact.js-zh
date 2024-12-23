---
title: 放置区域
---

放置区域定义了可拖拽目标可以"放置"的元素以及哪些元素会被接受。与拖拽事件类似，放置事件不会修改 DOM 来重新设置元素的父级关系。如果需要这样的功能，你需要在自己的事件监听器中实现。

```javascript
interact(dropTarget)
  .dropzone({
    ondrop: function (event) {
      alert(event.relatedTarget.id
            + ' 被放置到了 '
            + event.target.id)
    }
  })
  .on('dropactivate', function (event) {
    event.target.classList.add('drop-activated')
  })
```

## 放置区域事件

放置区域事件是具有以下属性的普通对象：

| 属性            | 描述                                   |
| --------------- | ------------------------------------- |
| `target`        | 放置区域元素                           |
| `dropzone`      | 放置区域交互对象                       |
| `relatedTarget` | 正在被拖拽的元素                       |
| `draggable`     | 正在被拖拽的交互对象                   |
| `dragEvent`     | 相关的拖拽事件 – `drag{start,move,end}` |
| `timeStamp`     | 事件发生的时间                         |
| `type`          | 事件类型                              |

```javascript
interact('.dropzone').dropzone({
  accept: '.drag0, .drag1',
});
```

## `accept`

放置区域的 `accept` 选项是一个 CSS 选择器或元素，被拖拽的元素必须匹配这个选择器才能触发放置事件。

```javascript
interact(target).dropzone({
  overlap: 0.25
});
```

`overlap` 选项设置如何检查放置操作。允许的值包括：

- `'pointer'` – 指针必须在放置区域上方（默认值）
- `'center'` – 可拖拽元素的中心必须在放置区域上方
- 从 0-1 的数字，表示（相交面积）/（可拖拽区域面积）。例如 `0.5` 表示当可拖拽元素的一半面积在放置区域上方时才会触发放置

## `checker`

`checker` 选项是一个函数，你可以设置它来额外检查被拖拽的元素是否可以放置到放置区域中。

```javascript
interact(target).dropzone({
  checker: function (
    dragEvent,         // 相关的 dragmove 或 dragend
    event,             // 触摸、指针或鼠标事件
    dropped,           // 布尔值，默认检查器结果
    dropzone,          // 放置区域交互对象
    dropzoneElement,   // 放置区域元素
    draggable,         // 可拖拽交互对象
    draggableElement   // 可拖拽元素
  ) {

    // 只允许放置到空的放置区域元素中
    return dropped && !dropElement.hasChildNodes();
  }
});
```

checker 函数接受以下参数：

| 参数               | 描述                                |
| ------------------ | ---------------------------------- |
| `dragEvent`        | 相关的 dragmove 或 dragend 事件     |
| `event`            | 与 dragEvent 相关的用户移动/抬起/结束事件 |
| `dropped`          | 默认放置检查器返回的值               |
| `dropzone`         | 放置区域交互对象                    |
| `dropElement`      | 放置区域元素                        |
| `draggable`        | 正在被拖拽的交互对象                |
| `draggableElement` | 实际正在被拖拽的元素                |
