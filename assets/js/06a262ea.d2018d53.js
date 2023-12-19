"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[880],{3905:(e,t,a)=>{a.d(t,{Zo:()=>s,kt:()=>h});var r=a(7294);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function n(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var c=r.createContext({}),o=function(e){var t=r.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):n(n({},t),e)),a},s=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,i=e.originalType,c=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),u=o(a),g=l,h=u["".concat(c,".").concat(g)]||u[g]||m[g]||i;return a?r.createElement(h,n(n({ref:t},s),{},{components:a})):r.createElement(h,n({ref:t},s))}));function h(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var i=a.length,n=new Array(i);n[0]=g;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[u]="string"==typeof e?e:l,n[1]=p;for(var o=2;o<i;o++)n[o]=a[o];return r.createElement.apply(null,n)}return r.createElement.apply(null,a)}g.displayName="MDXCreateElement"},4547:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>n,default:()=>m,frontMatter:()=>i,metadata:()=>p,toc:()=>o});var r=a(7462),l=(a(7294),a(3905));const i={slug:"pragtical-v321-release",title:"Pragtical v3.2.1 Release",authors:"jgmdev"},n=void 0,p={permalink:"/blog/pragtical-v321-release",editUrl:"https://github.com/pragtical/pragtical.github.io/tree/main/packages/create-docusaurus/templates/shared/blog/2023-12-19-v321-release.md",source:"@site/blog/2023-12-19-v321-release.md",title:"Pragtical v3.2.1 Release",description:"This release introduces project wide search and replace support:",date:"2023-12-19T00:00:00.000Z",formattedDate:"December 19, 2023",tags:[],readingTime:1.215,hasTruncateMarker:!1,authors:[{name:"Jefferson Gonzalez",title:"Contributor of Pragtical",url:"https://github.com/jgmdev",imageURL:"https://github.com/jgmdev.png",key:"jgmdev"}],frontMatter:{slug:"pragtical-v321-release",title:"Pragtical v3.2.1 Release",authors:"jgmdev"},nextItem:{title:"Pragtical v3.2.0 Release",permalink:"/blog/pragtical-v320-release"}},c={authorsImageUrls:[void 0]},o=[{value:"New Features",id:"new-features",level:3},{value:"Fixes",id:"fixes",level:3},{value:"Enhancements",id:"enhancements",level:3},{value:"Widgets",id:"widgets",level:3},{value:"Lite XL Inherited Changes",id:"lite-xl-inherited-changes",level:3}],s={toc:o},u="wrapper";function m(e){let{components:t,...a}=e;return(0,l.kt)(u,(0,r.Z)({},s,a,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"This release introduces project wide search and replace support:"),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://github.com/pragtical/pragtical/assets/1702572/d157442b-a09f-4e21-b9aa-8db580c054ae",alt:"project-search-replace"})),(0,l.kt)("p",null,"It also incorporates various bug fixes both from upstream and our side."),(0,l.kt)("p",null,"Downloads on ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/releases/tag/v3.2.1"},"GitHub"),"."),(0,l.kt)("h1",{id:"changes-log"},"Changes Log"),(0,l.kt)("h3",{id:"new-features"},"New Features"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Added project wide search and replace support (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/pull/48"},"#48"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Added config.line_endings support to settings gui (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/commit/c487a19f732c3074a88dc3c005fc79501a8af7a7"},"c487a19f"),")"))),(0,l.kt)("h3",{id:"fixes"},"Fixes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Obtain symbols pattern/nonword-chars for subsyntax (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/pull/45"},"#45"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Build: system_iconv is needed on windows fixes #46 (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/pull/47"},"#47"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"search_ui: set filepicker path on project-search:find (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/commit/d8e51e54f0ebe644587f16c28443814eb6a00211"},"d8e51e54"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"search_ui: do not set filepicker if path nil (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/commit/6a5c954759bd7eb6747273765dcc4e3c745ad067"},"6a5c9547"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Use cmalloc instead of malloc on render init (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/pull/51"},"#51"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Check tokenizer state to prevent issues with evergreen (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/pull/52"},"#52"),")"))),(0,l.kt)("h3",{id:"enhancements"},"Enhancements"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Remove recent projects that no longer exists (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/pull/49"},"#49"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Prettify the session file output for easy reading (#50) (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/pull/50"},"#50"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Reload applicable opened docs on project search/replace (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/commit/bf4716725f127db4bb88b01b4d9ce70ae6603f46"},"bf471672"),")"))),(0,l.kt)("h3",{id:"widgets"},"Widgets"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Added SearchReplaceList widget (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/widget/pull/3"},"#3"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"SearchReplaceList: truncate long results (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/widget/commit/e54e8766390effa72c2217a6c68619c59507509b"},"e54e8766"),")"))),(0,l.kt)("h3",{id:"lite-xl-inherited-changes"},"Lite XL Inherited Changes"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fix editing after undo not clearing the change id (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/lite-xl/lite-xl/pull/1574"},"#1574"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fix patterns starting with ^ in tokenizer (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/lite-xl/lite-xl/pull/1645"},"#1645"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fix dirmonitor sorting issues (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/lite-xl/lite-xl/pull/1599"},"#1599"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fix language_js regex constant detection (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/lite-xl/lite-xl/pull/1581"},"#1581"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Use x offset to define render command rect in rencache_draw_text (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/lite-xl/lite-xl/pull/1618"},"#1618"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"feat(process): allow commands and envs on proces_start (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/lite-xl/lite-xl/pull/1477"},"#1477"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Use \\r\\n for new files on Windows (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/lite-xl/lite-xl/pull/1596"},"#1596"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"fix nagbar failed save message (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/lite-xl/lite-xl/pull/1678"},"#1678"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"Fixed a minor bug, should close issue (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/lite-xl/lite-xl/pull/1680"},"#1680"),")")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"turn window_renderer into managed pointer (",(0,l.kt)("a",{parentName:"p",href:"https://github.com/lite-xl/lite-xl/pull/1683"},"#1683"),")"))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"Full Changelog"),": ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/compare/v3.2.0...v3.2.1"},"https://github.com/pragtical/pragtical/compare/v3.2.0...v3.2.1")))}m.isMDXComponent=!0}}]);