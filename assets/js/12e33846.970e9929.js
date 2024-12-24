"use strict";(self.webpackChunkinteract_js_zh=self.webpackChunkinteract_js_zh||[]).push([[129],{4930:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>a,default:()=>j,frontMatter:()=>c,metadata:()=>r,toc:()=>l});const r=JSON.parse('{"id":"tooling","title":"\u5de5\u5177\u548c\u4f18\u5316","description":"\u529f\u80fd\u9009\u62e9","source":"@site/docs/tooling.md","sourceDirName":".","slug":"/tooling","permalink":"/interact.js-zh/docs/tooling","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u5de5\u5177\u548c\u4f18\u5316"},"sidebar":"tutorialSidebar","previous":{"title":"Reflow\uff08\u56de\u6d41\uff09","permalink":"/interact.js-zh/docs/reflow"},"next":{"title":"\u5e38\u89c1\u95ee\u9898","permalink":"/interact.js-zh/docs/faq"}}');var i=t(4848),s=t(8453);const c={title:"\u5de5\u5177\u548c\u4f18\u5316"},a=void 0,o={},l=[{value:"\u529f\u80fd\u9009\u62e9",id:"\u529f\u80fd\u9009\u62e9",level:2},{value:"<code>@interactjs/dev-tools</code>",id:"interactjsdev-tools",level:2},{value:"\u751f\u4ea7\u73af\u5883\u4f18\u5316",id:"\u751f\u4ea7\u73af\u5883\u4f18\u5316",level:2},{value:"Babel \u63d2\u4ef6",id:"babel-\u63d2\u4ef6",level:3},{value:"\u4e0d\u4f7f\u7528\u6784\u5efa\u5de5\u5177",id:"\u4e0d\u4f7f\u7528\u6784\u5efa\u5de5\u5177",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h2,{id:"\u529f\u80fd\u9009\u62e9",children:"\u529f\u80fd\u9009\u62e9"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-sh",children:"# \u4ec5\u5b89\u88c5\u4f60\u9700\u8981\u7684\u529f\u80fd\n$ npm install --save @interactjs/interact \\\n  @interactjs/auto-start \\\n  @interactjs/actions \\\n  @interactjs/modifiers \\\n  @interactjs/dev-tools\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import '@interactjs/auto-start'\nimport '@interactjs/actions/drag'\nimport '@interactjs/actions/resize'\nimport '@interactjs/modifiers'\nimport '@interactjs/dev-tools'\nimport interact from '@interactjs/interact'\n\ninteract('.item').draggable({\n  listeners: {\n    move (event) {\n      console.log(event.pageX, event.pageY)\n    },\n  },\n})\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5c06\u672a\u9650\u5b9a\u4f5c\u7528\u57df\u7684 ",(0,i.jsx)(n.code,{children:"interactjs"})," npm \u5305\u6dfb\u52a0\u5230\u4f60\u7684\u9879\u76ee\u4e2d\u662f\u5f00\u59cb\u4f7f\u7528\u8be5\u5e93\u6700\u7b80\u5355\u7684\u65b9\u5f0f\uff0c\u56e0\u4e3a\u5b83\u5df2\u7ecf\u5305\u542b\u4e86\u6240\u6709\u9884\u5148\u6253\u5305\u5e76\u7f16\u8bd1\u4e3a ES5 \u8bed\u6cd5\u7684\u529f\u80fd\u3002\u4f46\u662f\uff0c\u8fd9\u53ef\u80fd\u4f1a\u5bfc\u81f4\u8bb8\u591a\u672a\u4f7f\u7528\u7684\u529f\u80fd\u589e\u52a0\u4f60\u7684 JS \u8d1f\u8f7d\u5927\u5c0f\u3002"]}),"\n",(0,i.jsxs)(n.p,{children:["\u4e3a\u4e86\u83b7\u5f97\u66f4\u7cbe\u7b80\u7684\u6784\u5efa\uff0c\u4f60\u53ef\u4ee5\u5bfc\u5165\u6bcf\u4e2a\u6240\u9700\u529f\u80fd\u7684\u5305\u3002\u67e5\u770b ",(0,i.jsx)(n.a,{href:"/docs/installation#npm-streamlined",children:"npm \u7cbe\u7b80\u5b89\u88c5\u6587\u6863"})," \u4e86\u89e3\u66f4\u591a\u8be6\u60c5\uff0c\u5305\u62ec\u53ef\u7528\u5305\u7684\u5217\u8868\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"interactjsdev-tools",children:(0,i.jsx)(n.code,{children:"@interactjs/dev-tools"})}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"@interactjs/dev-tools"})," \u5305\u63d0\u4f9b\u4e86\u4e00\u4e9b\u63d0\u793a\uff0c\u53ef\u4ee5\u5e2e\u52a9\u4f60\u5728\u5f00\u53d1\u5e94\u7528\u7a0b\u5e8f\u65f6\u907f\u514d\u5e38\u89c1\u95ee\u9898\uff08\u4f8b\u5982\u7f3a\u5c11\u4e8b\u4ef6\u5904\u7406\u7a0b\u5e8f\u548c\u6709\u7528\u7684 CSS \u6837\u5f0f\uff09\u3002\u867d\u7136\u8fd9\u4e9b\u63d0\u793a\u5f88\u6709\u5e2e\u52a9\uff0c\u4f46\u6700\u597d\u907f\u514d\u5728\u751f\u4ea7\u90e8\u7f72\u4e2d\u5305\u542b\u5b83\u4eec\u3002\u4ee5\u4e0b\u662f\u4e00\u4e9b\u5b9e\u73b0\u65b9\u6cd5\u3002"]}),"\n",(0,i.jsx)(n.h2,{id:"\u751f\u4ea7\u73af\u5883\u4f18\u5316",children:"\u751f\u4ea7\u73af\u5883\u4f18\u5316"}),"\n",(0,i.jsx)(n.h3,{id:"babel-\u63d2\u4ef6",children:"Babel \u63d2\u4ef6"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'// babel \u914d\u7f6e\n{\n  "env": {\n    "production": {\n      "plugins": [\n        "@interactjs/dev-tools/babel-plugin-prod",\n      ]\n    }\n  }\n}\n'})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// \u6e90\u6587\u4ef6\nimport '@interactjs/actions/drag'\nimport interact from '@interactjs/interact'\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"// \u7ed3\u679c\nimport '@interactjs/actions/drag/index.prod'\nimport interact from '@interactjs/interact/index.prod'\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u5728\u90e8\u7f72\u5de5\u4f5c\u6d41\u7a0b\u4e2d\u4f7f\u7528 babel\uff0c\u53ea\u9700\u5728\u751f\u4ea7\u73af\u5883\u7684 babel \u914d\u7f6e\u7684\u63d2\u4ef6\u90e8\u5206\u6dfb\u52a0 ",(0,i.jsx)(n.code,{children:"@interactjs/dev-tools/babel-plugin-prod"}),"\uff0c\u6240\u6709 ",(0,i.jsx)(n.code,{children:"@interactjs/**"})," \u5bfc\u5165\u90fd\u5c06\u66f4\u6539\u4e3a\u4f18\u5316\u540e\u7684\u751f\u4ea7\u7248\u672c\uff0c\u5e76\u53bb\u9664\u5f00\u53d1\u63d0\u793a\u3002"]}),"\n",(0,i.jsx)(n.h3,{id:"\u4e0d\u4f7f\u7528\u6784\u5efa\u5de5\u5177",children:"\u4e0d\u4f7f\u7528\u6784\u5efa\u5de5\u5177"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:"import '@interactjs/actions/drag/index.prod'\nimport interact from '@interactjs/interact/index.prod'\n"})}),"\n",(0,i.jsxs)(n.p,{children:["\u5982\u679c\u4f60\u4e0d\u4f7f\u7528 babel\uff0c\u90a3\u4e48\u4f60\u9700\u8981\u4fee\u6539\u5bfc\u5165\u8bed\u53e5\u4ee5\u5305\u542b ",(0,i.jsx)(n.code,{children:".prod"})," \u6269\u5c55\u540d\u3002\u5bf9\u4e8e\u76ee\u5f55\u7684\u7d22\u5f15\u6587\u4ef6\uff0c\u4f60\u9700\u8981\u6dfb\u52a0\u6587\u4ef6\u540d\uff08\u4f8b\u5982\uff1a",(0,i.jsx)(n.code,{children:"@interactjs/actions -> @interactjs/actions/index.prod"}),"\uff09\u3002"]})]})}function j(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},8453:(e,n,t)=>{t.d(n,{R:()=>c,x:()=>a});var r=t(6540);const i={},s=r.createContext(i);function c(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);