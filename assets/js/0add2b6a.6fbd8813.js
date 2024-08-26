"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1757],{6095:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>o});var t=s(5893),i=s(1151);const a={slug:"pragtical-v343-release",title:"Pragtical v3.4.3 Release",authors:"jgmdev"},l=void 0,r={permalink:"/blog/pragtical-v343-release",editUrl:"https://github.com/pragtical/pragtical.github.io/edit/main/blog/2024-08-26-v343-release.md",source:"@site/blog/2024-08-26-v343-release.md",title:"Pragtical v3.4.3 Release",description:"This release fixes various issues reported on GitHub, and introduces",date:"2024-08-26T00:00:00.000Z",formattedDate:"August 26, 2024",tags:[],readingTime:1.655,hasTruncateMarker:!1,authors:[{name:"Jefferson Gonzalez",title:"Contributor of Pragtical",url:"https://github.com/jgmdev",imageURL:"https://github.com/jgmdev.png",key:"jgmdev"}],frontMatter:{slug:"pragtical-v343-release",title:"Pragtical v3.4.3 Release",authors:"jgmdev"},unlisted:!1,nextItem:{title:"Pragtical v3.4.2 Release",permalink:"/blog/pragtical-v342-release"}},c={authorsImageUrls:[void 0]},o=[{value:"Changes Log",id:"changes-log",level:2},{value:"New Features",id:"new-features",level:3},{value:"Performance Improvements",id:"performance-improvements",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Fixes",id:"fixes",level:3},{value:"Build System",id:"build-system",level:3}];function d(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:['This release fixes various issues reported on GitHub, and introduces\nsome new features and enhacements. The big ticket for this release is overall\nbetter scaling behaviour. macOS builds now default to the plain software\nrenderer which is faster. This is possible because various releases ago (almost\na year?) we introduced functionality to detect the display scale at runtime,\nmeaning that scaling should be properly performed Lua side instead of relying\non the renderer. The SDL Renderer (aka "hardware renderer") is still available\nbut since the ',(0,t.jsx)(n.strong,{children:"glyph loading optimizations"}),", it needs some adjustments to\nbetter handle the positions and sizes of fonts when the scale is >= 2."]}),"\n",(0,t.jsx)(n.p,{children:"So, this release improves upon previous scaling code work and fixes some related\nissues. Finally, widgets now behave better when the scale changes."}),"\n",(0,t.jsx)(n.p,{children:"Thanks to everyone who reported issues and helped with testing!"}),"\n",(0,t.jsxs)(n.p,{children:["Downloads on ",(0,t.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/releases/tag/v3.4.3",children:"GitHub"}),"."]}),"\n",(0,t.jsx)(n.h2,{id:"changes-log",children:"Changes Log"}),"\n",(0,t.jsx)(n.h3,{id:"new-features",children:"New Features"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Add cli flag to allow forking editor to background\n(",(0,t.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/132",children:"#132"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Scale plugin: added commands and bindings to allow zooming/scaling the code\nindependently of the user interface.\n(",(0,t.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/150",children:"#150"}),")"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"performance-improvements",children:"Performance Improvements"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["Widgets: moved most calculations out of ",(0,t.jsx)(n.code,{children:"update"})," to specialized\n",(0,t.jsx)(n.code,{children:"update_size_position"})," function that gets called mostly only when neccesary.\nAlso improved widgets size/position calculations for better scaling.\n(",(0,t.jsx)(n.a,{href:"https://github.com/pragtical/widget/pull/9",children:"#9"}),")"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"enhancements",children:"Enhancements"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Patched some luajit functions to support unicode file names\nand strings on windows\n(",(0,t.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/138",children:"#138"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Always select first result on findfile plugin\n(",(0,t.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/141",children:"#141"}),")"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"fixes",children:"Fixes"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use PRAGTICAL_USERDIR instead of HOME on ",(0,t.jsx)(n.code,{children:"scripts/run-local"})," because\nXDG_CONFIG_HOME been set has priority over HOME.\n(",(0,t.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/133",children:"#133"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Fix scaling logic regressions, now macOS builds are configure by default\nwith the software renderer since current display scale is detected at startup\nand applied on the whole interface, also the plain software renderer is faster.\n(",(0,t.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/134",children:"#134"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Return actual scale on ",(0,t.jsx)(n.code,{children:"system.get_scale()"})," for macOS too\n(",(0,t.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/143",children:"#143"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Minor correction on search_ui replace button position\n(",(0,t.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/149",children:"#149"}),")"]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"build-system",children:"Build System"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Fix rolling builds staying as draft\n(",(0,t.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/commit/a0d062f5e9017f2f1878daf42dd197a007ff45b6",children:"a0d062f5"}),")"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Remove widget submodule in favor of subproject\n(",(0,t.jsx)(n.a,{href:"https://github.com/pragtical/pragtical/pull/148",children:"#148"}),")"]}),"\n"]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},1151:(e,n,s)=>{s.d(n,{Z:()=>r,a:()=>l});var t=s(7294);const i={},a=t.createContext(i);function l(e){const n=t.useContext(a);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(a.Provider,{value:n},e.children)}}}]);