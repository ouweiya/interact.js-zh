---
title: Reflow（回流）
---

reflow 方法允许你触发一个 action start -> move -> end 的序列，这个序列会运行
修饰符并进行放置计算等。如果你的可交互目标是一个 CSS 选择器，那么会为每个
匹配的元素执行一次交互。

<!-- <LiveDemo :demoHtml="import('@/demos/reflow.html?raw')"/> -->
[LiveDemo]

如果元素具有惯性、endOnly 修饰符和 smoothEndDuration，那么这些交互可能不会
立即结束。reflow 方法返回一个 Promise，该 Promise 会在所有交互完成时解决。
因此你可以使用 await 或 .then() 来处理多个 reflow。

```js
const interactable = interact(target).draggable({}).resizable({})

async function onWindowResize () {
  // 开始一个 resize 操作并等待惯性结束
  await interactable.reflow({ name: drag, axis: 'x' })

  // 开始一个拖拽操作
  await interactable.reflow({
    name: 'resize',
    edges: { left: true, bottom: true },
  })
}

window.addEventListener(onWindowResize, 'resize')
```
