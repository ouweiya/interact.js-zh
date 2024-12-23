---
title: 介绍
---

## interact.js 是什么？

interact.js 是一个用于现代浏览器的拖放、调整大小和多点触控手势的 JavaScript 库。其免费开源版本提供了强大的功能选项，如惯性和用于对齐和限制的修饰器。

该库的目标是**在不同浏览器和设备间一致地呈现指针输入数据**，并提供便捷的方式来**模拟用户指针以非实际移动的方式移动**（对齐、惯性等）。

请注意，默认情况下 **interact.js 不会为你移动元素**。在拖动发生时设置元素的样式必须通过你自己的事件监听器来完成。这样，你可以完全控制所发生的一切。

:::note
如果你更喜欢开箱即用的反馈效果，不妨看看 <a href="/pro">interact.js Pro</a>。它带有内置的硬件加速反馈、列表重排序、弹簧物理效果、Vue & React 组件等更多功能。
:::

<div class="has-text-centered notice-cta">
  <a href="/pro" class="button is-medium is-info has-text-white">获取 Pro 版本</a>
</div>

## 入门指南

在[安装库](/docs/installation)之后，设置你的目标和交互的基本步骤是：

1.  创建一个 `Interactable` 目标。
2.  配置它以启用操作并添加[修饰器](/docs/modifiers)、[惯性](/docs/inertia)等。
3.  添加事件监听器以提供视觉反馈并更新你的应用状态。

例如，这里有一个[非常简单的滑块输入](https://codepen.io/taye/pen/GgpxNq)的代码：

<!-- <LiveDemo :demoHtml="import('@/demos/slider.html?raw')" :removeNext="1"/> -->
[LiveDemo]

```js
// 第1步
const slider = interact('.slider')    // 选择带有"slider"类的目标元素

slider
  // 第2步
  .draggable({                        // 使元素触发拖动事件
    origin: 'self',                   // (0, 0)将是元素的左上角
    inertia: true,                    // 如果抛出则启动惯性移动
    modifiers: [
      interact.modifiers.restrict({
        restriction: 'self',           // 将拖动坐标保持在元素内
      }),
    ],
  })
  // 第3步
  .on('dragmove', function (event) {  // 在每次dragmove时调用此监听器
    const sliderWidth = interact.getElementRect(event.target.parentNode).width
    const value = event.pageX / sliderWidth

    event.target.style.paddingLeft = (value * 100) + '%'
    event.target.setAttribute('data-value', value.toFixed(2))
  })
```

`interact` 函数接受一个元素或 CSS 选择器字符串，并返回一个 `Interactable` 对象，该对象具有各种配置操作和事件监听器的方法。指针交互的按下 → 移动 → 松开序列会开始拖动、调整大小或手势操作。通过为这些操作添加事件监听器函数，你可以响应提供指针坐标、速度、元素大小等信息的 `InteractEvent`。

## 操作

interact.js 支持3种由指针按下 → 移动 → 松开序列触发的基本操作类型：

- [可拖动](/docs/draggable)用于移动元素或在画布上绘画。这可以与[放置区域](/docs/dropzone)组合使用来实现拖放应用程序。
- [可调整大小](/docs/resizable)用于在使用指针移动元素的一个或两个边缘时监视元素的大小和位置。
- [可手势操作](/docs/gesturable)用于带有角度、缩放等数据的双指手势。

Pro版本在可拖动操作的基础上提供了[可排序和可交换](/docs/sortable)功能，用于元素列表的拖放重排。
