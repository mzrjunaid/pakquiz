import{r as c,j as s,c as k,a as yt}from"./admin-B04JBtwh.js";import{A as Ce,a as Te}from"./alert-O1jUmcGL.js";import{B as q}from"./badge-DQfMArle.js";import{u as W,a as Ct,B as G}from"./button-B2J85le1.js";import{C as Tt,c as wt,d as Nt}from"./card-XIH60gU0.js";import{c as Y}from"./utils-D0Zg16Wk.js";import{P as F}from"./index-DINBOWse.js";import{P as K}from"./index-Dfuthg_7.js";import{c as Ye,b as O,e as Pt,u as jt,a as It}from"./index-DM8nMa4m.js";import{a as B}from"./index-jKhpWlcc.js";import{u as ze}from"./index-CmbIEU9e.js";import{g as At,S as me,a as pe,b as fe,c as he,d as ee}from"./select-DV815wyK.js";import{f as Ge,R as Rt,I as Et}from"./dropdown-menu-DGh88jIB.js";import{T as ge}from"./textarea-B_HFS-Gg.js";import{m as Lt}from"./index-D2zlgwlh.js";import{t as H}from"./index-D64uLXyz.js";import kt from"./admin-layout-DNq2CMvF.js";import{R as Mt,a as Ot,b as Ut}from"./index-CfHBiGtq.js";import{I as $t}from"./input-UkcwcI27.js";import{L as J}from"./label-Be7NLVpW.js";import{C as we}from"./circle-alert-DfJd6lsD.js";import{F as Ne}from"./file-text-C8MrTxaB.js";import{S as _t}from"./sparkles-fjv3gX3m.js";import{R as Dt}from"./refresh-cw-C4UYuC4g.js";import{C as Pe}from"./check-DRhcoP7z.js";import{C as je}from"./copy-jAtBRt7N.js";import{c as Qt}from"./createLucideIcon-C2xHkCYB.js";import{C as qt}from"./chevron-down-pyjlCLq5.js";import{E as Ft}from"./eye-Xv1CZBBO.js";import{C as Ie,a as Yt}from"./circle-x-CPuD3pGx.js";import"./bootstrap-CWD7zuwT.js";import"./app-fNQrZyce.js";import"./index-BMeSAxjb.js";import"./index-Bfu5fZi5.js";import"./index-982WGc1r.js";import"./index-NJvUyCjJ.js";import"./index-DgcFOB-J.js";import"./index-CyxnlobW.js";import"./index-C0DDRGhr.js";import"./index-Rt_sV4EZ.js";import"./index-C6Ssntid.js";import"./app-layout-CzamkaNT.js";import"./use-quiz-mode-CfI0nw2T.js";import"./index-C1mZqF0q.js";import"./x-v6gHEGC_.js";import"./ellipsis-gLwwt9z0.js";import"./index--GOI7Non.js";import"./navigation-menu-ZA3YgcYb.js";import"./chevron-right-BCNuofS1.js";import"./index-q1GjW8_m.js";import"./book-open-3LMPG8wS.js";import"./breadcrumbs-utils-uitSj5Sj.js";const zt=[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],Gt=Qt("Settings2",zt);function Bt(r,e){return c.useReducer((t,a)=>e[t][a]??t,r)}var xe="ScrollArea",[Be,Os]=Ye(xe),[Ht,E]=Be(xe),He=c.forwardRef((r,e)=>{const{__scopeScrollArea:t,type:a="hover",dir:o,scrollHideDelay:n=600,...i}=r,[l,u]=c.useState(null),[d,m]=c.useState(null),[f,p]=c.useState(null),[x,S]=c.useState(null),[N,A]=c.useState(null),[b,R]=c.useState(0),[C,P]=c.useState(0),[T,j]=c.useState(!1),[w,L]=c.useState(!1),g=W(e,y=>u(y)),v=ze(o);return s.jsx(Ht,{scope:t,type:a,dir:v,scrollHideDelay:n,scrollArea:l,viewport:d,onViewportChange:m,content:f,onContentChange:p,scrollbarX:x,onScrollbarXChange:S,scrollbarXEnabled:T,onScrollbarXEnabledChange:j,scrollbarY:N,onScrollbarYChange:A,scrollbarYEnabled:w,onScrollbarYEnabledChange:L,onCornerWidthChange:R,onCornerHeightChange:P,children:s.jsx(F.div,{dir:v,...i,ref:g,style:{position:"relative","--radix-scroll-area-corner-width":b+"px","--radix-scroll-area-corner-height":C+"px",...r.style}})})});He.displayName=xe;var Ve="ScrollAreaViewport",We=c.forwardRef((r,e)=>{const{__scopeScrollArea:t,children:a,nonce:o,...n}=r,i=E(Ve,t),l=c.useRef(null),u=W(e,l,i.onViewportChange);return s.jsxs(s.Fragment,{children:[s.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:o}),s.jsx(F.div,{"data-radix-scroll-area-viewport":"",...n,ref:u,style:{overflowX:i.scrollbarXEnabled?"scroll":"hidden",overflowY:i.scrollbarYEnabled?"scroll":"hidden",...r.style},children:s.jsx("div",{ref:i.onContentChange,style:{minWidth:"100%",display:"table"},children:a})})]})});We.displayName=Ve;var U="ScrollAreaScrollbar",Xe=c.forwardRef((r,e)=>{const{forceMount:t,...a}=r,o=E(U,r.__scopeScrollArea),{onScrollbarXEnabledChange:n,onScrollbarYEnabledChange:i}=o,l=r.orientation==="horizontal";return c.useEffect(()=>(l?n(!0):i(!0),()=>{l?n(!1):i(!1)}),[l,n,i]),o.type==="hover"?s.jsx(Vt,{...a,ref:e,forceMount:t}):o.type==="scroll"?s.jsx(Wt,{...a,ref:e,forceMount:t}):o.type==="auto"?s.jsx(Je,{...a,ref:e,forceMount:t}):o.type==="always"?s.jsx(be,{...a,ref:e}):null});Xe.displayName=U;var Vt=c.forwardRef((r,e)=>{const{forceMount:t,...a}=r,o=E(U,r.__scopeScrollArea),[n,i]=c.useState(!1);return c.useEffect(()=>{const l=o.scrollArea;let u=0;if(l){const d=()=>{window.clearTimeout(u),i(!0)},m=()=>{u=window.setTimeout(()=>i(!1),o.scrollHideDelay)};return l.addEventListener("pointerenter",d),l.addEventListener("pointerleave",m),()=>{window.clearTimeout(u),l.removeEventListener("pointerenter",d),l.removeEventListener("pointerleave",m)}}},[o.scrollArea,o.scrollHideDelay]),s.jsx(K,{present:t||n,children:s.jsx(Je,{"data-state":n?"visible":"hidden",...a,ref:e})})}),Wt=c.forwardRef((r,e)=>{const{forceMount:t,...a}=r,o=E(U,r.__scopeScrollArea),n=r.orientation==="horizontal",i=ne(()=>u("SCROLL_END"),100),[l,u]=Bt("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return c.useEffect(()=>{if(l==="idle"){const d=window.setTimeout(()=>u("HIDE"),o.scrollHideDelay);return()=>window.clearTimeout(d)}},[l,o.scrollHideDelay,u]),c.useEffect(()=>{const d=o.viewport,m=n?"scrollLeft":"scrollTop";if(d){let f=d[m];const p=()=>{const x=d[m];f!==x&&(u("SCROLL"),i()),f=x};return d.addEventListener("scroll",p),()=>d.removeEventListener("scroll",p)}},[o.viewport,n,u,i]),s.jsx(K,{present:t||l!=="hidden",children:s.jsx(be,{"data-state":l==="hidden"?"hidden":"visible",...a,ref:e,onPointerEnter:O(r.onPointerEnter,()=>u("POINTER_ENTER")),onPointerLeave:O(r.onPointerLeave,()=>u("POINTER_LEAVE"))})})}),Je=c.forwardRef((r,e)=>{const t=E(U,r.__scopeScrollArea),{forceMount:a,...o}=r,[n,i]=c.useState(!1),l=r.orientation==="horizontal",u=ne(()=>{if(t.viewport){const d=t.viewport.offsetWidth<t.viewport.scrollWidth,m=t.viewport.offsetHeight<t.viewport.scrollHeight;i(l?d:m)}},10);return V(t.viewport,u),V(t.content,u),s.jsx(K,{present:a||n,children:s.jsx(be,{"data-state":n?"visible":"hidden",...o,ref:e})})}),be=c.forwardRef((r,e)=>{const{orientation:t="vertical",...a}=r,o=E(U,r.__scopeScrollArea),n=c.useRef(null),i=c.useRef(0),[l,u]=c.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),d=rt(l.viewport,l.content),m={...a,sizes:l,onSizesChange:u,hasThumb:d>0&&d<1,onThumbChange:p=>n.current=p,onThumbPointerUp:()=>i.current=0,onThumbPointerDown:p=>i.current=p};function f(p,x){return tr(p,i.current,l,x)}return t==="horizontal"?s.jsx(Xt,{...m,ref:e,onThumbPositionChange:()=>{if(o.viewport&&n.current){const p=o.viewport.scrollLeft,x=Ae(p,l,o.dir);n.current.style.transform=`translate3d(${x}px, 0, 0)`}},onWheelScroll:p=>{o.viewport&&(o.viewport.scrollLeft=p)},onDragScroll:p=>{o.viewport&&(o.viewport.scrollLeft=f(p,o.dir))}}):t==="vertical"?s.jsx(Jt,{...m,ref:e,onThumbPositionChange:()=>{if(o.viewport&&n.current){const p=o.viewport.scrollTop,x=Ae(p,l);n.current.style.transform=`translate3d(0, ${x}px, 0)`}},onWheelScroll:p=>{o.viewport&&(o.viewport.scrollTop=p)},onDragScroll:p=>{o.viewport&&(o.viewport.scrollTop=f(p))}}):null}),Xt=c.forwardRef((r,e)=>{const{sizes:t,onSizesChange:a,...o}=r,n=E(U,r.__scopeScrollArea),[i,l]=c.useState(),u=c.useRef(null),d=W(e,u,n.onScrollbarXChange);return c.useEffect(()=>{u.current&&l(getComputedStyle(u.current))},[u]),s.jsx(Ze,{"data-orientation":"horizontal",...o,ref:d,sizes:t,style:{bottom:0,left:n.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:n.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":ae(t)+"px",...r.style},onThumbPointerDown:m=>r.onThumbPointerDown(m.x),onDragScroll:m=>r.onDragScroll(m.x),onWheelScroll:(m,f)=>{if(n.viewport){const p=n.viewport.scrollLeft+m.deltaX;r.onWheelScroll(p),ot(p,f)&&m.preventDefault()}},onResize:()=>{u.current&&n.viewport&&i&&a({content:n.viewport.scrollWidth,viewport:n.viewport.offsetWidth,scrollbar:{size:u.current.clientWidth,paddingStart:oe(i.paddingLeft),paddingEnd:oe(i.paddingRight)}})}})}),Jt=c.forwardRef((r,e)=>{const{sizes:t,onSizesChange:a,...o}=r,n=E(U,r.__scopeScrollArea),[i,l]=c.useState(),u=c.useRef(null),d=W(e,u,n.onScrollbarYChange);return c.useEffect(()=>{u.current&&l(getComputedStyle(u.current))},[u]),s.jsx(Ze,{"data-orientation":"vertical",...o,ref:d,sizes:t,style:{top:0,right:n.dir==="ltr"?0:void 0,left:n.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":ae(t)+"px",...r.style},onThumbPointerDown:m=>r.onThumbPointerDown(m.y),onDragScroll:m=>r.onDragScroll(m.y),onWheelScroll:(m,f)=>{if(n.viewport){const p=n.viewport.scrollTop+m.deltaY;r.onWheelScroll(p),ot(p,f)&&m.preventDefault()}},onResize:()=>{u.current&&n.viewport&&i&&a({content:n.viewport.scrollHeight,viewport:n.viewport.offsetHeight,scrollbar:{size:u.current.clientHeight,paddingStart:oe(i.paddingTop),paddingEnd:oe(i.paddingBottom)}})}})}),[Kt,Ke]=Be(U),Ze=c.forwardRef((r,e)=>{const{__scopeScrollArea:t,sizes:a,hasThumb:o,onThumbChange:n,onThumbPointerUp:i,onThumbPointerDown:l,onThumbPositionChange:u,onDragScroll:d,onWheelScroll:m,onResize:f,...p}=r,x=E(U,t),[S,N]=c.useState(null),A=W(e,g=>N(g)),b=c.useRef(null),R=c.useRef(""),C=x.viewport,P=a.content-a.viewport,T=B(m),j=B(u),w=ne(f,10);function L(g){if(b.current){const v=g.clientX-b.current.left,y=g.clientY-b.current.top;d({x:v,y})}}return c.useEffect(()=>{const g=v=>{const y=v.target;S?.contains(y)&&T(v,P)};return document.addEventListener("wheel",g,{passive:!1}),()=>document.removeEventListener("wheel",g,{passive:!1})},[C,S,P,T]),c.useEffect(j,[a,j]),V(S,w),V(x.content,w),s.jsx(Kt,{scope:t,scrollbar:S,hasThumb:o,onThumbChange:B(n),onThumbPointerUp:B(i),onThumbPositionChange:j,onThumbPointerDown:B(l),children:s.jsx(F.div,{...p,ref:A,style:{position:"absolute",...p.style},onPointerDown:O(r.onPointerDown,g=>{g.button===0&&(g.target.setPointerCapture(g.pointerId),b.current=S.getBoundingClientRect(),R.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",x.viewport&&(x.viewport.style.scrollBehavior="auto"),L(g))}),onPointerMove:O(r.onPointerMove,L),onPointerUp:O(r.onPointerUp,g=>{const v=g.target;v.hasPointerCapture(g.pointerId)&&v.releasePointerCapture(g.pointerId),document.body.style.webkitUserSelect=R.current,x.viewport&&(x.viewport.style.scrollBehavior=""),b.current=null})})})}),se="ScrollAreaThumb",et=c.forwardRef((r,e)=>{const{forceMount:t,...a}=r,o=Ke(se,r.__scopeScrollArea);return s.jsx(K,{present:t||o.hasThumb,children:s.jsx(Zt,{ref:e,...a})})}),Zt=c.forwardRef((r,e)=>{const{__scopeScrollArea:t,style:a,...o}=r,n=E(se,t),i=Ke(se,t),{onThumbPositionChange:l}=i,u=W(e,f=>i.onThumbChange(f)),d=c.useRef(void 0),m=ne(()=>{d.current&&(d.current(),d.current=void 0)},100);return c.useEffect(()=>{const f=n.viewport;if(f){const p=()=>{if(m(),!d.current){const x=rr(f,l);d.current=x,l()}};return l(),f.addEventListener("scroll",p),()=>f.removeEventListener("scroll",p)}},[n.viewport,m,l]),s.jsx(F.div,{"data-state":i.hasThumb?"visible":"hidden",...o,ref:u,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...a},onPointerDownCapture:O(r.onPointerDownCapture,f=>{const x=f.target.getBoundingClientRect(),S=f.clientX-x.left,N=f.clientY-x.top;i.onThumbPointerDown({x:S,y:N})}),onPointerUp:O(r.onPointerUp,i.onThumbPointerUp)})});et.displayName=se;var Se="ScrollAreaCorner",tt=c.forwardRef((r,e)=>{const t=E(Se,r.__scopeScrollArea),a=!!(t.scrollbarX&&t.scrollbarY);return t.type!=="scroll"&&a?s.jsx(er,{...r,ref:e}):null});tt.displayName=Se;var er=c.forwardRef((r,e)=>{const{__scopeScrollArea:t,...a}=r,o=E(Se,t),[n,i]=c.useState(0),[l,u]=c.useState(0),d=!!(n&&l);return V(o.scrollbarX,()=>{const m=o.scrollbarX?.offsetHeight||0;o.onCornerHeightChange(m),u(m)}),V(o.scrollbarY,()=>{const m=o.scrollbarY?.offsetWidth||0;o.onCornerWidthChange(m),i(m)}),d?s.jsx(F.div,{...a,ref:e,style:{width:n,height:l,position:"absolute",right:o.dir==="ltr"?0:void 0,left:o.dir==="rtl"?0:void 0,bottom:0,...r.style}}):null});function oe(r){return r?parseInt(r,10):0}function rt(r,e){const t=r/e;return isNaN(t)?0:t}function ae(r){const e=rt(r.viewport,r.content),t=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,a=(r.scrollbar.size-t)*e;return Math.max(a,18)}function tr(r,e,t,a="ltr"){const o=ae(t),n=o/2,i=e||n,l=o-i,u=t.scrollbar.paddingStart+i,d=t.scrollbar.size-t.scrollbar.paddingEnd-l,m=t.content-t.viewport,f=a==="ltr"?[0,m]:[m*-1,0];return st([u,d],f)(r)}function Ae(r,e,t="ltr"){const a=ae(e),o=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,n=e.scrollbar.size-o,i=e.content-e.viewport,l=n-a,u=t==="ltr"?[0,i]:[i*-1,0],d=At(r,u);return st([0,i],[0,l])(d)}function st(r,e){return t=>{if(r[0]===r[1]||e[0]===e[1])return e[0];const a=(e[1]-e[0])/(r[1]-r[0]);return e[0]+a*(t-r[0])}}function ot(r,e){return r>0&&r<e}var rr=(r,e=()=>{})=>{let t={left:r.scrollLeft,top:r.scrollTop},a=0;return(function o(){const n={left:r.scrollLeft,top:r.scrollTop},i=t.left!==n.left,l=t.top!==n.top;(i||l)&&e(),t=n,a=window.requestAnimationFrame(o)})(),()=>window.cancelAnimationFrame(a)};function ne(r,e){const t=B(r),a=c.useRef(0);return c.useEffect(()=>()=>window.clearTimeout(a.current),[]),c.useCallback(()=>{window.clearTimeout(a.current),a.current=window.setTimeout(t,e)},[t,e])}function V(r,e){const t=B(e);Pt(()=>{let a=0;if(r){const o=new ResizeObserver(()=>{cancelAnimationFrame(a),a=window.requestAnimationFrame(t)});return o.observe(r),()=>{window.cancelAnimationFrame(a),o.unobserve(r)}}},[r,t])}var sr=He,or=We,ar=tt,ie="Tabs",[nr,Us]=Ye(ie,[Ge]),at=Ge(),[ir,ve]=nr(ie),nt=c.forwardRef((r,e)=>{const{__scopeTabs:t,value:a,onValueChange:o,defaultValue:n,orientation:i="horizontal",dir:l,activationMode:u="automatic",...d}=r,m=ze(l),[f,p]=jt({prop:a,onChange:o,defaultProp:n??"",caller:ie});return s.jsx(ir,{scope:t,baseId:It(),value:f,onValueChange:p,orientation:i,dir:m,activationMode:u,children:s.jsx(F.div,{dir:m,"data-orientation":i,...d,ref:e})})});nt.displayName=ie;var it="TabsList",lt=c.forwardRef((r,e)=>{const{__scopeTabs:t,loop:a=!0,...o}=r,n=ve(it,t),i=at(t);return s.jsx(Rt,{asChild:!0,...i,orientation:n.orientation,dir:n.dir,loop:a,children:s.jsx(F.div,{role:"tablist","aria-orientation":n.orientation,...o,ref:e})})});lt.displayName=it;var ct="TabsTrigger",ut=c.forwardRef((r,e)=>{const{__scopeTabs:t,value:a,disabled:o=!1,...n}=r,i=ve(ct,t),l=at(t),u=pt(i.baseId,a),d=ft(i.baseId,a),m=a===i.value;return s.jsx(Et,{asChild:!0,...l,focusable:!o,active:m,children:s.jsx(F.button,{type:"button",role:"tab","aria-selected":m,"aria-controls":d,"data-state":m?"active":"inactive","data-disabled":o?"":void 0,disabled:o,id:u,...n,ref:e,onMouseDown:O(r.onMouseDown,f=>{!o&&f.button===0&&f.ctrlKey===!1?i.onValueChange(a):f.preventDefault()}),onKeyDown:O(r.onKeyDown,f=>{[" ","Enter"].includes(f.key)&&i.onValueChange(a)}),onFocus:O(r.onFocus,()=>{const f=i.activationMode!=="manual";!m&&!o&&f&&i.onValueChange(a)})})})});ut.displayName=ct;var dt="TabsContent",mt=c.forwardRef((r,e)=>{const{__scopeTabs:t,value:a,forceMount:o,children:n,...i}=r,l=ve(dt,t),u=pt(l.baseId,a),d=ft(l.baseId,a),m=a===l.value,f=c.useRef(m);return c.useEffect(()=>{const p=requestAnimationFrame(()=>f.current=!1);return()=>cancelAnimationFrame(p)},[]),s.jsx(K,{present:o||m,children:({present:p})=>s.jsx(F.div,{"data-state":m?"active":"inactive","data-orientation":l.orientation,role:"tabpanel","aria-labelledby":u,hidden:!p,id:d,tabIndex:0,...i,ref:e,style:{...r.style,animationDuration:f.current?"0s":void 0},children:p&&n})})});mt.displayName=dt;function pt(r,e){return`${r}-trigger-${e}`}function ft(r,e){return`${r}-content-${e}`}var lr=nt,cr=lt,ur=ut,dr=mt;function Re(r){const e=k.c(14);let t,a,o;e[0]!==r?({className:a,children:t,...o}=r,e[0]=r,e[1]=t,e[2]=a,e[3]=o):(t=e[1],a=e[2],o=e[3]);let n;e[4]!==a?(n=Y("relative",a),e[4]=a,e[5]=n):n=e[5];let i;e[6]!==t?(i=s.jsx(or,{"data-slot":"scroll-area-viewport",className:"size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1",children:t}),e[6]=t,e[7]=i):i=e[7];let l,u;e[8]===Symbol.for("react.memo_cache_sentinel")?(l=s.jsx(mr,{}),u=s.jsx(ar,{}),e[8]=l,e[9]=u):(l=e[8],u=e[9]);let d;return e[10]!==o||e[11]!==n||e[12]!==i?(d=s.jsxs(sr,{"data-slot":"scroll-area",className:n,...o,children:[i,l,u]}),e[10]=o,e[11]=n,e[12]=i,e[13]=d):d=e[13],d}function mr(r){const e=k.c(13);let t,a,o;e[0]!==r?({className:t,orientation:o,...a}=r,e[0]=r,e[1]=t,e[2]=a,e[3]=o):(t=e[1],a=e[2],o=e[3]);const n=o===void 0?"vertical":o,i=n==="vertical"&&"h-full w-2.5 border-l border-l-transparent",l=n==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent";let u;e[4]!==t||e[5]!==i||e[6]!==l?(u=Y("flex touch-none p-px transition-colors select-none",i,l,t),e[4]=t,e[5]=i,e[6]=l,e[7]=u):u=e[7];let d;e[8]===Symbol.for("react.memo_cache_sentinel")?(d=s.jsx(et,{"data-slot":"scroll-area-thumb",className:"relative flex-1 rounded-full bg-border"}),e[8]=d):d=e[8];let m;return e[9]!==n||e[10]!==a||e[11]!==u?(m=s.jsx(Xe,{"data-slot":"scroll-area-scrollbar",orientation:n,className:u,...a,children:d}),e[9]=n,e[10]=a,e[11]=u,e[12]=m):m=e[12],m}function Ee(r){const e=k.c(10);let t,a,o;e[0]!==r?({className:t,orientation:o,...a}=r,e[0]=r,e[1]=t,e[2]=a,e[3]=o):(t=e[1],a=e[2],o=e[3]);const n=o===void 0?"horizontal":o;let i;e[4]!==t?(i=Y("group/tabs flex gap-2 data-[orientation=horizontal]:flex-col",t),e[4]=t,e[5]=i):i=e[5];let l;return e[6]!==n||e[7]!==a||e[8]!==i?(l=s.jsx(lr,{"data-slot":"tabs","data-orientation":n,orientation:n,className:i,...a}),e[6]=n,e[7]=a,e[8]=i,e[9]=l):l=e[9],l}const pr=Ct("group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-[orientation=horizontal]/tabs:h-9 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none",{variants:{variant:{default:"bg-muted",line:"gap-1 bg-transparent"}},defaultVariants:{variant:"default"}});function Le(r){const e=k.c(11);let t,a,o;e[0]!==r?({className:t,variant:o,...a}=r,e[0]=r,e[1]=t,e[2]=a,e[3]=o):(t=e[1],a=e[2],o=e[3]);const n=o===void 0?"default":o;let i;e[4]!==t||e[5]!==n?(i=Y(pr({variant:n}),t),e[4]=t,e[5]=n,e[6]=i):i=e[6];let l;return e[7]!==a||e[8]!==i||e[9]!==n?(l=s.jsx(cr,{"data-slot":"tabs-list","data-variant":n,className:i,...a}),e[7]=a,e[8]=i,e[9]=n,e[10]=l):l=e[10],l}function te(r){const e=k.c(8);let t,a;e[0]!==r?({className:t,...a}=r,e[0]=r,e[1]=t,e[2]=a):(t=e[1],a=e[2]);let o;e[3]!==t?(o=Y("relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4","group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent","data-[state=active]:bg-background data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground","after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100",t),e[3]=t,e[4]=o):o=e[4];let n;return e[5]!==a||e[6]!==o?(n=s.jsx(ur,{"data-slot":"tabs-trigger",className:o,...a}),e[5]=a,e[6]=o,e[7]=n):n=e[7],n}function re(r){const e=k.c(8);let t,a;e[0]!==r?({className:t,...a}=r,e[0]=r,e[1]=t,e[2]=a):(t=e[1],a=e[2]);let o;e[3]!==t?(o=Y("flex-1 outline-none",t),e[3]=t,e[4]=o):o=e[4];let n;return e[5]!==a||e[6]!==o?(n=s.jsx(dr,{"data-slot":"tabs-content",className:o,...a}),e[5]=a,e[6]=o,e[7]=n):n=e[7],n}const fr=["appointments-resignations","ai-and-technology","awards-and-honours","climate-and-environment","defense-and-security","education-and-social","elections-and-democracy","foreign-relations","global-economy","global-energy","health-and-medicine","important-days-and-events","international-organizations","natural-disasters","pakistan-economy","pakistan-politics","reports-and-rankings","science-and-technology","space-and-exploration","sports-current-affairs","summits-and-conferences","terrorism-and-conflicts","trade-and-commerce","treaties-and-agreements"],$=(r,e,t=fr)=>r?`Always use this exact topic slug for ALL MCQs:
**${r}**`:`Choose the **most relevant topic slug** from this list:

${(e&&e.length>0?e:t).map(o=>`- ${o}`).join(`
`)}`,_=(r,e,t)=>`
# STRICT OUTPUT FORMAT

Return **ALL MCQs strictly in this exact Markdown format**. Do not change the structure.

\`\`\`
# MCQ {N}
Question: {question text}
Slug: {slug}
Difficulty: easy|medium|hard
MCQ Type: single|multiple
Subject Slug: ${r}
Topic Slug: {topic-slug}
Paper Slug: ${t}
Created By: ${e}
Tags: {comma, hyphenated, tags}
Options:
A) {option text}
B) {option text} [correct]
C) {option text}
D) {option text}
Explanation: {explanation text}
---
\`\`\`
`,D=`
# FIELD RULES

## Slug
- Lowercase, hyphen-separated, unique, SEO-friendly
- Example: \`who-was-appointed-new-chairman-of-ogra-april-2026\`

## Difficulty
- **easy** = direct factual recall
- **medium** = slightly analytical / detail-based
- **hard** = deeper or less obvious fact

## MCQ Type
- \`single\` = one correct answer (default)
- \`multiple\` = only if more than one option is genuinely correct

## Tags
- 3–8 tags, lowercase, hyphenated, topic-relevant
- Include entity names where useful
- Example: \`pakistan, ogra, chairman-appointment, energy, regulation\`

## Options
- Always 4 options (A–D)
- Realistic, plausible distractors — no obviously fake answers
- Mark correct answer with \`[correct]\`
- **Randomise correct answer position** across A/B/C/D — do NOT cluster on A or B

## Explanation
- 1–3 lines
- Explain why the answer is correct with factual context
- May include markdown emphasis or a Wikipedia link if applicable
`,ke=(r={})=>{const{topicSlug:e,topics:t,subjectSlug:a="current-affairs",quantity:o=50,createdBy:n=1,dateScope:i="yesterday",paperSlug:l="null",customInstruction:u=""}=r;return`
You are an expert **Current Affairs researcher**, **Pakistan competitive exam analyst**, and **MCQ content writer**.

Your task is to generate **high-quality Current Affairs MCQs based ONLY on ${i}'s important events**.

These MCQs are for a **Pakistan competitive exam preparation platform** suitable for:
FPSC, PPSC, NTS, CSS, PMS, General Job Tests, Current Affairs quiz preparation.

The output must be: factually accurate, exam-oriented, non-repetitive, import-ready, in strict Markdown format.

---

# DATE SCOPE

Generate MCQs only from **important events that happened ${i}**.
If an event started earlier but had a **major update ${i}**, it may be included.
Do **not** include outdated or irrelevant old news unless it had a significant development ${i}.

---

# CONTENT COVERAGE

Cover ${i}'s important developments from these areas:

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

Prefer questions about:
appointments, resignations, awards, honours, reports, rankings, summits, conferences, treaties, agreements, international organizations, capitals/countries/currencies, dates/venues/hosts, winners/titles/records, policy decisions, official announcements, Pakistan government affairs, elections, trade, defense, health breakthroughs, space/science discoveries, natural disasters, AI/technology updates, terrorism/conflict updates.

Avoid: opinion-based questions, vague wording, trick questions, gossip/entertainment, duplicate questions.

---

${_(a,n,l)}

---

# TOPIC SLUG RULE

${$(e,t)}

---

${D}

---

# IMPORTANT MCQ RULES

- Randomise correct answers — distribute naturally across A, B, C, and D
- Do not repeat the same fact in multiple questions
- Base all questions on **high-value ${i} events**
- If not enough strong events exist, prioritise **quality over quantity**

---

# OUTPUT QUANTITY

Generate **${o} high-quality MCQs**.

---

${u?`# ADDITIONAL INSTRUCTIONS

${u}

---`:""}

# FINAL INSTRUCTION

Return the response in a **single fenced code block** (\`\`\`).
Clean Markdown only. Exact structure as specified.
Do not include introductions, notes, apologies, or section headings outside MCQ blocks.
`.trim()},hr=["ancient-history","medieval-history","mughal-empire","british-india","pakistan-movement","world-war-i","world-war-ii","cold-war","modern-history","islamic-history"],Me=(r={})=>{const{topicSlug:e,topics:t,subjectSlug:a="history",quantity:o=50,createdBy:n=1,paperSlug:i="null",customInstruction:l=""}=r;return`
You are an expert **History researcher**, **Pakistan competitive exam analyst**, and **MCQ content writer**.

Your task is to generate **high-quality History MCQs** in a **topic-by-topic structured format**.

These MCQs are for **Pakistan competitive exams**: FPSC, PPSC, NTS, CSS, PMS, General Job Tests.

---

# OBJECTIVE

Generate **exam-oriented, factual, and non-repetitive MCQs** covering History in a systematic topic-wise manner.

---

# QUESTION QUALITY RULES

Each MCQ must be:
- Factual, exam-relevant, concise, non-ambiguous

Focus on: dates, battles, policies, systems, personalities, contributions, causes and effects.

Avoid: opinions, vague questions, repeated facts.

---

${_(a,n,i)}

---

# TOPIC SLUG RULE

${$(e,t,hr)}

---

${D}

---

# IMPORTANT MCQ RULES

- Randomize correct answers (A/B/C/D distribution)
- Do NOT repeat facts
- Maintain conceptual clarity
- Keep options realistic
- Ensure historical accuracy

---

# OUTPUT QUANTITY

Generate **${o} MCQs total**.

---

${l?`# ADDITIONAL INSTRUCTIONS

${l}

---`:""}

# FINAL INSTRUCTION

Return output in a **single Markdown code block**.
Do NOT include explanations outside MCQs, headings, or commentary.
`.trim()},gr=["geography-of-pakistan","pakistan-movement","constitutional-history","government-and-politics","economy-of-pakistan","foreign-policy","culture-and-society","education-system","natural-resources","provinces-and-regions"],Oe=(r={})=>{const{topicSlug:e,topics:t,subjectSlug:a="pak-studies",quantity:o=50,createdBy:n=1,paperSlug:i="null",customInstruction:l=""}=r;return`
You are an expert **Pakistan Studies researcher**, **competitive exam analyst**, and **MCQ content writer**.

Generate **high-quality Pakistan Studies MCQs** suitable for FPSC, PPSC, NTS, CSS, PMS exams.

---

# QUESTION QUALITY RULES

Focus on: geography, constitutional milestones, political history, economy, foreign policy, culture, provinces, natural resources.

Avoid: opinions, ambiguous questions, repeated facts.

---

${_(a,n,i)}

---

# TOPIC SLUG RULE

${$(e,t,gr)}

---

${D}

---

# OUTPUT QUANTITY

Generate **${o} high-quality MCQs**.

---

${l?`# ADDITIONAL INSTRUCTIONS

${l}

---`:""}

# FINAL INSTRUCTION

Return output in a **single Markdown code block**. No extra commentary.
`.trim()},xr=["quran-and-tafseer","hadith-and-sunnah","fiqh-and-jurisprudence","islamic-history","prophets-and-companions","pillars-of-islam","islamic-ethics","islamic-civilization","contemporary-islamic-issues"],Ue=(r={})=>{const{topicSlug:e,topics:t,subjectSlug:a="islamic-studies",quantity:o=50,createdBy:n=1,paperSlug:i="null",customInstruction:l=""}=r;return`
You are an expert **Islamic Studies scholar**, **Pakistan competitive exam analyst**, and **MCQ content writer**.

Generate **high-quality Islamic Studies MCQs** suitable for FPSC, PPSC, NTS, CSS, PMS exams.

---

# QUESTION QUALITY RULES

Focus on: Quran, Hadith, Fiqh, Islamic history, prophets, companions, pillars of Islam, Islamic ethics and civilization.

Avoid: sectarian bias, ambiguous questions, opinion-based queries.

---

${_(a,n,i)}

---

# TOPIC SLUG RULE

${$(e,t,xr)}

---

${D}

---

# OUTPUT QUANTITY

Generate **${o} high-quality MCQs**.

---

${l?`# ADDITIONAL INSTRUCTIONS

${l}

---`:""}

# FINAL INSTRUCTION

Return output in a **single Markdown code block**. No extra commentary.
`.trim()},br=["world-geography","world-history","science-general","inventions-and-discoveries","books-and-authors","world-organizations","capitals-and-currencies","famous-personalities","sports-general","arts-and-culture"],$e=(r={})=>{const{topicSlug:e,topics:t,subjectSlug:a="general-knowledge",quantity:o=50,createdBy:n=1,paperSlug:i="null",customInstruction:l=""}=r;return`
You are an expert **General Knowledge researcher**, **Pakistan competitive exam analyst**, and **MCQ content writer**.

Generate **high-quality General Knowledge MCQs** suitable for FPSC, PPSC, NTS, CSS, PMS, and job tests.

---

# QUESTION QUALITY RULES

Focus on: world geography, history, science, inventions, books/authors, world organizations, capitals/currencies, famous personalities, sports, arts & culture.

Avoid: highly obscure trivia, ambiguous questions, duplicate facts.

---

${_(a,n,i)}

---

# TOPIC SLUG RULE

${$(e,t,br)}

---

${D}

---

# OUTPUT QUANTITY

Generate **${o} high-quality MCQs**.

---

${l?`# ADDITIONAL INSTRUCTIONS

${l}

---`:""}

# FINAL INSTRUCTION

Return output in a **single Markdown code block**. No extra commentary.
`.trim()},Sr=["grammar","vocabulary","synonyms-antonyms","idioms-and-phrases","sentence-correction","fill-in-the-blanks","comprehension","active-passive-voice","direct-indirect-speech","spelling"],_e=(r={})=>{const{topicSlug:e,topics:t,subjectSlug:a="english",quantity:o=50,createdBy:n=1,paperSlug:i="null",customInstruction:l=""}=r;return`
You are an expert **English language teacher**, **Pakistan competitive exam analyst**, and **MCQ content writer**.

Generate **high-quality English MCQs** suitable for FPSC, PPSC, NTS, CSS, PMS exams.

---

# QUESTION QUALITY RULES

Focus on: grammar rules, vocabulary, synonyms/antonyms, idioms/phrases, sentence correction, fill-in-the-blanks, comprehension, voice, speech, spelling.

Avoid: ambiguous questions, culturally biased content, overly obscure vocabulary.

---

${_(a,n,i)}

---

# TOPIC SLUG RULE

${$(e,t,Sr)}

---

${D}

---

# OUTPUT QUANTITY

Generate **${o} high-quality MCQs**.

---

${l?`# ADDITIONAL INSTRUCTIONS

${l}

---`:""}

# FINAL INSTRUCTION

Return output in a **single Markdown code block**. No extra commentary.
`.trim()},vr=["arithmetic","algebra","geometry","trigonometry","statistics","probability","number-system","ratio-and-proportion","percentage","time-and-work","profit-and-loss"],De=(r={})=>{const{topicSlug:e,topics:t,subjectSlug:a="math",quantity:o=50,createdBy:n=1,paperSlug:i="null",customInstruction:l=""}=r;return`
You are an expert **Mathematics teacher**, **Pakistan competitive exam analyst**, and **MCQ content writer**.

Generate **high-quality Mathematics MCQs** suitable for FPSC, PPSC, NTS, CSS, PMS exams.

---

# QUESTION QUALITY RULES

Focus on: arithmetic, algebra, geometry, trigonometry, statistics, probability, number system, ratio & proportion, percentage, time & work, profit & loss.

Each MCQ must include a clear, solvable problem with one unambiguous correct answer.

Avoid: overly complex multi-step problems, ambiguous wording, trick questions without educational value.

---

${_(a,n,i)}

---

# TOPIC SLUG RULE

${$(e,t,vr)}

---

${D}

---

# OUTPUT QUANTITY

Generate **${o} high-quality MCQs**.

---

${l?`# ADDITIONAL INSTRUCTIONS

${l}

---`:""}

# FINAL INSTRUCTION

Return output in a **single Markdown code block**. No extra commentary.
`.trim()},yr=["physical-geography","human-geography","world-oceans-and-seas","world-mountains-and-rivers","continents-and-regions","climate-and-weather","pakistan-geography","maps-and-directions","natural-resources-geography","environmental-geography"],Qe=(r={})=>{const{topicSlug:e,topics:t,subjectSlug:a="geography",quantity:o=50,createdBy:n=1,paperSlug:i="null",customInstruction:l=""}=r;return`
You are an expert **Geography teacher**, **Pakistan competitive exam analyst**, and **MCQ content writer**.

Generate **high-quality Geography MCQs** suitable for FPSC, PPSC, NTS, CSS, PMS exams.

---

# QUESTION QUALITY RULES

Focus on: physical geography, human geography, oceans/seas, mountains/rivers, continents, climate/weather, Pakistan geography, maps, natural resources, environment.

Avoid: overly obscure facts, ambiguous questions, repeated content.

---

${_(a,n,i)}

---

# TOPIC SLUG RULE

${$(e,t,yr)}

---

${D}

---

# OUTPUT QUANTITY

Generate **${o} high-quality MCQs**.

---

${l?`# ADDITIONAL INSTRUCTIONS

${l}

---`:""}

# FINAL INSTRUCTION

Return output in a **single Markdown code block**. No extra commentary.
`.trim()},Cr=["physics-basics","chemistry-basics","biology-basics","scientific-inventions","human-body","plants-and-animals","space-and-astronomy","environment-and-ecology","technology-and-computers"],qe=(r={})=>{const{topicSlug:e,topics:t,subjectSlug:a="science",quantity:o=50,createdBy:n=1,paperSlug:i="null",customInstruction:l=""}=r;return`
You are an expert **Science teacher**, **Pakistan competitive exam analyst**, and **MCQ content writer**.

Generate **high-quality General Science MCQs** suitable for FPSC, PPSC, NTS, CSS, PMS exams.

---

# QUESTION QUALITY RULES

Focus on: physics basics, chemistry basics, biology basics, scientific inventions, human body, plants & animals, space & astronomy, environment & ecology, technology & computers.

Avoid: overly technical derivations, ambiguous questions, repeated facts.

---

${_(a,n,i)}

---

# TOPIC SLUG RULE

${$(e,t,Cr)}

---

${D}

---

# OUTPUT QUANTITY

Generate **${o} high-quality MCQs**.

---

${l?`# ADDITIONAL INSTRUCTIONS

${l}

---`:""}

# FINAL INSTRUCTION

Return output in a **single Markdown code block**. No extra commentary.
`.trim()},Tr=["computer-basics","ms-office","internet-and-networking","operating-systems","programming-basics","database-basics","hardware-and-software","cyber-security","artificial-intelligence-basics"],Fe=(r={})=>{const{topicSlug:e,topics:t,subjectSlug:a="computer",quantity:o=50,createdBy:n=1,paperSlug:i="null",customInstruction:l=""}=r;return`
You are an expert **Computer Science teacher**, **Pakistan competitive exam analyst**, and **MCQ content writer**.

Generate **high-quality Computer Science MCQs** suitable for FPSC, PPSC, NTS, CSS, PMS exams.

---

# QUESTION QUALITY RULES

Focus on: computer basics, MS Office, internet & networking, operating systems, programming basics, database basics, hardware/software, cyber security, AI basics.

Avoid: overly advanced programming questions, ambiguous terminology, repeated content.

---

${_(a,n,i)}

---

# TOPIC SLUG RULE

${$(e,t,Tr)}

---

${D}

---

# OUTPUT QUANTITY

Generate **${o} high-quality MCQs**.

---

${l?`# ADDITIONAL INSTRUCTIONS

${l}

---`:""}

# FINAL INSTRUCTION

Return output in a **single Markdown code block**. No extra commentary.
`.trim()},wr={"current-affairs":ke,"current-affairs-mcqs":ke,history:Me,"history-mcqs":Me,"pak-studies":Oe,"pak-studies-mcqs":Oe,"islamic-studies":Ue,"islamic-studies-mcqs":Ue,"general-knowledge":$e,"general-knowledge-mcqs":$e,english:_e,"english-mcqs":_e,math:De,"math-mcqs":De,geography:Qe,"geography-mcqs":Qe,science:qe,"science-mcqs":qe,computer:Fe,"computer-mcqs":Fe};function Nr(r){const e=k.c(4);let t;e[0]!==r?({...t}=r,e[0]=r,e[1]=t):t=e[1];let a;return e[2]!==t?(a=s.jsx(Mt,{"data-slot":"collapsible",...t}),e[2]=t,e[3]=a):a=e[3],a}function Pr(r){const e=k.c(4);let t;e[0]!==r?({...t}=r,e[0]=r,e[1]=t):t=e[1];let a;return e[2]!==t?(a=s.jsx(Ot,{"data-slot":"collapsible-trigger",...t}),e[2]=t,e[3]=a):a=e[3],a}function jr(r){const e=k.c(4);let t;e[0]!==r?({...t}=r,e[0]=r,e[1]=t):t=e[1];let a;return e[2]!==t?(a=s.jsx(Ut,{"data-slot":"collapsible-content",...t}),e[2]=t,e[3]=a):a=e[3],a}function Ir(r){return r.split(/\n---+\n?/).map(t=>t.trim()).filter(Boolean).map(Ar)}function Ar(r){return{question:M(r,"Question"),slug:M(r,"Slug"),difficulty:M(r,"Difficulty").toLowerCase(),mcq_type:M(r,"MCQ Type").toLowerCase(),subject_slug:M(r,"Subject Slug"),topic_slug:M(r,"Topic Slug"),paper_slug:Rr(r,"Paper Slug"),created_by:parseInt(M(r,"Created By"),10)||1,tags:Er(r),options:Lr(r),explanation:M(r,"Explanation")}}function M(r,e){const t=r.match(new RegExp(`^${e}:\\s*(.+)$`,"im"));return t?t[1].trim():""}function Rr(r,e){const t=M(r,e);return!t||t.toLowerCase()==="null"?null:t}function Er(r){const e=M(r,"Tags");return e?e.split(",").map(t=>t.trim()).filter(Boolean):[]}function Lr(r){const e=r.split(/^Options:\s*$/im)[1];if(!e)return[];const t=e.split(/^Explanation:/im)[0];let a=0;return t.split(`
`).map(o=>o.trim()).filter(Boolean).reduce((o,n)=>{const i=/\[correct\]/i.test(n),l=n.match(/^([A-Z])\)\s+(.+?)(?:\s+\[correct\])?$/i);return l&&(a++,o.push({option_text:l[2].trim(),is_correct:i,sort_order:a})),o},[])}function kr(r){const e=k.c(5),{difficulty:t}=r;let a;e[0]!==t?(a=Y("rounded-full border px-2 py-0.5 text-xs font-medium capitalize",{easy:"bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",medium:"bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800",hard:"bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800"}[t]??"border-border bg-muted text-muted-foreground"),e[0]=t,e[1]=a):a=e[1];let o;return e[2]!==t||e[3]!==a?(o=s.jsx("span",{className:a,children:t}),e[2]=t,e[3]=a,e[4]=o):o=e[4],o}function Mr(r){const e=k.c(47),{mcq:t,index:a}=r,[o,n]=c.useState(null);let i;e[0]!==o?(i=g=>{o===null&&n(g)},e[0]=o,e[1]=i):i=e[1];const l=i;let u;e[2]!==o?(u=(g,v)=>{const y=o===v;return o!==null?g.is_correct?"border-green-400 bg-green-50 text-green-900 dark:bg-green-900/20 dark:text-green-300 dark:border-green-700 cursor-default":y&&!g.is_correct?"border-red-400 bg-red-50 text-red-900 dark:bg-red-900/20 dark:text-red-300 dark:border-red-700 cursor-default":"border-border bg-muted/30 text-muted-foreground cursor-default opacity-50":"border-border hover:border-muted-foreground/40 hover:bg-muted/50 cursor-pointer"},e[2]=o,e[3]=u):u=e[3];const d=u,m=a+1;let f;e[4]!==m?(f=s.jsx("span",{className:"mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-muted/10 text-xs font-medium text-muted-foreground",children:m}),e[4]=m,e[5]=f):f=e[5];let p;e[6]!==t.question?(p=s.jsx("p",{className:"text-sm leading-relaxed font-medium",children:t.question}),e[6]=t.question,e[7]=p):p=e[7];let x;e[8]!==f||e[9]!==p?(x=s.jsxs("div",{className:"flex items-center gap-3",children:[f,p]}),e[8]=f,e[9]=p,e[10]=x):x=e[10];let S;e[11]!==t.difficulty?(S=t.difficulty&&s.jsx(kr,{difficulty:t.difficulty}),e[11]=t.difficulty,e[12]=S):S=e[12];let N;e[13]!==t.mcq_type?(N=t.mcq_type&&s.jsx(q,{variant:"secondary",className:"text-xs capitalize",children:t.mcq_type}),e[13]=t.mcq_type,e[14]=N):N=e[14];let A;e[15]!==t.subject_slug?(A=t.subject_slug&&s.jsx(q,{variant:"outline",className:"text-xs",children:t.subject_slug}),e[15]=t.subject_slug,e[16]=A):A=e[16];let b;e[17]!==t.tags?(b=t.tags.map(Or),e[17]=t.tags,e[18]=b):b=e[18];let R;e[19]!==b||e[20]!==S||e[21]!==N||e[22]!==A?(R=s.jsxs("div",{className:"mt-2 ml-9 flex flex-wrap gap-1.5",children:[S,N,A,b]}),e[19]=b,e[20]=S,e[21]=N,e[22]=A,e[23]=R):R=e[23];let C;e[24]!==R||e[25]!==x?(C=s.jsxs(Tt,{className:"px-4 pt-4 pb-2",children:[x,R]}),e[24]=R,e[25]=x,e[26]=C):C=e[26];let P;if(e[27]!==d||e[28]!==l||e[29]!==t.options||e[30]!==o){let g;e[32]!==d||e[33]!==l||e[34]!==o?(g=(v,y)=>s.jsxs("div",{onClick:()=>l(y),className:Y("flex items-center gap-3 rounded-lg border px-3 py-2.5 text-sm transition-all",d(v,y)),children:[s.jsx("span",{className:"w-4 shrink-0 text-xs font-semibold text-muted-foreground",children:String.fromCharCode(65+y)}),s.jsx("span",{className:"flex-1",children:v.option_text}),o!==null&&v.is_correct&&s.jsx(Ie,{className:"h-4 w-4 shrink-0 text-green-500"}),o===y&&!v.is_correct&&s.jsx(Yt,{className:"h-4 w-4 shrink-0 text-red-500"})]},y),e[32]=d,e[33]=l,e[34]=o,e[35]=g):g=e[35],P=t.options.map(g),e[27]=d,e[28]=l,e[29]=t.options,e[30]=o,e[31]=P}else P=e[31];let T;e[36]!==P?(T=s.jsx("div",{className:"mb-3 flex flex-col gap-2",children:P}),e[36]=P,e[37]=T):T=e[37];let j;e[38]!==t.explanation||e[39]!==o?(j=o!==null&&t.explanation&&s.jsxs("div",{className:"flex gap-2 rounded-lg border border-blue-100 bg-blue-50 p-3 text-xs leading-relaxed text-blue-900 dark:border-blue-900 dark:bg-blue-950/30 dark:text-blue-300",children:[s.jsx(Ie,{className:"mt-0.5 h-4 w-4 shrink-0 text-blue-500"}),s.jsx("p",{children:t.explanation})]}),e[38]=t.explanation,e[39]=o,e[40]=j):j=e[40];let w;e[41]!==T||e[42]!==j?(w=s.jsxs(wt,{className:"px-4 pb-4",children:[T,j]}),e[41]=T,e[42]=j,e[43]=w):w=e[43];let L;return e[44]!==C||e[45]!==w?(L=s.jsxs(Nt,{className:"mb-3 shadow-none",children:[C,w]}),e[44]=C,e[45]=w,e[46]=L):L=e[46],L}function Or(r){return s.jsx(q,{variant:"outline",className:"text-xs",children:r},r)}const Ur=[{label:"Yesterday",value:"yesterday"},{label:"Today",value:"today"},{label:"Last 3 Days",value:"the last 3 days"},{label:"Last Week",value:"the last week"},{label:"Last Month",value:"the last month"}];function $s({subjects:r,topics:e,authUserId:t=1}){const{data:a,setData:o,post:n,errors:i}=yt({json:""}),[l,u]=c.useState(""),[d,m]=c.useState([]),[f,p]=c.useState(""),[x,S]=c.useState(!1),[N,A]=c.useState(!1),[b,R]=c.useState(r[0]?.id??0),[C,P]=c.useState(null),[T,j]=c.useState(50),[w,L]=c.useState("yesterday"),[g,v]=c.useState(""),[y,le]=c.useState(!1),ce=c.useMemo(()=>e.filter(h=>h.subject_id===b),[e,b]),Q=c.useMemo(()=>r.find(h=>h.id===b),[r,b]),Z=c.useMemo(()=>C?e.find(h=>h.id===C):null,[e,C]),X=c.useCallback(()=>{if(!Q)return"";const h=wr[Q.slug];if(!h)return`# No prompt template found for: ${Q.slug}`;const z={subjectSlug:Q.slug,topicSlug:Z?.slug,quantity:T,createdBy:t,dateScope:w,customInstruction:g.trim()||void 0,topics:ce.map(I=>I.slug).filter(I=>!I.includes("current-affairs-20")&&!I.includes("current-affairs-january")&&!I.includes("current-affairs-february")&&!I.includes("current-affairs-april")&&!I.includes("current-affairs-may")&&!I.includes("current-affairs-june")&&!I.includes("current-affairs-july")&&!I.includes("current-affairs-august")&&!I.includes("current-affairs-september")&&!I.includes("current-affairs-october")&&!I.includes("current-affairs-november")&&!I.includes("current-affairs-december"))};return h(z)},[Q,Z,T,w,g,t,ce]),[ue,de]=c.useState(()=>X());c.useEffect(()=>{de(X())},[X]),c.useEffect(()=>{P(null)},[b]);const ye=c.useMemo(()=>l.split(/\n---+/).filter(Boolean).length,[l]),ht=c.useCallback(()=>{p("");try{const h=Ir(l);if(!h.length){p("No MCQ blocks found. Make sure blocks are separated by ---.");return}m(h),o("json",JSON.stringify(h)),H.success(`${h.length} MCQ${h.length!==1?"s":""} parsed successfully.`)}catch(h){const z="Parse error: "+(h instanceof Error?h.message:String(h));p(z),H.error(z)}},[l,o]),gt=c.useCallback(h=>{if(h.preventDefault(),!a.json){H.error("No data to import. Parse your MCQs first.");return}n(Lt.store().url,{onSuccess:()=>H.success("MCQs imported successfully."),onError:()=>H.error("Import failed. Check errors below.")})},[a,n]),xt=c.useCallback(()=>{navigator.clipboard.writeText(ue),S(!0),setTimeout(()=>S(!1),1500)},[ue]),bt=c.useCallback(()=>{navigator.clipboard.writeText(JSON.stringify(d,null,2)),A(!0),setTimeout(()=>A(!1),1500)},[d]),St=c.useCallback(()=>{u(""),m([]),p(""),o("json","")},[o]),vt=c.useCallback(()=>{de(X()),H.success("Prompt regenerated.")},[X]);return s.jsx(kt,{title:"Import MD MCQs",children:s.jsxs("div",{className:"grid grid-cols-1 gap-4 p-4 lg:grid-cols-2",children:[i.json&&s.jsxs(Ce,{variant:"destructive",className:"col-span-full",children:[s.jsx(we,{className:"h-4 w-4"}),s.jsx(Te,{children:i.json})]}),s.jsxs("div",{className:"flex flex-col gap-3",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-2 text-sm font-medium",children:[s.jsx(Ne,{className:"h-4 w-4 text-muted-foreground"}),"Markdown input"]}),s.jsxs(q,{variant:"secondary",className:"text-xs",children:[ye," block",ye!==1?"s":""]})]}),s.jsxs(Ee,{defaultValue:"prompt",className:"flex flex-col gap-3",children:[s.jsxs(Le,{className:"w-fit bg-muted/10",children:[s.jsx(te,{value:"md",children:"MD"}),s.jsxs(te,{value:"prompt",children:[s.jsx(_t,{className:"mr-1.5 h-3.5 w-3.5"}),"Prompt"]})]}),s.jsxs(re,{value:"md",className:"mt-0 flex flex-col gap-2",children:[s.jsx("div",{className:"max-h-[500px] min-h-[500px] overflow-y-auto",children:s.jsx(ge,{value:l,onChange:h=>u(h.target.value),placeholder:"Paste your MCQ markdown here…",className:"min-h-[500px] resize-none font-mono text-xs"})}),f&&s.jsxs(Ce,{variant:"destructive",className:"py-2",children:[s.jsx(we,{className:"h-4 w-4"}),s.jsx(Te,{className:"text-xs",children:f})]})]}),s.jsxs(re,{value:"prompt",className:"mt-0 flex flex-col gap-3",children:[s.jsxs("div",{className:"flex flex-wrap items-end gap-2",children:[s.jsxs("div",{className:"flex flex-col gap-1",children:[s.jsx(J,{className:"text-xs text-muted-foreground",children:"Subject"}),s.jsxs(me,{value:String(b),onValueChange:h=>R(Number(h)),children:[s.jsx(pe,{className:"h-8 w-40 text-xs",children:s.jsx(fe,{placeholder:"Subject"})}),s.jsx(he,{children:r.map(h=>s.jsx(ee,{value:String(h.id),className:"text-xs",children:h.name},h.id))})]})]}),s.jsxs("div",{className:"flex flex-col gap-1",children:[s.jsxs(J,{className:"text-xs text-muted-foreground",children:["Topic"," ",s.jsx("span",{className:"opacity-50",children:"(optional)"})]}),s.jsxs(me,{value:C?String(C):"__all__",onValueChange:h=>P(h==="__all__"?null:Number(h)),children:[s.jsx(pe,{className:"h-8 w-48 text-xs",children:s.jsx(fe,{placeholder:"All topics"})}),s.jsxs(he,{children:[s.jsx(ee,{value:"__all__",className:"text-xs text-muted-foreground",children:"All topics"}),ce.map(h=>s.jsx(ee,{value:String(h.id),className:"text-xs",children:h.name},h.id))]})]})]}),s.jsxs("div",{className:"flex flex-col gap-1",children:[s.jsx(J,{className:"text-xs text-muted-foreground",children:"Quantity"}),s.jsx($t,{type:"number",min:5,max:100,value:T,onChange:h=>j(Math.max(5,Math.min(100,Number(h.target.value)))),className:"h-8 w-20 text-xs"})]}),Q?.slug.includes("current-affairs")&&s.jsxs("div",{className:"flex flex-col gap-1",children:[s.jsx(J,{className:"text-xs text-muted-foreground",children:"Date scope"}),s.jsxs(me,{value:w,onValueChange:L,children:[s.jsx(pe,{className:"h-8 w-36 text-xs",children:s.jsx(fe,{})}),s.jsx(he,{children:Ur.map(h=>s.jsx(ee,{value:h.value,className:"text-xs",children:h.label},h.value))})]})]}),s.jsx("div",{className:"flex-1"}),s.jsxs(G,{variant:"ghost",size:"sm",className:"h-8 gap-1.5 text-xs",onClick:vt,title:"Regenerate prompt from current config",children:[s.jsx(Dt,{className:"h-3.5 w-3.5"}),"Reset"]}),s.jsx(G,{variant:"outline",size:"sm",className:"h-8 gap-1.5 text-xs",onClick:xt,children:x?s.jsxs(s.Fragment,{children:[s.jsx(Pe,{className:"h-3.5 w-3.5"})," ","Copied!"]}):s.jsxs(s.Fragment,{children:[s.jsx(je,{className:"h-3.5 w-3.5"})," ","Copy prompt"]})})]}),s.jsxs(Nr,{open:y,onOpenChange:le,children:[s.jsx(Pr,{asChild:!0,children:s.jsxs(G,{variant:"ghost",size:"sm",className:"h-7 gap-1.5 text-xs text-muted-foreground",children:[s.jsx(Gt,{className:"h-3.5 w-3.5"}),"Advanced",s.jsx(qt,{className:`h-3.5 w-3.5 transition-transform ${y?"rotate-180":""}`})]})}),s.jsxs(jr,{className:"flex flex-col gap-1.5 pt-2",children:[s.jsxs(J,{className:"text-xs text-muted-foreground",children:["Custom instruction"," ",s.jsx("span",{className:"opacity-50",children:"(appended to prompt)"})]}),s.jsx(ge,{value:g,onChange:h=>v(h.target.value),placeholder:"e.g. Focus only on administrative reforms. Avoid military topics.",className:"min-h-[72px] resize-none text-xs"})]})]}),s.jsx(ge,{value:ue,onChange:h=>de(h.target.value),placeholder:"Prompt will appear here…",className:"min-h-[340px] resize-none font-mono text-xs"}),s.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[Q&&s.jsxs(q,{variant:"secondary",className:"font-mono text-xs",children:["subject: ",Q.slug]}),Z&&s.jsxs(q,{variant:"secondary",className:"font-mono text-xs",children:["topic: ",Z.slug]}),s.jsxs(q,{variant:"secondary",className:"font-mono text-xs",children:["qty: ",T]}),Q?.slug.includes("current-affairs")&&s.jsxs(q,{variant:"secondary",className:"font-mono text-xs",children:["scope: ",w]})]})]})]}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx(G,{onClick:ht,className:"flex-1",children:"Parse"}),s.jsx(G,{variant:"outline",onClick:St,children:"Clear"})]})]}),s.jsxs("div",{className:"flex flex-col gap-3",children:[s.jsxs("div",{className:"flex items-center justify-between",children:[s.jsxs("div",{className:"flex items-center gap-2 text-sm font-medium",children:[s.jsx(Ft,{className:"h-4 w-4 text-muted-foreground"}),"Output"]}),s.jsxs(q,{variant:"secondary",className:"text-xs",children:[d.length," MCQ",d.length!==1?"s":""]})]}),s.jsxs(Ee,{defaultValue:"preview",className:"flex flex-col gap-3",children:[s.jsxs(Le,{className:"w-fit bg-muted/10",children:[s.jsx(te,{value:"preview",children:"Preview"}),s.jsx(te,{value:"json",children:"JSON"})]}),s.jsx(re,{value:"preview",className:"mt-0",children:s.jsx(Re,{className:"h-[500px] max-h-[500px] rounded-lg border bg-muted/20 pr-2",children:d.length===0?s.jsxs("div",{className:"flex h-[500px] flex-col items-center justify-center gap-2 text-sm text-muted-foreground",children:[s.jsx(Ne,{className:"h-6 w-6 opacity-30"}),s.jsx("span",{children:"Paste MD on the left and click Parse"})]}):d.map((h,z)=>s.jsx(Mr,{mcq:h,index:z},z))})}),s.jsx(re,{value:"json",className:"mt-0 flex flex-col gap-2",children:s.jsx(Re,{className:"h-[500px] max-h-[500px] rounded-lg border bg-muted/20",children:s.jsx("pre",{className:"p-3 font-mono text-xs leading-relaxed break-words whitespace-pre-wrap",children:d.length?JSON.stringify(d,null,2):"// No MCQs parsed yet"})})})]}),s.jsxs("div",{className:"flex gap-2",children:[s.jsx(G,{variant:"outline",onClick:bt,disabled:!d.length,className:"flex-1 gap-2",children:N?s.jsxs(s.Fragment,{children:[s.jsx(Pe,{className:"h-4 w-4"})," Copied!"]}):s.jsxs(s.Fragment,{children:[s.jsx(je,{className:"h-4 w-4"})," Copy JSON"]})}),s.jsx(G,{onClick:gt,disabled:!a.json,className:"flex-1",children:"Send to import service"})]})]})]})})}export{$s as default};
