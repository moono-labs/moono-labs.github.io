import{_}from"./6vcBg9hZ.js";import{_ as f,r,o as m,L as v,t as d,v as p,x as t,y as i,O as x,z as n,A as h}from"./BPEUKgxQ.js";import{s as y}from"./De1emYB1.js";import{T as g}from"./CRdnQ8TM.js";import{_ as T}from"./B7wjaJFT.js";const b={class:"contact-section",id:"contact"},I={class:"section"},w={class:"container"},C={class:"footer"},E={class:"email-container"},B={class:"copy-text"},H={__name:"Contact_ru",setup(u){const s=r(["","hello@moono.studio"]),a=r("НАЖМИТЕ, ЧТОБЫ СКОПИРОВАТЬ");function c(){navigator.clipboard.writeText((s.value[0]+s.value[1]).toLowerCase()),a.value="EMAIL СКОПИРОВАН!",setTimeout(()=>{a.value="НАЖМИТЕ, ЧТОБЫ СКОПИРОВАТЬ"},2e3)}return m(()=>{v(()=>{const l=["Привет!","Hello!","Hola!","Bonjour!","Hallo!","Ciao!","สวัสดี!"];let e=0;const o=document.getElementById("hola");o&&y(function(){e=(e+1)%l.length,o.style.opacity=0,setTimeout(()=>{o.textContent=l[e],o.style.opacity=1},500)},1500)})}),(l,e)=>(d(),p("section",b,[t("div",I,[e[2]||(e[2]=t("div",{class:"hello-contacts"},"Привет! Спасибо, что заинтересовались нашей работой!",-1)),e[3]||(e[3]=t("div",{class:"form-container"},[t("div",{class:"formdescr"},[t("p",{class:"contacth"},"Давайте поговорим о Ваших целях и идеях")]),t("form",{id:"contactForm",action:"https://formspree.io/f/myzgogwj",method:"POST"},[t("input",{type:"text",name:"name",placeholder:"ВАШЕ ИМЯ",required:""}),t("input",{type:"email",name:"email",placeholder:"EMAIL",required:""}),t("input",{name:"company",placeholder:"КОМПАНИЯ",required:""}),t("textarea",{name:"message",placeholder:"ВАШЕ СООБЩЕНИЕ",required:""}),t("button",{class:"custom-btn btn-13 btn-send",type:"submit"},[t("span",null,"Отправить")]),t("p",{class:"success-message"},"Сообщение успешно отправлено"),t("p",{class:"error-message"},"Ошибка. Попробуйте позднее.")])],-1)),t("div",w,[t("div",C,[t("div",E,[e[1]||(e[1]=t("div",{class:"hola-container"},null,-1)),t("div",B,[t("p",null,i(a.value),1)]),t("div",{onClick:e[0]||(e[0]=x(o=>c(),["prevent"])),class:"email"},[t("h2",null,i(s.value[1]),1)])])])])])]))}},k=f(H,[["__scopeId","data-v-5c7c6b2f"]]),$={__name:"contact",setup(u){return m(()=>{localStorage.getItem("cameFromHome")==="true"&&(window.location.reload(),localStorage.removeItem("cameFromHome"))}),(s,a)=>{const c=_;return d(),p("main",null,[n(c,null,{default:h(()=>[n(g),n(k),n(T)]),_:1})])}}};export{$ as default};
