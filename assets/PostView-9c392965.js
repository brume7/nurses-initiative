import{_ as b,p as V,u as P,s as C,o as U,q as B,a as h,b as e,c as o,d as a,e as s,f as N,j as _,n as x,t as l,g as p,F as r,h as S}from"./index-d9a3212b.js";const $={class:"w-full"},A={class:"w-full max-w-[--max-system-width] mx-auto pt-[5px]"},L={key:0},W=["src","alt"],z={key:0,class:"mt-[60px] w-full max-w-[--max-system-width] mx-auto"},F={key:1,class:"mt-[60px] w-full max-w-[--max-system-width] mx-auto"},I={class:"exo text-[32px] md:text-[48px] text-[--text-color] font-bold mb-[30px]"},R={class:"content-container"},T={class:"avenir text-[--text-color] text-[20px]"},j={key:0,class:"subheading"},q={key:1,class:"main-heading"},D={key:3,class:"video-container"},E=["src"],M={key:2,class:"mt-[60px] w-full max-w-[--max-system-width] mx-auto"},G={class:"exo text-[48px] text-[--text-color] font-bold mb-[50px]"},H={__name:"PostView",props:["id","isAuth"],setup(d){const{id:f,isAuth:J}=d,u=V(),w=P(),{currPost:t,url:y}=C(u);U(async()=>{await u.getPost(f)=="successful"||w.push({name:"home"})}),B(()=>{t.value=null});const g=i=>{let n=i.split("/")[i.split("/").length-1];return n.startsWith("watch?v=")&&(n=n.split("v=")[1].split("&")[0]),`https://www.youtube.com/embed/${n}`};return(i,n)=>{const m=h("VSkeletonLoader"),v=h("v-icon");return e(),o("div",$,[a("section",A,[s(t)?(e(),o("figure",L,[a("img",{src:`${s(y)}/api/v1/uploads/${s(t).imageUrl}`,alt:s(t).title,class:"h-[300px] md:h-[600px] mx-auto",loading:"lazy"},null,8,W)])):(e(),N(m,{key:1,type:"image",width:"900",height:"900","min-height":"900",class:"mx-auto"}))]),d.isAuth&&s(t)?(e(),o("section",z,[a("p",{class:"float-right text-[--text-color] cursor-pointer",onClick:n[0]||(n[0]=c=>i.likePost())},[_(v,{size:"large",color:"grey",icon:"mdi-heart",class:""}),x(" "+l(s(t).likesCount?s(t).likesCount:0),1)])])):p("",!0),s(t)?(e(),o("section",F,[a("h1",I,l(s(t).title),1),a("div",R,[a("p",T,[(e(!0),o(r,null,S(s(t).content.split(`
`),(c,k)=>(e(),o(r,null,[c.trim().endsWith(":")?(e(),o("h2",j,l(c),1)):c.trim().endsWith(":")?(e(),o("h1",q,l(c),1)):(e(),o(r,{key:2},[x(l(c),1)],64)),k===2&&s(t).videoUrl?(e(),o("div",D,[a("iframe",{src:g(s(t).videoUrl),class:"w-full h-[500px] mt-5",frameborder:"0",allowfullscreen:""},null,8,E)])):p("",!0)],64))),256))])])])):(e(),o("section",M,[a("h1",G,[_(m,{type:"heading",hieght:"300",width:"300"})])]))])}}},O=b(H,[["__scopeId","data-v-f2ec665d"]]);export{O as default};
