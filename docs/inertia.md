---
title: 惯性
---

```javascript
interact(target)
  .draggable({
    inertia: true
  })
  .resizable({
    inertia: {
      resistance: 30,
      minSpeed: 200,
      endSpeed: 100
    }
  })
```

惯性允许拖拽和调整大小的动作在用户以足够快的速度释放指针后继续进行。启动速度、结束速度和阻力可以通过以下设置进行可选配置。

如果一个动作在没有惯性的情况下结束，但使用 `endOnly` 选项进行了捕捉或限制，那么坐标将从结束坐标插值到捕捉/限制坐标。

## 选项

- **`resistance`** 是一个大于零的数值，用于设置动作减速的速率。值越高，减速越快。

- **`endSpeed`** 是动作被认为已停止时的速度（像素/秒）。

- **`allowResume`** 是一个 `boolean` 值，表示是否允许用户在惯性阶段恢复动作。

- **`smoothEndDuration`** 是使用 `endOnly` 时从实际结束坐标到修改后坐标的插值移动持续时间（毫秒）。
  将值设为 `0` 可以禁用带有 `endOnly` 捕捉/限制的结束过渡。

当惯性被恢复时，相对于目标左上角的开始和恢复坐标之间的差异不会反映在下一个
`{action}move` 事件中。相反，当惯性期间指针重新按下时，会触发一个 `{action}resume` 事件，
然后才会再次触发常规的 `{action}move` 事件。如果你需要坐标的差异，你应该监听这个
事件，并像响应 `{action}move` 事件一样响应它。
