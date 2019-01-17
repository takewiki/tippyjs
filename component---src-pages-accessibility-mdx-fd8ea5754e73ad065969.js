(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{156:function(e,a,t){"use strict";t.r(a),t.d(a,"default",function(){return E}),t.d(a,"_frontmatter",function(){return N});var n=t(85),s=t.n(n),c=t(7),l=t.n(c),o=t(0),m=t.n(o),r=t(177),p=t(174),u=t(170),i=t(194),E=function(e){function a(a){var t;return(t=e.call(this,a)||this).layout=p.a,t}return l()(a,e),a.prototype.render=function(){var e=this.props,a=e.components,t=s()(e,["components"]);return m.a.createElement(r.MDXTag,{name:"wrapper",Layout:this.layout,layoutProps:t,components:a},m.a.createElement(r.MDXTag,{name:"p",components:a},"Tooltips have some basic attributes to help with accessibility."),m.a.createElement(r.MDXTag,{name:"p",components:a},"It's recommended that tooltips are applied only to natively focusable elements\nlike ",m.a.createElement("code",{className:"language-text"},"<button>"),". Most screenreader software will not announce the tooltip on an\nelement like ",m.a.createElement("code",{className:"language-text"},"<div>"),"."),m.a.createElement(r.MDXTag,{name:"h3",components:a},"Trigger"),m.a.createElement(r.MDXTag,{name:"p",components:a},"The default trigger for tooltips is ",m.a.createElement("code",{className:"language-text"},'"mouseenter focus"'),". This means both a\nhover and focus via keyboard navigation will trigger a tooltip."),m.a.createElement(r.MDXTag,{name:"h3",components:a},"ARIA attributes"),m.a.createElement(r.MDXTag,{name:"p",components:a},"By default, the reference element receives an ",m.a.createElement("code",{className:"language-text"},"aria-describedby")," attribute\n(configurable) once the tooltip is fully shown."),m.a.createElement("div",{className:"gatsby-highlight","data-language":"html"},m.a.createElement("pre",{className:"language-html"},m.a.createElement("code",{className:"language-html"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"button")," ",m.a.createElement("span",{className:"token attr-name"},"aria-describedby"),m.a.createElement("span",{className:"token attr-value"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},'"'),"tippy-1",m.a.createElement("span",{className:"token punctuation"},'"')),m.a.createElement("span",{className:"token punctuation"},">")),"Text",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"</"),"button"),m.a.createElement("span",{className:"token punctuation"},">")),"\n",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"div")," ",m.a.createElement("span",{className:"token attr-name"},"id"),m.a.createElement("span",{className:"token attr-value"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},'"'),"tippy-1",m.a.createElement("span",{className:"token punctuation"},'"'))," ",m.a.createElement("span",{className:"token attr-name"},"role"),m.a.createElement("span",{className:"token attr-value"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},'"'),"tooltip",m.a.createElement("span",{className:"token punctuation"},'"'))," ",m.a.createElement("span",{className:"token attr-name"},"class"),m.a.createElement("span",{className:"token attr-value"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},'"'),"tippy-popper",m.a.createElement("span",{className:"token punctuation"},'"')),m.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",m.a.createElement("span",{className:"token comment"},"\x3c!-- inner elements --\x3e"),"\n",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"</"),"div"),m.a.createElement("span",{className:"token punctuation"},">"))))),m.a.createElement(r.MDXTag,{name:"p",components:a},"This allows screenreader software to announce the tooltip content describing the\nreference element. No work is required by you to achieve this functionality."),m.a.createElement(r.MDXTag,{name:"h3",components:a},"Popovers and interactivity"),m.a.createElement(r.MDXTag,{name:"p",components:a},"By default, interactive tippys will be auto-focused once they are fully shown to\nallow the user to interact with elements inside it. However, some additional\nwork will be needed in certain cases."),m.a.createElement(r.MDXTag,{name:"p",components:a},"It's recommended that an interactive tippy with a ",m.a.createElement("code",{className:"language-text"},"focus")," trigger is appended\ndirectly after the reference element in the DOM tree using the ",m.a.createElement("code",{className:"language-text"},"appendTo")," option\nand have ",m.a.createElement("code",{className:"language-text"},"autoFocus")," disabled. If triggered by a ",m.a.createElement("code",{className:"language-text"},"click"),", the default options\nsuffice."),m.a.createElement(r.MDXTag,{name:"p",components:a},"For UI elements like dropdowns, you should apply these attributes to the\nreference:"),m.a.createElement(r.MDXTag,{name:"ul",components:a},m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement("code",{className:"language-text"},'aria-haspopup="true"')),m.a.createElement(r.MDXTag,{name:"li",components:a,parentName:"ul"},m.a.createElement("code",{className:"language-text"},'aria-expanded="false"'))),m.a.createElement("div",{className:"gatsby-highlight","data-language":"html"},m.a.createElement("pre",{className:"language-html"},m.a.createElement("code",{className:"language-html"},m.a.createElement("span",{className:"token comment"},"\x3c!-- The element should have its own wrapper. --\x3e"),"\n",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"div"),m.a.createElement("span",{className:"token punctuation"},">")),"\n","  ",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"<"),"button")," ",m.a.createElement("span",{className:"token attr-name"},"aria-haspopup"),m.a.createElement("span",{className:"token attr-value"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},'"'),"true",m.a.createElement("span",{className:"token punctuation"},'"'))," ",m.a.createElement("span",{className:"token attr-name"},"aria-expanded"),m.a.createElement("span",{className:"token attr-value"},m.a.createElement("span",{className:"token punctuation"},"="),m.a.createElement("span",{className:"token punctuation"},'"'),"false",m.a.createElement("span",{className:"token punctuation"},'"')),m.a.createElement("span",{className:"token punctuation"},">")),"Text",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"</"),"button"),m.a.createElement("span",{className:"token punctuation"},">")),"\n",m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token tag"},m.a.createElement("span",{className:"token punctuation"},"</"),"div"),m.a.createElement("span",{className:"token punctuation"},">"))))),m.a.createElement(r.MDXTag,{name:"p",components:a},"We will need to dynamically change the ",m.a.createElement("code",{className:"language-text"},"aria-expanded")," attribute based on the\nstate of the tooltip:"),m.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},m.a.createElement("pre",{className:"language-js"},m.a.createElement("code",{className:"language-js"},m.a.createElement("span",{className:"token function"},"tippy"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token string"},"'button'"),m.a.createElement("span",{className:"token punctuation"},",")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ",m.a.createElement("span",{className:"token definition property"},"autoFocus"),m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token boolean"},"false"),m.a.createElement("span",{className:"token punctuation"},","),"\n","  ",m.a.createElement("span",{className:"token definition property"},"appendTo"),m.a.createElement("span",{className:"token punctuation"},":")," ",m.a.createElement("span",{className:"token parameter"},"ref")," ",m.a.createElement("span",{className:"token arrow operator"},"=>")," ref",m.a.createElement("span",{className:"token punctuation"},"."),m.a.createElement("span",{className:"token access property"},"parentNode"),m.a.createElement("span",{className:"token punctuation"},","),"\n","  ",m.a.createElement("span",{className:"token function"},"onMount"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token parameter"},m.a.createElement("span",{className:"token punctuation"},"{")," reference ",m.a.createElement("span",{className:"token punctuation"},"}")),m.a.createElement("span",{className:"token punctuation"},")")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ","reference",m.a.createElement("span",{className:"token punctuation"},"."),m.a.createElement("span",{className:"token method function"},"setAttribute"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token string"},"'aria-expanded'"),m.a.createElement("span",{className:"token punctuation"},",")," ",m.a.createElement("span",{className:"token string"},"'true'"),m.a.createElement("span",{className:"token punctuation"},")"),"\n","  ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},","),"\n","  ",m.a.createElement("span",{className:"token function"},"onHide"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token parameter"},m.a.createElement("span",{className:"token punctuation"},"{")," reference ",m.a.createElement("span",{className:"token punctuation"},"}")),m.a.createElement("span",{className:"token punctuation"},")")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ","reference",m.a.createElement("span",{className:"token punctuation"},"."),m.a.createElement("span",{className:"token method function"},"setAttribute"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token string"},"'aria-expanded'"),m.a.createElement("span",{className:"token punctuation"},",")," ",m.a.createElement("span",{className:"token string"},"'false'"),m.a.createElement("span",{className:"token punctuation"},")"),"\n","  ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},","),"\n",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},")")))),m.a.createElement(u.c,null,m.a.createElement(u.a,null,"Click me then press Tab"),m.a.createElement(i.a,null)),m.a.createElement(r.MDXTag,{name:"p",components:a},"Elements within the tippy can be tabbed to since they are directly after the\nreference element. The tooltip automatically hides once no elements inside it\nare in focus."),m.a.createElement(r.MDXTag,{name:"p",components:a},"If for some reason you don't want the tooltip to hide once blurred, you can\ndefine the following option:"),m.a.createElement("div",{className:"gatsby-highlight","data-language":"js"},m.a.createElement("pre",{className:"language-js"},m.a.createElement("code",{className:"language-js"},m.a.createElement("span",{className:"token function"},"tippy"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token string"},"'button'"),m.a.createElement("span",{className:"token punctuation"},",")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","  ",m.a.createElement("span",{className:"token function"},"shouldPopperHideOnBlur"),m.a.createElement("span",{className:"token punctuation"},"("),m.a.createElement("span",{className:"token parameter"},"focusOutEvent"),m.a.createElement("span",{className:"token punctuation"},")")," ",m.a.createElement("span",{className:"token punctuation"},"{"),"\n","    ",m.a.createElement("span",{className:"token comment"},"// You can read the `focusout` event object"),"\n","    ",m.a.createElement("span",{className:"token comment"},"// to determine which boolean should be returned."),"\n","    ",m.a.createElement("span",{className:"token flow keyword"},"return")," ",m.a.createElement("span",{className:"token boolean"},"false"),"\n","  ",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},","),"\n",m.a.createElement("span",{className:"token punctuation"},"}"),m.a.createElement("span",{className:"token punctuation"},")")))))},a}(m.a.Component),N={}}}]);
//# sourceMappingURL=component---src-pages-accessibility-mdx-fd8ea5754e73ad065969.js.map