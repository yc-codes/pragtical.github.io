"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9633],{3352:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>i,metadata:()=>o,toc:()=>l});var s=r(5893),t=r(1151);const i={sidebar_position:7,description:"Learn to use regular expressions in your configurations or plugins."},a="Using Regular Expressions",o={id:"developer-guide/using-regular-expressions",title:"Using Regular Expressions",description:"Learn to use regular expressions in your configurations or plugins.",source:"@site/docs/developer-guide/using-regular-expressions.md",sourceDirName:"developer-guide",slug:"/developer-guide/using-regular-expressions",permalink:"/docs/developer-guide/using-regular-expressions",draft:!1,unlisted:!1,editUrl:"https://github.com/pragtical/pragtical.github.io/edit/main/docs/developer-guide/using-regular-expressions.md",tags:[],version:"current",sidebarPosition:7,frontMatter:{sidebar_position:7,description:"Learn to use regular expressions in your configurations or plugins."},sidebar:"tutorialSidebar",previous:{title:"Classes and Objects",permalink:"/docs/developer-guide/classes-and-objects"},next:{title:"Interacting with the OS",permalink:"/docs/developer-guide/interacting-with-the-os"}},c={},l=[{value:"Example: matching capture groups with a regular expression",id:"example-matching-capture-groups-with-a-regular-expression",level:2},{value:"Example: replacing words with a regular expression",id:"example-replacing-words-with-a-regular-expression",level:2},{value:"Using the Regex API",id:"using-the-regex-api",level:2},{value:"Creating a regex",id:"creating-a-regex",level:3},{value:"Matching text",id:"matching-text",level:3},{value:"String substitution",id:"string-substitution",level:3},{value:"Replacement string",id:"replacement-string",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h1,{id:"using-regular-expressions",children:"Using Regular Expressions"}),"\n",(0,s.jsx)(n.p,{children:"This API provides PCRE (Perl-Compatible Regular Expressions)\nand is written in C and Lua.\nThe API bears some similarity to Lua's pattern library with some differences."}),"\n",(0,s.jsx)(n.h2,{id:"example-matching-capture-groups-with-a-regular-expression",children:"Example: matching capture groups with a regular expression"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local s = "hello world hello world"\nfor hello, world in regex.gmatch("(hello)\\\\s+(world)", s) do\n    print(hello .. " " .. world)\nend\n'})}),"\n",(0,s.jsx)(n.h2,{id:"example-replacing-words-with-a-regular-expression",children:"Example: replacing words with a regular expression"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local s = "hello world John!"\nprint(regex.gsub("hello world (.+)!", s, "Hello world $1 Doe!"))\n'})}),"\n",(0,s.jsx)(n.h2,{id:"using-the-regex-api",children:"Using the Regex API"}),"\n",(0,s.jsxs)(n.p,{children:["Most Regex API functions accept a ",(0,s.jsx)(n.code,{children:"Regex"})," object or a string to compile\ninto a regex as their first argument.\nThe only exception is ",(0,s.jsx)(n.code,{children:"regex:cmatch()"})," which requires the first argument to\nbe a ",(0,s.jsx)(n.code,{children:"Regex"})," object."]}),"\n",(0,s.jsxs)(n.p,{children:["For more information regarding PCRE itself,\nplease consult the ",(0,s.jsx)(n.a,{href:"https://www.pcre.org/original/doc/html/pcrepattern.html",children:"documentation"})," or a ",(0,s.jsx)(n.a,{href:"https://www.debuggex.com/cheatsheet/regex/pcre",children:"cheatsheet"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"creating-a-regex",children:"Creating a regex"}),"\n",(0,s.jsxs)(n.p,{children:["Use ",(0,s.jsx)(n.code,{children:"regex.compile()"})," to compile a regular expression.\nCompiling a regular expression is recommended if the user plans to use them\nfrequently."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"function regex.compile(pattern:  string,\n                        options?: string): Regex, string\nend\n"})}),"\n",(0,s.jsx)(n.p,{children:"The first argument to the function is the regular expression to compile.\nThe second argument to the function is a string containing one or more\npattern modifiers."}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"i"'})," enables case-insensitive matching"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"m"'})," enables multi-line matching"]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:'"s"'})," matches all characters with the dot (",(0,s.jsx)(n.code,{children:"."}),") meta-character,\nincluding newlines."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["The function returns a compiled ",(0,s.jsx)(n.code,{children:"Regex"})," object.\nIf an error occurred, ",(0,s.jsx)(n.code,{children:"nil"})," is returned along with an error message."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local s = "Hello world!\\nWow!"\n\n-- simple regex\nlocal r = regex.compile "([A-Z]+)(,+)"\n-- prints:\n-- H       ello world!\nprint(r:match(s))\n\n-- case-insensitive matching\nlocal r = regex.compile("([A-Z]+)(,+)", "i")\n-- prints:\n-- Hello    world!\nprint(r:match(s))\n\n-- match all characters with .\nlocal r = regex.compile("([A-Z]+)(,+)", "is")\n-- prints:\n-- Hello    world!\n-- Wow!\nprint(r:match(s))\n'})}),"\n",(0,s.jsx)(n.h3,{id:"matching-text",children:"Matching text"}),"\n",(0,s.jsxs)(n.p,{children:["The Regex API provides low-level matching functions\n(",(0,s.jsx)(n.code,{children:"regex:cmatch()"}),", ",(0,s.jsx)(n.code,{children:"regex.find_offsets()"}),"),\nand high-level matching functions\n(",(0,s.jsx)(n.code,{children:"regex.match()"}),",",(0,s.jsx)(n.code,{children:"regex.find()"}),", ",(0,s.jsx)(n.code,{children:"regex.gmatch()"}),", ",(0,s.jsx)(n.code,{children:"regex.gsub()"}),")."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"function regex:cmatch(subject: string,\n                      offset:  number,\n                      options: number): number...\nend\n\nfunction regex.find_offsets(pattern:  string | Regex,\n                            subject:  string,\n                            offset?:  number,\n                            options?: number): number...\nend\n\nlocal type Captures = number | string\n\nfunction regex.match(pattern:   string | Regex,\n                      subject:  string,\n                      offset?:  number,\n                      options?: number): Captures...\nend\n\nfunction regex.find(pattern: string | Regex,\n                    subject: string,\n                    offset?:  number,\n                    options?: number): Captures...\nend\n\n-- since v2.1.1\nfunction regex.gmatch(pattern: string | Regex,\n                      subject: string,\n                      offset?:  number,\n                      options?: number): function(): string\nend\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The first argument to ",(0,s.jsx)(n.code,{children:"regex:cmatch()"})," is the subject string.\nThe second argument is an offset in the subject string to indicate when to start\nmatching.\nThe third argument is a number comprised of multiple match options OR-ed together.\nThese options are:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"regex.ANCHORED"}),": Only matches the start of the input;\nsimilar to adding the ",(0,s.jsx)(n.code,{children:"^"})," meta-character to the regex."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"regex.ENDANCHORED"}),": Only matches the end of the input;\nsimilar to adding the ",(0,s.jsx)(n.code,{children:"$"})," meta-character to the regex."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"regex.NOTBOL"}),": Do not treat beginning of subject string as beginning of line."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"regex.NOTEOL"}),": Do not treat end of subject string as end of line."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"regex.NOTEMPTY"}),": Do not treat an empty subject string as a valid match."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.code,{children:"regex.NOTEMPTY_ATSTART"}),": Do not treat empty string at the start of a subject\nstring as a valid match."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"regex.find_offsets()"})," accepts the same arguments,\nbut the first argument can be a compiled ",(0,s.jsx)(n.code,{children:"Regex"})," object or a string\nwhile the second and third argument are optional."]}),"\n",(0,s.jsxs)(n.p,{children:["Both ",(0,s.jsx)(n.code,{children:"regex:cmatch()"})," and ",(0,s.jsx)(n.code,{children:"regex.find_offsets()"})," return pairs of numbers\nindicating the start and end indices of all the matches.\nThe first pair of numbers is the indices of the whole match.\nIf captures were specified in the regex, the rest of the numbers are pairs\nof start and end indices for each capture."]}),"\n",(0,s.jsxs)(n.p,{children:["If no matches were found, both functions return ",(0,s.jsx)(n.code,{children:"nil"}),".\nOtherwise, if an error occurred, both functions throw an error."]}),"\n",(0,s.jsxs)(n.p,{children:["!!! warning\nNever use ",(0,s.jsx)(n.code,{children:"regex:cmatch()"})," as its return values are off by 1.\nInstead, use ",(0,s.jsx)(n.code,{children:"regex:find_offsets()"})," which have the correct behavior."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local s = "Apples, Oranges, Bananas"\nlocal r = regex.compile("([A-Za-z]+),\\\\s*(.+)")\n-- prints:\n-- 24\nprint(#s)\n-- prints:\n-- 1       25      1       7       9       25\nprint(r:cmatch(s))\n-- prints:\n-- 1       24      1       6       9       24\nprint(r:find_offsets(s))\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"regex.match()"})," and ",(0,s.jsx)(n.code,{children:"regex.find()"})," are similar to Lua's ",(0,s.jsx)(n.code,{children:"string.match()"})," and\n",(0,s.jsx)(n.code,{children:"string.find()"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["The first argument is the compiled ",(0,s.jsx)(n.code,{children:"Regex"})," or a string,\nwhile the second argument is the subject string to match.\nThe third and fourth argument specify the offset of the string to start matching\nand match options.\nThe third and fourth argument are optional."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"regex.match()"})," will return all captured strings.\nIf no captures are specified in the regex, it will return the matched string.\nIf a capture is empty, its offset will be returned."]}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"regex.find()"})," will return the start and end indices of the matched string,\nfollowed by the captured strings if any.\nIf a capture is empty, its offset will be returned."]}),"\n",(0,s.jsxs)(n.p,{children:["Both functions return ",(0,s.jsx)(n.code,{children:"nil"})," if no match was found."]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsxs)(n.p,{children:["There are no functions that return the start and end indices of captured\nstrings.\nUse ",(0,s.jsx)(n.code,{children:"regex.find_offsets()"})," for that."]})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local s = "Apples, Oranges, Bananas"\n-- prints:\n-- Apples    Oranges, Bananas\nprint(regex.match("([A-Za-z]+),\\\\s*(.+)", s))\n-- prints:\n-- 1    24    Apples    Oranges, Bananas\nprint(regex.find("([A-Za-z]+),\\\\s*(.+)", s))\n\n'})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"regex.gmatch()"})," returns an iterator that iterates through all captured groups,\nor the whole match if no captures are specified in the regex."]}),"\n",(0,s.jsxs)(n.p,{children:["It accepts the same arguments as ",(0,s.jsx)(n.code,{children:"regex.find()"})," and ",(0,s.jsx)(n.code,{children:"regex.match()"}),"."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local s = "John doe, Jeanne Doe, Jane Doe"\n-- will print:\n-- John - Doe\n-- Jeanne - Doe\n-- Jane - Doe\nfor first_name, last_name in regex.gmatch("([A-Za-z]+) ([A-Za-z]+)(,\\\\s*)?", s) do\n  print(first_name .. " - " .. last_name)\nend\n\n-- will print:\n-- John\n-- doe\n-- Jeanne\n-- Doe\n-- Jane\n-- Doe\nfor name in regex.gmatch("\\\\w+", s) do\n  print(name)\nend\n'})}),"\n",(0,s.jsx)(n.h3,{id:"string-substitution",children:"String substitution"}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.code,{children:"regex.gsub()"})," can be used to perform simple string substitution."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:"function regex.gsub(pattern:     string | Regex,\n                    subject:     string,\n                    replacement: string,\n                    limit?:      number): string, number\nend\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The first argument is the ",(0,s.jsx)(n.code,{children:"Regex"})," object or a string, followed by the subject\nstring.\nThe third argument is the replacement string and the last is the maximum number\nof replacements to make."]}),"\n",(0,s.jsx)(n.p,{children:"The function returns the subject string with matches replaced with the\nreplacement string,\nfollowed by the number of replacements made."}),"\n",(0,s.jsx)(n.p,{children:"If an error occurred, the function throws an error."}),"\n",(0,s.jsx)(n.h4,{id:"replacement-string",children:"Replacement string"}),"\n",(0,s.jsx)(n.p,{children:"The replacement string supports PCRE2 extended substitution syntax."}),"\n",(0,s.jsxs)(n.p,{children:["To use named and unnamed capture groups with ",(0,s.jsx)(n.code,{children:"$n"})," or\n",(0,s.jsx)(n.code,{children:"${n}"})," where ",(0,s.jsx)(n.code,{children:"n"})," is the group number or name.\nThe extended substitution syntax also supports two extra substitutions:"]}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["The form ",(0,s.jsx)(n.code,{children:"${n:-default}"})," will use ",(0,s.jsx)(n.code,{children:"default"})," if ",(0,s.jsx)(n.code,{children:"n"})," is unavailable."]}),"\n",(0,s.jsxs)(n.li,{children:["The form ",(0,s.jsx)(n.code,{children:"${n:+iftrue:iffalse}"})," will use ",(0,s.jsx)(n.code,{children:"iftrue"})," if ",(0,s.jsx)(n.code,{children:"n"})," is available,\notherwise it will use ",(0,s.jsx)(n.code,{children:"iffalse"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["To insert a literal dollar sign (",(0,s.jsx)(n.code,{children:"$"}),"), use ",(0,s.jsx)(n.code,{children:"$$"}),"."]}),"\n",(0,s.jsxs)(n.p,{children:["Other than that, ",(0,s.jsx)(n.code,{children:"\\U"})," and ",(0,s.jsx)(n.code,{children:"\\L"})," can be used to toggle uppercase or lowercase,\nwhile ",(0,s.jsx)(n.code,{children:"\\u"})," and ",(0,s.jsx)(n.code,{children:"\\l"})," causes the ",(0,s.jsx)(n.strong,{children:"next character"})," to be in uppercase\nor lowercase."]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.strong,{children:"Example:"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-lua",children:'local s = "John Doe, Jane Doe, Peter Doe"\nlocal r = regex.compile "(\\\\w+)"\n\n-- prints:\n-- No No, No No, No No     6\nprint(r:gsub(s, "No"))\n-- prints:\n-- $John $doe, $Jane $Doe, $Peter $Doe     6\nprint(r:gsub(s, "($1)"))\n-- prints:\n-- john doe, jane doe, peter doe   6\nprint(r:gsub(s, "\\\\l${1}"))\n-- prints:\n-- Matched => John Matched => doe, Matched => Jane Matched => Doe, Matched => Peter Matched => Doe 6\nprint(r:gsub(s, "${1:+Matched => $1:No match.}"))\n'})})]})}function h(e={}){const{wrapper:n}={...(0,t.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},1151:(e,n,r)=>{r.d(n,{Z:()=>o,a:()=>a});var s=r(7294);const t={},i=s.createContext(t);function a(e){const n=s.useContext(i);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(i.Provider,{value:n},e.children)}}}]);