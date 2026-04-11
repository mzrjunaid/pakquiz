import{r as d,j as a,c as _,u as ze}from"./admin-Dj9HJOBB.js";import{A as re,a as oe}from"./alert-DAirmBQQ.js";import{B}from"./badge-DQHbqOoK.js";import{u as U,c as Be,B as z}from"./button-Cgrlrnfk.js";import{b as He,a as We,C as Fe}from"./card-DO5MgsFz.js";import{c as L}from"./utils-D0Zg16Wk.js";import{P as I}from"./index-DqCpI0s0.js";import{P as H}from"./index-nq4m8yrg.js";import{c as he,a as M,u as Ye,b as Ve}from"./index-CW3TUIBU.js";import{u as O}from"./index-BWnZ6w6f.js";import{u as ge,a as $e}from"./index-CBP2evqA.js";import{c as Ge,S as Xe,a as Ke,b as Je,d as Ze,e as et}from"./select-BM2dIvUH.js";import{f as be,R as tt,I as rt}from"./dropdown-menu-DWbTnJGQ.js";import{T as ae}from"./textarea-DseAMEbc.js";import{m as ot}from"./app-layout-IjcjUP_V.js";import{t as se}from"./index-CPf0-OlQ.js";import at from"./admin-layout-BJhUwqdJ.js";import{C as ne}from"./circle-alert-BytFcswf.js";import{F as K}from"./file-text-VLn1bDf_.js";import{C as ie}from"./copy-bLRXG60i.js";import{E as st}from"./eye-Cf7azbJc.js";import{C as nt}from"./check-DEXRjyAM.js";import{C as le,a as it}from"./circle-x-DYKpyA7i.js";import"./bootstrap-CWD7zuwT.js";/* empty css            */import"./index-Bhcb8BhO.js";import"./chevron-down-S_4YYwHW.js";import"./createLucideIcon-DyRgxIo5.js";import"./index-D_yWZR8a.js";import"./index-DTZd6bzB.js";import"./use-quiz-mode-BC6RJLnR.js";import"./index-DE4duBNV.js";import"./x-BQdHAEGF.js";import"./index-CcKAsb0f.js";import"./index-DtuY7TEn.js";import"./index-Dadb4C2L.js";import"./index-DHvWDHaB.js";import"./index-DJRxVkUg.js";import"./index-BStBPVHt.js";import"./book-open-6g4c7bTG.js";import"./chevron-right-Bsrrdbhb.js";import"./breadcrumbs-utils-uitSj5Sj.js";function lt(r,e){return d.useReducer((t,s)=>e[t][s]??t,r)}var J="ScrollArea",[xe,Or]=he(J),[ct,E]=xe(J),ve=d.forwardRef((r,e)=>{const{__scopeScrollArea:t,type:s="hover",dir:o,scrollHideDelay:n=600,...i}=r,[l,c]=d.useState(null),[m,u]=d.useState(null),[f,p]=d.useState(null),[g,x]=d.useState(null),[w,P]=d.useState(null),[y,S]=d.useState(0),[j,N]=d.useState(0),[A,C]=d.useState(!1),[T,R]=d.useState(!1),b=U(e,h=>c(h)),v=ge(o);return a.jsx(ct,{scope:t,type:s,dir:v,scrollHideDelay:n,scrollArea:l,viewport:m,onViewportChange:u,content:f,onContentChange:p,scrollbarX:g,onScrollbarXChange:x,scrollbarXEnabled:A,onScrollbarXEnabledChange:C,scrollbarY:w,onScrollbarYChange:P,scrollbarYEnabled:T,onScrollbarYEnabledChange:R,onCornerWidthChange:S,onCornerHeightChange:N,children:a.jsx(I.div,{dir:v,...i,ref:b,style:{position:"relative","--radix-scroll-area-corner-width":y+"px","--radix-scroll-area-corner-height":j+"px",...r.style}})})});ve.displayName=J;var ye="ScrollAreaViewport",Se=d.forwardRef((r,e)=>{const{__scopeScrollArea:t,children:s,nonce:o,...n}=r,i=E(ye,t),l=d.useRef(null),c=U(e,l,i.onViewportChange);return a.jsxs(a.Fragment,{children:[a.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:o}),a.jsx(I.div,{"data-radix-scroll-area-viewport":"",...n,ref:c,style:{overflowX:i.scrollbarXEnabled?"scroll":"hidden",overflowY:i.scrollbarYEnabled?"scroll":"hidden",...r.style},children:a.jsx("div",{ref:i.onContentChange,style:{minWidth:"100%",display:"table"},children:s})})]})});Se.displayName=ye;var D="ScrollAreaScrollbar",we=d.forwardRef((r,e)=>{const{forceMount:t,...s}=r,o=E(D,r.__scopeScrollArea),{onScrollbarXEnabledChange:n,onScrollbarYEnabledChange:i}=o,l=r.orientation==="horizontal";return d.useEffect(()=>(l?n(!0):i(!0),()=>{l?n(!1):i(!1)}),[l,n,i]),o.type==="hover"?a.jsx(dt,{...s,ref:e,forceMount:t}):o.type==="scroll"?a.jsx(ut,{...s,ref:e,forceMount:t}):o.type==="auto"?a.jsx(Ce,{...s,ref:e,forceMount:t}):o.type==="always"?a.jsx(Z,{...s,ref:e}):null});we.displayName=D;var dt=d.forwardRef((r,e)=>{const{forceMount:t,...s}=r,o=E(D,r.__scopeScrollArea),[n,i]=d.useState(!1);return d.useEffect(()=>{const l=o.scrollArea;let c=0;if(l){const m=()=>{window.clearTimeout(c),i(!0)},u=()=>{c=window.setTimeout(()=>i(!1),o.scrollHideDelay)};return l.addEventListener("pointerenter",m),l.addEventListener("pointerleave",u),()=>{window.clearTimeout(c),l.removeEventListener("pointerenter",m),l.removeEventListener("pointerleave",u)}}},[o.scrollArea,o.scrollHideDelay]),a.jsx(H,{present:t||n,children:a.jsx(Ce,{"data-state":n?"visible":"hidden",...s,ref:e})})}),ut=d.forwardRef((r,e)=>{const{forceMount:t,...s}=r,o=E(D,r.__scopeScrollArea),n=r.orientation==="horizontal",i=G(()=>c("SCROLL_END"),100),[l,c]=lt("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return d.useEffect(()=>{if(l==="idle"){const m=window.setTimeout(()=>c("HIDE"),o.scrollHideDelay);return()=>window.clearTimeout(m)}},[l,o.scrollHideDelay,c]),d.useEffect(()=>{const m=o.viewport,u=n?"scrollLeft":"scrollTop";if(m){let f=m[u];const p=()=>{const g=m[u];f!==g&&(c("SCROLL"),i()),f=g};return m.addEventListener("scroll",p),()=>m.removeEventListener("scroll",p)}},[o.viewport,n,c,i]),a.jsx(H,{present:t||l!=="hidden",children:a.jsx(Z,{"data-state":l==="hidden"?"hidden":"visible",...s,ref:e,onPointerEnter:M(r.onPointerEnter,()=>c("POINTER_ENTER")),onPointerLeave:M(r.onPointerLeave,()=>c("POINTER_LEAVE"))})})}),Ce=d.forwardRef((r,e)=>{const t=E(D,r.__scopeScrollArea),{forceMount:s,...o}=r,[n,i]=d.useState(!1),l=r.orientation==="horizontal",c=G(()=>{if(t.viewport){const m=t.viewport.offsetWidth<t.viewport.scrollWidth,u=t.viewport.offsetHeight<t.viewport.scrollHeight;i(l?m:u)}},10);return Q(t.viewport,c),Q(t.content,c),a.jsx(H,{present:s||n,children:a.jsx(Z,{"data-state":n?"visible":"hidden",...o,ref:e})})}),Z=d.forwardRef((r,e)=>{const{orientation:t="vertical",...s}=r,o=E(D,r.__scopeScrollArea),n=d.useRef(null),i=d.useRef(0),[l,c]=d.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),m=Ae(l.viewport,l.content),u={...s,sizes:l,onSizesChange:c,hasThumb:m>0&&m<1,onThumbChange:p=>n.current=p,onThumbPointerUp:()=>i.current=0,onThumbPointerDown:p=>i.current=p};function f(p,g){return bt(p,i.current,l,g)}return t==="horizontal"?a.jsx(mt,{...u,ref:e,onThumbPositionChange:()=>{if(o.viewport&&n.current){const p=o.viewport.scrollLeft,g=ce(p,l,o.dir);n.current.style.transform=`translate3d(${g}px, 0, 0)`}},onWheelScroll:p=>{o.viewport&&(o.viewport.scrollLeft=p)},onDragScroll:p=>{o.viewport&&(o.viewport.scrollLeft=f(p,o.dir))}}):t==="vertical"?a.jsx(pt,{...u,ref:e,onThumbPositionChange:()=>{if(o.viewport&&n.current){const p=o.viewport.scrollTop,g=ce(p,l);n.current.style.transform=`translate3d(0, ${g}px, 0)`}},onWheelScroll:p=>{o.viewport&&(o.viewport.scrollTop=p)},onDragScroll:p=>{o.viewport&&(o.viewport.scrollTop=f(p))}}):null}),mt=d.forwardRef((r,e)=>{const{sizes:t,onSizesChange:s,...o}=r,n=E(D,r.__scopeScrollArea),[i,l]=d.useState(),c=d.useRef(null),m=U(e,c,n.onScrollbarXChange);return d.useEffect(()=>{c.current&&l(getComputedStyle(c.current))},[c]),a.jsx(Pe,{"data-orientation":"horizontal",...o,ref:m,sizes:t,style:{bottom:0,left:n.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:n.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":$(t)+"px",...r.style},onThumbPointerDown:u=>r.onThumbPointerDown(u.x),onDragScroll:u=>r.onDragScroll(u.x),onWheelScroll:(u,f)=>{if(n.viewport){const p=n.viewport.scrollLeft+u.deltaX;r.onWheelScroll(p),Re(p,f)&&u.preventDefault()}},onResize:()=>{c.current&&n.viewport&&i&&s({content:n.viewport.scrollWidth,viewport:n.viewport.offsetWidth,scrollbar:{size:c.current.clientWidth,paddingStart:V(i.paddingLeft),paddingEnd:V(i.paddingRight)}})}})}),pt=d.forwardRef((r,e)=>{const{sizes:t,onSizesChange:s,...o}=r,n=E(D,r.__scopeScrollArea),[i,l]=d.useState(),c=d.useRef(null),m=U(e,c,n.onScrollbarYChange);return d.useEffect(()=>{c.current&&l(getComputedStyle(c.current))},[c]),a.jsx(Pe,{"data-orientation":"vertical",...o,ref:m,sizes:t,style:{top:0,right:n.dir==="ltr"?0:void 0,left:n.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":$(t)+"px",...r.style},onThumbPointerDown:u=>r.onThumbPointerDown(u.y),onDragScroll:u=>r.onDragScroll(u.y),onWheelScroll:(u,f)=>{if(n.viewport){const p=n.viewport.scrollTop+u.deltaY;r.onWheelScroll(p),Re(p,f)&&u.preventDefault()}},onResize:()=>{c.current&&n.viewport&&i&&s({content:n.viewport.scrollHeight,viewport:n.viewport.offsetHeight,scrollbar:{size:c.current.clientHeight,paddingStart:V(i.paddingTop),paddingEnd:V(i.paddingBottom)}})}})}),[ft,Te]=xe(D),Pe=d.forwardRef((r,e)=>{const{__scopeScrollArea:t,sizes:s,hasThumb:o,onThumbChange:n,onThumbPointerUp:i,onThumbPointerDown:l,onThumbPositionChange:c,onDragScroll:m,onWheelScroll:u,onResize:f,...p}=r,g=E(D,t),[x,w]=d.useState(null),P=U(e,b=>w(b)),y=d.useRef(null),S=d.useRef(""),j=g.viewport,N=s.content-s.viewport,A=O(u),C=O(c),T=G(f,10);function R(b){if(y.current){const v=b.clientX-y.current.left,h=b.clientY-y.current.top;m({x:v,y:h})}}return d.useEffect(()=>{const b=v=>{const h=v.target;x?.contains(h)&&A(v,N)};return document.addEventListener("wheel",b,{passive:!1}),()=>document.removeEventListener("wheel",b,{passive:!1})},[j,x,N,A]),d.useEffect(C,[s,C]),Q(x,T),Q(g.content,T),a.jsx(ft,{scope:t,scrollbar:x,hasThumb:o,onThumbChange:O(n),onThumbPointerUp:O(i),onThumbPositionChange:C,onThumbPointerDown:O(l),children:a.jsx(I.div,{...p,ref:P,style:{position:"absolute",...p.style},onPointerDown:M(r.onPointerDown,b=>{b.button===0&&(b.target.setPointerCapture(b.pointerId),y.current=x.getBoundingClientRect(),S.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",g.viewport&&(g.viewport.style.scrollBehavior="auto"),R(b))}),onPointerMove:M(r.onPointerMove,R),onPointerUp:M(r.onPointerUp,b=>{const v=b.target;v.hasPointerCapture(b.pointerId)&&v.releasePointerCapture(b.pointerId),document.body.style.webkitUserSelect=S.current,g.viewport&&(g.viewport.style.scrollBehavior=""),y.current=null})})})}),Y="ScrollAreaThumb",je=d.forwardRef((r,e)=>{const{forceMount:t,...s}=r,o=Te(Y,r.__scopeScrollArea);return a.jsx(H,{present:t||o.hasThumb,children:a.jsx(ht,{ref:e,...s})})}),ht=d.forwardRef((r,e)=>{const{__scopeScrollArea:t,style:s,...o}=r,n=E(Y,t),i=Te(Y,t),{onThumbPositionChange:l}=i,c=U(e,f=>i.onThumbChange(f)),m=d.useRef(void 0),u=G(()=>{m.current&&(m.current(),m.current=void 0)},100);return d.useEffect(()=>{const f=n.viewport;if(f){const p=()=>{if(u(),!m.current){const g=xt(f,l);m.current=g,l()}};return l(),f.addEventListener("scroll",p),()=>f.removeEventListener("scroll",p)}},[n.viewport,u,l]),a.jsx(I.div,{"data-state":i.hasThumb?"visible":"hidden",...o,ref:c,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...s},onPointerDownCapture:M(r.onPointerDownCapture,f=>{const g=f.target.getBoundingClientRect(),x=f.clientX-g.left,w=f.clientY-g.top;i.onThumbPointerDown({x,y:w})}),onPointerUp:M(r.onPointerUp,i.onThumbPointerUp)})});je.displayName=Y;var ee="ScrollAreaCorner",Ne=d.forwardRef((r,e)=>{const t=E(ee,r.__scopeScrollArea),s=!!(t.scrollbarX&&t.scrollbarY);return t.type!=="scroll"&&s?a.jsx(gt,{...r,ref:e}):null});Ne.displayName=ee;var gt=d.forwardRef((r,e)=>{const{__scopeScrollArea:t,...s}=r,o=E(ee,t),[n,i]=d.useState(0),[l,c]=d.useState(0),m=!!(n&&l);return Q(o.scrollbarX,()=>{const u=o.scrollbarX?.offsetHeight||0;o.onCornerHeightChange(u),c(u)}),Q(o.scrollbarY,()=>{const u=o.scrollbarY?.offsetWidth||0;o.onCornerWidthChange(u),i(u)}),m?a.jsx(I.div,{...s,ref:e,style:{width:n,height:l,position:"absolute",right:o.dir==="ltr"?0:void 0,left:o.dir==="rtl"?0:void 0,bottom:0,...r.style}}):null});function V(r){return r?parseInt(r,10):0}function Ae(r,e){const t=r/e;return isNaN(t)?0:t}function $(r){const e=Ae(r.viewport,r.content),t=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,s=(r.scrollbar.size-t)*e;return Math.max(s,18)}function bt(r,e,t,s="ltr"){const o=$(t),n=o/2,i=e||n,l=o-i,c=t.scrollbar.paddingStart+i,m=t.scrollbar.size-t.scrollbar.paddingEnd-l,u=t.content-t.viewport,f=s==="ltr"?[0,u]:[u*-1,0];return Ee([c,m],f)(r)}function ce(r,e,t="ltr"){const s=$(e),o=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,n=e.scrollbar.size-o,i=e.content-e.viewport,l=n-s,c=t==="ltr"?[0,i]:[i*-1,0],m=Ge(r,c);return Ee([0,i],[0,l])(m)}function Ee(r,e){return t=>{if(r[0]===r[1]||e[0]===e[1])return e[0];const s=(e[1]-e[0])/(r[1]-r[0]);return e[0]+s*(t-r[0])}}function Re(r,e){return r>0&&r<e}var xt=(r,e=()=>{})=>{let t={left:r.scrollLeft,top:r.scrollTop},s=0;return(function o(){const n={left:r.scrollLeft,top:r.scrollTop},i=t.left!==n.left,l=t.top!==n.top;(i||l)&&e(),t=n,s=window.requestAnimationFrame(o)})(),()=>window.cancelAnimationFrame(s)};function G(r,e){const t=O(r),s=d.useRef(0);return d.useEffect(()=>()=>window.clearTimeout(s.current),[]),d.useCallback(()=>{window.clearTimeout(s.current),s.current=window.setTimeout(t,e)},[t,e])}function Q(r,e){const t=O(e);Ye(()=>{let s=0;if(r){const o=new ResizeObserver(()=>{cancelAnimationFrame(s),s=window.requestAnimationFrame(t)});return o.observe(r),()=>{window.cancelAnimationFrame(s),o.unobserve(r)}}},[r,t])}var vt=ve,yt=Se,St=Ne,X="Tabs",[wt,qr]=he(X,[be]),ke=be(),[Ct,te]=wt(X),Me=d.forwardRef((r,e)=>{const{__scopeTabs:t,value:s,onValueChange:o,defaultValue:n,orientation:i="horizontal",dir:l,activationMode:c="automatic",...m}=r,u=ge(l),[f,p]=Ve({prop:s,onChange:o,defaultProp:n??"",caller:X});return a.jsx(Ct,{scope:t,baseId:$e(),value:f,onValueChange:p,orientation:i,dir:u,activationMode:c,children:a.jsx(I.div,{dir:u,"data-orientation":i,...m,ref:e})})});Me.displayName=X;var De="TabsList",Ie=d.forwardRef((r,e)=>{const{__scopeTabs:t,loop:s=!0,...o}=r,n=te(De,t),i=ke(t);return a.jsx(tt,{asChild:!0,...i,orientation:n.orientation,dir:n.dir,loop:s,children:a.jsx(I.div,{role:"tablist","aria-orientation":n.orientation,...o,ref:e})})});Ie.displayName=De;var _e="TabsTrigger",Le=d.forwardRef((r,e)=>{const{__scopeTabs:t,value:s,disabled:o=!1,...n}=r,i=te(_e,t),l=ke(t),c=Qe(i.baseId,s),m=Ue(i.baseId,s),u=s===i.value;return a.jsx(rt,{asChild:!0,...l,focusable:!o,active:u,children:a.jsx(I.button,{type:"button",role:"tab","aria-selected":u,"aria-controls":m,"data-state":u?"active":"inactive","data-disabled":o?"":void 0,disabled:o,id:c,...n,ref:e,onMouseDown:M(r.onMouseDown,f=>{!o&&f.button===0&&f.ctrlKey===!1?i.onValueChange(s):f.preventDefault()}),onKeyDown:M(r.onKeyDown,f=>{[" ","Enter"].includes(f.key)&&i.onValueChange(s)}),onFocus:M(r.onFocus,()=>{const f=i.activationMode!=="manual";!u&&!o&&f&&i.onValueChange(s)})})})});Le.displayName=_e;var Oe="TabsContent",qe=d.forwardRef((r,e)=>{const{__scopeTabs:t,value:s,forceMount:o,children:n,...i}=r,l=te(Oe,t),c=Qe(l.baseId,s),m=Ue(l.baseId,s),u=s===l.value,f=d.useRef(u);return d.useEffect(()=>{const p=requestAnimationFrame(()=>f.current=!1);return()=>cancelAnimationFrame(p)},[]),a.jsx(H,{present:o||u,children:({present:p})=>a.jsx(I.div,{"data-state":u?"active":"inactive","data-orientation":l.orientation,role:"tabpanel","aria-labelledby":c,hidden:!p,id:m,tabIndex:0,...i,ref:e,style:{...r.style,animationDuration:f.current?"0s":void 0},children:p&&n})})});qe.displayName=Oe;function Qe(r,e){return`${r}-trigger-${e}`}function Ue(r,e){return`${r}-content-${e}`}var Tt=Me,Pt=Ie,jt=Le,Nt=qe;function de(r){const e=_.c(14);let t,s,o;e[0]!==r?({className:s,children:t,...o}=r,e[0]=r,e[1]=t,e[2]=s,e[3]=o):(t=e[1],s=e[2],o=e[3]);let n;e[4]!==s?(n=L("relative",s),e[4]=s,e[5]=n):n=e[5];let i;e[6]!==t?(i=a.jsx(yt,{"data-slot":"scroll-area-viewport",className:"size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1",children:t}),e[6]=t,e[7]=i):i=e[7];let l,c;e[8]===Symbol.for("react.memo_cache_sentinel")?(l=a.jsx(At,{}),c=a.jsx(St,{}),e[8]=l,e[9]=c):(l=e[8],c=e[9]);let m;return e[10]!==o||e[11]!==n||e[12]!==i?(m=a.jsxs(vt,{"data-slot":"scroll-area",className:n,...o,children:[i,l,c]}),e[10]=o,e[11]=n,e[12]=i,e[13]=m):m=e[13],m}function At(r){const e=_.c(13);let t,s,o;e[0]!==r?({className:t,orientation:o,...s}=r,e[0]=r,e[1]=t,e[2]=s,e[3]=o):(t=e[1],s=e[2],o=e[3]);const n=o===void 0?"vertical":o,i=n==="vertical"&&"h-full w-2.5 border-l border-l-transparent",l=n==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent";let c;e[4]!==t||e[5]!==i||e[6]!==l?(c=L("flex touch-none p-px transition-colors select-none",i,l,t),e[4]=t,e[5]=i,e[6]=l,e[7]=c):c=e[7];let m;e[8]===Symbol.for("react.memo_cache_sentinel")?(m=a.jsx(je,{"data-slot":"scroll-area-thumb",className:"relative flex-1 rounded-full bg-border"}),e[8]=m):m=e[8];let u;return e[9]!==n||e[10]!==s||e[11]!==c?(u=a.jsx(we,{"data-slot":"scroll-area-scrollbar",orientation:n,className:c,...s,children:m}),e[9]=n,e[10]=s,e[11]=c,e[12]=u):u=e[12],u}function ue(r){const e=_.c(10);let t,s,o;e[0]!==r?({className:t,orientation:o,...s}=r,e[0]=r,e[1]=t,e[2]=s,e[3]=o):(t=e[1],s=e[2],o=e[3]);const n=o===void 0?"horizontal":o;let i;e[4]!==t?(i=L("group/tabs flex gap-2 data-[orientation=horizontal]:flex-col",t),e[4]=t,e[5]=i):i=e[5];let l;return e[6]!==n||e[7]!==s||e[8]!==i?(l=a.jsx(Tt,{"data-slot":"tabs","data-orientation":n,orientation:n,className:i,...s}),e[6]=n,e[7]=s,e[8]=i,e[9]=l):l=e[9],l}const Et=Be("group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-[orientation=horizontal]/tabs:h-9 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none",{variants:{variant:{default:"bg-muted",line:"gap-1 bg-transparent"}},defaultVariants:{variant:"default"}});function me(r){const e=_.c(11);let t,s,o;e[0]!==r?({className:t,variant:o,...s}=r,e[0]=r,e[1]=t,e[2]=s,e[3]=o):(t=e[1],s=e[2],o=e[3]);const n=o===void 0?"default":o;let i;e[4]!==t||e[5]!==n?(i=L(Et({variant:n}),t),e[4]=t,e[5]=n,e[6]=i):i=e[6];let l;return e[7]!==s||e[8]!==i||e[9]!==n?(l=a.jsx(Pt,{"data-slot":"tabs-list","data-variant":n,className:i,...s}),e[7]=s,e[8]=i,e[9]=n,e[10]=l):l=e[10],l}function W(r){const e=_.c(8);let t,s;e[0]!==r?({className:t,...s}=r,e[0]=r,e[1]=t,e[2]=s):(t=e[1],s=e[2]);let o;e[3]!==t?(o=L("relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4","group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent","data-[state=active]:bg-background data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground","after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100",t),e[3]=t,e[4]=o):o=e[4];let n;return e[5]!==s||e[6]!==o?(n=a.jsx(jt,{"data-slot":"tabs-trigger",className:o,...s}),e[5]=s,e[6]=o,e[7]=n):n=e[7],n}function F(r){const e=_.c(8);let t,s;e[0]!==r?({className:t,...s}=r,e[0]=r,e[1]=t,e[2]=s):(t=e[1],s=e[2]);let o;e[3]!==t?(o=L("flex-1 outline-none",t),e[3]=t,e[4]=o):o=e[4];let n;return e[5]!==s||e[6]!==o?(n=a.jsx(Nt,{"data-slot":"tabs-content",className:o,...s}),e[5]=s,e[6]=o,e[7]=n):n=e[7],n}const Rt=`
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

`,kt=`
`,Mt=`
`,Dt=`
`,It=`
`,_t=`
`,Lt=`
`,Ot=`
`,qt=`
`,Qt=`
`,Ut=`
You are an expert **History researcher**, **Pakistan competitive exam analyst**, and **MCQ content writer**.

Your task is to generate **high-quality History MCQs based ONLY on Yesterday's important events**.

These MCQs are being created for a **Pakistan competitive exam preparation platform** and must be suitable for:

- FPSC
- PPSC
- NTS
- CSS
- PMS
- General Job Tests
- History quiz preparation

The output must be:
- **factually accurate**
- **exam-oriented**
- **non-repetitive**
- **import-ready**
- returned in my **STRICT custom Markdown format**

---

# DATE SCOPE

Generate MCQs only from **important events that happened in the history**.

If an event started earlier but had a **major update in the history**, it may be included.

Do **not** include outdated or irrelevant old news unless it had a significant development in the history.

---

# CONTENT COVERAGE

Cover history’s important developments from these areas:

- Pakistan History
- World History
- Ancient History
- Medieval History
- Modern History
- Islamic History
- Awards, Appointments & Obituaries
- Reports, Rankings & Indexes
- International Organisations / Summits / Agreements
- Government, Politics, Defence, Foreign Affairs
- Sports
- Science and Technology
- Environment and Disasters
- Health and Medicine
- Education and Social Issues
- Economy and Business
- Culture and Arts
- Geography and Travel
- Miscellaneous

---

# QUESTION QUALITY RULES

Create MCQs that are:
- factual
- objective
- exam-relevant
- concise
- useful for history preparation

Prefer questions about:
- historical events
- historical figures
- historical dates
- historical places
- historical documents
- historical artifacts
- historical speeches
- historical treaties
- historical wars
- historical revolutions
- historical movements
- historical discoveries
- historical inventions
- historical art
- historical literature
- historical music
- historical films
- historical awards
- historical organizations
- historical leaders
- historical policies
- historical decisions
- historical announcements
- historical affairs
- Pakistan history
- World history
- Ancient history
- Medieval history
- Modern history
- Islamic history
- Important days and events
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
history

## 6) Topic Slug
Choose the **following relevant topic slug** based on the question.
*write here the topic slugs*

-



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

`,zt=`
`,pe={"current-affairs-mcqs":Rt,"pak-studies-mcqs":kt,"english-mcqs":Mt,"islamic-studies-mcqs":Dt,"math-mcqs":It,"physics-mcqs":_t,"chemistry-mcqs":Lt,"biology-mcqs":Ot,"computer-mcqs":qt,"general-knowledge-mcqs":Qt,"history-mcqs":Ut,"geography-mcqs":zt};function fe(r){return r.split(/\n---+\n?/).map(t=>t.trim()).filter(Boolean).map(Bt)}function Bt(r){return{question:k(r,"Question"),slug:k(r,"Slug"),difficulty:k(r,"Difficulty").toLowerCase(),mcq_type:k(r,"MCQ Type").toLowerCase(),subject_slug:k(r,"Subject Slug"),topic_slug:k(r,"Topic Slug"),paper_slug:Ht(r,"Paper Slug"),created_by:parseInt(k(r,"Created By"),10)||1,tags:Wt(r),options:Ft(r),explanation:k(r,"Explanation")}}function k(r,e){const t=r.match(new RegExp(`^${e}:\\s*(.+)$`,"im"));return t?t[1].trim():""}function Ht(r,e){const t=k(r,e);return!t||t.toLowerCase()==="null"?null:t}function Wt(r){const e=k(r,"Tags");return e?e.split(",").map(t=>t.trim()).filter(Boolean):[]}function Ft(r){const e=r.split(/^Options:\s*$/im)[1];if(!e)return[];const t=e.split(/^Explanation:/im)[0];let s=0;return t.split(`
`).map(o=>o.trim()).filter(Boolean).reduce((o,n)=>{const i=/\[correct\]/i.test(n),l=n.match(/^([A-Z])\)\s+(.+?)(?:\s+\[correct\])?$/i);return l&&(s++,o.push({option_text:l[2].trim(),is_correct:i,sort_order:s})),o},[])}function Yt(r){const e=_.c(5),{difficulty:t}=r;let s;e[0]!==t?(s=L("rounded-full border px-2 py-0.5 text-xs font-medium capitalize",{easy:"bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",medium:"bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800",hard:"bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800"}[t]??"border-border bg-muted text-muted-foreground"),e[0]=t,e[1]=s):s=e[1];let o;return e[2]!==t||e[3]!==s?(o=a.jsx("span",{className:s,children:t}),e[2]=t,e[3]=s,e[4]=o):o=e[4],o}function Vt(r){const e=_.c(47),{mcq:t,index:s}=r,[o,n]=d.useState(null);let i;e[0]!==o?(i=b=>{o===null&&n(b)},e[0]=o,e[1]=i):i=e[1];const l=i;let c;e[2]!==o?(c=(b,v)=>{const h=o===v;return o!==null?b.is_correct?"border-green-400 bg-green-50 text-green-900 dark:bg-green-900/20 dark:text-green-300 dark:border-green-700 cursor-default":h&&!b.is_correct?"border-red-400 bg-red-50 text-red-900 dark:bg-red-900/20 dark:text-red-300 dark:border-red-700 cursor-default":"border-border bg-muted/30 text-muted-foreground cursor-default opacity-50":"border-border hover:border-muted-foreground/40 hover:bg-muted/50 cursor-pointer"},e[2]=o,e[3]=c):c=e[3];const m=c,u=s+1;let f;e[4]!==u?(f=a.jsx("span",{className:"mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-muted/10 text-xs font-medium text-muted-foreground",children:u}),e[4]=u,e[5]=f):f=e[5];let p;e[6]!==t.question?(p=a.jsx("p",{className:"text-sm leading-relaxed font-medium",children:t.question}),e[6]=t.question,e[7]=p):p=e[7];let g;e[8]!==f||e[9]!==p?(g=a.jsxs("div",{className:"flex items-center gap-3",children:[f,p]}),e[8]=f,e[9]=p,e[10]=g):g=e[10];let x;e[11]!==t.difficulty?(x=t.difficulty&&a.jsx(Yt,{difficulty:t.difficulty}),e[11]=t.difficulty,e[12]=x):x=e[12];let w;e[13]!==t.mcq_type?(w=t.mcq_type&&a.jsx(B,{variant:"secondary",className:"text-xs capitalize",children:t.mcq_type}),e[13]=t.mcq_type,e[14]=w):w=e[14];let P;e[15]!==t.subject_slug?(P=t.subject_slug&&a.jsx(B,{variant:"outline",className:"text-xs",children:t.subject_slug}),e[15]=t.subject_slug,e[16]=P):P=e[16];let y;e[17]!==t.tags?(y=t.tags.map($t),e[17]=t.tags,e[18]=y):y=e[18];let S;e[19]!==y||e[20]!==x||e[21]!==w||e[22]!==P?(S=a.jsxs("div",{className:"mt-2 ml-9 flex flex-wrap gap-1.5",children:[x,w,P,y]}),e[19]=y,e[20]=x,e[21]=w,e[22]=P,e[23]=S):S=e[23];let j;e[24]!==S||e[25]!==g?(j=a.jsxs(He,{className:"px-4 pt-4 pb-2",children:[g,S]}),e[24]=S,e[25]=g,e[26]=j):j=e[26];let N;if(e[27]!==m||e[28]!==l||e[29]!==t.options||e[30]!==o){let b;e[32]!==m||e[33]!==l||e[34]!==o?(b=(v,h)=>a.jsxs("div",{onClick:()=>l(h),className:L("flex items-center gap-3 rounded-lg border px-3 py-2.5 text-sm transition-all",m(v,h)),children:[a.jsx("span",{className:"w-4 shrink-0 text-xs font-semibold text-muted-foreground",children:String.fromCharCode(65+h)}),a.jsx("span",{className:"flex-1",children:v.option_text}),o!==null&&v.is_correct&&a.jsx(le,{className:"h-4 w-4 shrink-0 text-green-500"}),o===h&&!v.is_correct&&a.jsx(it,{className:"h-4 w-4 shrink-0 text-red-500"})]},h),e[32]=m,e[33]=l,e[34]=o,e[35]=b):b=e[35],N=t.options.map(b),e[27]=m,e[28]=l,e[29]=t.options,e[30]=o,e[31]=N}else N=e[31];let A;e[36]!==N?(A=a.jsx("div",{className:"mb-3 flex flex-col gap-2",children:N}),e[36]=N,e[37]=A):A=e[37];let C;e[38]!==t.explanation||e[39]!==o?(C=o!==null&&t.explanation&&a.jsxs("div",{className:"flex gap-2 rounded-lg border border-blue-100 bg-blue-50 p-3 text-xs leading-relaxed text-blue-900 dark:border-blue-900 dark:bg-blue-950/30 dark:text-blue-300",children:[a.jsx(le,{className:"mt-0.5 h-4 w-4 shrink-0 text-blue-500"}),a.jsx("p",{children:t.explanation})]}),e[38]=t.explanation,e[39]=o,e[40]=C):C=e[40];let T;e[41]!==A||e[42]!==C?(T=a.jsxs(We,{className:"px-4 pb-4",children:[A,C]}),e[41]=A,e[42]=C,e[43]=T):T=e[43];let R;return e[44]!==j||e[45]!==T?(R=a.jsxs(Fe,{className:"mb-3 shadow-none",children:[j,T]}),e[44]=j,e[45]=T,e[46]=R):R=e[46],R}function $t(r){return a.jsx(B,{variant:"outline",className:"text-xs",children:r},r)}function Qr({subjects:r,topics:e}){const{data:t,setData:s,post:o,errors:n}=ze(),[i,l]=d.useState(""),[c,m]=d.useState(()=>fe(i)),[u,f]=d.useState(""),[p,g]=d.useState(pe["current-affairs"]),[x,w]=d.useState(!1),[P,y]=d.useState(!1),[S,j]=d.useState(r[17].id),[N,A]=d.useState(e[0].id),C=i.split(/\n---+/).filter(Boolean).length;d.useEffect(()=>{if(S){const h=r.find(q=>q.id===S);h&&g(pe[h.slug])}},[S,r]);const T=d.useCallback(()=>{f("");try{const h=fe(i);if(!h.length){f("No MCQ blocks found. Make sure blocks are separated by ---.");return}m(h),s("json",JSON.stringify(h)),se.success("MCQs parsed successfully.")}catch(h){f("Parse error: "+h.message),se.error("Parse error: "+h.message)}},[i]),R=d.useCallback(h=>{if(h.preventDefault(),!t.json){f("No JSON data to import.");return}t.json=t.json,o(ot.store().url)},[t,o]),b=d.useCallback(()=>{navigator.clipboard.writeText(p),y(!0),setTimeout(()=>y(!1),1500)},[p]),v=d.useCallback(()=>{navigator.clipboard.writeText(JSON.stringify(c,null,2)),w(!0),setTimeout(()=>w(!1),1500)},[c]);return a.jsx(at,{title:"Import MD MCQs",children:a.jsxs("div",{className:"grid grid-cols-1 gap-4 p-4 lg:grid-cols-2",children:[n.json&&a.jsxs(re,{variant:"destructive",className:"col-span-full",children:[a.jsx(ne,{className:"h-4 w-4"}),a.jsx(oe,{children:n.json})]}),a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center gap-2 text-sm font-medium",children:[a.jsx(K,{className:"h-4 w-4 text-muted-foreground"}),"Markdown input"]}),a.jsxs(B,{variant:"secondary",className:"text-xs",children:[C," block",C!==1?"s":""]})]}),a.jsxs(ue,{defaultValue:"MD",className:"flex flex-col gap-3",children:[a.jsxs(me,{className:"w-fit bg-muted/10",children:[a.jsx(W,{value:"MD",children:"MD"}),a.jsx(W,{value:"Prompt",children:"Prompt"})]}),a.jsxs(F,{value:"MD",className:"min-h-[500px] max-h-[500px] overflow-y-auto",children:[a.jsx(ae,{value:i,onChange:h=>l(h.target.value),placeholder:"Paste your MCQ markdown here…",className:"min-h-full flex-1 resize-none font-mono text-xs"}),u&&a.jsxs(re,{variant:"destructive",className:"py-2",children:[a.jsx(ne,{className:"h-4 w-4"}),a.jsx(oe,{className:"text-xs",children:u})]})]}),a.jsx(F,{value:"Prompt",children:a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center gap-2 text-sm font-medium",children:[a.jsx(K,{className:"h-4 w-4 text-muted-foreground"}),"Prompt"]}),a.jsxs("div",{className:"flex items-center gap-2",children:[a.jsxs(z,{variant:"outline",size:"sm",onClick:b,children:[a.jsx(ie,{className:"h-4 w-4"}),P?"Copied!":"Copy Prompt"]}),a.jsxs(Xe,{value:S,onValueChange:h=>j(h),children:[a.jsx(Ke,{children:a.jsx(Je,{placeholder:"Select subject"})}),a.jsx(Ze,{children:r.map(h=>a.jsx(et,{value:h.id,children:h.name},h.id))})]})]})]}),a.jsx(ae,{value:p,onChange:h=>g(h.target.value),placeholder:"Paste your prompt here…",className:"min-h-full flex-1 resize-none font-mono text-xs"})]})})]}),a.jsxs("div",{className:"flex gap-2",children:[a.jsx(z,{onClick:T,className:"flex-1",children:"Parse"}),a.jsx(z,{variant:"outline",onClick:()=>{l(""),m([]),f("")},children:"Clear"})]})]}),a.jsxs("div",{className:"flex flex-col gap-3",children:[a.jsxs("div",{className:"flex items-center justify-between",children:[a.jsxs("div",{className:"flex items-center gap-2 text-sm font-medium",children:[a.jsx(st,{className:"h-4 w-4 text-muted-foreground"}),"Output"]}),a.jsxs(B,{variant:"secondary",className:"text-xs",children:[c.length," MCQ",c.length!==1?"s":""]})]}),a.jsxs(ue,{defaultValue:"preview",className:"flex flex-col gap-3",children:[a.jsxs(me,{className:"w-fit bg-muted/10",children:[a.jsx(W,{value:"preview",children:"Preview"}),a.jsx(W,{value:"json",children:"JSON"})]}),a.jsx(F,{value:"preview",className:"mt-0",children:a.jsx(de,{className:"h-[500px] max-h-[500px] rounded-lg border bg-muted/20 pr-2",children:c.length===0?a.jsxs("div",{className:"flex h-[500px] max-h-[500px] flex-col items-center justify-center gap-2 text-sm text-muted-foreground",children:[a.jsx(K,{className:"h-6 w-6 opacity-30"}),a.jsx("span",{children:"Paste MD on the left and click Parse"})]}):c.map((h,q)=>a.jsx(Vt,{mcq:h,index:q},q))})}),a.jsx(F,{value:"json",className:"mt-0 flex flex-col gap-2",children:a.jsx(de,{className:"h-[500px] max-h-[500px] rounded-lg border bg-muted/20",children:a.jsx("pre",{className:"p-3 font-mono text-xs leading-relaxed break-words whitespace-pre-wrap",children:JSON.stringify(c,null,2)})})})]}),a.jsxs("div",{className:"flex gap-2",children:[a.jsxs(z,{variant:"outline",onClick:v,className:"flex-1 gap-2",children:[x?a.jsx(nt,{className:"h-4 w-4"}):a.jsx(ie,{className:"h-4 w-4"}),x?"Copied!":"Copy JSON"]}),a.jsx(z,{onClick:R,className:"flex-1",children:"Send to import service"})]})]})]})})}export{Qr as default};
