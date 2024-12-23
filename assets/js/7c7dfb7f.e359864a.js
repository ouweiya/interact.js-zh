"use strict";(self.webpackChunkinteract_js_zh=self.webpackChunkinteract_js_zh||[]).push([[63],{1078:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>c,default:()=>d,frontMatter:()=>o,metadata:()=>a,toc:()=>l});const a=JSON.parse('{"id":"auto-start","title":"\u81ea\u52a8\u542f\u52a8 (manualStart: false)","description":"\u9884\u6253\u5305\u7684\u5305\u4e2d\u5305\u542b\u4e86 auto-start \u63d2\u4ef6\uff0c\u8be5\u63d2\u4ef6\u4f1a\u5728\u6307\u9488\u6309\u4e0b\u5e76\u5728\u542f\u7528\u7684\u76ee\u6807\u5143\u7d20\u4e0a\u79fb\u52a8\u65f6\u81ea\u52a8\u5f00\u59cb\u4ea4\u4e92\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u5c06 manualStart \u9009\u9879\u8bbe\u7f6e\u4e3a true \u6765\u7981\u7528\u67d0\u4e2a\u52a8\u4f5c\u7684\u81ea\u52a8\u542f\u52a8\u3002","source":"@site/docs/auto-start.md","sourceDirName":".","slug":"/auto-start","permalink":"/interact.js-zh/docs/auto-start","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u81ea\u52a8\u542f\u52a8 (manualStart: false)"},"sidebar":"tutorialSidebar","previous":{"title":"\u4ea4\u4e92\u9009\u9879","permalink":"/interact.js-zh/docs/action-options"},"next":{"title":"\u4e8b\u4ef6","permalink":"/interact.js-zh/docs/events"}}');var r=n(4848),s=n(8453);const o={title:"\u81ea\u52a8\u542f\u52a8 (manualStart: false)"},c=void 0,i={},l=[];function u(t){const e={a:"a",code:"code",p:"p",pre:"pre",...(0,s.R)(),...t.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(e.p,{children:[(0,r.jsx)(e.a,{href:"/docs/installation",children:"\u9884\u6253\u5305"}),"\u7684\u5305\u4e2d\u5305\u542b\u4e86 ",(0,r.jsx)(e.code,{children:"auto-start"})," \u63d2\u4ef6\uff0c\u8be5\u63d2\u4ef6\u4f1a\u5728\u6307\u9488\u6309\u4e0b\u5e76\u5728\u542f\u7528\u7684\u76ee\u6807\u5143\u7d20\u4e0a\u79fb\u52a8\u65f6\u81ea\u52a8\u5f00\u59cb\u4ea4\u4e92\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7\u5c06 ",(0,r.jsx)(e.code,{children:"manualStart"})," \u9009\u9879\u8bbe\u7f6e\u4e3a ",(0,r.jsx)(e.code,{children:"true"})," \u6765\u7981\u7528\u67d0\u4e2a\u52a8\u4f5c\u7684\u81ea\u52a8\u542f\u52a8\u3002"]}),"\n",(0,r.jsx)(e.pre,{children:(0,r.jsx)(e.code,{className:"language-js",children:"interact(target)\n  .draggable({\n    manualStart: true,\n  })\n  .on('doubletap', function (event) {\n    var interaction = event.interaction\n\n    if (!interaction.interacting()) {\n      interaction.start(\n        { name: 'drag' },\n        event.interactable,\n        event.currentTarget,\n      )\n    }\n  })\n"})}),"\n",(0,r.jsxs)(e.p,{children:["\u5f53\u8bbe\u7f6e ",(0,r.jsx)(e.code,{children:"manualStart: true"})," \u65f6\uff0c\u4f60\u9700\u8981\u5728\u6307\u9488\u4e8b\u4ef6\u76d1\u542c\u5668\u4e2d\u901a\u8fc7\u8c03\u7528 ",(0,r.jsx)(e.code,{children:"event.interaction.start(actionInfo)"})," \u6765\u624b\u52a8\u542f\u52a8\u52a8\u4f5c\u3002\u7531\u4e8e\u5e93\u4e0d\u518d\u51b3\u5b9a\u4f55\u65f6\u542f\u52a8\u52a8\u4f5c\uff0c\u56e0\u6b64\u5149\u6807\u5c06\u4e0d\u4f1a\u81ea\u52a8\u8bbe\u7f6e\u3002"]})]})}function d(t={}){const{wrapper:e}={...(0,s.R)(),...t.components};return e?(0,r.jsx)(e,{...t,children:(0,r.jsx)(u,{...t})}):u(t)}},8453:(t,e,n)=>{n.d(e,{R:()=>o,x:()=>c});var a=n(6540);const r={},s=a.createContext(r);function o(t){const e=a.useContext(s);return a.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(r):t.components||r:o(t.components),a.createElement(s.Provider,{value:e},t.children)}}}]);