import{r as d,j as a,c as _,a as Ue}from"./admin-lLYi9xap.js";import{A as re,a as oe}from"./alert-CrNRFwRV.js";import{B}from"./badge-B8c7c0ME.js";import{u as z,c as Be,B as U}from"./button-BIc6M4L6.js";import{b as Fe,d as Ye,a as Ve}from"./card-BqKgk35h.js";import{c as L}from"./utils-D0Zg16Wk.js";import{P as I}from"./index-wDQA_HOL.js";import{P as F}from"./index-6GSPsNXt.js";import{c as he,a as k,u as We,b as He}from"./index-OtjTJ5CT.js";import{u as O}from"./index-DFLOy_VE.js";import{u as ge}from"./index-DVDVOsHP.js";import{e as $e,S as Ge,a as Xe,b as Je,c as Ke,d as Ze}from"./select-CGYoUfo6.js";import{f as be,R as et,I as tt}from"./dropdown-menu-CwQR3IhS.js";import{u as rt}from"./index-CRycdKEu.js";import{T as ae}from"./textarea-cXFc9zIP.js";import{m as ot}from"./index-D8eQl2k1.js";import{t as ne}from"./index-C4L1mA4_.js";import at from"./admin-layout-DhrG8-hs.js";import{C as se}from"./circle-alert-CY3LnIeg.js";import{F as J}from"./file-text-CbCUfVmD.js";import{C as ie}from"./copy-BCZwJdVC.js";import{E as nt}from"./eye-BN7I-cnq.js";import{C as st}from"./check-C3Q1aAJF.js";import{C as le,a as it}from"./circle-x-Bzy-cg08.js";import"./bootstrap-CWD7zuwT.js";/* empty css            */import"./chevron-down-BxLcAklY.js";import"./createLucideIcon-BFUBahP7.js";import"./index-BEpw4BGD.js";import"./index-DYuRayFD.js";import"./index-CijdCYDW.js";import"./index-BDEQ3w0O.js";import"./index-DE4duBNV.js";import"./index-DtuY7TEn.js";import"./index-Dadb4C2L.js";import"./index-DHvWDHaB.js";import"./index-BMme3XRg.js";import"./index-D902mgOl.js";import"./index-V0u68DS2.js";import"./app-layout-3DaSAmOK.js";import"./use-quiz-mode-CJXz3V8p.js";import"./index-CynUULqC.js";import"./x-Bzrph1CZ.js";import"./index-DpOyATqw.js";import"./chevron-right-CoUsu0xv.js";import"./index-BStBPVHt.js";import"./book-open-Cmp6adp3.js";import"./breadcrumbs-utils-uitSj5Sj.js";function lt(r,e){return d.useReducer((t,n)=>e[t][n]??t,r)}var K="ScrollArea",[xe,Fr]=he(K),[ct,E]=xe(K),ve=d.forwardRef((r,e)=>{const{__scopeScrollArea:t,type:n="hover",dir:o,scrollHideDelay:s=600,...i}=r,[l,c]=d.useState(null),[m,u]=d.useState(null),[f,p]=d.useState(null),[g,x]=d.useState(null),[w,P]=d.useState(null),[S,y]=d.useState(0),[j,N]=d.useState(0),[A,C]=d.useState(!1),[T,R]=d.useState(!1),b=z(e,h=>c(h)),v=ge(o);return a.jsx(ct,{scope:t,type:n,dir:v,scrollHideDelay:s,scrollArea:l,viewport:m,onViewportChange:u,content:f,onContentChange:p,scrollbarX:g,onScrollbarXChange:x,scrollbarXEnabled:A,onScrollbarXEnabledChange:C,scrollbarY:w,onScrollbarYChange:P,scrollbarYEnabled:T,onScrollbarYEnabledChange:R,onCornerWidthChange:y,onCornerHeightChange:N,children:a.jsx(I.div,{dir:v,...i,ref:b,style:{position:"relative","--radix-scroll-area-corner-width":S+"px","--radix-scroll-area-corner-height":j+"px",...r.style}})})});ve.displayName=K;var Se="ScrollAreaViewport",ye=d.forwardRef((r,e)=>{const{__scopeScrollArea:t,children:n,nonce:o,...s}=r,i=E(Se,t),l=d.useRef(null),c=z(e,l,i.onViewportChange);return a.jsxs(a.Fragment,{children:[a.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:o}),a.jsx(I.div,{"data-radix-scroll-area-viewport":"",...s,ref:c,style:{overflowX:i.scrollbarXEnabled?"scroll":"hidden",overflowY:i.scrollbarYEnabled?"scroll":"hidden",...r.style},children:a.jsx("div",{ref:i.onContentChange,style:{minWidth:"100%",display:"table"},children:n})})]})});ye.displayName=Se;var D="ScrollAreaScrollbar",we=d.forwardRef((r,e)=>{const{forceMount:t,...n}=r,o=E(D,r.__scopeScrollArea),{onScrollbarXEnabledChange:s,onScrollbarYEnabledChange:i}=o,l=r.orientation==="horizontal";return d.useEffect(()=>(l?s(!0):i(!0),()=>{l?s(!1):i(!1)}),[l,s,i]),o.type==="hover"?a.jsx(dt,{...n,ref:e,forceMount:t}):o.type==="scroll"?a.jsx(ut,{...n,ref:e,forceMount:t}):o.type==="auto"?a.jsx(Ce,{...n,ref:e,forceMount:t}):o.type==="always"?a.jsx(Z,{...n,ref:e}):null});we.displayName=D;var dt=d.forwardRef((r,e)=>{const{forceMount:t,...n}=r,o=E(D,r.__scopeScrollArea),[s,i]=d.useState(!1);return d.useEffect(()=>{const l=o.scrollArea;let c=0;if(l){const m=()=>{window.clearTimeout(c),i(!0)},u=()=>{c=window.setTimeout(()=>i(!1),o.scrollHideDelay)};return l.addEventListener("pointerenter",m),l.addEventListener("pointerleave",u),()=>{window.clearTimeout(c),l.removeEventListener("pointerenter",m),l.removeEventListener("pointerleave",u)}}},[o.scrollArea,o.scrollHideDelay]),a.jsx(F,{present:t||s,children:a.jsx(Ce,{"data-state":s?"visible":"hidden",...n,ref:e})})}),ut=d.forwardRef((r,e)=>{const{forceMount:t,...n}=r,o=E(D,r.__scopeScrollArea),s=r.orientation==="horizontal",i=G(()=>c("SCROLL_END"),100),[l,c]=lt("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return d.useEffect(()=>{if(l==="idle"){const m=window.setTimeout(()=>c("HIDE"),o.scrollHideDelay);return()=>window.clearTimeout(m)}},[l,o.scrollHideDelay,c]),d.useEffect(()=>{const m=o.viewport,u=s?"scrollLeft":"scrollTop";if(m){let f=m[u];const p=()=>{const g=m[u];f!==g&&(c("SCROLL"),i()),f=g};return m.addEventListener("scroll",p),()=>m.removeEventListener("scroll",p)}},[o.viewport,s,c,i]),a.jsx(F,{present:t||l!=="hidden",children:a.jsx(Z,{"data-state":l==="hidden"?"hidden":"visible",...n,ref:e,onPointerEnter:k(r.onPointerEnter,()=>c("POINTER_ENTER")),onPointerLeave:k(r.onPointerLeave,()=>c("POINTER_LEAVE"))})})}),Ce=d.forwardRef((r,e)=>{const t=E(D,r.__scopeScrollArea),{forceMount:n,...o}=r,[s,i]=d.useState(!1),l=r.orientation==="horizontal",c=G(()=>{if(t.viewport){const m=t.viewport.offsetWidth<t.viewport.scrollWidth,u=t.viewport.offsetHeight<t.viewport.scrollHeight;i(l?m:u)}},10);return Q(t.viewport,c),Q(t.content,c),a.jsx(F,{present:n||s,children:a.jsx(Z,{"data-state":s?"visible":"hidden",...o,ref:e})})}),Z=d.forwardRef((r,e)=>{const{orientation:t="vertical",...n}=r,o=E(D,r.__scopeScrollArea),s=d.useRef(null),i=d.useRef(0),[l,c]=d.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),m=Ae(l.viewport,l.content),u={...n,sizes:l,onSizesChange:c,hasThumb:m>0&&m<1,onThumbChange:p=>s.current=p,onThumbPointerUp:()=>i.current=0,onThumbPointerDown:p=>i.current=p};function f(p,g){return bt(p,i.current,l,g)}return t==="horizontal"?a.jsx(mt,{...u,ref:e,onThumbPositionChange:()=>{if(o.viewport&&s.current){const p=o.viewport.scrollLeft,g=ce(p,l,o.dir);s.current.style.transform=`translate3d(${g}px, 0, 0)`}},onWheelScroll:p=>{o.viewport&&(o.viewport.scrollLeft=p)},onDragScroll:p=>{o.viewport&&(o.viewport.scrollLeft=f(p,o.dir))}}):t==="vertical"?a.jsx(pt,{...u,ref:e,onThumbPositionChange:()=>{if(o.viewport&&s.current){const p=o.viewport.scrollTop,g=ce(p,l);s.current.style.transform=`translate3d(0, ${g}px, 0)`}},onWheelScroll:p=>{o.viewport&&(o.viewport.scrollTop=p)},onDragScroll:p=>{o.viewport&&(o.viewport.scrollTop=f(p))}}):null}),mt=d.forwardRef((r,e)=>{const{sizes:t,onSizesChange:n,...o}=r,s=E(D,r.__scopeScrollArea),[i,l]=d.useState(),c=d.useRef(null),m=z(e,c,s.onScrollbarXChange);return d.useEffect(()=>{c.current&&l(getComputedStyle(c.current))},[c]),a.jsx(Pe,{"data-orientation":"horizontal",...o,ref:m,sizes:t,style:{bottom:0,left:s.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:s.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":$(t)+"px",...r.style},onThumbPointerDown:u=>r.onThumbPointerDown(u.x),onDragScroll:u=>r.onDragScroll(u.x),onWheelScroll:(u,f)=>{if(s.viewport){const p=s.viewport.scrollLeft+u.deltaX;r.onWheelScroll(p),Re(p,f)&&u.preventDefault()}},onResize:()=>{c.current&&s.viewport&&i&&n({content:s.viewport.scrollWidth,viewport:s.viewport.offsetWidth,scrollbar:{size:c.current.clientWidth,paddingStart:H(i.paddingLeft),paddingEnd:H(i.paddingRight)}})}})}),pt=d.forwardRef((r,e)=>{const{sizes:t,onSizesChange:n,...o}=r,s=E(D,r.__scopeScrollArea),[i,l]=d.useState(),c=d.useRef(null),m=z(e,c,s.onScrollbarYChange);return d.useEffect(()=>{c.current&&l(getComputedStyle(c.current))},[c]),a.jsx(Pe,{"data-orientation":"vertical",...o,ref:m,sizes:t,style:{top:0,right:s.dir==="ltr"?0:void 0,left:s.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":$(t)+"px",...r.style},onThumbPointerDown:u=>r.onThumbPointerDown(u.y),onDragScroll:u=>r.onDragScroll(u.y),onWheelScroll:(u,f)=>{if(s.viewport){const p=s.viewport.scrollTop+u.deltaY;r.onWheelScroll(p),Re(p,f)&&u.preventDefault()}},onResize:()=>{c.current&&s.viewport&&i&&n({content:s.viewport.scrollHeight,viewport:s.viewport.offsetHeight,scrollbar:{size:c.current.clientHeight,paddingStart:H(i.paddingTop),paddingEnd:H(i.paddingBottom)}})}})}),[ft,Te]=xe(D),Pe=d.forwardRef((r,e)=>{const{__scopeScrollArea:t,sizes:n,hasThumb:o,onThumbChange:s,onThumbPointerUp:i,onThumbPointerDown:l,onThumbPositionChange:c,onDragScroll:m,onWheelScroll:u,onResize:f,...p}=r,g=E(D,t),[x,w]=d.useState(null),P=z(e,b=>w(b)),S=d.useRef(null),y=d.useRef(""),j=g.viewport,N=n.content-n.viewport,A=O(u),C=O(c),T=G(f,10);function R(b){if(S.current){const v=b.clientX-S.current.left,h=b.clientY-S.current.top;m({x:v,y:h})}}return d.useEffect(()=>{const b=v=>{const h=v.target;x?.contains(h)&&A(v,N)};return document.addEventListener("wheel",b,{passive:!1}),()=>document.removeEventListener("wheel",b,{passive:!1})},[j,x,N,A]),d.useEffect(C,[n,C]),Q(x,T),Q(g.content,T),a.jsx(ft,{scope:t,scrollbar:x,hasThumb:o,onThumbChange:O(s),onThumbPointerUp:O(i),onThumbPositionChange:C,onThumbPointerDown:O(l),children:a.jsx(I.div,{...p,ref:P,style:{position:"absolute",...p.style},onPointerDown:k(r.onPointerDown,b=>{b.button===0&&(b.target.setPointerCapture(b.pointerId),S.current=x.getBoundingClientRect(),y.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",g.viewport&&(g.viewport.style.scrollBehavior="auto"),R(b))}),onPointerMove:k(r.onPointerMove,R),onPointerUp:k(r.onPointerUp,b=>{const v=b.target;v.hasPointerCapture(b.pointerId)&&v.releasePointerCapture(b.pointerId),document.body.style.webkitUserSelect=y.current,g.viewport&&(g.viewport.style.scrollBehavior=""),S.current=null})})})}),W="ScrollAreaThumb",je=d.forwardRef((r,e)=>{const{forceMount:t,...n}=r,o=Te(W,r.__scopeScrollArea);return a.jsx(F,{present:t||o.hasThumb,children:a.jsx(ht,{ref:e,...n})})}),ht=d.forwardRef((r,e)=>{const{__scopeScrollArea:t,style:n,...o}=r,s=E(W,t),i=Te(W,t),{onThumbPositionChange:l}=i,c=z(e,f=>i.onThumbChange(f)),m=d.useRef(void 0),u=G(()=>{m.current&&(m.current(),m.current=void 0)},100);return d.useEffect(()=>{const f=s.viewport;if(f){const p=()=>{if(u(),!m.current){const g=xt(f,l);m.current=g,l()}};return l(),f.addEventListener("scroll",p),()=>f.removeEventListener("scroll",p)}},[s.viewport,u,l]),a.jsx(I.div,{"data-state":i.hasThumb?"visible":"hidden",...o,ref:c,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...n},onPointerDownCapture:k(r.onPointerDownCapture,f=>{const g=f.target.getBoundingClientRect(),x=f.clientX-g.left,w=f.clientY-g.top;i.onThumbPointerDown({x,y:w})}),onPointerUp:k(r.onPointerUp,i.onThumbPointerUp)})});je.displayName=W;var ee="ScrollAreaCorner",Ne=d.forwardRef((r,e)=>{const t=E(ee,r.__scopeScrollArea),n=!!(t.scrollbarX&&t.scrollbarY);return t.type!=="scroll"&&n?a.jsx(gt,{...r,ref:e}):null});Ne.displayName=ee;var gt=d.forwardRef((r,e)=>{const{__scopeScrollArea:t,...n}=r,o=E(ee,t),[s,i]=d.useState(0),[l,c]=d.useState(0),m=!!(s&&l);return Q(o.scrollbarX,()=>{const u=o.scrollbarX?.offsetHeight||0;o.onCornerHeightChange(u),c(u)}),Q(o.scrollbarY,()=>{const u=o.scrollbarY?.offsetWidth||0;o.onCornerWidthChange(u),i(u)}),m?a.jsx(I.div,{...n,ref:e,style:{width:s,height:l,position:"absolute",right:o.dir==="ltr"?0:void 0,left:o.dir==="rtl"?0:void 0,bottom:0,...r.style}}):null});function H(r){return r?parseInt(r,10):0}function Ae(r,e){const t=r/e;return isNaN(t)?0:t}function $(r){const e=Ae(r.viewport,r.content),t=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,n=(r.scrollbar.size-t)*e;return Math.max(n,18)}function bt(r,e,t,n="ltr"){const o=$(t),s=o/2,i=e||s,l=o-i,c=t.scrollbar.paddingStart+i,m=t.scrollbar.size-t.scrollbar.paddingEnd-l,u=t.content-t.viewport,f=n==="ltr"?[0,u]:[u*-1,0];return Ee([c,m],f)(r)}function ce(r,e,t="ltr"){const n=$(e),o=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,s=e.scrollbar.size-o,i=e.content-e.viewport,l=s-n,c=t==="ltr"?[0,i]:[i*-1,0],m=$e(r,c);return Ee([0,i],[0,l])(m)}function Ee(r,e){return t=>{if(r[0]===r[1]||e[0]===e[1])return e[0];const n=(e[1]-e[0])/(r[1]-r[0]);return e[0]+n*(t-r[0])}}function Re(r,e){return r>0&&r<e}var xt=(r,e=()=>{})=>{let t={left:r.scrollLeft,top:r.scrollTop},n=0;return(function o(){const s={left:r.scrollLeft,top:r.scrollTop},i=t.left!==s.left,l=t.top!==s.top;(i||l)&&e(),t=s,n=window.requestAnimationFrame(o)})(),()=>window.cancelAnimationFrame(n)};function G(r,e){const t=O(r),n=d.useRef(0);return d.useEffect(()=>()=>window.clearTimeout(n.current),[]),d.useCallback(()=>{window.clearTimeout(n.current),n.current=window.setTimeout(t,e)},[t,e])}function Q(r,e){const t=O(e);We(()=>{let n=0;if(r){const o=new ResizeObserver(()=>{cancelAnimationFrame(n),n=window.requestAnimationFrame(t)});return o.observe(r),()=>{window.cancelAnimationFrame(n),o.unobserve(r)}}},[r,t])}var vt=ve,St=ye,yt=Ne,X="Tabs",[wt,Yr]=he(X,[be]),Me=be(),[Ct,te]=wt(X),ke=d.forwardRef((r,e)=>{const{__scopeTabs:t,value:n,onValueChange:o,defaultValue:s,orientation:i="horizontal",dir:l,activationMode:c="automatic",...m}=r,u=ge(l),[f,p]=He({prop:n,onChange:o,defaultProp:s??"",caller:X});return a.jsx(Ct,{scope:t,baseId:rt(),value:f,onValueChange:p,orientation:i,dir:u,activationMode:c,children:a.jsx(I.div,{dir:u,"data-orientation":i,...m,ref:e})})});ke.displayName=X;var De="TabsList",Ie=d.forwardRef((r,e)=>{const{__scopeTabs:t,loop:n=!0,...o}=r,s=te(De,t),i=Me(t);return a.jsx(et,{asChild:!0,...i,orientation:s.orientation,dir:s.dir,loop:n,children:a.jsx(I.div,{role:"tablist","aria-orientation":s.orientation,...o,ref:e})})});Ie.displayName=De;var _e="TabsTrigger",Le=d.forwardRef((r,e)=>{const{__scopeTabs:t,value:n,disabled:o=!1,...s}=r,i=te(_e,t),l=Me(t),c=Qe(i.baseId,n),m=ze(i.baseId,n),u=n===i.value;return a.jsx(tt,{asChild:!0,...l,focusable:!o,active:u,children:a.jsx(I.button,{type:"button",role:"tab","aria-selected":u,"aria-controls":m,"data-state":u?"active":"inactive","data-disabled":o?"":void 0,disabled:o,id:c,...s,ref:e,onMouseDown:k(r.onMouseDown,f=>{!o&&f.button===0&&f.ctrlKey===!1?i.onValueChange(n):f.preventDefault()}),onKeyDown:k(r.onKeyDown,f=>{[" ","Enter"].includes(f.key)&&i.onValueChange(n)}),onFocus:k(r.onFocus,()=>{const f=i.activationMode!=="manual";!u&&!o&&f&&i.onValueChange(n)})})})});Le.displayName=_e;var Oe="TabsContent",qe=d.forwardRef((r,e)=>{const{__scopeTabs:t,value:n,forceMount:o,children:s,...i}=r,l=te(Oe,t),c=Qe(l.baseId,n),m=ze(l.baseId,n),u=n===l.value,f=d.useRef(u);return d.useEffect(()=>{const p=requestAnimationFrame(()=>f.current=!1);return()=>cancelAnimationFrame(p)},[]),a.jsx(F,{present:o||u,children:({present:p})=>a.jsx(I.div,{"data-state":u?"active":"inactive","data-orientation":l.orientation,role:"tabpanel","aria-labelledby":c,hidden:!p,id:m,tabIndex:0,...i,ref:e,style:{...r.style,animationDuration:f.current?"0s":void 0},children:p&&s})})});qe.displayName=Oe;function Qe(r,e){return`${r}-trigger-${e}`}function ze(r,e){return`${r}-content-${e}`}var Tt=ke,Pt=Ie,jt=Le,Nt=qe;function de(r){const e=_.c(14);let t,n,o;e[0]!==r?({className:n,children:t,...o}=r,e[0]=r,e[1]=t,e[2]=n,e[3]=o):(t=e[1],n=e[2],o=e[3]);let s;e[4]!==n?(s=L("relative",n),e[4]=n,e[5]=s):s=e[5];let i;e[6]!==t?(i=a.jsx(St,{"data-slot":"scroll-area-viewport",className:"size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1",children:t}),e[6]=t,e[7]=i):i=e[7];let l,c;e[8]===Symbol.for("react.memo_cache_sentinel")?(l=a.jsx(At,{}),c=a.jsx(yt,{}),e[8]=l,e[9]=c):(l=e[8],c=e[9]);let m;return e[10]!==o||e[11]!==s||e[12]!==i?(m=a.jsxs(vt,{"data-slot":"scroll-area",className:s,...o,children:[i,l,c]}),e[10]=o,e[11]=s,e[12]=i,e[13]=m):m=e[13],m}function At(r){const e=_.c(13);let t,n,o;e[0]!==r?({className:t,orientation:o,...n}=r,e[0]=r,e[1]=t,e[2]=n,e[3]=o):(t=e[1],n=e[2],o=e[3]);const s=o===void 0?"vertical":o,i=s==="vertical"&&"h-full w-2.5 border-l border-l-transparent",l=s==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent";let c;e[4]!==t||e[5]!==i||e[6]!==l?(c=L("flex touch-none p-px transition-colors select-none",i,l,t),e[4]=t,e[5]=i,e[6]=l,e[7]=c):c=e[7];let m;e[8]===Symbol.for("react.memo_cache_sentinel")?(m=a.jsx(je,{"data-slot":"scroll-area-thumb",className:"relative flex-1 rounded-full bg-border"}),e[8]=m):m=e[8];let u;return e[9]!==s||e[10]!==n||e[11]!==c?(u=a.jsx(we,{"data-slot":"scroll-area-scrollbar",orientation:s,className:c,...n,children:m}),e[9]=s,e[10]=n,e[11]=c,e[12]=u):u=e[12],u}function ue(r){const e=_.c(10);let t,n,o;e[0]!==r?({className:t,orientation:o,...n}=r,e[0]=r,e[1]=t,e[2]=n,e[3]=o):(t=e[1],n=e[2],o=e[3]);const s=o===void 0?"horizontal":o;let i;e[4]!==t?(i=L("group/tabs flex gap-2 data-[orientation=horizontal]:flex-col",t),e[4]=t,e[5]=i):i=e[5];let l;return e[6]!==s||e[7]!==n||e[8]!==i?(l=a.jsx(Tt,{"data-slot":"tabs","data-orientation":s,orientation:s,className:i,...n}),e[6]=s,e[7]=n,e[8]=i,e[9]=l):l=e[9],l}const Et=Be("group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-[orientation=horizontal]/tabs:h-9 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none",{variants:{variant:{default:"bg-muted",line:"gap-1 bg-transparent"}},defaultVariants:{variant:"default"}});function me(r){const e=_.c(11);let t,n,o;e[0]!==r?({className:t,variant:o,...n}=r,e[0]=r,e[1]=t,e[2]=n,e[3]=o):(t=e[1],n=e[2],o=e[3]);const s=o===void 0?"default":o;let i;e[4]!==t||e[5]!==s?(i=L(Et({variant:s}),t),e[4]=t,e[5]=s,e[6]=i):i=e[6];let l;return e[7]!==n||e[8]!==i||e[9]!==s?(l=a.jsx(Pt,{"data-slot":"tabs-list","data-variant":s,className:i,...n}),e[7]=n,e[8]=i,e[9]=s,e[10]=l):l=e[10],l}function Y(r){const e=_.c(8);let t,n;e[0]!==r?({className:t,...n}=r,e[0]=r,e[1]=t,e[2]=n):(t=e[1],n=e[2]);let o;e[3]!==t?(o=L("relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4","group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent","data-[state=active]:bg-background data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground","after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100",t),e[3]=t,e[4]=o):o=e[4];let s;return e[5]!==n||e[6]!==o?(s=a.jsx(jt,{"data-slot":"tabs-trigger",className:o,...n}),e[5]=n,e[6]=o,e[7]=s):s=e[7],s}function V(r){const e=_.c(8);let t,n;e[0]!==r?({className:t,...n}=r,e[0]=r,e[1]=t,e[2]=n):(t=e[1],n=e[2]);let o;e[3]!==t?(o=L("flex-1 outline-none",t),e[3]=t,e[4]=o):o=e[4];let s;return e[5]!==n||e[6]!==o?(s=a.jsx(Nt,{"data-slot":"tabs-content",className:o,...n}),e[5]=n,e[6]=o,e[7]=s):s=e[7],s}const Rt=`
You are an expert **Current Affairs researcher**, **Pakistan competitive exam analyst**, and **MCQ content writer**.

Your task is to generate **high-quality Current Affairs MCQs based ONLY on Yesterday's important events**.

These MCQs are being created for a **Pakistan competitive exam preparation platform** and must be suitable for:

- FPSC
- PPSC
- NTS
- CSS
- PMS
- General Job Tests
- Current Affairs quiz preparation

The output must be:
- **factually accurate**
- **exam-oriented**
- **non-repetitive**
- **import-ready**
- returned in my **STRICT custom Markdown format**

---

# DATE SCOPE

Generate MCQs only from **important events that happened yesterday**.

If an event started earlier but had a **major update yesterday**, it may be included.

Do **not** include outdated or irrelevant old news unless it had a significant development yesterday.

---

# CONTENT COVERAGE

Cover yesterday’s important developments from these areas:

- Pakistan Current Affairs
- International Current Affairs
- Economy & Business
- Science, Technology & AI
- Environment, Climate & Disasters
- Sports
- Awards, Appointments & Obituaries
- Reports, Rankings & Indexes
- International Organisations / Summits / Agreements
- Government, Politics, Defence, Foreign Affairs

---

# QUESTION QUALITY RULES

Create MCQs that are:
- factual
- objective
- exam-relevant
- concise
- useful for daily current affairs prep

Prefer questions about:
- appointments and resignations
- awards and honours
- reports and rankings
- summits and conferences
- treaties and agreements
- international organizations
- capitals, countries and currencies (when relevant)
- dates, venues and hosts
- winners, titles and records
- policy decisions and official announcements
- international affairs
- Pakistan government affairs
- elections and democracy
- trade and commerce
- defense and security developments
- health and medical breakthroughs
- space and science discoveries
- natural disasters and climate events
- AI and technology updates
- terrorism and conflict updates

Avoid:
- opinion-based questions
- vague wording
- trick questions without value
- gossip/entertainment fluff
- duplicate questions
- unnecessary complexity

---

# STRICT OUTPUT FORMAT (VERY IMPORTANT)

Return **ALL MCQs strictly in the following Markdown format**.

Do not change the structure.

Do not add extra commentary before or after.

Use this exact format:

# MCQ {N}
Question: {question text}
Slug: {slug}
Difficulty: easy|medium|hard
MCQ Type: single|multiple
Subject Slug: {subject-slug}
Topic Slug: {topic-slug}
Paper Slug: null
Created By: 1
Tags: {comma, hyphanated, tags}
Options:
A) {option text}
B) {option text} [correct]
C) {option text}
D) {option text}
Explanation: {explanation text}
---

---

# FIELD RULES

## 1) Question
- Write a clear, grammatically correct MCQ question
- Keep it concise and exam-friendly
- Avoid ambiguous wording

## 2) Slug
Generate a **clean SEO-friendly unique slug** based on the question.

Rules:
- lowercase only
- words separated by hyphens
- no special characters
- no duplicate slugs

Example:
who-was-appointed-new-chairman-of-ogra-april-2026

## 3) Difficulty
Use only one of:
- easy
- medium
- hard

Guideline:
- **easy** = direct factual recall
- **medium** = slightly analytical / detail-based
- **hard** = deeper or less obvious fact

## 4) MCQ Type
Use:
- 'single' for one correct answer
- 'multiple' only if more than one option is correct

Default to 'single' unless necessary.

## 5) Subject Slug
Always use:
current-affairs

## 6) Topic Slug
Choose the **following relevant topic slug** based on the question.

-appointments-resignations
-ai-and-technology
-awards-and-honours
-climate-and-environment
-defense-and-security
-education-and-social
-elections-and-democracy
-foreign-relations
-global-economy
-global-energy
-health-and-medicine
-important-days-and-events
-international-organizations
-natural-disasters
-pakistan-economy
-pakistan-politics
-reports-and-rankings
-science-and-technology
-space-and-exploration
-sports-current-affairs
-summits-and-conferences
-terrorism-and-conflicts
-trade-and-commerce
-treaties-and-agreements

Use the **best-matching topic slug** for each MCQ. Don't use any other topic unless it is very necessary.

## 7) Paper Slug
Always use:
null

## 8) Created By
Always use the exact user ID I provided

## 9) Tags
Generate **relevant comma-separated tags** for each MCQ.

Rules:
- 3 to 8 tags
- lowercase preferred
- Hyphenated
- use topic-relevant tags
- include entity names where useful
- avoid useless generic tags

Example:
pakistan, ogra, chairman-nadra, appointment, energy, regulation

## 10) Options
Rules:
- Always provide **4 options**
- Keep options realistic and plausible
- Avoid obviously fake distractors
- Mark the correct option using:
  [correct]

Example:
A) Islamabad
B) Lahore [correct]
C) Karachi
D) Peshawar

## 11) Explanation
Write a **short but useful explanation**:
- 1 to 3 lines
- explain why the answer is correct
- You can use MD Format to emphasise information or give a reference to the source, or highlight with class "text-primary" link with Wikipedia if the source is found on Wikipedia.
- include factual context where useful

---

# IMPORTANT MCQ RULES

- **Randomise correct answers**
  Do NOT keep all correct answers on Option A or B.
- Make sure answer positions are naturally distributed across A, B, C, and D.
- Do not repeat the same fact in multiple questions unless asked.
- Questions must be based on **high-value yesterday current affairs**.
- If there are not enough strong events, prioritise **quality over quantity**.

---

# OUTPUT QUANTITY

Generate **50 high-quality MCQs**.

If there are enough important events, you may generate up to **50 MCQs**, but prioritise **quality, uniqueness, and exam relevance**.

---

# FINAL INSTRUCTION

Return the response in a code block to keep the format accurate, **clean Markdown only**, and in the exact structure requested.

Do not include:
- introductions
- notes
- apologies
- explanations outside the MCQ format
- section headings other than the MCQ blocks

`,Mt=`
`,kt=`
`,Dt=`
`,It=`
`,_t=`
`,Lt=`
`,Ot=`
`,qt=`
`,Qt=`
`,zt=`
You are an expert **History researcher**, **Pakistan competitive exam analyst**, and **MCQ content writer**.

Your task is to generate **high-quality Mughal History MCQs** in a **topic-by-topic structured format**.

These MCQs are for **Pakistan competitive exams**, including:

- FPSC
- PPSC
- NTS
- CSS
- PMS
- General Job Tests

---

# OBJECTIVE

Generate **exam-oriented, factual, and non-repetitive MCQs** covering the **Mughal Empire in a systematic topic-wise manner**.

---

# TOPIC-WISE COVERAGE (VERY IMPORTANT)

You must generate MCQs **topic by topic**, not randomly.

Follow this sequence:

1. Foundation of Mughal Empire  
   (Babur, First Battle of Panipat, Central Asian background)

2. Humayun  
   (Struggles, exile, return, Persian influence)

3. Akbar the Great  
   (Administration, Mansabdari system, Din-i-Ilahi, expansion)

4. Jahangir  
   (Policies, Nur Jahan, justice system, foreign relations)

5. Shah Jahan  
   (Architecture, administration, golden age, Taj Mahal)

6. Aurangzeb  
   (Religious policies, Deccan campaigns, decline factors)

7. Mughal Administration  
   (Central administration, revenue system, military system)

8. Mughal Economy & Society  
   (Agriculture, trade, social structure)

9. Mughal Art & Culture  
   (Architecture, painting, literature)

10. Decline of Mughal Empire  
   (Internal weaknesses, invasions, regional powers)

---

# MCQ DISTRIBUTION

- Generate **balanced MCQs from each topic**
- Cover **all major rulers and systems**
- Avoid over-focusing on a single emperor

---

# QUESTION QUALITY RULES

Each MCQ must be:
- factual
- exam-relevant
- concise
- non-ambiguous

Focus on:
- dates
- battles
- policies
- systems
- personalities
- contributions
- causes and effects

Avoid:
- opinions
- vague questions
- repeated facts

---

# STRICT OUTPUT FORMAT (MANDATORY)

Follow this exact Markdown structure:

# MCQ {N}
Question: {question text}
Slug: {slug}
Difficulty: easy|medium|hard
MCQ Type: single
Subject Slug: history
Topic Slug: mughal-empire
Paper Slug: null
Created By: 1
Tags: {comma-separated-tags}
Options:
A) {option}
B) {option}
C) {option}
D) {option}
Explanation: {1-2 line explanation}
---

---

# FIELD RULES

## Slug
- lowercase
- hyphen-separated
- unique

## Difficulty
- easy = direct fact
- medium = conceptual/detail
- hard = analytical/deep

## Tags
- 3 to 8 tags
- topic-relevant
- hyphenated

---

# IMPORTANT RULES

- Randomize correct answers (A/B/C/D distribution)
- Do NOT repeat facts
- Maintain conceptual clarity
- Keep options realistic
- Ensure historical accuracy

---

# OUTPUT QUANTITY

- Generate **50 MCQs total**
- Ensure **all topics are covered proportionally**

---

# FINAL INSTRUCTION

Return output in a **single Markdown code block**.

Do NOT include:
- explanations outside MCQs
- headings
- commentary

`,Ut=`
`,pe={"current-affairs-mcqs":Rt,"pak-studies-mcqs":Mt,"english-mcqs":kt,"islamic-studies-mcqs":Dt,"math-mcqs":It,"physics-mcqs":_t,"chemistry-mcqs":Lt,"biology-mcqs":Ot,"computer-mcqs":qt,"general-knowledge-mcqs":Qt,"history-mcqs":zt,"geography-mcqs":Ut};function fe(r){return r.split(/\n---+\n?/).map(t=>t.trim()).filter(Boolean).map(Bt)}function Bt(r){return{question:M(r,"Question"),slug:M(r,"Slug"),difficulty:M(r,"Difficulty").toLowerCase(),mcq_type:M(r,"MCQ Type").toLowerCase(),subject_slug:M(r,"Subject Slug"),topic_slug:M(r,"Topic Slug"),paper_slug:Ft(r,"Paper Slug"),created_by:parseInt(M(r,"Created By"),10)||1,tags:Yt(r),options:Vt(r),explanation:M(r,"Explanation")}}function M(r,e){const t=r.match(new RegExp(`^${e}:\\s*(.+)$`,"im"));return t?t[1].trim():""}function Ft(r,e){const t=M(r,e);return!t||t.toLowerCase()==="null"?null:t}function Yt(r){const e=M(r,"Tags");return e?e.split(",").map(t=>t.trim()).filter(Boolean):[]}function Vt(r){const e=r.split(/^Options:\s*$/im)[1];if(!e)return[];const t=e.split(/^Explanation:/im)[0];let n=0;return t.split(`
`).map(o=>o.trim()).filter(Boolean).reduce((o,s)=>{const i=/\[correct\]/i.test(s),l=s.match(/^([A-Z])\)\s+(.+?)(?:\s+\[correct\])?$/i);return l&&(n++,o.push({option_text:l[2].trim(),is_correct:i,sort_order:n})),o},[])}function Wt(r){const e=_.c(5),{difficulty:t}=r;let n;e[0]!==t?(n=L("rounded-full border px-2 py-0.5 text-xs font-medium capitalize",{easy:"bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",medium:"bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800",hard:"bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800"}[t]??"border-border bg-muted text-muted-foreground"),e[0]=t,e[1]=n):n=e[1];let o;return e[2]!==t||e[3]!==n?(o=a.jsx("span",{className:n,children:t}),e[2]=t,e[3]=n,e[4]=o):o=e[4],o}function Ht(r){const e=_.c(47),{mcq:t,index:n}=r,[o,s]=d.useState(null);let i;e[0]!==o?(i=b=>{o===null&&s(b)},e[0]=o,e[1]=i):i=e[1];const l=i;let c;e[2]!==o?(c=(b,v)=>{const h=o===v;return o!==null?b.is_correct?"border-green-400 bg-green-50 text-green-900 dark:bg-green-900/20 dark:text-green-300 dark:border-green-700 cursor-default":h&&!b.is_correct?"border-red-400 bg-red-50 text-red-900 dark:bg-red-900/20 dark:text-red-300 dark:border-red-700 cursor-default":"border-border bg-muted/30 text-muted-foreground cursor-default opacity-50":"border-border hover:border-muted-foreground/40 hover:bg-muted/50 cursor-pointer"},e[2]=o,e[3]=c):c=e[3];const m=c,u=n+1;let f;e[4]!==u?(f=a.jsx("span",{className:"mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-muted/10 text-xs font-medium text-muted-foreground",children:u}),e[4]=u,e[5]=f):f=e[5];let p;e[6]!==t.question?(p=a.jsx("p",{className:"text-sm leading-relaxed font-medium",children:t.question}),e[6]=t.question,e[7]=p):p=e[7];let g;e[8]!==f||e[9]!==p?(g=a.jsxs("div",{className:"flex items-center gap-3",children:[f,p]}),e[8]=f,e[9]=p,e[10]=g):g=e[10];let x;e[11]!==t.difficulty?(x=t.difficulty&&a.jsx(Wt,{difficulty:t.difficulty}),e[11]=t.difficulty,e[12]=x):x=e[12];let w;e[13]!==t.mcq_type?(w=t.mcq_type&&a.jsx(B,{variant:"secondary",className:"text-xs capitalize",children:t.mcq_type}),e[13]=t.mcq_type,e[14]=w):w=e[14];let P;e[15]!==t.subject_slug?(P=t.subject_slug&&a.jsx(B,{variant:"outline",className:"text-xs",children:t.subject_slug}),e[15]=t.subject_slug,e[16]=P):P=e[16];let S;e[17]!==t.tags?(S=t.tags.map($t),e[17]=t.tags,e[18]=S):S=e[18];let y;e[19]!==S||e[20]!==x||e[21]!==w||e[22]!==P?(y=a.jsxs("div",{className:"mt-2 ml-9 flex flex-wrap gap-1.5",children:[x,w,P,S]}),e[19]=S,e[20]=x,e[21]=w,e[22]=P,e[23]=y):y=e[23];let j;e[24]!==y||e[25]!==g?(j=a.jsxs(Fe,{className:"px-4 pt-4 pb-2",children:[g,y]}),e[24]=y,e[25]=g,e[26]=j):j=e[26];let N;if(e[27]!==m||e[28]!==l||e[29]!==t.options||e[30]!==o){let b;e[32]!==m||e[33]!==l||e[34]!==o?(b=(v,h)=>a.jsxs("div",{onClick:()=>l(h),className:L("flex items-center gap-3 rounded-lg border px-3 py-2.5 text-sm transition-all",m(v,h)),children:[a.jsx("span",{className:"w-4 shrink-0 text-xs font-semibold text-muted-foreground",children:String.fromCharCode(65+h)}),a.jsx("span",{className:"flex-1",children:v.option_text}),o!==null&&v.is_correct&&a.jsx(le,{className:"h-4 w-4 shrink-0 text-green-500"}),o===h&&!v.is_correct&&a.jsx(it,{className:"h-4 w-4 shrink-0 text-red-500"})]},h),e[32]=m,e[33]=l,e[34]=o,e[35]=b):b=e[35],N=t.options.map(b),e[27]=m,e[28]=l,e[29]=t.options,e[30]=o,e[31]=N}else N=e[31];let A;e[36]!==N?(A=a.jsx("div",{className:"mb-3 flex flex-col gap-2",children:N}),e[36]=N,e[37]=A):A=e[37];let C;e[38]!==t.explanation||e[39]!==o?(C=o!==null&&t.explanation&&a.jsxs("div",{className:"flex gap-2 rounded-lg border border-blue-100 bg-blue-50 p-3 text-xs leading-relaxed text-blue-900 dark:border-blue-900 dark:bg-blue-950/30 dark:text-blue-300",children:[a.jsx(le,{className:"mt-0.5 h-4 w-4 shrink-0 text-blue-500"}),a.jsx("p",{children:t.explanation})]}),e[38]=t.explanation,e[39]=o,e[40]=C):C=e[40];let T;e[41]!==A||e[42]!==C?(T=a.jsxs(Ye,{className:"px-4 pb-4",children:[A,C]}),e[41]=A,e[42]=C,e[43]=T):T=e[43];let R;return e[44]!==j||e[45]!==T?(R=a.jsxs(Ve,{className:"mb-3 shadow-none",children:[j,T]}),e[44]=j,e[45]=T,e[46]=R):R=e[46],R}function $t(r){return a.jsx(B,{variant:"outline",className:"text-xs",children:r},r)}function Vr({subjects:r,topics:e}){const{data:t,setData:n,post:o,errors:s}=Ue(),[i,l]=d.useState(""),[c,m]=d.useState(()=>fe(i)),[u,f]=d.useState(""),[p,g]=d.useState(pe["current-affairs"]),[x,w]=d.useState(!1),[P,S]=d.useState(!1),[y,j]=d.useState(r[17].id),[N,A]=d.useState(e[0].id),C=i.split(/\n---+/).filter(Boolean).length;d.useEffect(()=>{if(y){const h=r.find(q=>q.id===y);h&&g(pe[h.slug])}},[y,r]);const T=d.useCallback(()=>{f("");try{const h=fe(i);if(!h.length){f("No MCQ blocks found. Make sure blocks are separated by ---.");return}m(h),n("json",JSON.stringify(h)),ne.success("MCQs parsed successfully.")}catch(h){f("Parse error: "+h.message),ne.error("Parse error: "+h.message)}},[i]),R=d.useCallback(h=>{if(h.preventDefault(),!t.json){f("No JSON data to import.");return}t.json=t.json,o(ot.store().url)},[t,o]),b=d.useCallback(()=>{navigator.clipboard.writeText(p),S(!0),setTimeout(()=>S(!1),1500)},[p]),v=d.useCallback(()=>{navigator.clipboard.writeText(JSON.stringify(c,null,2)),w(!0),setTimeout(()=>w(!1),1500)},[c]);return a.jsx(at,{title:"Import MD MCQs",children:a.jsxs("div",{className:"grid grid-cols-1 gap-4 p-4 lg:grid-cols-2",children:[s.json&&a.jsxs(re,{variant:"destructive",className:"col-span-full",children:[a.jsx(se,{className:"h-4 w-4"}),a.jsx(oe,{children:s.json})]}),a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center gap-2 text-sm font-medium",children:[a.jsx(J,{className:"h-4 w-4 text-muted-foreground"}),"Markdown input"]}),a.jsxs(B,{variant:"secondary",className:"text-xs",children:[C," block",C!==1?"s":""]})]}),a.jsxs(ue,{defaultValue:"MD",className:"flex flex-col gap-3",children:[a.jsxs(me,{className:"w-fit bg-muted/10",children:[a.jsx(Y,{value:"MD",children:"MD"}),a.jsx(Y,{value:"Prompt",children:"Prompt"})]}),a.jsxs(V,{value:"MD",className:"min-h-[500px] max-h-[500px] overflow-y-auto",children:[a.jsx(ae,{value:i,onChange:h=>l(h.target.value),placeholder:"Paste your MCQ markdown here…",className:"min-h-full flex-1 resize-none font-mono text-xs"}),u&&a.jsxs(re,{variant:"destructive",className:"py-2",children:[a.jsx(se,{className:"h-4 w-4"}),a.jsx(oe,{className:"text-xs",children:u})]})]}),a.jsx(V,{value:"Prompt",children:a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center gap-2 text-sm font-medium",children:[a.jsx(J,{className:"h-4 w-4 text-muted-foreground"}),"Prompt"]}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsxs(U,{variant:"outline",size:"sm",onClick:b,children:[a.jsx(ie,{className:"h-4 w-4"}),P?"Copied!":"Copy Prompt"]}),a.jsxs(Ge,{value:y,onValueChange:h=>j(h),children:[a.jsx(Xe,{children:a.jsx(Je,{placeholder:"Select subject"})}),a.jsx(Ke,{children:r.map(h=>a.jsx(Ze,{value:h.id,children:h.name},h.id))})]})]})]}),a.jsx(ae,{value:p,onChange:h=>g(h.target.value),placeholder:"Paste your prompt here…",className:"min-h-full flex-1 resize-none font-mono text-xs"})]})})]}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx(U,{onClick:T,className:"flex-1",children:"Parse"}),a.jsx(U,{variant:"outline",onClick:()=>{l(""),m([]),f("")},children:"Clear"})]})]}),a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center gap-2 text-sm font-medium",children:[a.jsx(nt,{className:"h-4 w-4 text-muted-foreground"}),"Output"]}),a.jsxs(B,{variant:"secondary",className:"text-xs",children:[c.length," MCQ",c.length!==1?"s":""]})]}),a.jsxs(ue,{defaultValue:"preview",className:"flex flex-col gap-3",children:[a.jsxs(me,{className:"w-fit bg-muted/10",children:[a.jsx(Y,{value:"preview",children:"Preview"}),a.jsx(Y,{value:"json",children:"JSON"})]}),a.jsx(V,{value:"preview",className:"mt-0",children:a.jsx(de,{className:"h-[500px] max-h-[500px] rounded-lg border bg-muted/20 pr-2",children:c.length===0?a.jsxs("div",{className:"flex h-[500px] max-h-[500px] flex-col items-center justify-center gap-2 text-sm text-muted-foreground",children:[a.jsx(J,{className:"h-6 w-6 opacity-30"}),a.jsx("span",{children:"Paste MD on the left and click Parse"})]}):c.map((h,q)=>a.jsx(Ht,{mcq:h,index:q},q))})}),a.jsx(V,{value:"json",className:"mt-0 flex flex-col gap-2",children:a.jsx(de,{className:"h-[500px] max-h-[500px] rounded-lg border bg-muted/20",children:a.jsx("pre",{className:"p-3 font-mono text-xs leading-relaxed break-words whitespace-pre-wrap",children:JSON.stringify(c,null,2)})})})]}),a.jsxs("div",{className:"flex gap-2",children:[a.jsxs(U,{variant:"outline",onClick:v,className:"flex-1 gap-2",children:[x?a.jsx(st,{className:"h-4 w-4"}):a.jsx(ie,{className:"h-4 w-4"}),x?"Copied!":"Copy JSON"]}),a.jsx(U,{onClick:R,className:"flex-1",children:"Send to import service"})]})]})]})})}export{Vr as default};
