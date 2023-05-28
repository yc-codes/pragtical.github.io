"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[1642],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),d=c(n),m=o,h=d["".concat(l,".").concat(m)]||d[m]||u[m]||a;return n?r.createElement(h,i(i({ref:t},p),{},{components:n})):r.createElement(h,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[d]="string"==typeof e?e:o,i[1]=s;for(var c=2;c<a;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},8722:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var r=n(7462),o=(n(7294),n(3905));const a={sidebar_position:1,description:"Learn about basic operations in Pragtical."},i="Introduction",s={unversionedId:"user-guide/introduction",id:"user-guide/introduction",title:"Introduction",description:"Learn about basic operations in Pragtical.",source:"@site/docs/user-guide/introduction.md",sourceDirName:"user-guide",slug:"/user-guide/introduction",permalink:"/docs/user-guide/introduction",draft:!1,editUrl:"https://github.com/pragtical/pragtical.github.io/tree/main/packages/create-docusaurus/templates/shared/docs/user-guide/introduction.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1,description:"Learn about basic operations in Pragtical."},sidebar:"tutorialSidebar",previous:{title:"User Guide",permalink:"/docs/category/user-guide"},next:{title:"Configuration",permalink:"/docs/user-guide/configuration"}},l={},c=[{value:"Opening files",id:"opening-files",level:2},{value:"Commands",id:"commands",level:2},{value:"Keyboard shortcuts",id:"keyboard-shortcuts",level:2},{value:"Multiple selections (multiple cursors)",id:"multiple-selections-multiple-cursors",level:2},{value:"Find and replace",id:"find-and-replace",level:2},{value:"Project search",id:"project-search",level:2},{value:"Line endings",id:"line-endings",level:2},{value:"Indentation",id:"indentation",level:2},{value:"Projects",id:"projects",level:2}],p={toc:c},d="wrapper";function u(e){let{components:t,...n}=e;return(0,o.kt)(d,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"introduction"},"Introduction"),(0,o.kt)("h2",{id:"opening-files"},"Opening files"),(0,o.kt)("p",null,"Pragtical comes with a file browser by default.\nYou can open, rename, move and delete files with it.\nRight-clicking on a file or folder will show more options."),(0,o.kt)("p",null,"Other than that, you can also open files with ",(0,o.kt)("kbd",{parentName:"p"},"ctrl+p"),".\nThis opens a fuzzy finder with a list of project files."),(0,o.kt)("video",{autoplay:!0,muted:!0,loop:!0,style:{width:"100%"},controls:!0},(0,o.kt)("source",{src:"/videos/user-guide/opening-files.mp4"})),(0,o.kt)("h2",{id:"commands"},"Commands"),(0,o.kt)("p",null,"Most of Pragtical's functionalities are implemented as commands and\nexposed by the command palette.\nThe command palette is bound to ",(0,o.kt)("kbd",{parentName:"p"},"ctrl+shift+p")," by default and is\nused to enter commands and execute them."),(0,o.kt)("p",null,"The command palette supports fuzzy matching, so you don't need to enter\nthe full name of the command. For instance, to create a new file, you can\ntype ",(0,o.kt)("inlineCode",{parentName:"p"},"new doc")," and the correct command ",(0,o.kt)("inlineCode",{parentName:"p"},"Core: New Doc")," will show up as\nthe first choice. You can press ",(0,o.kt)("kbd",{parentName:"p"},"up")," or ",(0,o.kt)("kbd",{parentName:"p"},"down")," to select other commands.\nIf a command is bound to a key shortcut, it will be shown on the right."),(0,o.kt)("video",{autoplay:!0,muted:!0,loop:!0,style:{width:"100%"},controls:!0},(0,o.kt)("source",{src:"/videos/user-guide/command-palette.mp4"})),(0,o.kt)("h2",{id:"keyboard-shortcuts"},"Keyboard shortcuts"),(0,o.kt)("p",null,"All keyboard shortcuts are handled by the ",(0,o.kt)("inlineCode",{parentName:"p"},"core.keymap"),' module.\nA key binding maps a "stroke" (e.g. ',(0,o.kt)("kbd",{parentName:"p"},"ctrl+q"),") to one or more commands\n(e.g. ",(0,o.kt)("inlineCode",{parentName:"p"},"core:quit"),").\nWhen the shortcut is pressed Pragtical will iterate each command\nassigned to that key and run the ",(0,o.kt)("em",{parentName:"p"},"predicate function")," for that command \u2014 if the\npredicate passes it stops iterating and runs the command."),(0,o.kt)("p",null,"A new mapping can be added by your user module as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local keymap = require "core.keymap"\nkeymap.add { ["ctrl+q"] = "core:quit" }\n')),(0,o.kt)("p",null,"A list of default mappings can be viewed ",(0,o.kt)("a",{parentName:"p",href:"/img/user-guide/find.png"},"here"),"."),(0,o.kt)("h2",{id:"multiple-selections-multiple-cursors"},"Multiple selections (multiple cursors)"),(0,o.kt)("p",null,"Pragtical supports multiple cursors to edit multiple lines at once.\nYou insert more cursors by ",(0,o.kt)("kbd",{parentName:"p"},"ctrl+left-button"),".\nTo insert cursors upwards or downwards, use ",(0,o.kt)("kbd",{parentName:"p"},"ctrl+shift+up"),"\nor ",(0,o.kt)("kbd",{parentName:"p"},"ctrl+shift+down"),"."),(0,o.kt)("video",{autoplay:!0,muted:!0,loop:!0,style:{width:"100%"},controls:!0},(0,o.kt)("source",{src:"/videos/user-guide/multi-cursor.mp4"})),(0,o.kt)("h2",{id:"find-and-replace"},"Find and replace"),(0,o.kt)("p",null,"To find a certain word, you can use ",(0,o.kt)("kbd",{parentName:"p"},"ctrl+f"),".\nThis will open a prompt where you can find text in the document.\nAfter entering the text, you can press enter to find the first\nmatch.\nThe matched text will be selected.\nTo find the next match, press ",(0,o.kt)("kbd",{parentName:"p"},"f3")),(0,o.kt)("p",null,"By default, Pragtical uses case-insensitive search.\nInput such as ",(0,o.kt)("inlineCode",{parentName:"p"},"Test")," will match either ",(0,o.kt)("inlineCode",{parentName:"p"},"Test")," or ",(0,o.kt)("inlineCode",{parentName:"p"},"test"),".\nTo toggle case-sensitive search, press ",(0,o.kt)("kbd",{parentName:"p"},"ctrl+i"),"."),(0,o.kt)("p",null,"Pragtical also supports searching with regular expressions.\nThis feature can be enabled by pressing ",(0,o.kt)("kbd",{parentName:"p"},"ctrl+shift+i"),".\nThis mode can be used in conjunction with case-sensitive search."),(0,o.kt)("p",null,"To find and replace text, press ",(0,o.kt)("kbd",{parentName:"p"},"ctrl+r"),".\nPragtical will prompt you for text to replace and the replacement\ntext. Afterwards, it will replace all occurrences of the text."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/img/user-guide/find.png",alt:"The find text prompt"})),(0,o.kt)("h2",{id:"project-search"},"Project search"),(0,o.kt)("p",null,"Finding text across multiple files can be useful.\nTo do this in Pragtical, press ",(0,o.kt)("kbd",{parentName:"p"},"ctrl+shift+f"),".\nYou can then enter the text to find and press enter.\nPragtical will open a new tab to display all the search results.\nTo open the file containing the match, you can click the entries."),(0,o.kt)("p",null,"Project search also supports case-sensitive search and\nregular expressions with the same keyboard shortcuts.\n",(0,o.kt)("inlineCode",{parentName:"p"},"project-search:fuzzy-find")," allows you to search the project\nfor similar words."),(0,o.kt)("p",null,"Pragtical does not support find and replace text across a project."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/img/user-guide/project-search.png",alt:"Project search result tab"})),(0,o.kt)("h2",{id:"line-endings"},"Line endings"),(0,o.kt)("p",null,"Some application may require a specific type of line ending.\nTo change the line ending of a file, you can use the command\n",(0,o.kt)("inlineCode",{parentName:"p"},"doc:toggle-line-ending")," or press the rightmost entry on\nthe StatusView.\nThis should toggle between LF and CRLF which corresponds to\nUnix and Windows style line endings."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/img/user-guide/line-endings.png",alt:"Button to change line endings"})),(0,o.kt)("h2",{id:"indentation"},"Indentation"),(0,o.kt)("p",null,"Pragtical should automatically detect the indentation\nof the current file and apply it when pressing ",(0,o.kt)("kbd",{parentName:"p"},"tab"),".\nHowever, you can change the indentation size by left-clicking\nthe 4th entry on the right of the StatusView.\nYou can also change the type of the indentation by right-clicking\nthe entry.\nThe settings will not apply to existing text."),(0,o.kt)("p",null,(0,o.kt)("img",{parentName:"p",src:"/img/user-guide/indent.png",alt:"Changing the indentation of the file"})),(0,o.kt)("h2",{id:"projects"},"Projects"),(0,o.kt)("p",null,"Pragtical centers around the concept of projects \u2014 a project contains your code\nand project-specific configuration.\nA project contains at least one project directory.\nProject directories are where your code is stored."),(0,o.kt)("p",null,"To use open a directory as a project, the directory name can be passed\nas a command-line argument or the directory can be dragged onto\neither the executable or a running instance.\nOnce loaded, the project can be changed using the command\n",(0,o.kt)("inlineCode",{parentName:"p"},"core:change-project-folder"),".\nThe command will close all the documents currently opened\nand switch to the new project.\nIf you want to open a project in a new window,\nthe command ",(0,o.kt)("inlineCode",{parentName:"p"},"core:open-project-folder")," will open a new editor window\nwith the selected project."),(0,o.kt)("p",null,"Projects may contain multiple directories.\nTo add a directory to the current project,\nyou can use the command ",(0,o.kt)("inlineCode",{parentName:"p"},"core:add-directory"),".\nOnce the directory is added to the project, you can browse its file on the\nfile browser and fuzzy finder."),(0,o.kt)("p",null,"Pragtical will automatically save opened files and directories and restore them\nwhen you restart the editor."))}u.isMDXComponent=!0}}]);