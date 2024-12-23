---
title: '自动启动 (manualStart: false)'
---

[预打包](/docs/installation)的包中包含了 `auto-start` 插件，该插件会在指针按下并在启用的目标元素上移动时自动开始交互。你可以通过将 `manualStart` 选项设置为 `true` 来禁用某个动作的自动启动。

```js
interact(target)
  .draggable({
    manualStart: true,
  })
  .on('doubletap', function (event) {
    var interaction = event.interaction

    if (!interaction.interacting()) {
      interaction.start(
        { name: 'drag' },
        event.interactable,
        event.currentTarget,
      )
    }
  })
```

当设置 `manualStart: true` 时，你需要在指针事件监听器中通过调用 `event.interaction.start(actionInfo)` 来手动启动动作。由于库不再决定何时启动动作，因此光标将不会自动设置。
