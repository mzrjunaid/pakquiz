import{r as c,j as o,c as L,a as vt}from"./admin-7UBX9mxA.js";import{A as ve,a as ye}from"./alert-DRmy3QlF.js";import{B as Q}from"./badge-6HRXGAPe.js";import{u as V,c as yt,B as z}from"./button-BfTryUwP.js";import{b as Ct,d as Tt,a as wt}from"./card-XnN18xvA.js";import{c as F}from"./utils-D0Zg16Wk.js";import{P as q}from"./index-Bypf2u-x.js";import{P as J}from"./index-BLyQA_3n.js";import{c as qe,a as M,u as Nt,b as Pt}from"./index-XeaQNDNd.js";import{u as G}from"./index-Cn1E1neO.js";import{u as Fe}from"./index-BqDBHNUT.js";import{e as jt,S as ue,a as de,b as me,c as pe,d as Z}from"./select-mte_e09b.js";import{f as Ye,R as It,I as At}from"./dropdown-menu-BtXhL0JB.js";import{u as Rt}from"./index-RGujNDVe.js";import{T as fe}from"./textarea-BqyAsQ_u.js";import{m as Et}from"./index-D8eQl2k1.js";import{t as B}from"./index-D0Zu0GEE.js";import Lt from"./admin-layout-D3FSkALC.js";import{I as kt}from"./input-CoBiD-Ro.js";import{L as X}from"./label-DZ2aSBph.js";import{R as Mt,C as Ot,a as Ut}from"./index-DsJvkMYa.js";import{C as Ce}from"./circle-alert-BvKKHUwh.js";import{F as Te}from"./file-text-By5eNZ_a.js";import{S as _t}from"./sparkles-SZuh3dN-.js";import{R as $t}from"./refresh-cw-7KYp5riw.js";import{C as we}from"./check-DSL4X0fq.js";import{C as Ne}from"./copy-Ckl0S3O8.js";import{c as Dt}from"./createLucideIcon-DrJ6o6Eo.js";import{C as Qt}from"./chevron-down-D1dgu4c8.js";import{E as qt}from"./eye-COX3bu_h.js";import{C as Pe,a as Ft}from"./circle-x-DZGKQR_0.js";import"./bootstrap-CWD7zuwT.js";/* empty css            */import"./index-CMF4btDI.js";import"./index-CwDogZ9T.js";import"./index-Dl52FtL5.js";import"./index-DXmHpSl7.js";import"./index-DE4duBNV.js";import"./index-DtuY7TEn.js";import"./index-Dadb4C2L.js";import"./index-DHvWDHaB.js";import"./index-BMme3XRg.js";import"./index-D902mgOl.js";import"./index-V0u68DS2.js";import"./app-layout-BtLSf6Vp.js";import"./use-quiz-mode-CqiE3S5q.js";import"./index-DpSI_X13.js";import"./x-D1oem75x.js";import"./index-DpOyATqw.js";import"./chevron-right-DPZQCGcd.js";import"./index-BStBPVHt.js";import"./book-open-CKf2Vkef.js";import"./breadcrumbs-utils-uitSj5Sj.js";const Yt=[["path",{d:"M20 7h-9",key:"3s1dr2"}],["path",{d:"M14 17H5",key:"gfn3mx"}],["circle",{cx:"17",cy:"17",r:"3",key:"18b49y"}],["circle",{cx:"7",cy:"7",r:"3",key:"dfmy0x"}]],zt=Dt("Settings2",Yt);function Gt(r,e){return c.useReducer((t,a)=>e[t][a]??t,r)}var he="ScrollArea",[ze,Uo]=qe(he),[Bt,R]=ze(he),Ge=c.forwardRef((r,e)=>{const{__scopeScrollArea:t,type:a="hover",dir:s,scrollHideDelay:n=600,...i}=r,[l,u]=c.useState(null),[d,m]=c.useState(null),[f,p]=c.useState(null),[x,S]=c.useState(null),[N,I]=c.useState(null),[b,A]=c.useState(0),[C,P]=c.useState(0),[T,j]=c.useState(!1),[w,E]=c.useState(!1),g=V(e,y=>u(y)),v=Fe(s);return o.jsx(Bt,{scope:t,type:a,dir:v,scrollHideDelay:n,scrollArea:l,viewport:d,onViewportChange:m,content:f,onContentChange:p,scrollbarX:x,onScrollbarXChange:S,scrollbarXEnabled:T,onScrollbarXEnabledChange:j,scrollbarY:N,onScrollbarYChange:I,scrollbarYEnabled:w,onScrollbarYEnabledChange:E,onCornerWidthChange:A,onCornerHeightChange:P,children:o.jsx(q.div,{dir:v,...i,ref:g,style:{position:"relative","--radix-scroll-area-corner-width":b+"px","--radix-scroll-area-corner-height":C+"px",...r.style}})})});Ge.displayName=he;var Be="ScrollAreaViewport",He=c.forwardRef((r,e)=>{const{__scopeScrollArea:t,children:a,nonce:s,...n}=r,i=R(Be,t),l=c.useRef(null),u=V(e,l,i.onViewportChange);return o.jsxs(o.Fragment,{children:[o.jsx("style",{dangerouslySetInnerHTML:{__html:"[data-radix-scroll-area-viewport]{scrollbar-width:none;-ms-overflow-style:none;-webkit-overflow-scrolling:touch;}[data-radix-scroll-area-viewport]::-webkit-scrollbar{display:none}"},nonce:s}),o.jsx(q.div,{"data-radix-scroll-area-viewport":"",...n,ref:u,style:{overflowX:i.scrollbarXEnabled?"scroll":"hidden",overflowY:i.scrollbarYEnabled?"scroll":"hidden",...r.style},children:o.jsx("div",{ref:i.onContentChange,style:{minWidth:"100%",display:"table"},children:a})})]})});He.displayName=Be;var O="ScrollAreaScrollbar",Ve=c.forwardRef((r,e)=>{const{forceMount:t,...a}=r,s=R(O,r.__scopeScrollArea),{onScrollbarXEnabledChange:n,onScrollbarYEnabledChange:i}=s,l=r.orientation==="horizontal";return c.useEffect(()=>(l?n(!0):i(!0),()=>{l?n(!1):i(!1)}),[l,n,i]),s.type==="hover"?o.jsx(Ht,{...a,ref:e,forceMount:t}):s.type==="scroll"?o.jsx(Vt,{...a,ref:e,forceMount:t}):s.type==="auto"?o.jsx(We,{...a,ref:e,forceMount:t}):s.type==="always"?o.jsx(ge,{...a,ref:e}):null});Ve.displayName=O;var Ht=c.forwardRef((r,e)=>{const{forceMount:t,...a}=r,s=R(O,r.__scopeScrollArea),[n,i]=c.useState(!1);return c.useEffect(()=>{const l=s.scrollArea;let u=0;if(l){const d=()=>{window.clearTimeout(u),i(!0)},m=()=>{u=window.setTimeout(()=>i(!1),s.scrollHideDelay)};return l.addEventListener("pointerenter",d),l.addEventListener("pointerleave",m),()=>{window.clearTimeout(u),l.removeEventListener("pointerenter",d),l.removeEventListener("pointerleave",m)}}},[s.scrollArea,s.scrollHideDelay]),o.jsx(J,{present:t||n,children:o.jsx(We,{"data-state":n?"visible":"hidden",...a,ref:e})})}),Vt=c.forwardRef((r,e)=>{const{forceMount:t,...a}=r,s=R(O,r.__scopeScrollArea),n=r.orientation==="horizontal",i=ae(()=>u("SCROLL_END"),100),[l,u]=Gt("hidden",{hidden:{SCROLL:"scrolling"},scrolling:{SCROLL_END:"idle",POINTER_ENTER:"interacting"},interacting:{SCROLL:"interacting",POINTER_LEAVE:"idle"},idle:{HIDE:"hidden",SCROLL:"scrolling",POINTER_ENTER:"interacting"}});return c.useEffect(()=>{if(l==="idle"){const d=window.setTimeout(()=>u("HIDE"),s.scrollHideDelay);return()=>window.clearTimeout(d)}},[l,s.scrollHideDelay,u]),c.useEffect(()=>{const d=s.viewport,m=n?"scrollLeft":"scrollTop";if(d){let f=d[m];const p=()=>{const x=d[m];f!==x&&(u("SCROLL"),i()),f=x};return d.addEventListener("scroll",p),()=>d.removeEventListener("scroll",p)}},[s.viewport,n,u,i]),o.jsx(J,{present:t||l!=="hidden",children:o.jsx(ge,{"data-state":l==="hidden"?"hidden":"visible",...a,ref:e,onPointerEnter:M(r.onPointerEnter,()=>u("POINTER_ENTER")),onPointerLeave:M(r.onPointerLeave,()=>u("POINTER_LEAVE"))})})}),We=c.forwardRef((r,e)=>{const t=R(O,r.__scopeScrollArea),{forceMount:a,...s}=r,[n,i]=c.useState(!1),l=r.orientation==="horizontal",u=ae(()=>{if(t.viewport){const d=t.viewport.offsetWidth<t.viewport.scrollWidth,m=t.viewport.offsetHeight<t.viewport.scrollHeight;i(l?d:m)}},10);return H(t.viewport,u),H(t.content,u),o.jsx(J,{present:a||n,children:o.jsx(ge,{"data-state":n?"visible":"hidden",...s,ref:e})})}),ge=c.forwardRef((r,e)=>{const{orientation:t="vertical",...a}=r,s=R(O,r.__scopeScrollArea),n=c.useRef(null),i=c.useRef(0),[l,u]=c.useState({content:0,viewport:0,scrollbar:{size:0,paddingStart:0,paddingEnd:0}}),d=et(l.viewport,l.content),m={...a,sizes:l,onSizesChange:u,hasThumb:d>0&&d<1,onThumbChange:p=>n.current=p,onThumbPointerUp:()=>i.current=0,onThumbPointerDown:p=>i.current=p};function f(p,x){return er(p,i.current,l,x)}return t==="horizontal"?o.jsx(Wt,{...m,ref:e,onThumbPositionChange:()=>{if(s.viewport&&n.current){const p=s.viewport.scrollLeft,x=je(p,l,s.dir);n.current.style.transform=`translate3d(${x}px, 0, 0)`}},onWheelScroll:p=>{s.viewport&&(s.viewport.scrollLeft=p)},onDragScroll:p=>{s.viewport&&(s.viewport.scrollLeft=f(p,s.dir))}}):t==="vertical"?o.jsx(Xt,{...m,ref:e,onThumbPositionChange:()=>{if(s.viewport&&n.current){const p=s.viewport.scrollTop,x=je(p,l);n.current.style.transform=`translate3d(0, ${x}px, 0)`}},onWheelScroll:p=>{s.viewport&&(s.viewport.scrollTop=p)},onDragScroll:p=>{s.viewport&&(s.viewport.scrollTop=f(p))}}):null}),Wt=c.forwardRef((r,e)=>{const{sizes:t,onSizesChange:a,...s}=r,n=R(O,r.__scopeScrollArea),[i,l]=c.useState(),u=c.useRef(null),d=V(e,u,n.onScrollbarXChange);return c.useEffect(()=>{u.current&&l(getComputedStyle(u.current))},[u]),o.jsx(Je,{"data-orientation":"horizontal",...s,ref:d,sizes:t,style:{bottom:0,left:n.dir==="rtl"?"var(--radix-scroll-area-corner-width)":0,right:n.dir==="ltr"?"var(--radix-scroll-area-corner-width)":0,"--radix-scroll-area-thumb-width":se(t)+"px",...r.style},onThumbPointerDown:m=>r.onThumbPointerDown(m.x),onDragScroll:m=>r.onDragScroll(m.x),onWheelScroll:(m,f)=>{if(n.viewport){const p=n.viewport.scrollLeft+m.deltaX;r.onWheelScroll(p),rt(p,f)&&m.preventDefault()}},onResize:()=>{u.current&&n.viewport&&i&&a({content:n.viewport.scrollWidth,viewport:n.viewport.offsetWidth,scrollbar:{size:u.current.clientWidth,paddingStart:oe(i.paddingLeft),paddingEnd:oe(i.paddingRight)}})}})}),Xt=c.forwardRef((r,e)=>{const{sizes:t,onSizesChange:a,...s}=r,n=R(O,r.__scopeScrollArea),[i,l]=c.useState(),u=c.useRef(null),d=V(e,u,n.onScrollbarYChange);return c.useEffect(()=>{u.current&&l(getComputedStyle(u.current))},[u]),o.jsx(Je,{"data-orientation":"vertical",...s,ref:d,sizes:t,style:{top:0,right:n.dir==="ltr"?0:void 0,left:n.dir==="rtl"?0:void 0,bottom:"var(--radix-scroll-area-corner-height)","--radix-scroll-area-thumb-height":se(t)+"px",...r.style},onThumbPointerDown:m=>r.onThumbPointerDown(m.y),onDragScroll:m=>r.onDragScroll(m.y),onWheelScroll:(m,f)=>{if(n.viewport){const p=n.viewport.scrollTop+m.deltaY;r.onWheelScroll(p),rt(p,f)&&m.preventDefault()}},onResize:()=>{u.current&&n.viewport&&i&&a({content:n.viewport.scrollHeight,viewport:n.viewport.offsetHeight,scrollbar:{size:u.current.clientHeight,paddingStart:oe(i.paddingTop),paddingEnd:oe(i.paddingBottom)}})}})}),[Jt,Xe]=ze(O),Je=c.forwardRef((r,e)=>{const{__scopeScrollArea:t,sizes:a,hasThumb:s,onThumbChange:n,onThumbPointerUp:i,onThumbPointerDown:l,onThumbPositionChange:u,onDragScroll:d,onWheelScroll:m,onResize:f,...p}=r,x=R(O,t),[S,N]=c.useState(null),I=V(e,g=>N(g)),b=c.useRef(null),A=c.useRef(""),C=x.viewport,P=a.content-a.viewport,T=G(m),j=G(u),w=ae(f,10);function E(g){if(b.current){const v=g.clientX-b.current.left,y=g.clientY-b.current.top;d({x:v,y})}}return c.useEffect(()=>{const g=v=>{const y=v.target;S?.contains(y)&&T(v,P)};return document.addEventListener("wheel",g,{passive:!1}),()=>document.removeEventListener("wheel",g,{passive:!1})},[C,S,P,T]),c.useEffect(j,[a,j]),H(S,w),H(x.content,w),o.jsx(Jt,{scope:t,scrollbar:S,hasThumb:s,onThumbChange:G(n),onThumbPointerUp:G(i),onThumbPositionChange:j,onThumbPointerDown:G(l),children:o.jsx(q.div,{...p,ref:I,style:{position:"absolute",...p.style},onPointerDown:M(r.onPointerDown,g=>{g.button===0&&(g.target.setPointerCapture(g.pointerId),b.current=S.getBoundingClientRect(),A.current=document.body.style.webkitUserSelect,document.body.style.webkitUserSelect="none",x.viewport&&(x.viewport.style.scrollBehavior="auto"),E(g))}),onPointerMove:M(r.onPointerMove,E),onPointerUp:M(r.onPointerUp,g=>{const v=g.target;v.hasPointerCapture(g.pointerId)&&v.releasePointerCapture(g.pointerId),document.body.style.webkitUserSelect=A.current,x.viewport&&(x.viewport.style.scrollBehavior=""),b.current=null})})})}),re="ScrollAreaThumb",Ke=c.forwardRef((r,e)=>{const{forceMount:t,...a}=r,s=Xe(re,r.__scopeScrollArea);return o.jsx(J,{present:t||s.hasThumb,children:o.jsx(Kt,{ref:e,...a})})}),Kt=c.forwardRef((r,e)=>{const{__scopeScrollArea:t,style:a,...s}=r,n=R(re,t),i=Xe(re,t),{onThumbPositionChange:l}=i,u=V(e,f=>i.onThumbChange(f)),d=c.useRef(void 0),m=ae(()=>{d.current&&(d.current(),d.current=void 0)},100);return c.useEffect(()=>{const f=n.viewport;if(f){const p=()=>{if(m(),!d.current){const x=tr(f,l);d.current=x,l()}};return l(),f.addEventListener("scroll",p),()=>f.removeEventListener("scroll",p)}},[n.viewport,m,l]),o.jsx(q.div,{"data-state":i.hasThumb?"visible":"hidden",...s,ref:u,style:{width:"var(--radix-scroll-area-thumb-width)",height:"var(--radix-scroll-area-thumb-height)",...a},onPointerDownCapture:M(r.onPointerDownCapture,f=>{const x=f.target.getBoundingClientRect(),S=f.clientX-x.left,N=f.clientY-x.top;i.onThumbPointerDown({x:S,y:N})}),onPointerUp:M(r.onPointerUp,i.onThumbPointerUp)})});Ke.displayName=re;var xe="ScrollAreaCorner",Ze=c.forwardRef((r,e)=>{const t=R(xe,r.__scopeScrollArea),a=!!(t.scrollbarX&&t.scrollbarY);return t.type!=="scroll"&&a?o.jsx(Zt,{...r,ref:e}):null});Ze.displayName=xe;var Zt=c.forwardRef((r,e)=>{const{__scopeScrollArea:t,...a}=r,s=R(xe,t),[n,i]=c.useState(0),[l,u]=c.useState(0),d=!!(n&&l);return H(s.scrollbarX,()=>{const m=s.scrollbarX?.offsetHeight||0;s.onCornerHeightChange(m),u(m)}),H(s.scrollbarY,()=>{const m=s.scrollbarY?.offsetWidth||0;s.onCornerWidthChange(m),i(m)}),d?o.jsx(q.div,{...a,ref:e,style:{width:n,height:l,position:"absolute",right:s.dir==="ltr"?0:void 0,left:s.dir==="rtl"?0:void 0,bottom:0,...r.style}}):null});function oe(r){return r?parseInt(r,10):0}function et(r,e){const t=r/e;return isNaN(t)?0:t}function se(r){const e=et(r.viewport,r.content),t=r.scrollbar.paddingStart+r.scrollbar.paddingEnd,a=(r.scrollbar.size-t)*e;return Math.max(a,18)}function er(r,e,t,a="ltr"){const s=se(t),n=s/2,i=e||n,l=s-i,u=t.scrollbar.paddingStart+i,d=t.scrollbar.size-t.scrollbar.paddingEnd-l,m=t.content-t.viewport,f=a==="ltr"?[0,m]:[m*-1,0];return tt([u,d],f)(r)}function je(r,e,t="ltr"){const a=se(e),s=e.scrollbar.paddingStart+e.scrollbar.paddingEnd,n=e.scrollbar.size-s,i=e.content-e.viewport,l=n-a,u=t==="ltr"?[0,i]:[i*-1,0],d=jt(r,u);return tt([0,i],[0,l])(d)}function tt(r,e){return t=>{if(r[0]===r[1]||e[0]===e[1])return e[0];const a=(e[1]-e[0])/(r[1]-r[0]);return e[0]+a*(t-r[0])}}function rt(r,e){return r>0&&r<e}var tr=(r,e=()=>{})=>{let t={left:r.scrollLeft,top:r.scrollTop},a=0;return(function s(){const n={left:r.scrollLeft,top:r.scrollTop},i=t.left!==n.left,l=t.top!==n.top;(i||l)&&e(),t=n,a=window.requestAnimationFrame(s)})(),()=>window.cancelAnimationFrame(a)};function ae(r,e){const t=G(r),a=c.useRef(0);return c.useEffect(()=>()=>window.clearTimeout(a.current),[]),c.useCallback(()=>{window.clearTimeout(a.current),a.current=window.setTimeout(t,e)},[t,e])}function H(r,e){const t=G(e);Nt(()=>{let a=0;if(r){const s=new ResizeObserver(()=>{cancelAnimationFrame(a),a=window.requestAnimationFrame(t)});return s.observe(r),()=>{window.cancelAnimationFrame(a),s.unobserve(r)}}},[r,t])}var rr=Ge,or=He,sr=Ze,ne="Tabs",[ar,_o]=qe(ne,[Ye]),ot=Ye(),[nr,be]=ar(ne),st=c.forwardRef((r,e)=>{const{__scopeTabs:t,value:a,onValueChange:s,defaultValue:n,orientation:i="horizontal",dir:l,activationMode:u="automatic",...d}=r,m=Fe(l),[f,p]=Pt({prop:a,onChange:s,defaultProp:n??"",caller:ne});return o.jsx(nr,{scope:t,baseId:Rt(),value:f,onValueChange:p,orientation:i,dir:m,activationMode:u,children:o.jsx(q.div,{dir:m,"data-orientation":i,...d,ref:e})})});st.displayName=ne;var at="TabsList",nt=c.forwardRef((r,e)=>{const{__scopeTabs:t,loop:a=!0,...s}=r,n=be(at,t),i=ot(t);return o.jsx(It,{asChild:!0,...i,orientation:n.orientation,dir:n.dir,loop:a,children:o.jsx(q.div,{role:"tablist","aria-orientation":n.orientation,...s,ref:e})})});nt.displayName=at;var it="TabsTrigger",lt=c.forwardRef((r,e)=>{const{__scopeTabs:t,value:a,disabled:s=!1,...n}=r,i=be(it,t),l=ot(t),u=dt(i.baseId,a),d=mt(i.baseId,a),m=a===i.value;return o.jsx(At,{asChild:!0,...l,focusable:!s,active:m,children:o.jsx(q.button,{type:"button",role:"tab","aria-selected":m,"aria-controls":d,"data-state":m?"active":"inactive","data-disabled":s?"":void 0,disabled:s,id:u,...n,ref:e,onMouseDown:M(r.onMouseDown,f=>{!s&&f.button===0&&f.ctrlKey===!1?i.onValueChange(a):f.preventDefault()}),onKeyDown:M(r.onKeyDown,f=>{[" ","Enter"].includes(f.key)&&i.onValueChange(a)}),onFocus:M(r.onFocus,()=>{const f=i.activationMode!=="manual";!m&&!s&&f&&i.onValueChange(a)})})})});lt.displayName=it;var ct="TabsContent",ut=c.forwardRef((r,e)=>{const{__scopeTabs:t,value:a,forceMount:s,children:n,...i}=r,l=be(ct,t),u=dt(l.baseId,a),d=mt(l.baseId,a),m=a===l.value,f=c.useRef(m);return c.useEffect(()=>{const p=requestAnimationFrame(()=>f.current=!1);return()=>cancelAnimationFrame(p)},[]),o.jsx(J,{present:s||m,children:({present:p})=>o.jsx(q.div,{"data-state":m?"active":"inactive","data-orientation":l.orientation,role:"tabpanel","aria-labelledby":u,hidden:!p,id:d,tabIndex:0,...i,ref:e,style:{...r.style,animationDuration:f.current?"0s":void 0},children:p&&n})})});ut.displayName=ct;function dt(r,e){return`${r}-trigger-${e}`}function mt(r,e){return`${r}-content-${e}`}var ir=st,lr=nt,cr=lt,ur=ut;function Ie(r){const e=L.c(14);let t,a,s;e[0]!==r?({className:a,children:t,...s}=r,e[0]=r,e[1]=t,e[2]=a,e[3]=s):(t=e[1],a=e[2],s=e[3]);let n;e[4]!==a?(n=F("relative",a),e[4]=a,e[5]=n):n=e[5];let i;e[6]!==t?(i=o.jsx(or,{"data-slot":"scroll-area-viewport",className:"size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1",children:t}),e[6]=t,e[7]=i):i=e[7];let l,u;e[8]===Symbol.for("react.memo_cache_sentinel")?(l=o.jsx(dr,{}),u=o.jsx(sr,{}),e[8]=l,e[9]=u):(l=e[8],u=e[9]);let d;return e[10]!==s||e[11]!==n||e[12]!==i?(d=o.jsxs(rr,{"data-slot":"scroll-area",className:n,...s,children:[i,l,u]}),e[10]=s,e[11]=n,e[12]=i,e[13]=d):d=e[13],d}function dr(r){const e=L.c(13);let t,a,s;e[0]!==r?({className:t,orientation:s,...a}=r,e[0]=r,e[1]=t,e[2]=a,e[3]=s):(t=e[1],a=e[2],s=e[3]);const n=s===void 0?"vertical":s,i=n==="vertical"&&"h-full w-2.5 border-l border-l-transparent",l=n==="horizontal"&&"h-2.5 flex-col border-t border-t-transparent";let u;e[4]!==t||e[5]!==i||e[6]!==l?(u=F("flex touch-none p-px transition-colors select-none",i,l,t),e[4]=t,e[5]=i,e[6]=l,e[7]=u):u=e[7];let d;e[8]===Symbol.for("react.memo_cache_sentinel")?(d=o.jsx(Ke,{"data-slot":"scroll-area-thumb",className:"relative flex-1 rounded-full bg-border"}),e[8]=d):d=e[8];let m;return e[9]!==n||e[10]!==a||e[11]!==u?(m=o.jsx(Ve,{"data-slot":"scroll-area-scrollbar",orientation:n,className:u,...a,children:d}),e[9]=n,e[10]=a,e[11]=u,e[12]=m):m=e[12],m}function Ae(r){const e=L.c(10);let t,a,s;e[0]!==r?({className:t,orientation:s,...a}=r,e[0]=r,e[1]=t,e[2]=a,e[3]=s):(t=e[1],a=e[2],s=e[3]);const n=s===void 0?"horizontal":s;let i;e[4]!==t?(i=F("group/tabs flex gap-2 data-[orientation=horizontal]:flex-col",t),e[4]=t,e[5]=i):i=e[5];let l;return e[6]!==n||e[7]!==a||e[8]!==i?(l=o.jsx(ir,{"data-slot":"tabs","data-orientation":n,orientation:n,className:i,...a}),e[6]=n,e[7]=a,e[8]=i,e[9]=l):l=e[9],l}const mr=yt("group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-[orientation=horizontal]/tabs:h-9 group-data-[orientation=vertical]/tabs:h-fit group-data-[orientation=vertical]/tabs:flex-col data-[variant=line]:rounded-none",{variants:{variant:{default:"bg-muted",line:"gap-1 bg-transparent"}},defaultVariants:{variant:"default"}});function Re(r){const e=L.c(11);let t,a,s;e[0]!==r?({className:t,variant:s,...a}=r,e[0]=r,e[1]=t,e[2]=a,e[3]=s):(t=e[1],a=e[2],s=e[3]);const n=s===void 0?"default":s;let i;e[4]!==t||e[5]!==n?(i=F(mr({variant:n}),t),e[4]=t,e[5]=n,e[6]=i):i=e[6];let l;return e[7]!==a||e[8]!==i||e[9]!==n?(l=o.jsx(lr,{"data-slot":"tabs-list","data-variant":n,className:i,...a}),e[7]=a,e[8]=i,e[9]=n,e[10]=l):l=e[10],l}function ee(r){const e=L.c(8);let t,a;e[0]!==r?({className:t,...a}=r,e[0]=r,e[1]=t,e[2]=a):(t=e[1],a=e[2]);let s;e[3]!==t?(s=F("relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-[orientation=vertical]/tabs:w-full group-data-[orientation=vertical]/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 group-data-[variant=default]/tabs-list:data-[state=active]:shadow-sm group-data-[variant=line]/tabs-list:data-[state=active]:shadow-none dark:text-muted-foreground dark:hover:text-foreground [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4","group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:border-transparent dark:group-data-[variant=line]/tabs-list:data-[state=active]:bg-transparent","data-[state=active]:bg-background data-[state=active]:text-foreground dark:data-[state=active]:border-input dark:data-[state=active]:bg-input/30 dark:data-[state=active]:text-foreground","after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-[orientation=horizontal]/tabs:after:inset-x-0 group-data-[orientation=horizontal]/tabs:after:bottom-[-5px] group-data-[orientation=horizontal]/tabs:after:h-0.5 group-data-[orientation=vertical]/tabs:after:inset-y-0 group-data-[orientation=vertical]/tabs:after:-right-1 group-data-[orientation=vertical]/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-[state=active]:after:opacity-100",t),e[3]=t,e[4]=s):s=e[4];let n;return e[5]!==a||e[6]!==s?(n=o.jsx(cr,{"data-slot":"tabs-trigger",className:s,...a}),e[5]=a,e[6]=s,e[7]=n):n=e[7],n}function te(r){const e=L.c(8);let t,a;e[0]!==r?({className:t,...a}=r,e[0]=r,e[1]=t,e[2]=a):(t=e[1],a=e[2]);let s;e[3]!==t?(s=F("flex-1 outline-none",t),e[3]=t,e[4]=s):s=e[4];let n;return e[5]!==a||e[6]!==s?(n=o.jsx(ur,{"data-slot":"tabs-content",className:s,...a}),e[5]=a,e[6]=s,e[7]=n):n=e[7],n}const pr=["appointments-resignations","ai-and-technology","awards-and-honours","climate-and-environment","defense-and-security","education-and-social","elections-and-democracy","foreign-relations","global-economy","global-energy","health-and-medicine","important-days-and-events","international-organizations","natural-disasters","pakistan-economy","pakistan-politics","reports-and-rankings","science-and-technology","space-and-exploration","sports-current-affairs","summits-and-conferences","terrorism-and-conflicts","trade-and-commerce","treaties-and-agreements"],U=(r,e,t=pr)=>r?`Always use this exact topic slug for ALL MCQs:
**${r}**`:`Choose the **most relevant topic slug** from this list:

${(e&&e.length>0?e:t).map(s=>`- ${s}`).join(`
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
`,$=`
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
`,Ee=(r={})=>{const{topicSlug:e,topics:t,subjectSlug:a="current-affairs",quantity:s=50,createdBy:n=1,dateScope:i="yesterday",paperSlug:l="null",customInstruction:u=""}=r;return`
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

${U(e,t)}

---

${$}

---

# IMPORTANT MCQ RULES

- Randomise correct answers — distribute naturally across A, B, C, and D
- Do not repeat the same fact in multiple questions
- Base all questions on **high-value ${i} events**
- If not enough strong events exist, prioritise **quality over quantity**

---

# OUTPUT QUANTITY

Generate **${s} high-quality MCQs**.

---

${u?`# ADDITIONAL INSTRUCTIONS

${u}

---`:""}

# FINAL INSTRUCTION

Return the response in a **single fenced code block** (\`\`\`).
Clean Markdown only. Exact structure as specified.
Do not include introductions, notes, apologies, or section headings outside MCQ blocks.
`.trim()},fr=["ancient-history","medieval-history","mughal-empire","british-india","pakistan-movement","world-war-i","world-war-ii","cold-war","modern-history","islamic-history"],Le=(r={})=>{const{topicSlug:e,topics:t,subjectSlug:a="history",quantity:s=50,createdBy:n=1,paperSlug:i="null",customInstruction:l=""}=r;return`
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

${U(e,t,fr)}

---

${$}

---

# IMPORTANT MCQ RULES

- Randomize correct answers (A/B/C/D distribution)
- Do NOT repeat facts
- Maintain conceptual clarity
- Keep options realistic
- Ensure historical accuracy

---

# OUTPUT QUANTITY

Generate **${s} MCQs total**.

---

${l?`# ADDITIONAL INSTRUCTIONS

${l}

---`:""}

# FINAL INSTRUCTION

Return output in a **single Markdown code block**.
Do NOT include explanations outside MCQs, headings, or commentary.
`.trim()},hr=["geography-of-pakistan","pakistan-movement","constitutional-history","government-and-politics","economy-of-pakistan","foreign-policy","culture-and-society","education-system","natural-resources","provinces-and-regions"],ke=(r={})=>{const{topicSlug:e,topics:t,subjectSlug:a="pak-studies",quantity:s=50,createdBy:n=1,paperSlug:i="null",customInstruction:l=""}=r;return`
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

${U(e,t,hr)}

---

${$}

---

# OUTPUT QUANTITY

Generate **${s} high-quality MCQs**.

---

${l?`# ADDITIONAL INSTRUCTIONS

${l}

---`:""}

# FINAL INSTRUCTION

Return output in a **single Markdown code block**. No extra commentary.
`.trim()},gr=["quran-and-tafseer","hadith-and-sunnah","fiqh-and-jurisprudence","islamic-history","prophets-and-companions","pillars-of-islam","islamic-ethics","islamic-civilization","contemporary-islamic-issues"],Me=(r={})=>{const{topicSlug:e,topics:t,subjectSlug:a="islamic-studies",quantity:s=50,createdBy:n=1,paperSlug:i="null",customInstruction:l=""}=r;return`
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

${U(e,t,gr)}

---

${$}

---

# OUTPUT QUANTITY

Generate **${s} high-quality MCQs**.

---

${l?`# ADDITIONAL INSTRUCTIONS

${l}

---`:""}

# FINAL INSTRUCTION

Return output in a **single Markdown code block**. No extra commentary.
`.trim()},xr=["world-geography","world-history","science-general","inventions-and-discoveries","books-and-authors","world-organizations","capitals-and-currencies","famous-personalities","sports-general","arts-and-culture"],Oe=(r={})=>{const{topicSlug:e,topics:t,subjectSlug:a="general-knowledge",quantity:s=50,createdBy:n=1,paperSlug:i="null",customInstruction:l=""}=r;return`
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

${U(e,t,xr)}

---

${$}

---

# OUTPUT QUANTITY

Generate **${s} high-quality MCQs**.

---

${l?`# ADDITIONAL INSTRUCTIONS

${l}

---`:""}

# FINAL INSTRUCTION

Return output in a **single Markdown code block**. No extra commentary.
`.trim()},br=["grammar","vocabulary","synonyms-antonyms","idioms-and-phrases","sentence-correction","fill-in-the-blanks","comprehension","active-passive-voice","direct-indirect-speech","spelling"],Ue=(r={})=>{const{topicSlug:e,topics:t,subjectSlug:a="english",quantity:s=50,createdBy:n=1,paperSlug:i="null",customInstruction:l=""}=r;return`
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

${U(e,t,br)}

---

${$}

---

# OUTPUT QUANTITY

Generate **${s} high-quality MCQs**.

---

${l?`# ADDITIONAL INSTRUCTIONS

${l}

---`:""}

# FINAL INSTRUCTION

Return output in a **single Markdown code block**. No extra commentary.
`.trim()},Sr=["arithmetic","algebra","geometry","trigonometry","statistics","probability","number-system","ratio-and-proportion","percentage","time-and-work","profit-and-loss"],_e=(r={})=>{const{topicSlug:e,topics:t,subjectSlug:a="math",quantity:s=50,createdBy:n=1,paperSlug:i="null",customInstruction:l=""}=r;return`
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

${U(e,t,Sr)}

---

${$}

---

# OUTPUT QUANTITY

Generate **${s} high-quality MCQs**.

---

${l?`# ADDITIONAL INSTRUCTIONS

${l}

---`:""}

# FINAL INSTRUCTION

Return output in a **single Markdown code block**. No extra commentary.
`.trim()},vr=["physical-geography","human-geography","world-oceans-and-seas","world-mountains-and-rivers","continents-and-regions","climate-and-weather","pakistan-geography","maps-and-directions","natural-resources-geography","environmental-geography"],$e=(r={})=>{const{topicSlug:e,topics:t,subjectSlug:a="geography",quantity:s=50,createdBy:n=1,paperSlug:i="null",customInstruction:l=""}=r;return`
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

${U(e,t,vr)}

---

${$}

---

# OUTPUT QUANTITY

Generate **${s} high-quality MCQs**.

---

${l?`# ADDITIONAL INSTRUCTIONS

${l}

---`:""}

# FINAL INSTRUCTION

Return output in a **single Markdown code block**. No extra commentary.
`.trim()},yr=["physics-basics","chemistry-basics","biology-basics","scientific-inventions","human-body","plants-and-animals","space-and-astronomy","environment-and-ecology","technology-and-computers"],De=(r={})=>{const{topicSlug:e,topics:t,subjectSlug:a="science",quantity:s=50,createdBy:n=1,paperSlug:i="null",customInstruction:l=""}=r;return`
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

${U(e,t,yr)}

---

${$}

---

# OUTPUT QUANTITY

Generate **${s} high-quality MCQs**.

---

${l?`# ADDITIONAL INSTRUCTIONS

${l}

---`:""}

# FINAL INSTRUCTION

Return output in a **single Markdown code block**. No extra commentary.
`.trim()},Cr=["computer-basics","ms-office","internet-and-networking","operating-systems","programming-basics","database-basics","hardware-and-software","cyber-security","artificial-intelligence-basics"],Qe=(r={})=>{const{topicSlug:e,topics:t,subjectSlug:a="computer",quantity:s=50,createdBy:n=1,paperSlug:i="null",customInstruction:l=""}=r;return`
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

${U(e,t,Cr)}

---

${$}

---

# OUTPUT QUANTITY

Generate **${s} high-quality MCQs**.

---

${l?`# ADDITIONAL INSTRUCTIONS

${l}

---`:""}

# FINAL INSTRUCTION

Return output in a **single Markdown code block**. No extra commentary.
`.trim()},Tr={"current-affairs":Ee,"current-affairs-mcqs":Ee,history:Le,"history-mcqs":Le,"pak-studies":ke,"pak-studies-mcqs":ke,"islamic-studies":Me,"islamic-studies-mcqs":Me,"general-knowledge":Oe,"general-knowledge-mcqs":Oe,english:Ue,"english-mcqs":Ue,math:_e,"math-mcqs":_e,geography:$e,"geography-mcqs":$e,science:De,"science-mcqs":De,computer:Qe,"computer-mcqs":Qe};function wr(r){const e=L.c(4);let t;e[0]!==r?({...t}=r,e[0]=r,e[1]=t):t=e[1];let a;return e[2]!==t?(a=o.jsx(Mt,{"data-slot":"collapsible",...t}),e[2]=t,e[3]=a):a=e[3],a}function Nr(r){const e=L.c(4);let t;e[0]!==r?({...t}=r,e[0]=r,e[1]=t):t=e[1];let a;return e[2]!==t?(a=o.jsx(Ot,{"data-slot":"collapsible-trigger",...t}),e[2]=t,e[3]=a):a=e[3],a}function Pr(r){const e=L.c(4);let t;e[0]!==r?({...t}=r,e[0]=r,e[1]=t):t=e[1];let a;return e[2]!==t?(a=o.jsx(Ut,{"data-slot":"collapsible-content",...t}),e[2]=t,e[3]=a):a=e[3],a}function jr(r){return r.split(/\n---+\n?/).map(t=>t.trim()).filter(Boolean).map(Ir)}function Ir(r){return{question:k(r,"Question"),slug:k(r,"Slug"),difficulty:k(r,"Difficulty").toLowerCase(),mcq_type:k(r,"MCQ Type").toLowerCase(),subject_slug:k(r,"Subject Slug"),topic_slug:k(r,"Topic Slug"),paper_slug:Ar(r,"Paper Slug"),created_by:parseInt(k(r,"Created By"),10)||1,tags:Rr(r),options:Er(r),explanation:k(r,"Explanation")}}function k(r,e){const t=r.match(new RegExp(`^${e}:\\s*(.+)$`,"im"));return t?t[1].trim():""}function Ar(r,e){const t=k(r,e);return!t||t.toLowerCase()==="null"?null:t}function Rr(r){const e=k(r,"Tags");return e?e.split(",").map(t=>t.trim()).filter(Boolean):[]}function Er(r){const e=r.split(/^Options:\s*$/im)[1];if(!e)return[];const t=e.split(/^Explanation:/im)[0];let a=0;return t.split(`
`).map(s=>s.trim()).filter(Boolean).reduce((s,n)=>{const i=/\[correct\]/i.test(n),l=n.match(/^([A-Z])\)\s+(.+?)(?:\s+\[correct\])?$/i);return l&&(a++,s.push({option_text:l[2].trim(),is_correct:i,sort_order:a})),s},[])}function Lr(r){const e=L.c(5),{difficulty:t}=r;let a;e[0]!==t?(a=F("rounded-full border px-2 py-0.5 text-xs font-medium capitalize",{easy:"bg-green-100 text-green-800 border-green-200 dark:bg-green-900/30 dark:text-green-400 dark:border-green-800",medium:"bg-amber-100 text-amber-800 border-amber-200 dark:bg-amber-900/30 dark:text-amber-400 dark:border-amber-800",hard:"bg-red-100 text-red-800 border-red-200 dark:bg-red-900/30 dark:text-red-400 dark:border-red-800"}[t]??"border-border bg-muted text-muted-foreground"),e[0]=t,e[1]=a):a=e[1];let s;return e[2]!==t||e[3]!==a?(s=o.jsx("span",{className:a,children:t}),e[2]=t,e[3]=a,e[4]=s):s=e[4],s}function kr(r){const e=L.c(47),{mcq:t,index:a}=r,[s,n]=c.useState(null);let i;e[0]!==s?(i=g=>{s===null&&n(g)},e[0]=s,e[1]=i):i=e[1];const l=i;let u;e[2]!==s?(u=(g,v)=>{const y=s===v;return s!==null?g.is_correct?"border-green-400 bg-green-50 text-green-900 dark:bg-green-900/20 dark:text-green-300 dark:border-green-700 cursor-default":y&&!g.is_correct?"border-red-400 bg-red-50 text-red-900 dark:bg-red-900/20 dark:text-red-300 dark:border-red-700 cursor-default":"border-border bg-muted/30 text-muted-foreground cursor-default opacity-50":"border-border hover:border-muted-foreground/40 hover:bg-muted/50 cursor-pointer"},e[2]=s,e[3]=u):u=e[3];const d=u,m=a+1;let f;e[4]!==m?(f=o.jsx("span",{className:"mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-lg bg-muted/10 text-xs font-medium text-muted-foreground",children:m}),e[4]=m,e[5]=f):f=e[5];let p;e[6]!==t.question?(p=o.jsx("p",{className:"text-sm leading-relaxed font-medium",children:t.question}),e[6]=t.question,e[7]=p):p=e[7];let x;e[8]!==f||e[9]!==p?(x=o.jsxs("div",{className:"flex items-center gap-3",children:[f,p]}),e[8]=f,e[9]=p,e[10]=x):x=e[10];let S;e[11]!==t.difficulty?(S=t.difficulty&&o.jsx(Lr,{difficulty:t.difficulty}),e[11]=t.difficulty,e[12]=S):S=e[12];let N;e[13]!==t.mcq_type?(N=t.mcq_type&&o.jsx(Q,{variant:"secondary",className:"text-xs capitalize",children:t.mcq_type}),e[13]=t.mcq_type,e[14]=N):N=e[14];let I;e[15]!==t.subject_slug?(I=t.subject_slug&&o.jsx(Q,{variant:"outline",className:"text-xs",children:t.subject_slug}),e[15]=t.subject_slug,e[16]=I):I=e[16];let b;e[17]!==t.tags?(b=t.tags.map(Mr),e[17]=t.tags,e[18]=b):b=e[18];let A;e[19]!==b||e[20]!==S||e[21]!==N||e[22]!==I?(A=o.jsxs("div",{className:"mt-2 ml-9 flex flex-wrap gap-1.5",children:[S,N,I,b]}),e[19]=b,e[20]=S,e[21]=N,e[22]=I,e[23]=A):A=e[23];let C;e[24]!==A||e[25]!==x?(C=o.jsxs(Ct,{className:"px-4 pt-4 pb-2",children:[x,A]}),e[24]=A,e[25]=x,e[26]=C):C=e[26];let P;if(e[27]!==d||e[28]!==l||e[29]!==t.options||e[30]!==s){let g;e[32]!==d||e[33]!==l||e[34]!==s?(g=(v,y)=>o.jsxs("div",{onClick:()=>l(y),className:F("flex items-center gap-3 rounded-lg border px-3 py-2.5 text-sm transition-all",d(v,y)),children:[o.jsx("span",{className:"w-4 shrink-0 text-xs font-semibold text-muted-foreground",children:String.fromCharCode(65+y)}),o.jsx("span",{className:"flex-1",children:v.option_text}),s!==null&&v.is_correct&&o.jsx(Pe,{className:"h-4 w-4 shrink-0 text-green-500"}),s===y&&!v.is_correct&&o.jsx(Ft,{className:"h-4 w-4 shrink-0 text-red-500"})]},y),e[32]=d,e[33]=l,e[34]=s,e[35]=g):g=e[35],P=t.options.map(g),e[27]=d,e[28]=l,e[29]=t.options,e[30]=s,e[31]=P}else P=e[31];let T;e[36]!==P?(T=o.jsx("div",{className:"mb-3 flex flex-col gap-2",children:P}),e[36]=P,e[37]=T):T=e[37];let j;e[38]!==t.explanation||e[39]!==s?(j=s!==null&&t.explanation&&o.jsxs("div",{className:"flex gap-2 rounded-lg border border-blue-100 bg-blue-50 p-3 text-xs leading-relaxed text-blue-900 dark:border-blue-900 dark:bg-blue-950/30 dark:text-blue-300",children:[o.jsx(Pe,{className:"mt-0.5 h-4 w-4 shrink-0 text-blue-500"}),o.jsx("p",{children:t.explanation})]}),e[38]=t.explanation,e[39]=s,e[40]=j):j=e[40];let w;e[41]!==T||e[42]!==j?(w=o.jsxs(Tt,{className:"px-4 pb-4",children:[T,j]}),e[41]=T,e[42]=j,e[43]=w):w=e[43];let E;return e[44]!==C||e[45]!==w?(E=o.jsxs(wt,{className:"mb-3 shadow-none",children:[C,w]}),e[44]=C,e[45]=w,e[46]=E):E=e[46],E}function Mr(r){return o.jsx(Q,{variant:"outline",className:"text-xs",children:r},r)}const Or=[{label:"Yesterday",value:"yesterday"},{label:"Today",value:"today"},{label:"Last 3 Days",value:"the last 3 days"},{label:"Last Week",value:"the last week"},{label:"Last Month",value:"the last month"}];function $o({subjects:r,topics:e,authUserId:t=1}){const{data:a,setData:s,post:n,errors:i}=vt({json:""}),[l,u]=c.useState(""),[d,m]=c.useState([]),[f,p]=c.useState(""),[x,S]=c.useState(!1),[N,I]=c.useState(!1),[b,A]=c.useState(r[0]?.id??0),[C,P]=c.useState(null),[T,j]=c.useState(50),[w,E]=c.useState("yesterday"),[g,v]=c.useState(""),[y,ie]=c.useState(!1),pt=c.useMemo(()=>e.filter(h=>h.subject_id===b),[e,b]),D=c.useMemo(()=>r.find(h=>h.id===b),[r,b]),K=c.useMemo(()=>C?e.find(h=>h.id===C):null,[e,C]),W=c.useCallback(()=>{if(!D)return"";const h=Tr[D.slug];if(!h)return`# No prompt template found for: ${D.slug}`;const Y={subjectSlug:D.slug,topicSlug:K?.slug,quantity:T,createdBy:t,dateScope:w,customInstruction:g.trim()||void 0};return h(Y)},[D,K,T,w,g,t]),[le,ce]=c.useState(()=>W());c.useEffect(()=>{ce(W())},[W]),c.useEffect(()=>{P(null)},[b]);const Se=c.useMemo(()=>l.split(/\n---+/).filter(Boolean).length,[l]),ft=c.useCallback(()=>{p("");try{const h=jr(l);if(!h.length){p("No MCQ blocks found. Make sure blocks are separated by ---.");return}m(h),s("json",JSON.stringify(h)),B.success(`${h.length} MCQ${h.length!==1?"s":""} parsed successfully.`)}catch(h){const Y="Parse error: "+h.message;p(Y),B.error(Y)}},[l,s]),ht=c.useCallback(h=>{if(h.preventDefault(),!a.json){B.error("No data to import. Parse your MCQs first.");return}n(Et.store().url,{onSuccess:()=>B.success("MCQs imported successfully."),onError:()=>B.error("Import failed. Check errors below.")})},[a,n]),gt=c.useCallback(()=>{navigator.clipboard.writeText(le),S(!0),setTimeout(()=>S(!1),1500)},[le]),xt=c.useCallback(()=>{navigator.clipboard.writeText(JSON.stringify(d,null,2)),I(!0),setTimeout(()=>I(!1),1500)},[d]),bt=c.useCallback(()=>{u(""),m([]),p(""),s("json","")},[s]),St=c.useCallback(()=>{ce(W()),B.success("Prompt regenerated.")},[W]);return o.jsx(Lt,{title:"Import MD MCQs",children:o.jsxs("div",{className:"grid grid-cols-1 gap-4 p-4 lg:grid-cols-2",children:[i.json&&o.jsxs(ve,{variant:"destructive",className:"col-span-full",children:[o.jsx(Ce,{className:"h-4 w-4"}),o.jsx(ye,{children:i.json})]}),o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center gap-2 text-sm font-medium",children:[o.jsx(Te,{className:"h-4 w-4 text-muted-foreground"}),"Markdown input"]}),o.jsxs(Q,{variant:"secondary",className:"text-xs",children:[Se," block",Se!==1?"s":""]})]}),o.jsxs(Ae,{defaultValue:"prompt",className:"flex flex-col gap-3",children:[o.jsxs(Re,{className:"w-fit bg-muted/10",children:[o.jsx(ee,{value:"md",children:"MD"}),o.jsxs(ee,{value:"prompt",children:[o.jsx(_t,{className:"mr-1.5 h-3.5 w-3.5"}),"Prompt"]})]}),o.jsxs(te,{value:"md",className:"mt-0 flex flex-col gap-2",children:[o.jsx("div",{className:"min-h-[500px] max-h-[500px] overflow-y-auto",children:o.jsx(fe,{value:l,onChange:h=>u(h.target.value),placeholder:"Paste your MCQ markdown here…",className:"min-h-[500px] resize-none font-mono text-xs"})}),f&&o.jsxs(ve,{variant:"destructive",className:"py-2",children:[o.jsx(Ce,{className:"h-4 w-4"}),o.jsx(ye,{className:"text-xs",children:f})]})]}),o.jsxs(te,{value:"prompt",className:"mt-0 flex flex-col gap-3",children:[o.jsxs("div",{className:"flex flex-wrap items-end gap-2",children:[o.jsxs("div",{className:"flex flex-col gap-1",children:[o.jsx(X,{className:"text-xs text-muted-foreground",children:"Subject"}),o.jsxs(ue,{value:String(b),onValueChange:h=>A(Number(h)),children:[o.jsx(de,{className:"h-8 w-40 text-xs",children:o.jsx(me,{placeholder:"Subject"})}),o.jsx(pe,{children:r.map(h=>o.jsx(Z,{value:String(h.id),className:"text-xs",children:h.name},h.id))})]})]}),o.jsxs("div",{className:"flex flex-col gap-1",children:[o.jsxs(X,{className:"text-xs text-muted-foreground",children:["Topic ",o.jsx("span",{className:"opacity-50",children:"(optional)"})]}),o.jsxs(ue,{value:C?String(C):"__all__",onValueChange:h=>P(h==="__all__"?null:Number(h)),children:[o.jsx(de,{className:"h-8 w-48 text-xs",children:o.jsx(me,{placeholder:"All topics"})}),o.jsxs(pe,{children:[o.jsx(Z,{value:"__all__",className:"text-xs text-muted-foreground",children:"All topics"}),pt.map(h=>o.jsx(Z,{value:String(h.id),className:"text-xs",children:h.name},h.id))]})]})]}),o.jsxs("div",{className:"flex flex-col gap-1",children:[o.jsx(X,{className:"text-xs text-muted-foreground",children:"Quantity"}),o.jsx(kt,{type:"number",min:5,max:100,value:T,onChange:h=>j(Math.max(5,Math.min(100,Number(h.target.value)))),className:"h-8 w-20 text-xs"})]}),D?.slug.includes("current-affairs")&&o.jsxs("div",{className:"flex flex-col gap-1",children:[o.jsx(X,{className:"text-xs text-muted-foreground",children:"Date scope"}),o.jsxs(ue,{value:w,onValueChange:E,children:[o.jsx(de,{className:"h-8 w-36 text-xs",children:o.jsx(me,{})}),o.jsx(pe,{children:Or.map(h=>o.jsx(Z,{value:h.value,className:"text-xs",children:h.label},h.value))})]})]}),o.jsx("div",{className:"flex-1"}),o.jsxs(z,{variant:"ghost",size:"sm",className:"h-8 gap-1.5 text-xs",onClick:St,title:"Regenerate prompt from current config",children:[o.jsx($t,{className:"h-3.5 w-3.5"}),"Reset"]}),o.jsx(z,{variant:"outline",size:"sm",className:"h-8 gap-1.5 text-xs",onClick:gt,children:x?o.jsxs(o.Fragment,{children:[o.jsx(we,{className:"h-3.5 w-3.5"})," Copied!"]}):o.jsxs(o.Fragment,{children:[o.jsx(Ne,{className:"h-3.5 w-3.5"})," Copy prompt"]})})]}),o.jsxs(wr,{open:y,onOpenChange:ie,children:[o.jsx(Nr,{asChild:!0,children:o.jsxs(z,{variant:"ghost",size:"sm",className:"h-7 gap-1.5 text-xs text-muted-foreground",children:[o.jsx(zt,{className:"h-3.5 w-3.5"}),"Advanced",o.jsx(Qt,{className:`h-3.5 w-3.5 transition-transform ${y?"rotate-180":""}`})]})}),o.jsxs(Pr,{className:"flex flex-col gap-1.5 pt-2",children:[o.jsxs(X,{className:"text-xs text-muted-foreground",children:["Custom instruction ",o.jsx("span",{className:"opacity-50",children:"(appended to prompt)"})]}),o.jsx(fe,{value:g,onChange:h=>v(h.target.value),placeholder:"e.g. Focus only on administrative reforms. Avoid military topics.",className:"min-h-[72px] resize-none text-xs"})]})]}),o.jsx(fe,{value:le,onChange:h=>ce(h.target.value),placeholder:"Prompt will appear here…",className:"min-h-[340px] resize-none font-mono text-xs"}),o.jsxs("div",{className:"flex flex-wrap gap-1.5",children:[D&&o.jsxs(Q,{variant:"secondary",className:"text-xs font-mono",children:["subject: ",D.slug]}),K&&o.jsxs(Q,{variant:"secondary",className:"text-xs font-mono",children:["topic: ",K.slug]}),o.jsxs(Q,{variant:"secondary",className:"text-xs font-mono",children:["qty: ",T]}),D?.slug.includes("current-affairs")&&o.jsxs(Q,{variant:"secondary",className:"text-xs font-mono",children:["scope: ",w]})]})]})]}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx(z,{onClick:ft,className:"flex-1",children:"Parse"}),o.jsx(z,{variant:"outline",onClick:bt,children:"Clear"})]})]}),o.jsxs("div",{className:"flex flex-col gap-3",children:[o.jsxs("div",{className:"flex items-center justify-between",children:[o.jsxs("div",{className:"flex items-center gap-2 text-sm font-medium",children:[o.jsx(qt,{className:"h-4 w-4 text-muted-foreground"}),"Output"]}),o.jsxs(Q,{variant:"secondary",className:"text-xs",children:[d.length," MCQ",d.length!==1?"s":""]})]}),o.jsxs(Ae,{defaultValue:"preview",className:"flex flex-col gap-3",children:[o.jsxs(Re,{className:"w-fit bg-muted/10",children:[o.jsx(ee,{value:"preview",children:"Preview"}),o.jsx(ee,{value:"json",children:"JSON"})]}),o.jsx(te,{value:"preview",className:"mt-0",children:o.jsx(Ie,{className:"h-[500px] max-h-[500px] rounded-lg border bg-muted/20 pr-2",children:d.length===0?o.jsxs("div",{className:"flex h-[500px] flex-col items-center justify-center gap-2 text-sm text-muted-foreground",children:[o.jsx(Te,{className:"h-6 w-6 opacity-30"}),o.jsx("span",{children:"Paste MD on the left and click Parse"})]}):d.map((h,Y)=>o.jsx(kr,{mcq:h,index:Y},Y))})}),o.jsx(te,{value:"json",className:"mt-0 flex flex-col gap-2",children:o.jsx(Ie,{className:"h-[500px] max-h-[500px] rounded-lg border bg-muted/20",children:o.jsx("pre",{className:"whitespace-pre-wrap break-words p-3 font-mono text-xs leading-relaxed",children:d.length?JSON.stringify(d,null,2):"// No MCQs parsed yet"})})})]}),o.jsxs("div",{className:"flex gap-2",children:[o.jsx(z,{variant:"outline",onClick:xt,disabled:!d.length,className:"flex-1 gap-2",children:N?o.jsxs(o.Fragment,{children:[o.jsx(we,{className:"h-4 w-4"})," Copied!"]}):o.jsxs(o.Fragment,{children:[o.jsx(Ne,{className:"h-4 w-4"})," Copy JSON"]})}),o.jsx(z,{onClick:ht,disabled:!a.json,className:"flex-1",children:"Send to import service"})]})]})]})})}export{$o as default};
