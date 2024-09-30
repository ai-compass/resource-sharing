import{c as k,d as b,u as A,a as r,m,w as f,e as _,r as C,n as S,b as y,f as P,B as $,g as B,h as N,i as V,j as w,I as j,k as z,o as E,l as O,p as R}from"./index-w-6OZEQE.js";const[g,U]=k("sidebar"),p=Symbol(g),q={modelValue:m(0)};var D=b({name:g,props:q,emits:["change","update:modelValue"],setup(t,{emit:n,slots:i}){const{linkChildren:o}=A(p),a=()=>+t.modelValue;return o({getActive:a,setActive:s=>{s!==a()&&(n("update:modelValue",s),n("change",s))}}),()=>{var s;return r("div",{role:"tablist",class:U()},[(s=i.default)==null?void 0:s.call(i)])}}});const K=f(D),[T,I]=k("sidebar-item"),Y=_({},C,{dot:Boolean,title:String,badge:S,disabled:Boolean,badgeProps:Object});var F=b({name:T,props:Y,emits:["click"],setup(t,{emit:n,slots:i}){const o=y(),{parent:a,index:l}=P(p);if(!a)return;const s=()=>{t.disabled||(n("click",l.value),a.setActive(l.value),o())};return()=>{const{dot:v,badge:x,title:e,disabled:d}=t,c=l.value===a.getActive();return r("div",{role:"tab",class:I({select:c,disabled:d}),tabindex:d?void 0:0,"aria-selected":c,onClick:s},[r($,B({dot:v,class:I("text"),content:x},t.badgeProps),{default:()=>[i.title?i.title():e]})])}}});const G=f(F),[H,u]=k("tree-select"),J={max:m(1/0),items:V(),height:m(300),selectedIcon:w("success"),mainActiveIndex:m(0),activeId:{type:[Number,String,Array],default:0}};var L=b({name:H,props:J,emits:["clickNav","clickItem","update:activeId","update:mainActiveIndex"],setup(t,{emit:n,slots:i}){const o=e=>Array.isArray(t.activeId)?t.activeId.includes(e):t.activeId===e,a=e=>{const d=()=>{if(e.disabled)return;let c;if(Array.isArray(t.activeId)){c=t.activeId.slice();const h=c.indexOf(e.id);h!==-1?c.splice(h,1):c.length<+t.max&&c.push(e.id)}else c=e.id;n("update:activeId",c),n("clickItem",e)};return r("div",{key:e.id,class:["van-ellipsis",u("item",{active:o(e.id),disabled:e.disabled})],onClick:d},[e.text,o(e.id)&&r(j,{name:t.selectedIcon,class:u("selected")},null)])},l=e=>{n("update:mainActiveIndex",e)},s=e=>n("clickNav",e),v=()=>{const e=t.items.map(d=>r(G,{dot:d.dot,badge:d.badge,class:[u("nav-item"),d.className],disabled:d.disabled,onClick:s},{title:()=>i["nav-text"]?i["nav-text"](d):d.text}));return r(K,{class:u("nav"),modelValue:t.mainActiveIndex,onChange:l},{default:()=>[e]})},x=()=>{if(i.content)return i.content();const e=t.items[+t.mainActiveIndex]||{};if(e.children)return e.children.map(a)};return()=>r("div",{class:u(),style:{height:N(t.height)}},[v(),r("div",{class:u("content")},[x()])])}});const M=f(L),W=b({__name:"index",setup(t){const n=z(0),i=[{text:"剧集区",children:[{id:1,from:"剧集区",text:"国产",link:"/detail/list/series/zh"},{id:2,from:"剧集区",text:"美国",link:"/detail/list/series/en"}]},{text:"电影区",children:[{id:3,from:"电影区",text:"国产",link:"/detail/list/movie/zh"},{id:4,from:"电影区",text:"美国",link:"/detail/list/movie/en"}]},{text:"软件区",children:[{id:5,from:"软件区",text:"电脑",link:"/detail/list/soft/pc"},{id:6,from:"软件区",text:"手机",link:"/detail/list/soft/phone"}]},{text:"书籍区",children:[{id:7,from:"书籍区",text:"有声书",link:"/detail/list/book/audio"},{id:8,from:"书籍区",text:"电子书",link:"/detail/list/book/ebook"}]},{text:"其他区",children:[{id:9,from:"其他区",text:"动态壁纸",link:"https://pan.quark.cn/s/71056a75dc66"}]}],o=a=>{if(a.link.includes("https"))return window.open(a.link);R.push(`${a.link}/${a.from}|${a.text}`)};return(a,l)=>{const s=M;return E(),O(s,{"main-active-index":n.value,"onUpdate:mainActiveIndex":l[0]||(l[0]=v=>n.value=v),style:{height:"calc(100vh - var(--van-nav-bar-height) - var(--van-tabbar-height)"},items:i,onClickItem:o},null,8,["main-active-index"])}}});export{W as default};