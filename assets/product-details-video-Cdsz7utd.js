import{r as n,I as j,V as r,j as o,R as k}from"./index-uEh89rVJ.js";import{G as x}from"./Grid-CkWUUHPF.js";const b="xs",f="sm",y="md",S="lg",l="xl";function R({videos:c}){const[a,t]=n.useState({width:800,height:440}),[e,i]=n.useState(l),s=j(),h=r(s.breakpoints.down("xs")),u=r(s.breakpoints.between("xs","sm")),d=r(s.breakpoints.between("sm","md")),m=r(s.breakpoints.between("md","lg")),g=r(s.breakpoints.up("lg")),p=n.useCallback(()=>{g&&e!==l?(i(l),t({width:800,height:440})):m&&e!==S?(i(S),t({width:640,height:400})):d&&e!==y?(i(y),t({width:480,height:360})):u&&e!==f?(i(f),t({width:280,height:210})):h&&e!==b&&(i(b),t({width:280,height:210}))},[m,d,u,g,h,e]);return n.useEffect(()=>{p()},[p]),o.jsx(k,{children:o.jsx(x,{container:!0,justifyContent:"center",alignItems:"center",children:c==null?void 0:c.map(w=>o.jsx(x,{item:!0,xs:12,md:12,lg:12,style:{textAlign:"center"},children:o.jsx("iframe",{width:a.width.toString(),height:a.height.toString(),src:`https://www.youtube-nocookie.com/embed/${w.id.toString()}`,title:w.title.toString(),allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share",referrerPolicy:"strict-origin-when-cross-origin",allowFullScreen:!0})}))})})}export{R as P};
