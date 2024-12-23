---
title: 手势操作
---

```html
<div id="rotate-area">
  <div id="angle-info">0&deg;</div>
  <svg id="arrow" viewbox="0 0 100 100">
    <polygon points="50,0 75,25 62.5,25 62.5,100 37.5,100 37.5,25 25,25" fill="#29e"></polygon>
  </svg>
</div>
```

```css
.draggable {
  touch-action: none;
  user-select: none;
}
```

```js
var angle = 0

interact('#rotate-area').gesturable({
  onmove: function (event) {
    var arrow = document.getElementById('arrow')

    angle += event.da

    arrow.style.webkitTransform =
    arrow.style.transform =
      'rotate(' + angle + 'deg)'

    document.getElementById('angle-info').textContent =
      angle.toFixed(2) + '\u00b0'
  },
})
```

手势事件在两个触点按下并移动时触发。在手势事件中,页面和客户端坐标是触摸坐标的平均值,速度是根据这些平均值计算的。这些事件还具有以下属性:

| 手势事件属性 | 描述 |
|------------|------|
| `distance` | 事件的前两个触点之间的距离 |
| `angle` | 两个触点形成的线的角度 |
| `da` | 相比上一个事件的角度变化 |
| `scale` | 当前事件距离与起始事件距离的比率 |
| `ds` | 相比上一个事件的缩放变化 |
| `box` | 包含所有触点的边界框 |

:::warning
记得使用 CSS `touch-action: none` 来防止用户使用触摸指针拖动时浏览器发生平移,以及使用 `user-select: none` 来禁用文本选择。
:::