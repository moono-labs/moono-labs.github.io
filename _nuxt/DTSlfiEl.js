import{_ as p,r as g,N as m,P as f,o as h,J as i,E as C,t as b,v as k,x as s,K as N,z as o,g as x,A as c,B as d,Q as y}from"./porvWtSx.js";import{S as _,C as T,H as A}from"./VCxf7tLT.js";const $={class:"mobile-nav-section"},O={class:"mobile-nav"},w={class:"footer"},B={class:"footer-item"},L={class:"footer-item"},S={__name:"MobileNav",props:{active:Boolean},setup(v){const a=v;g(!1),m();const r=f();console.log("Текущий маршрут:",r.path);function n(){document.querySelector("body").classList.toggle("light")}return h(()=>{const e=i.timeline({paused:!0});C(a,()=>{a.active?e.play():e.reverse()}),i.set(".mobile-nav-section",{left:"100%"}),e.to(".mobile-nav-section",{left:"0%",duration:.3}).add(()=>{i.from(".mobile-nav .controls .nav-links .nav-link",{x:"70%",opacity:0,stagger:{amount:.2},duration:.3}),i.from(".mobile-nav .footer, .mobile-nav .header-buttons",{y:"70%",opacity:0,stagger:{amount:.2},duration:.3})},"-=0.3")}),(e,t)=>(b(),k("section",$,[s("div",O,[t[3]||(t[3]=N('<div class="controls" data-v-0bb838ca><div class="nav-links" data-v-0bb838ca><a href="/works" class="nav-link" data-v-0bb838ca> WORK</a><a href="/about" class="nav-link" data-v-0bb838ca> ABOUT</a><a href="/contact" class="nav-link" data-v-0bb838ca> CONTACT</a></div></div>',1)),s("div",w,[s("div",B,[t[1]||(t[1]=s("p",null,"THEME",-1)),o(_,{onClick:t[0]||(t[0]=l=>n()),class:"switch"})]),s("div",L,[t[2]||(t[2]=s("p",null,"LANGUAGE",-1)),o(T)])])])]))}},E=p(S,[["__scopeId","data-v-0bb838ca"]]),M={class:"header container"},R={class:"controls"},K={class:"nav-links"},U={class:"acont"},V={class:"acont"},W={class:"acont"},H={__name:"Topbar",setup(v){const a=g(!1);m(),f();function r(){document.body.classList.toggle("light")}function n(){a.value=!a.value,document.querySelector("header").classList.toggle("fixed")}return(e,t)=>{const l=x("router-link");return b(),k(y,null,[s("header",null,[t[7]||(t[7]=s("link",{rel:"preconnect",href:"https://fonts.googleapis.com"},null,-1)),t[8]||(t[8]=s("link",{rel:"preconnect",href:"https://fonts.gstatic.com",crossorigin:""},null,-1)),t[9]||(t[9]=s("link",{href:"https://fonts.googleapis.com/css2?family=Micro+5&display=swap",rel:"stylesheet"},null,-1)),s("div",M,[t[6]||(t[6]=s("div",{class:"logo micro-5-regular"},[s("a",{href:"/",style:{all:"unset",cursor:"pointer"}},[s("span",null,"moono labs")])],-1)),s("div",R,[s("div",K,[s("span",U,[o(l,{to:"/works","data-text":"[WORK]",class:"nav-link desktop-a"},{default:c(()=>t[3]||(t[3]=[d(" [WORK] ")])),_:1})]),s("span",V,[o(l,{to:"/about","data-text":"[ABOUT]",href:"",class:"nav-link desktop-a"},{default:c(()=>t[4]||(t[4]=[d(" [ABOUT] ")])),_:1})]),s("span",W,[o(l,{to:"/contact","data-text":"[CONTACT]",class:"nav-link desktop-a"},{default:c(()=>t[5]||(t[5]=[d(" [CONTACT] ")])),_:1})])]),s("div",{onClick:t[0]||(t[0]=u=>r()),class:"switch"},[o(_)]),o(T),s("div",{onClick:t[1]||(t[1]=u=>n()),class:"hamburger"},[o(A,{active:a.value},null,8,["active"])])])])]),o(E,{onToggleActive:t[2]||(t[2]=u=>n()),active:a.value},null,8,["active"])],64)}}},I=p(H,[["__scopeId","data-v-43f67d42"]]);export{I as T};
