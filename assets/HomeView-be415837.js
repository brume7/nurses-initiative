import{p as M,u as P,s as B,r as R,o as S,a as x,b as n,c as a,d as o,e as s,f as g,w as k,g as y,F as d,h as m,i,t as p,j}from"./index-1eefb715.js";const L={class:"w-full"},N={class:"w-full max-w-[--max-system-width] mx-auto pt-[5px]"},T=["onClick"],F={key:0,class:"text-white font-bold bg-[rgba(0,0,0,0.7)] text-[30px] p-1.5 text-truncate exo"},U={class:"mt-[60px] w-full max-w-[--max-system-width] mx-auto"},z=o("h1",{class:"exo text-[32px] text-[--text-color] mb-[50px]"}," Recent Posts ",-1),D=["onClick"],E={class:"w-full sm:w-4/12"},H=["src","alt"],q={class:"w-full sm:w-8/12 pl-6 pt-4"},A=["textContent"],G={class:"avenir text-[--text-color] text-[20px]"},K={__name:"HomeView",setup(I){const _=M(),b=P(),{topPosts:f,url:v,posts:c}=B(_);let e=R(!1);S(async()=>{await _.getPosts()});let u=h=>{b.push({name:"post",params:{id:h}})};return(h,l)=>{const C=x("v-carousel-item"),$=x("v-carousel"),V=x("VSkeletonLoader");return n(),a("div",null,[o("div",L,[o("section",N,[s(f).length?(n(),g($,{key:0,cycle:"",height:"600","hide-delimiter-background":"","show-arrows":"hover"},{default:k(()=>[(n(!0),a(d,null,m(s(f),(t,w)=>(n(),g(C,{key:t.id,src:`${s(v)}/api/v1/uploads/${t.imageUrl}`,contain:"",class:"cursor-pointer",onMouseover:l[2]||(l[2]=r=>i(e)?e.value=!0:e=!0),onMouseout:l[3]||(l[3]=r=>i(e)?e.value=!1:e=!1),onClick:r=>s(u)(t._id)},{default:k(()=>[o("div",{class:"flex-col justify-end h-[100%] flex cursor-pointer",onMouseover:l[0]||(l[0]=r=>i(e)?e.value=!0:e=!0),onMouseout:l[1]||(l[1]=r=>i(e)?e.value=!1:e=!1),onClick:r=>s(u)(t._id)},[s(e)?(n(),a("p",F,p(t.title),1)):y("",!0)],40,T)]),_:2},1032,["src","onClick"]))),128))]),_:1})):y("",!0)]),o("section",U,[z,s(c)&&s(c).length?(n(!0),a(d,{key:0},m(s(c),(t,w)=>(n(),a("div",{key:t.id,onClick:r=>s(u)(t._id),class:"w-full mb-[40px] min-h-[250px] cursor-pointer flex flex-wrap hover:bg-[--complementary-color]"},[o("div",E,[o("img",{class:"sm:h-full",src:`${s(v)}/api/v1/uploads/${t.imageUrl}`,alt:t.title.substring(0,10),loading:"lazy"},null,8,H)]),o("div",q,[o("h1",{class:"exo text-[--text-color] text-[32px] text-wrap mb-[20px]",textContent:p(t.title)},null,8,A),o("p",G,p(t.content.split(" ").slice(1).join(" ").substring(0,150))+"... ",1)])],8,D))),128)):(n(),a(d,{key:1},m(["","","",""],(t,w)=>j(V,{type:"article",height:"250px",class:"w-full mb-[40px] cursor-pointer flex flex-wrap hover:bg-[--complementary-color]"})),64))])])])}}};export{K as default};
