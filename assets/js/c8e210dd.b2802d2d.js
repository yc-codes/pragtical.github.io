"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3874],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,s=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),c=u(n),m=o,g=c["".concat(s,".").concat(m)]||c[m]||p[m]||r;return n?a.createElement(g,l(l({ref:t},d),{},{components:n})):a.createElement(g,l({ref:t},d))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,l=new Array(r);l[0]=m;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<r;u++)l[u]=n[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5162:(e,t,n)=>{n.d(t,{Z:()=>l});var a=n(7294),o=n(6010);const r={tabItem:"tabItem_Ymn6"};function l(e){let{children:t,hidden:n,className:l}=e;return a.createElement("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,l),hidden:n},t)}},4866:(e,t,n)=>{n.d(t,{Z:()=>v});var a=n(7462),o=n(7294),r=n(6010),l=n(2466),i=n(6550),s=n(1980),u=n(7392),d=n(12);function c(e){return function(e){var t;return(null==(t=o.Children.map(e,(e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)})))?void 0:t.filter(Boolean))??[]}(e).map((e=>{let{props:{value:t,label:n,attributes:a,default:o}}=e;return{value:t,label:n,attributes:a,default:o}}))}function p(e){const{values:t,children:n}=e;return(0,o.useMemo)((()=>{const e=t??c(n);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,n])}function m(e){let{value:t,tabValues:n}=e;return n.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:n}=e;const a=(0,i.k6)(),r=function(e){let{queryString:t=!1,groupId:n}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return n??null}({queryString:t,groupId:n});return[(0,s._X)(r),(0,o.useCallback)((e=>{if(!r)return;const t=new URLSearchParams(a.location.search);t.set(r,e),a.replace({...a.location,search:t.toString()})}),[r,a])]}function h(e){const{defaultValue:t,queryString:n=!1,groupId:a}=e,r=p(e),[l,i]=(0,o.useState)((()=>function(e){let{defaultValue:t,tabValues:n}=e;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:n}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${n.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const a=n.find((e=>e.default))??n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:t,tabValues:r}))),[s,u]=g({queryString:n,groupId:a}),[c,h]=function(e){let{groupId:t}=e;const n=function(e){return e?`docusaurus.tab.${e}`:null}(t),[a,r]=(0,d.Nk)(n);return[a,(0,o.useCallback)((e=>{n&&r.set(e)}),[n,r])]}({groupId:a}),k=(()=>{const e=s??c;return m({value:e,tabValues:r})?e:null})();(0,o.useLayoutEffect)((()=>{k&&i(k)}),[k]);return{selectedValue:l,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:r}))throw new Error(`Can't select invalid tab value=${e}`);i(e),u(e),h(e)}),[u,h,r]),tabValues:r}}var k=n(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function b(e){let{className:t,block:n,selectedValue:i,selectValue:s,tabValues:u}=e;const d=[],{blockElementScrollPositionUntilNextRender:c}=(0,l.o5)(),p=e=>{const t=e.currentTarget,n=d.indexOf(t),a=u[n].value;a!==i&&(c(t),s(a))},m=e=>{var t;let n=null;switch(e.key){case"Enter":p(e);break;case"ArrowRight":{const t=d.indexOf(e.currentTarget)+1;n=d[t]??d[0];break}case"ArrowLeft":{const t=d.indexOf(e.currentTarget)-1;n=d[t]??d[d.length-1];break}}null==(t=n)||t.focus()};return o.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":n},t)},u.map((e=>{let{value:t,label:n,attributes:l}=e;return o.createElement("li",(0,a.Z)({role:"tab",tabIndex:i===t?0:-1,"aria-selected":i===t,key:t,ref:e=>d.push(e),onKeyDown:m,onClick:p},l,{className:(0,r.Z)("tabs__item",f.tabItem,null==l?void 0:l.className,{"tabs__item--active":i===t})}),n??t)})))}function y(e){let{lazy:t,children:n,selectedValue:a}=e;const r=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){const e=r.find((e=>e.props.value===a));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return o.createElement("div",{className:"margin-top--md"},r.map(((e,t)=>(0,o.cloneElement)(e,{key:t,hidden:e.props.value!==a}))))}function N(e){const t=h(e);return o.createElement("div",{className:(0,r.Z)("tabs-container",f.tabList)},o.createElement(b,(0,a.Z)({},e,t)),o.createElement(y,(0,a.Z)({},e,t)))}function v(e){const t=(0,k.Z)();return o.createElement(N,(0,a.Z)({key:String(t)},e))}},9219:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>s,default:()=>g,frontMatter:()=>i,metadata:()=>u,toc:()=>c});var a=n(7462),o=(n(7294),n(3905)),r=n(4866),l=n(5162);const i={sidebar_position:2,description:"Learn how to configure Pragtical \u2014 configure fonts, themes and other options."},s="Configuration",u={unversionedId:"user-guide/configuration",id:"user-guide/configuration",title:"Configuration",description:"Learn how to configure Pragtical \u2014 configure fonts, themes and other options.",source:"@site/docs/user-guide/configuration.md",sourceDirName:"user-guide",slug:"/user-guide/configuration",permalink:"/docs/user-guide/configuration",draft:!1,editUrl:"https://github.com/pragtical/pragtical.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/user-guide/configuration.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,description:"Learn how to configure Pragtical \u2014 configure fonts, themes and other options."},sidebar:"tutorialSidebar",previous:{title:"Introduction",permalink:"/docs/user-guide/introduction"},next:{title:"Plugins",permalink:"/docs/user-guide/plugins"}},d={},c=[{value:"Location",id:"location",level:2},{value:"User Module",id:"user-module",level:2},{value:"Project Module",id:"project-module",level:2},{value:"Settings GUI",id:"settings-gui",level:2},{value:"Fonts",id:"fonts",level:2},{value:"Keyboard shortcuts",id:"keyboard-shortcuts",level:2},{value:"Adding a keyboard shortcut",id:"adding-a-keyboard-shortcut",level:3},{value:"Removing a keyboard shortcut",id:"removing-a-keyboard-shortcut",level:3},{value:"Themes",id:"themes",level:2},{value:"Other options",id:"other-options",level:2},{value:"Indentation",id:"indentation",level:3},{value:"Window decoration",id:"window-decoration",level:3},{value:"Project files limit",id:"project-files-limit",level:3},{value:"Ignoring files",id:"ignoring-files",level:3},{value:"Caret",id:"caret",level:3},{value:"FPS (Frame rate)",id:"fps-frame-rate",level:3},{value:"Transitions",id:"transitions",level:3},{value:"Other options",id:"other-options-1",level:3},{value:"Plugins",id:"plugins",level:2}],p={toc:c},m="wrapper";function g(e){let{components:t,...n}=e;return(0,o.kt)(m,(0,a.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"configuration"},"Configuration"),(0,o.kt)("h2",{id:"location"},"Location"),(0,o.kt)("p",null,"Pragtical searches a list of paths to store user configuration.\nThis path is also known as ",(0,o.kt)("inlineCode",{parentName:"p"},"USERDIR"),".\nThe first path that is available will be used."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"<path_to_pragtical_executable>/user")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"$PRAGTICAL_USERDIR")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"$XDG_CONFIG_HOME/pragtical")),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("inlineCode",{parentName:"li"},"$HOME/.config/pragtical"))),(0,o.kt)("p",null,"On Windows, ",(0,o.kt)("inlineCode",{parentName:"p"},"$HOME")," will be replaced with ",(0,o.kt)("inlineCode",{parentName:"p"},"$USERPROFILE"),"."),(0,o.kt)("h2",{id:"user-module"},"User Module"),(0,o.kt)("p",null,"Pragtical is mainly configured through the user module.\nThe user module is a Lua script run by Pragtical during startup,\nbefore plugins are loaded.\nThus, you can change configuration options, bind shortcut keys, load color\nschemes, change the fonts among other things."),(0,o.kt)("p",null,"To modify the user module, you can run the command ",(0,o.kt)("inlineCode",{parentName:"p"},"core:open-user-module"),".\nYou can also modify the file ",(0,o.kt)("inlineCode",{parentName:"p"},"USERDIR/init.lua")," directly.\nPragtical will reload the file on file change."),(0,o.kt)("h2",{id:"project-module"},"Project Module"),(0,o.kt)("p",null,"The project module is an optional module which is loaded from the current\nproject's directory when Pragtical is started. Project modules can be useful for\nthings like adding custom commands for project-specific build systems, or\nloading project-specific plugins."),(0,o.kt)("p",null,"The project module is loaded when the editor starts,\nafter the user module is loaded but before plugins are loaded."),(0,o.kt)("p",null,"To modify project module, you can run the command ",(0,o.kt)("inlineCode",{parentName:"p"},"core:open-project-module"),".\nThe command will create a project module if it does not exist."),(0,o.kt)("h2",{id:"settings-gui"},"Settings GUI"),(0,o.kt)("p",null,"The settings plugin provides a GUI to configure Pragtical."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/img/user-guide/settings/settings.png",alt:"Settings User Interface"})),(0,o.kt)("h2",{id:"fonts"},"Fonts"),(0,o.kt)("p",null,"Pragtical comes with JetBrains Mono and Fira Sans by default."),(0,o.kt)("p",null,"To change the fonts used by the editor, you can change the\nvariable ",(0,o.kt)("inlineCode",{parentName:"p"},"style.font")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"style.code_font"),".\nThese variables are responsible for the UI font and code\nfont respectively."),(0,o.kt)("p",null,"To load a font, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"renderer.font.load()"),".\nThis function allows you to load a font file as long as\nit is supported by FreeType.\nThe function takes in the path to the font file and\nthe pixel size of the font."),(0,o.kt)("p",null,"When displaying text with multiple languages, multiple\nfonts are often required.\nPragtical supports fallback fonts by using the function\n",(0,o.kt)("inlineCode",{parentName:"p"},"renderer.font.group()"),".\nThis function takes in a table of fonts loaded by\n",(0,o.kt)("inlineCode",{parentName:"p"},"renderer.font.load()"),".\nPragtical will attempt to render fonts based on the order\nthe fonts are added to the table."),(0,o.kt)(r.Z,{groupId:"configuration",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"user-module",label:"User Module",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"For this example, we'll load Noto Sans Mono, which is\nlocated in ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/share/fonts/noto/NotoSansMono-Regular.ttf"),"\nand set it as our code font."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local style = require "core.style"\n-- SCALE is the pixel scaling required for the current DPI setup.\n-- This converts the font size from points to pixels.\nstyle.code_font = renderer.font.load("/usr/share/fonts/noto/NotoSansMono-Regular.ttf", 15 * SCALE)\n')),(0,o.kt)("p",null,"Next, we'll also load Noto Sans Mono CJK SC, which is located\nin ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/share/fonts/noto-cjk/NotoSansCJK-Regular.ttc")," and use\nit as fallback."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local style = require "core.style"\n-- do not ever do style.code_font = { style.code_font, ... }\n-- style.code_font can be a font group and pragtical does not\n-- support nested font groups!\nstyle.code_font = renderer.font.group {\n  renderer.font.load("/usr/share/fonts/noto/NotoSansMono-Regular.ttf", 15 * SCALE),\n  renderer.font.load("/usr/share/fonts/noto-cjk/NotoSansCJK-Regular.ttc", 15 * SCALE)\n}\n')),(0,o.kt)("admonition",{title:"No .ttc fonts support",type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"Pragtical does not support using a specfific face in a TrueType collection\n(.ttc) file. Only the first face can be used."))),(0,o.kt)(l.Z,{value:"settings-ui",label:"Settings UI",mdxType:"TabItem"},(0,o.kt)("p",null,'To change the code font, navigate to the "Core" tab\nand expand the "Editor" section.\nThe first entry should be a list of code fonts used by the editor.\n',(0,o.kt)("img",{parentName:"p",src:"/img/user-guide/settings/fonts/font-option.png",alt:"The fonts option under the Editor section"})),(0,o.kt)("p",null,'To add a new font, click the "Add" button.\nA font selector will be shown.\n',(0,o.kt)("img",{parentName:"p",src:"/img/user-guide/settings/fonts/font-selector.png",alt:"Font selector"})),(0,o.kt)("p",null,'To choose a font, press the "Mono" button and select a font from\nthe list. The "All" button allows you to select non-monospace\nfonts.'),(0,o.kt)("p",null,'A demo text will be shown at the textbox\non the top of the selector.\nTo change the antialiasing settings of the font, click on the\ndropdown to the left.\nTo change the hinting settings of the font, click on the dropdown\nto the right.\nThe changes will be reflected automatically on the preview window.\nPress "Save" to add the font or "Cancel" to go back.'),(0,o.kt)("p",null,'If you have more than one fonts set up, you can change\nthe fallback order by pressing the "\u2039" and "\u203a" buttons.\n',(0,o.kt)("img",{parentName:"p",src:"/img/user-guide/settings/fonts/font-order.png",alt:"The buttons to change font ordering"})))),(0,o.kt)("h2",{id:"keyboard-shortcuts"},"Keyboard shortcuts"),(0,o.kt)("p",null,"Keyboard shortcuts are managed by the ",(0,o.kt)("inlineCode",{parentName:"p"},"core.keymap")," module.\nThis module maps keyboard shortcuts to one or more commands,\nwhere each command has a predicate that determine whether\nit should run based on certain conditions."),(0,o.kt)("p",null,"For a list of default keyboard shortcuts, check out these pages:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/user-guide/keymap"},"non-macOS platforms (Windows, Linux, etc.)")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/user-guide/macos-keymap"},"macOS"))),(0,o.kt)("h3",{id:"adding-a-keyboard-shortcut"},"Adding a keyboard shortcut"),(0,o.kt)("p",null,"To add keyboard shortcuts, you can use ",(0,o.kt)("inlineCode",{parentName:"p"},"keymap.add()"),"."),(0,o.kt)(r.Z,{groupId:"configuration",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"user-module",label:"User Module",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"For example, to bind ",(0,o.kt)("kbd",{parentName:"p"},"ctrl+m")," to move the cursor backwards\nand then upwards, do:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local keymap = require "core.keymap"\nkeymap.add {\n  ["ctrl+m"] = "doc:move-to-previous-char"\n}\nkeymap.add {\n  ["ctrl+m"] = "doc:move-to-previous-line"\n}\n')),(0,o.kt)("p",null,"Pragtical will automatically execute both commands in the order that\nthey're added."),(0,o.kt)("p",null,"Alternatively, to override a keyboard shortcut completely,\nadd ",(0,o.kt)("inlineCode",{parentName:"p"},"true")," on the second parameter of ",(0,o.kt)("inlineCode",{parentName:"p"},"keybind.add()"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local keymap = require "core.keymap"\nkeymap.add {\n  ["ctrl+m"] = "doc:move-to-previous-char"\n}\nkeymap.add({\n  ["ctrl+m"] = "doc:move-to-previous-line"\n}, true)\n')),(0,o.kt)("p",null,"This will cause Pragtical to only run\n",(0,o.kt)("inlineCode",{parentName:"p"},"core:move-to-previous-line")," when ",(0,o.kt)("kbd",{parentName:"p"},"ctrl+m")," is pressed.")),(0,o.kt)(l.Z,{value:"settings-ui",label:"Settings UI",mdxType:"TabItem"},(0,o.kt)("p",null,'Navigate to the "Keybindings" tab.\n',(0,o.kt)("img",{parentName:"p",src:"/img/user-guide/settings/keybinds/keybinds.png",alt:"The keybindings tab"})),(0,o.kt)("p",null,"Scroll until you find the entry containing\nthe command you want to bind to and click on it.\nIn recent versions of the Settings plugin, you can also\nsearch for commands with the text box on top.\nIn this example, we'll pick ",(0,o.kt)("inlineCode",{parentName:"p"},"doc:move-to-previous-char"),"."),(0,o.kt)("p",null,'To add a keybind, press the "Add" and press the key combination\nthat you want to bind to. Afterwards, press "Save".\n',(0,o.kt)("img",{parentName:"p",src:"/img/user-guide/settings/keybinds/keybind-selector.png",alt:"The dialog to assign keyboard shortcuts"})),(0,o.kt)("p",null,'If the keyboard shortcut is set properly,\nyou will see the updated keyboard shortcut\non the "Bindings" section at the right.\n',(0,o.kt)("img",{parentName:"p",src:"/img/user-guide/settings/keybinds/keybinds-after.png",alt:"The keybind tab with changed keybinds"})),(0,o.kt)("p",null,'To replace previous keyboard shortcuts,\nsimply delete any existing keyboard shortcut\nvia the "Remove" button, then re-add it.'))),(0,o.kt)("h3",{id:"removing-a-keyboard-shortcut"},"Removing a keyboard shortcut"),(0,o.kt)("p",null,"To remove an existing keyboard shortcut, you can use\n",(0,o.kt)("inlineCode",{parentName:"p"},"keymap.unbind()"),"."),(0,o.kt)(r.Z,{groupId:"configuration",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"user-module",label:"User Module",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"In this example, we will unbind ",(0,o.kt)("kbd",{parentName:"p"},"ctrl+m"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local keymap = require "core.keymap"\nkeymap.unbind("ctrl+m", "doc:move-to-previous-line")\nkeymap.unbind("ctrl+m", "doc:move-to-previous-char")\n')),(0,o.kt)("p",null,"This will unbind the two commands from ",(0,o.kt)("kbd",{parentName:"p"},"ctrl+m"),"."),(0,o.kt)("p",null,"Alternatively, to unbind all commands from ",(0,o.kt)("kbd",{parentName:"p"},"ctrl+m"),",\nyou can omit the second parameter to ",(0,o.kt)("inlineCode",{parentName:"p"},"keymap.unbind()"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local keymap = require "core.keymap"\nkeymap.unbind("ctrl+m", "doc:move-to-previous-line")\nkeymap.unbind("ctrl+m", "doc:move-to-previous-char")\n'))),(0,o.kt)(l.Z,{value:"settings-ui",label:"Settings UI",mdxType:"TabItem"},(0,o.kt)("p",null,'Navigate to the "Keybindings" tab.\n',(0,o.kt)("img",{parentName:"p",src:"/img/user-guide/settings/keybinds/keybinds-after.png",alt:"Screenshot showing the keybindings tab"})),(0,o.kt)("p",null,"Scroll until you find the entry containing\nthe command you want to bind to and click on it.\nIn recent versions of the Settings plugin, you can also\nsearch for commands with the text box on top.\nIn this example, we pick ",(0,o.kt)("inlineCode",{parentName:"p"},"doc:move-to-previous-char"),"."),(0,o.kt)("p",null,'To remove a keyboard shortcut, select the shortcut you want to remove\nand press the "Remove" button.\nAfterwards, press the "Save" button to save the changes.\n',(0,o.kt)("img",{parentName:"p",src:"/img/user-guide/settings/keybinds/keybind-selector-after.png",alt:"Screenshot showing the keybind changer"})))),(0,o.kt)("h2",{id:"themes"},"Themes"),(0,o.kt)("p",null,"The default theme is a dark theme.\nThemes are implemented as plugins that changes the styling\nvariables of Pragtical."),(0,o.kt)("p",null,"This can be changed with ",(0,o.kt)("inlineCode",{parentName:"p"},"core.reload_module()")," and loading\nthe appropriate theme file."),(0,o.kt)(r.Z,{groupId:"configuration",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"user-module",label:"User Module",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"To load the theme ",(0,o.kt)("inlineCode",{parentName:"p"},"summer"),", add ",(0,o.kt)("inlineCode",{parentName:"p"},'core.reload_module "colors.summer"'),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'core.reload_module "color.summer"\n'))),(0,o.kt)(l.Z,{value:"settings-ui",label:"Settings UI",mdxType:"TabItem"},(0,o.kt)("p",null,'Navigate to the "Colors" tab.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/img/user-guide/settings/colors.png",alt:"The Colors tab"})),(0,o.kt)("p",null,"Select your desired theme.\nThe colors should apply immediately."))),(0,o.kt)("h2",{id:"other-options"},"Other options"),(0,o.kt)("p",null,"There are a lot of configuration options that can be modified.\nA list of these options can be found in ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/pragtical/pragtical/blob/master/data/core/config.lua"},(0,o.kt)("inlineCode",{parentName:"a"},"data/core/config.lua")),",\nbut we'll list a few common ones here."),(0,o.kt)("h3",{id:"indentation"},"Indentation"),(0,o.kt)("p",null,"To change the indentation size and type, set ",(0,o.kt)("inlineCode",{parentName:"p"},"config.indent_size"),"\nand ",(0,o.kt)("inlineCode",{parentName:"p"},"config.tab_type")," respectively."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local config = require "core.config"\nconfig.indent_size = 4 -- set indentation to 4\nconfig.tab_type =      -- "soft" for spaces, "hard" for tabs\n')),(0,o.kt)("h3",{id:"window-decoration"},"Window decoration"),(0,o.kt)("p",null,"If you're on platforms such as Wayland where window decoration may be\nclient drawn, you can set ",(0,o.kt)("inlineCode",{parentName:"p"},"config.borderless")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),".\nThis will let Pragtical draw its own window decoration."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local config = require "core.config"\n-- enable custom window borders\nconfig.borderless = true\n')),(0,o.kt)("h3",{id:"project-files-limit"},"Project files limit"),(0,o.kt)("p",null,"When opening large directories, Pragtical will often complain about reaching\nthe project file limit.\nThis is because Pragtical becomes slower when it needs to index these files\non startup."),(0,o.kt)("p",null,"If your filesystem has good performance, you can increase this limit\nby setting ",(0,o.kt)("inlineCode",{parentName:"p"},"config.max_project_files")," to something else.\nThe default value is 2000."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local config = require "core.config"\n-- set max project files to 5000\nconfig.max_project_files = 5000\n')),(0,o.kt)("h3",{id:"ignoring-files"},"Ignoring files"),(0,o.kt)("p",null,"Pragtical does not index certain files and directories by default, such as\nversion control and executables.\nThis can be modified by changing ",(0,o.kt)("inlineCode",{parentName:"p"},"config.ignore_files"),".\nThis value is a table of Lua patterns.\nFor directories, the pattern ends with a forward slash (",(0,o.kt)("inlineCode",{parentName:"p"},"/"),").\nFor files, the pattern ends with the end anchor (",(0,o.kt)("inlineCode",{parentName:"p"},"$"),")."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local config = require "core.config"\n-- ignore .data/\ntable.insert(config.ignore_files, "^%.data/")\n')),(0,o.kt)("h3",{id:"caret"},"Caret"),(0,o.kt)("p",null,"You can disable or change the blinking rate of the caret."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local config = require "core.config"\nconfig.disable_blink = true -- disable caret blinking\nconfig.blink_period = 0.4 -- change caret blink rate\n')),(0,o.kt)("h3",{id:"fps-frame-rate"},"FPS (Frame rate)"),(0,o.kt)("p",null,"The default frame rate is set to 60.\nIf this causes an issue, you can set it via ",(0,o.kt)("inlineCode",{parentName:"p"},"config.fps"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local config = require "core.config"\n-- set FPS to 30\nconfig.fps = 30\n')),(0,o.kt)("h3",{id:"transitions"},"Transitions"),(0,o.kt)("p",null,"You can disable any animations/transitions by setting ",(0,o.kt)("inlineCode",{parentName:"p"},"config.transitions"),"\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),".\nTo disable individual transitions, you can set any member of\n",(0,o.kt)("inlineCode",{parentName:"p"},"config.disabled_transitions")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"true"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local config = require "core.config"\n-- disable all transitions\nconfig.transitions = false\n-- disable commandview and scroll transitions\nconfig.disabled_transitions = {\n  commandview = true,\n  scroll = true\n}\n')),(0,o.kt)("p",null,"To change the animation rate, set ",(0,o.kt)("inlineCode",{parentName:"p"},"config.animation_rate"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local config = require "core.config"\n-- slow down the animations to half speed\nconfig.animation_rate = 0.5\n')),(0,o.kt)("h3",{id:"other-options-1"},"Other options"),(0,o.kt)("admonition",{title:"A quick reference of other options.",type:"note"},(0,o.kt)("table",{parentName:"admonition"},(0,o.kt)("thead",{parentName:"table"},(0,o.kt)("tr",{parentName:"thead"},(0,o.kt)("th",{parentName:"tr",align:null},"Options"),(0,o.kt)("th",{parentName:"tr",align:null},"Description"))),(0,o.kt)("tbody",{parentName:"table"},(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"max_log_items")),(0,o.kt)("td",{parentName:"tr",align:null},"Maximum number of log items to store before discarding them.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"message_timeout")),(0,o.kt)("td",{parentName:"tr",align:null},"Time (seconds) to show each message on the StatusView.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"mouse_wheel_scroll")),(0,o.kt)("td",{parentName:"tr",align:null},'Number of pixels per "scroll".')),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"animate_drag_scroll")),(0,o.kt)("td",{parentName:"tr",align:null},"Enable smooth scrolling.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"force_scrollbar_status")),(0,o.kt)("td",{parentName:"tr",align:null},"Always expand (",(0,o.kt)("inlineCode",{parentName:"td"},'"expanded"'),") or hide (",(0,o.kt)("inlineCode",{parentName:"td"},'"contracted"'),") the scrollbar.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"file_size_limit")),(0,o.kt)("td",{parentName:"tr",align:null},"File size limit (MB) before Pragtical refuses to load it.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"symbol_pattern")),(0,o.kt)("td",{parentName:"tr",align:null},"Lua pattern used by Pragtical to find symbols.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"non_word_chars")),(0,o.kt)("td",{parentName:"tr",align:null},"A pattern used to find non-word characters.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"undo_merge_timeout")),(0,o.kt)("td",{parentName:"tr",align:null},"Time (seconds) before Pragtical merges edits to form a single undo step.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"max_undos")),(0,o.kt)("td",{parentName:"tr",align:null},"Number of undo to store per document.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"max_tabs")),(0,o.kt)("td",{parentName:"tr",align:null},"Number of tabs to show before overflowing.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"always_show_tabs")),(0,o.kt)("td",{parentName:"tr",align:null},"If true, always show tabs even if only one file is open.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"highlight_current_line")),(0,o.kt)("td",{parentName:"tr",align:null},"Highlights the current line.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"line_height")),(0,o.kt)("td",{parentName:"tr",align:null},"The spacing between each line.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"keep_newline_whitespace")),(0,o.kt)("td",{parentName:"tr",align:null},"If true, removes any line that only contains whitespace (space, tabs, etc.)")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"line_limit")),(0,o.kt)("td",{parentName:"tr",align:null},"An ",(0,o.kt)("strong",{parentName:"td"},"advisory")," limit for characters per line.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"tab_close_button")),(0,o.kt)("td",{parentName:"tr",align:null},"Shows or hides the tab close button for each tab.")),(0,o.kt)("tr",{parentName:"tbody"},(0,o.kt)("td",{parentName:"tr",align:null},(0,o.kt)("inlineCode",{parentName:"td"},"max_clicks")),(0,o.kt)("td",{parentName:"tr",align:null},"Maximum number of clicks you can perform in the editor."))))),(0,o.kt)("h2",{id:"plugins"},"Plugins"),(0,o.kt)("p",null,"Since the user and project module loads before any plugins, you can configure\nor disable any plugins in the user and project modules.\nPlugins obtain their configuration from a table in the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.plugins")," table.\nYou can add code to user module that modifies the table."),(0,o.kt)("p",null,"To disable a plugin, you need to set the associated ",(0,o.kt)("inlineCode",{parentName:"p"},"config.plugins")," entry\nto ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),".\nThis tells Pragtical to not load the plugin on startup.\nIt will not load nor unload the plugin from the current instance."),(0,o.kt)("admonition",{title:"Some plugins may have options to enable/disable themselves.",type:"note"},(0,o.kt)("p",{parentName:"admonition"},"This allows the plugins to be loaded and toggled without a restart.")),(0,o.kt)(r.Z,{groupId:"configuration",mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"user-module",label:"User Module",default:!0,mdxType:"TabItem"},(0,o.kt)("p",null,"In this example, we'll enable the ",(0,o.kt)("inlineCode",{parentName:"p"},"drawwhitespace")," plugin\nand set it to only draw whitespaces in the selected text."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local config = require "core.config"\nconfig.plugins.drawwhitespace = {\n  show_selected_only = true\n}\n')),(0,o.kt)("p",null,"To disable the plugin, simply assign ",(0,o.kt)("inlineCode",{parentName:"p"},"config.plugins.drawwhitespace")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"false"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local config = require "core.config"\nconfig.plugins.drawwhitespace = false\n'))),(0,o.kt)(l.Z,{value:"settings-ui",label:"Settings UI",mdxType:"TabItem"},(0,o.kt)("p",null,'Navigate to the "Plugins" tab.'),(0,o.kt)("p",null,'In this tab, you will find many sections dedicated to each plugin,\nas well as an "Installed" section where you can enable/disable the plugins.'),(0,o.kt)("p",null,"To enable the ",(0,o.kt)("inlineCode",{parentName:"p"},"drawwhitespace"),' plugin, expand the "Installed" section\nand enable the corresponding plugin.'),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/img/user-guide/settings/plugins/installed.png",alt:"The Installed section"})),(0,o.kt)("p",null,"To modify the configuration for a plugin, expand the relevant section.\nThe changes will apply automatically.\n",(0,o.kt)("img",{parentName:"p",src:"/img/user-guide/settings/plugins/options.png",alt:"Settings for drawwhitespace"})))))}g.isMDXComponent=!0}}]);