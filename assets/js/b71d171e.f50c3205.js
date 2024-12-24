"use strict";(self.webpackChunkinteract_js_zh=self.webpackChunkinteract_js_zh||[]).push([[915],{9104:(e,n,d)=>{d.r(n),d.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>a,frontMatter:()=>s,metadata:()=>r,toc:()=>o});const r=JSON.parse('{"id":"dropzone","title":"\u653e\u7f6e\u533a\u57df","description":"\u653e\u7f6e\u533a\u57df\u5b9a\u4e49\u4e86\u53ef\u62d6\u62fd\u76ee\u6807\u53ef\u4ee5\\"\u653e\u7f6e\\"\u7684\u5143\u7d20\u4ee5\u53ca\u54ea\u4e9b\u5143\u7d20\u4f1a\u88ab\u63a5\u53d7\u3002\u4e0e\u62d6\u62fd\u4e8b\u4ef6\u7c7b\u4f3c\uff0c\u653e\u7f6e\u4e8b\u4ef6\u4e0d\u4f1a\u4fee\u6539 DOM \u6765\u91cd\u65b0\u8bbe\u7f6e\u5143\u7d20\u7684\u7236\u7ea7\u5173\u7cfb\u3002\u5982\u679c\u9700\u8981\u8fd9\u6837\u7684\u529f\u80fd\uff0c\u4f60\u9700\u8981\u5728\u81ea\u5df1\u7684\u4e8b\u4ef6\u76d1\u542c\u5668\u4e2d\u5b9e\u73b0\u3002","source":"@site/docs/dropzone.md","sourceDirName":".","slug":"/dropzone","permalink":"/interact.js-zh/docs/dropzone","draft":false,"unlisted":false,"tags":[],"version":"current","frontMatter":{"title":"\u653e\u7f6e\u533a\u57df"},"sidebar":"tutorialSidebar","previous":{"title":"\u624b\u52bf\u64cd\u4f5c","permalink":"/interact.js-zh/docs/gesturable"},"next":{"title":"\u4ea4\u4e92\u9009\u9879","permalink":"/interact.js-zh/docs/action-options"}}');var c=d(4848),t=d(8453);const s={title:"\u653e\u7f6e\u533a\u57df"},i=void 0,l={},o=[{value:"\u653e\u7f6e\u533a\u57df\u4e8b\u4ef6",id:"\u653e\u7f6e\u533a\u57df\u4e8b\u4ef6",level:2},{value:"<code>accept</code>",id:"accept",level:2},{value:"<code>checker</code>",id:"checker",level:2}];function h(e){const n={code:"code",h2:"h2",li:"li",p:"p",pre:"pre",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,t.R)(),...e.components};return(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(n.p,{children:'\u653e\u7f6e\u533a\u57df\u5b9a\u4e49\u4e86\u53ef\u62d6\u62fd\u76ee\u6807\u53ef\u4ee5"\u653e\u7f6e"\u7684\u5143\u7d20\u4ee5\u53ca\u54ea\u4e9b\u5143\u7d20\u4f1a\u88ab\u63a5\u53d7\u3002\u4e0e\u62d6\u62fd\u4e8b\u4ef6\u7c7b\u4f3c\uff0c\u653e\u7f6e\u4e8b\u4ef6\u4e0d\u4f1a\u4fee\u6539 DOM \u6765\u91cd\u65b0\u8bbe\u7f6e\u5143\u7d20\u7684\u7236\u7ea7\u5173\u7cfb\u3002\u5982\u679c\u9700\u8981\u8fd9\u6837\u7684\u529f\u80fd\uff0c\u4f60\u9700\u8981\u5728\u81ea\u5df1\u7684\u4e8b\u4ef6\u76d1\u542c\u5668\u4e2d\u5b9e\u73b0\u3002'}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"interact(dropTarget)\n  .dropzone({\n    ondrop: function (event) {\n      alert(event.relatedTarget.id\n            + ' \u88ab\u653e\u7f6e\u5230\u4e86 '\n            + event.target.id)\n    }\n  })\n  .on('dropactivate', function (event) {\n    event.target.classList.add('drop-activated')\n  })\n"})}),"\n",(0,c.jsx)(n.h2,{id:"\u653e\u7f6e\u533a\u57df\u4e8b\u4ef6",children:"\u653e\u7f6e\u533a\u57df\u4e8b\u4ef6"}),"\n",(0,c.jsx)(n.p,{children:"\u653e\u7f6e\u533a\u57df\u4e8b\u4ef6\u662f\u5177\u6709\u4ee5\u4e0b\u5c5e\u6027\u7684\u666e\u901a\u5bf9\u8c61\uff1a"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u5c5e\u6027"}),(0,c.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"target"})}),(0,c.jsx)(n.td,{children:"\u653e\u7f6e\u533a\u57df\u5143\u7d20"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"dropzone"})}),(0,c.jsx)(n.td,{children:"\u653e\u7f6e\u533a\u57df\u4ea4\u4e92\u5bf9\u8c61"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"relatedTarget"})}),(0,c.jsx)(n.td,{children:"\u6b63\u5728\u88ab\u62d6\u62fd\u7684\u5143\u7d20"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"draggable"})}),(0,c.jsx)(n.td,{children:"\u6b63\u5728\u88ab\u62d6\u62fd\u7684\u4ea4\u4e92\u5bf9\u8c61"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"dragEvent"})}),(0,c.jsxs)(n.td,{children:["\u76f8\u5173\u7684\u62d6\u62fd\u4e8b\u4ef6 \u2013 ",(0,c.jsx)(n.code,{children:"drag{start,move,end}"})]})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"timeStamp"})}),(0,c.jsx)(n.td,{children:"\u4e8b\u4ef6\u53d1\u751f\u7684\u65f6\u95f4"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"type"})}),(0,c.jsx)(n.td,{children:"\u4e8b\u4ef6\u7c7b\u578b"})]})]})]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"interact('.dropzone').dropzone({\n  accept: '.drag0, .drag1',\n});\n"})}),"\n",(0,c.jsx)(n.h2,{id:"accept",children:(0,c.jsx)(n.code,{children:"accept"})}),"\n",(0,c.jsxs)(n.p,{children:["\u653e\u7f6e\u533a\u57df\u7684 ",(0,c.jsx)(n.code,{children:"accept"})," \u9009\u9879\u662f\u4e00\u4e2a CSS \u9009\u62e9\u5668\u6216\u5143\u7d20\uff0c\u88ab\u62d6\u62fd\u7684\u5143\u7d20\u5fc5\u987b\u5339\u914d\u8fd9\u4e2a\u9009\u62e9\u5668\u624d\u80fd\u89e6\u53d1\u653e\u7f6e\u4e8b\u4ef6\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"interact(target).dropzone({\n  overlap: 0.25\n});\n"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"overlap"})," \u9009\u9879\u8bbe\u7f6e\u5982\u4f55\u68c0\u67e5\u653e\u7f6e\u64cd\u4f5c\u3002\u5141\u8bb8\u7684\u503c\u5305\u62ec\uff1a"]}),"\n",(0,c.jsxs)(n.ul,{children:["\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"'pointer'"})," \u2013 \u6307\u9488\u5fc5\u987b\u5728\u653e\u7f6e\u533a\u57df\u4e0a\u65b9\uff08\u9ed8\u8ba4\u503c\uff09"]}),"\n",(0,c.jsxs)(n.li,{children:[(0,c.jsx)(n.code,{children:"'center'"})," \u2013 \u53ef\u62d6\u62fd\u5143\u7d20\u7684\u4e2d\u5fc3\u5fc5\u987b\u5728\u653e\u7f6e\u533a\u57df\u4e0a\u65b9"]}),"\n",(0,c.jsxs)(n.li,{children:["\u4ece 0-1 \u7684\u6570\u5b57\uff0c\u8868\u793a\uff08\u76f8\u4ea4\u9762\u79ef\uff09/\uff08\u53ef\u62d6\u62fd\u533a\u57df\u9762\u79ef\uff09\u3002\u4f8b\u5982 ",(0,c.jsx)(n.code,{children:"0.5"})," \u8868\u793a\u5f53\u53ef\u62d6\u62fd\u5143\u7d20\u7684\u4e00\u534a\u9762\u79ef\u5728\u653e\u7f6e\u533a\u57df\u4e0a\u65b9\u65f6\u624d\u4f1a\u89e6\u53d1\u653e\u7f6e"]}),"\n"]}),"\n",(0,c.jsx)(n.h2,{id:"checker",children:(0,c.jsx)(n.code,{children:"checker"})}),"\n",(0,c.jsxs)(n.p,{children:[(0,c.jsx)(n.code,{children:"checker"})," \u9009\u9879\u662f\u4e00\u4e2a\u51fd\u6570\uff0c\u4f60\u53ef\u4ee5\u8bbe\u7f6e\u5b83\u6765\u989d\u5916\u68c0\u67e5\u88ab\u62d6\u62fd\u7684\u5143\u7d20\u662f\u5426\u53ef\u4ee5\u653e\u7f6e\u5230\u653e\u7f6e\u533a\u57df\u4e2d\u3002"]}),"\n",(0,c.jsx)(n.pre,{children:(0,c.jsx)(n.code,{className:"language-javascript",children:"interact(target).dropzone({\n  checker: function (\n    dragEvent,         // \u76f8\u5173\u7684 dragmove \u6216 dragend\n    event,             // \u89e6\u6478\u3001\u6307\u9488\u6216\u9f20\u6807\u4e8b\u4ef6\n    dropped,           // \u5e03\u5c14\u503c\uff0c\u9ed8\u8ba4\u68c0\u67e5\u5668\u7ed3\u679c\n    dropzone,          // \u653e\u7f6e\u533a\u57df\u4ea4\u4e92\u5bf9\u8c61\n    dropzoneElement,   // \u653e\u7f6e\u533a\u57df\u5143\u7d20\n    draggable,         // \u53ef\u62d6\u62fd\u4ea4\u4e92\u5bf9\u8c61\n    draggableElement   // \u53ef\u62d6\u62fd\u5143\u7d20\n  ) {\n\n    // \u53ea\u5141\u8bb8\u653e\u7f6e\u5230\u7a7a\u7684\u653e\u7f6e\u533a\u57df\u5143\u7d20\u4e2d\n    return dropped && !dropElement.hasChildNodes();\n  }\n});\n"})}),"\n",(0,c.jsx)(n.p,{children:"checker \u51fd\u6570\u63a5\u53d7\u4ee5\u4e0b\u53c2\u6570\uff1a"}),"\n",(0,c.jsxs)(n.table,{children:[(0,c.jsx)(n.thead,{children:(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.th,{children:"\u53c2\u6570"}),(0,c.jsx)(n.th,{children:"\u63cf\u8ff0"})]})}),(0,c.jsxs)(n.tbody,{children:[(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"dragEvent"})}),(0,c.jsx)(n.td,{children:"\u76f8\u5173\u7684 dragmove \u6216 dragend \u4e8b\u4ef6"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"event"})}),(0,c.jsx)(n.td,{children:"\u4e0e dragEvent \u76f8\u5173\u7684\u7528\u6237\u79fb\u52a8/\u62ac\u8d77/\u7ed3\u675f\u4e8b\u4ef6"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"dropped"})}),(0,c.jsx)(n.td,{children:"\u9ed8\u8ba4\u653e\u7f6e\u68c0\u67e5\u5668\u8fd4\u56de\u7684\u503c"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"dropzone"})}),(0,c.jsx)(n.td,{children:"\u653e\u7f6e\u533a\u57df\u4ea4\u4e92\u5bf9\u8c61"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"dropElement"})}),(0,c.jsx)(n.td,{children:"\u653e\u7f6e\u533a\u57df\u5143\u7d20"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"draggable"})}),(0,c.jsx)(n.td,{children:"\u6b63\u5728\u88ab\u62d6\u62fd\u7684\u4ea4\u4e92\u5bf9\u8c61"})]}),(0,c.jsxs)(n.tr,{children:[(0,c.jsx)(n.td,{children:(0,c.jsx)(n.code,{children:"draggableElement"})}),(0,c.jsx)(n.td,{children:"\u5b9e\u9645\u6b63\u5728\u88ab\u62d6\u62fd\u7684\u5143\u7d20"})]})]})]})]})}function a(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,c.jsx)(n,{...e,children:(0,c.jsx)(h,{...e})}):h(e)}},8453:(e,n,d)=>{d.d(n,{R:()=>s,x:()=>i});var r=d(6540);const c={},t=r.createContext(c);function s(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:s(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);