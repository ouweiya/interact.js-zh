"use strict";(self.webpackChunkinteract_js_zh=self.webpackChunkinteract_js_zh||[]).push([[624],{2505:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>l,contentTitle:()=>d,default:()=>j,frontMatter:()=>s,metadata:()=>c,toc:()=>o});const c=JSON.parse('{"id":"restriction","title":"\u9650\u5236","description":"interact.js \u901a\u8fc7 interact.modifiers \u5bf9\u8c61\u63d0\u4f9b\u4e863\u79cd\u9650\u5236\u4fee\u9970\u7b26\uff1a","source":"@site/docs/restriction.md","sourceDirName":".","slug":"/restriction","permalink":"/interact.js-zh/docs/restriction","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u9650\u5236"},"sidebar":"tutorialSidebar","previous":{"title":"\u5438\u9644","permalink":"/interact.js-zh/docs/snapping"},"next":{"title":"\u60ef\u6027","permalink":"/interact.js-zh/docs/inertia"}}');var t=n(4848),i=n(8453);const s={title:"\u9650\u5236"},d=void 0,l={},o=[{value:"<code>restrict()</code>",id:"restrict",level:2},{value:"<code>restrictRect()</code>",id:"restrictrect",level:3},{value:"<code>elementRect</code>",id:"elementrect",level:3},{value:"<code>restrictSize()</code>",id:"restrictsize",level:2},{value:"<code>restrictEdges()</code>",id:"restrictedges",level:2}];function h(e){const r={code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(r.p,{children:["interact.js \u901a\u8fc7 ",(0,t.jsx)(r.code,{children:"interact.modifiers"})," \u5bf9\u8c61\u63d0\u4f9b\u4e863\u79cd\u9650\u5236\u4fee\u9970\u7b26\uff1a"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\u57fa\u4e8e\u6307\u9488\u5750\u6807\u7684 ",(0,t.jsx)(r.code,{children:"restrict"})]}),"\n",(0,t.jsxs)(r.li,{children:["\u57fa\u4e8e\u5143\u7d20\u77e9\u5f62\u7684 ",(0,t.jsx)(r.code,{children:"restrictRect"})]}),"\n",(0,t.jsxs)(r.li,{children:["\u57fa\u4e8e\u5143\u7d20\u5927\u5c0f\u7684 ",(0,t.jsx)(r.code,{children:"restrictSize"}),"\uff08\u4ec5\u7528\u4e8e\u8c03\u6574\u5927\u5c0f\uff09"]}),"\n",(0,t.jsxs)(r.li,{children:["\u57fa\u4e8e\u5143\u7d20\u8fb9\u7f18\u7684 ",(0,t.jsx)(r.code,{children:"restrictEdges"}),"\uff08\u4ec5\u7528\u4e8e\u8c03\u6574\u5927\u5c0f\uff09"]}),"\n"]}),"\n",(0,t.jsx)(r.h2,{id:"restrict",children:(0,t.jsx)(r.code,{children:"restrict()"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"interact(target).draggable({\n  modifiers: [\n    interact.modifiers.restrict({\n      restriction: 'parent',\n      endOnly: true\n    })\n  ]\n})\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"restriction"})," \u503c\u7528\u4e8e\u6307\u5b9a\u52a8\u4f5c\u5c06\u88ab\u9650\u5236\u5728\u7684\u533a\u57df\u3002\n\u8be5\u503c\u53ef\u4ee5\u662f\uff1a"]}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["\u4e00\u4e2a\u5305\u542b ",(0,t.jsx)(r.code,{children:"top"}),"\u3001",(0,t.jsx)(r.code,{children:"left"}),"\u3001",(0,t.jsx)(r.code,{children:"bottom"})," \u548c ",(0,t.jsx)(r.code,{children:"right"})," \u6216 ",(0,t.jsx)(r.code,{children:"x"}),"\u3001",(0,t.jsx)(r.code,{children:"y"}),"\u3001",(0,t.jsx)(r.code,{children:"width"})," \u548c ",(0,t.jsx)(r.code,{children:"height"})," \u7684\u77e9\u5f62\u5bf9\u8c61"]}),"\n",(0,t.jsx)(r.li,{children:"\u4e00\u4e2a\u5143\u7d20\uff0c\u5176\u5c3a\u5bf8\u5c06\u88ab\u7528\u4f5c\u9650\u5236\u533a\u57df"}),"\n",(0,t.jsxs)(r.li,{children:["\u4e00\u4e2a\u63a5\u6536 ",(0,t.jsx)(r.code,{children:"(x, y, element)"})," \u53c2\u6570\u5e76\u8fd4\u56de\u77e9\u5f62\u6216\u5143\u7d20\u7684\u51fd\u6570"]}),"\n",(0,t.jsxs)(r.li,{children:["\u4ee5\u4e0b\u5b57\u7b26\u4e32\u4e4b\u4e00\uff1a","\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"'self'"})," \u2013 \u9650\u5236\u5728\u76ee\u6807\u5143\u7d20\u7684\u77e9\u5f62\u533a\u57df\u5185"]}),"\n",(0,t.jsxs)(r.li,{children:[(0,t.jsx)(r.code,{children:"'parent'"})," \u2013 \u9650\u5236\u5728\u5143\u7d20\u7236\u8282\u70b9\u7684\u77e9\u5f62\u533a\u57df\u5185"]}),"\n",(0,t.jsx)(r.li,{children:"CSS\u9009\u62e9\u5668\u5b57\u7b26\u4e32 \u2013 \u5982\u679c\u76ee\u6807\u5143\u7d20\u7684\u67d0\u4e2a\u7236\u5143\u7d20\u5339\u914d\u6b64\u9009\u62e9\u5668\uff0c\u5c06\u4f7f\u7528\u8be5\u5143\u7d20\u7684\u77e9\u5f62\u533a\u57df\u4f5c\u4e3a\u9650\u5236\u533a\u57df"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(r.h3,{id:"restrictrect",children:(0,t.jsx)(r.code,{children:"restrictRect()"})}),"\n",(0,t.jsxs)(r.p,{children:["\u4f7f\u7528 ",(0,t.jsx)(r.code,{children:"restrict"})," \u53d8\u4f53\u65f6\uff0c\u9650\u5236\u9ed8\u8ba4\u662f\u76f8\u5bf9\u4e8e\u6307\u9488\u5750\u6807\u7684\uff0c\u8fd9\u6837\u52a8\u4f5c\u5750\u6807\uff08\u800c\u4e0d\u662f\u5143\u7d20\u5c3a\u5bf8\uff09\u5c06\u88ab\u9650\u5236\u5728\u9650\u5236\u533a\u57df\u5185\u3002\u4f60\u53ef\u4ee5\u4f7f\u7528 ",(0,t.jsx)(r.code,{children:"restrictRect"})," \u53d8\u4f53\uff0c\u8fd9\u6837\u5728\u62d6\u52a8\u65f6\u4f1a\u8003\u8651\u5143\u7d20\u7684\u8fb9\u7f18\u3002"]}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"interact(target).draggable({\n  modifiers: [\n    interact.modifiers.restrictRect({\n      restriction: 'parent'\n    })\n  ]\n})\n"})}),"\n",(0,t.jsx)(r.p,{children:"\u5982\u679c\u76ee\u6807\u5143\u7d20\u5927\u4e8e\u9650\u5236\u533a\u57df\uff0c\u5219\u5141\u8bb8\u5143\u7d20\u5728\u9650\u5236\u533a\u57df\u5185\u79fb\u52a8\u3002"}),"\n",(0,t.jsx)(r.h3,{id:"elementrect",children:(0,t.jsx)(r.code,{children:"elementRect"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"restrictRect"})," \u4e0e ",(0,t.jsx)(r.code,{children:"restrict"})," \u76f8\u540c\uff0c\u4f46 ",(0,t.jsx)(r.code,{children:"elementRect"})," \u9009\u9879\u9ed8\u8ba4\u8bbe\u7f6e\u4e3a ",(0,t.jsx)(r.code,{children:"{ left: 0, right: 0, top: 1, bottom: 1 }"}),"\u3002",(0,t.jsx)(r.code,{children:"elementRect"})," \u9009\u9879\u901a\u8fc7\u4ece\u5de6\u4e0a\u89d2\u8fb9\u7f18\u5230\u53f3\u4e0b\u89d2\u7684\u6807\u91cf\u503c\u6765\u6307\u5b9a\u8981\u8003\u8651\u7684\u5143\u7d20\u8fb9\u7f18\u533a\u57df\u3002"]}),"\n",(0,t.jsxs)(r.p,{children:["\u5bf9\u4e8e ",(0,t.jsx)(r.code,{children:"left"})," \u548c ",(0,t.jsx)(r.code,{children:"right"})," \u5c5e\u6027\uff0c",(0,t.jsx)(r.code,{children:"0"})," \u8868\u793a\u5143\u7d20\u7684\u5de6\u8fb9\u7f18\uff0c",(0,t.jsx)(r.code,{children:"1"})," \u8868\u793a\u53f3\u8fb9\u7f18\u3002\u5bf9\u4e8e ",(0,t.jsx)(r.code,{children:"top"})," \u548c ",(0,t.jsx)(r.code,{children:"bottom"}),"\uff0c",(0,t.jsx)(r.code,{children:"0"})," \u8868\u793a\u5143\u7d20\u7684\u9876\u90e8\u8fb9\u7f18\uff0c",(0,t.jsx)(r.code,{children:"1"})," \u8868\u793a\u5e95\u90e8\u3002"]}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"{ top: 0.25, left: 0.25, bottom: 0.75, right: 0.75 }"})," \u5c06\u5141\u8bb8\u5143\u7d20\u56db\u5206\u4e4b\u4e00\u7684\u90e8\u5206\u60ac\u6302\u5728\u9650\u5236\u8fb9\u7f18\u4e4b\u5916\u3002"]}),"\n",(0,t.jsx)(r.h2,{id:"restrictsize",children:(0,t.jsx)(r.code,{children:"restrictSize()"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"interact(target).resizable({\n  modifiers: [\n    interact.modifiers.restrictSize({\n      min: { width: 100, height: 100 },\n      max: { width: 500, height: 500 }\n    })\n  ]\n})\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"restrictSize"})," \u5141\u8bb8\u4f60\u6307\u5b9a\u8c03\u6574\u5927\u5c0f\u65f6\u76ee\u6807\u5143\u7d20\u5fc5\u987b\u5177\u6709\u7684\u6700\u5c0f\u548c\u6700\u5927\u5c3a\u5bf8\u3002"]}),"\n",(0,t.jsx)(r.h2,{id:"restrictedges",children:(0,t.jsx)(r.code,{children:"restrictEdges()"})}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-javascript",children:"interact(target).resizable({\n  modifiers: [\n    interact.modifiers.restrictEdges({\n      inner: {\n        left: 100,  // \u5de6\u8fb9\u7f18\u5fc5\u987b <= 100\n        right: 200  // \u53f3\u8fb9\u7f18\u5fc5\u987b >= 200\n      }\n      outer: {\n        left: 0,    // \u5de6\u8fb9\u7f18\u5fc5\u987b >= 0\n        right: 300  // \u53f3\u8fb9\u7f18\u5fc5\u987b <= 300\n      }\n    })\n  ]\n})\n"})}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.code,{children:"restrictEdges"})," \u5141\u8bb8\u4f60\u6307\u5b9a\u8c03\u6574\u5927\u5c0f\u65f6\u76ee\u6807\u5143\u7d20\u5fc5\u987b\u5177\u6709\u7684 ",(0,t.jsx)(r.code,{children:"inner"}),"\uff08\u5185\u90e8\uff09\u548c ",(0,t.jsx)(r.code,{children:"outer"}),"\uff08\u5916\u90e8\uff09\u5c3a\u5bf8\u3002\u4f60\u53ef\u4ee5\u5c06 ",(0,t.jsx)(r.code,{children:"inner"})," \u7406\u89e3\u4e3a\u8bbe\u7f6e\u5143\u7d20\u7684\u6700\u5c0f\u5c3a\u5bf8\uff0c\u5c06 ",(0,t.jsx)(r.code,{children:"outer"})," \u7406\u89e3\u4e3a\u6700\u5927\u5c3a\u5bf8\u3002"]})]})}function j(e={}){const{wrapper:r}={...(0,i.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},8453:(e,r,n)=>{n.d(r,{R:()=>s,x:()=>d});var c=n(6540);const t={},i=c.createContext(t);function s(e){const r=c.useContext(i);return c.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function d(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:s(e.components),c.createElement(i.Provider,{value:r},e.children)}}}]);