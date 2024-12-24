"use strict";(self.webpackChunkinteract_js_zh=self.webpackChunkinteract_js_zh||[]).push([[359],{7838:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>a,contentTitle:()=>o,default:()=>p,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"modifiers","title":"\u4fee\u6539\u5668","description":"interact \u7684 modifiers \u5141\u8bb8\u4f60\u6539\u53d8\u52a8\u4f5c\u4e8b\u4ef6\u7684\u5750\u6807\u3002\u4f20\u9012\u7ed9\u52a8\u4f5c\u65b9\u6cd5\u7684\u9009\u9879\u5bf9\u8c61\u53ef\u4ee5\u5305\u542b\u4e00\u4e2a modifiers \u6570\u7ec4\uff0c\u8fd9\u4e9b\u4fee\u6539\u5668\u5c06\u88ab\u5e94\u7528\u5230\u8be5\u52a8\u4f5c\u7c7b\u578b\u7684\u4e8b\u4ef6\u4e0a\u3002\u6570\u7ec4\u4e2d\u7684\u4fee\u6539\u5668\u4f1a\u6309\u987a\u5e8f\u4f9d\u6b21\u5e94\u7528\uff0c\u5b83\u4eec\u7684\u987a\u5e8f\u53ef\u80fd\u4f1a\u5f71\u54cd\u6700\u7ec8\u7ed3\u679c\u3002","source":"@site/docs/modifiers.md","sourceDirName":".","slug":"/modifiers","permalink":"/interact.js-zh/docs/modifiers","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u4fee\u6539\u5668"},"sidebar":"tutorialSidebar","previous":{"title":"\u4e8b\u4ef6","permalink":"/interact.js-zh/docs/events"},"next":{"title":"\u5438\u9644","permalink":"/interact.js-zh/docs/snapping"}}');var s=t(4848),i=t(8453);const c={title:"\u4fee\u6539\u5668"},o=void 0,a={},d=[];function l(e){const n={a:"a",code:"code",p:"p",pre:"pre",strong:"strong",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"// \u521b\u5efa\u4e00\u4e2arestrict\u4fee\u6539\u5668\u6765\u9632\u6b62\u5143\u7d20\u88ab\u62d6\u62fd\u51fa\u5176\u7236\u5143\u7d20\nconst restrictToParent = interact.modifiers.restrict({\n  restriction: 'parent',\n  elementRect: { left: 0, right: 0, top: 1, bottom: 1 },\n})\n\n// \u521b\u5efa\u4e00\u4e2asnap\u4fee\u6539\u5668\uff0c\u5c06\u4e8b\u4ef6\u5750\u6807\u4fee\u6539\u4e3a\u7f51\u683c\u6700\u8fd1\u7684\u89d2\u70b9\nconst snap100x100 = interact.modifiers.snap({\n  targets: [interact.snappers.grid({ x: 100, y: 100 })],\n  relativePoints: [{ x: 0.5, y: 0.5 }],\n})\n\ninteract(target)\n  .draggable({\n    // \u5c06restrict\u548csnap\u4fee\u6539\u5668\u4f9d\u6b21\u5e94\u7528\u4e8e\u62d6\u62fd\u4e8b\u4ef6\n    modifiers: [restrictToParent, snap100x100],\n  })\n  .on('dragmove', event => console.log(event.pageX, event.pageY))\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"interact"})," \u7684 ",(0,s.jsx)(n.code,{children:"modifiers"})," \u5141\u8bb8\u4f60\u6539\u53d8\u52a8\u4f5c\u4e8b\u4ef6\u7684\u5750\u6807\u3002\u4f20\u9012\u7ed9\u52a8\u4f5c\u65b9\u6cd5\u7684\u9009\u9879\u5bf9\u8c61\u53ef\u4ee5\u5305\u542b\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"modifiers"})," \u6570\u7ec4\uff0c\u8fd9\u4e9b\u4fee\u6539\u5668\u5c06\u88ab\u5e94\u7528\u5230\u8be5\u52a8\u4f5c\u7c7b\u578b\u7684\u4e8b\u4ef6\u4e0a\u3002",(0,s.jsx)(n.strong,{children:"\u6570\u7ec4\u4e2d\u7684\u4fee\u6539\u5668\u4f1a\u6309\u987a\u5e8f\u4f9d\u6b21\u5e94\u7528"}),"\uff0c\u5b83\u4eec\u7684\u987a\u5e8f\u53ef\u80fd\u4f1a\u5f71\u54cd\u6700\u7ec8\u7ed3\u679c\u3002"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:"const snapAtEnd = interact.modifiers.snap({\n  endOnly: true,\n  targets: [/* ... */],\n})\n"})}),"\n",(0,s.jsxs)(n.p,{children:["\u901a\u8fc7\u8bbe\u7f6e\u4fee\u6539\u5668\u7684 ",(0,s.jsx)(n.code,{children:"endOnly"})," \u9009\u9879\u4e3a ",(0,s.jsx)(n.code,{children:"true"}),"\uff0c\u53ef\u4ee5\u8ba9\u4fee\u6539\u5668\u4ec5\u5e94\u7528\u4e8e\u4ea4\u4e92\u7684\u6700\u540e\u4e00\u4e2a\u79fb\u52a8\u4e8b\u4ef6\u3002\u5f53\u4e00\u4e2a ",(0,s.jsx)(n.code,{children:"endOnly"})," \u4fee\u6539\u5668\u4e0e\u542f\u7528\u4e86 ",(0,s.jsx)(n.code,{children:"inertia"})," \u7684\u52a8\u4f5c\u4e00\u8d77\u4f7f\u7528\u65f6\uff0c\u4e8b\u4ef6\u5750\u6807\u5c06\u4ece\u677e\u5f00\u65f6\u7684\u5750\u6807\u5e73\u6ed1\u8fc7\u6e21\u5230\u4fee\u6539\u540e\u7684\u5750\u6807\u3002"]}),"\n",(0,s.jsxs)(n.p,{children:["interact.js \u5185\u7f6e\u4e86\u51e0\u79cd\u4e0d\u540c\u7c7b\u578b\u7684\u4fee\u6539\u5668\uff0c\u7528\u4e8e",(0,s.jsx)(n.a,{href:"/docs/snapping",children:"\u5bf9\u9f50\u5438\u9644"}),"\u548c",(0,s.jsx)(n.a,{href:"/docs/restriction",children:"\u9650\u5236"}),"\u5143\u7d20\u3002"]})]})}function p(e={}){const{wrapper:n}={...(0,i.R)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(l,{...e})}):l(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>o});var r=t(6540);const s={},i=r.createContext(s);function c(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:c(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);