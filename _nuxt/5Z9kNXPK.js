import{_ as r,r as i,o as d,L as m,t as u,v as p,x as e,y as l,O as v}from"./DLAX38Nm.js";import{s as h}from"./B9vPt6wT.js";const y={class:"contact-section",id:"contact"},O={class:"section"},f={class:"container"},C={class:"footer"},_={class:"email-container"},g={class:"copy-text"},x={__name:"Contact",setup(E){const o=i(["","hello@moono.studio"]),n=i("CLICK TO COPY EMAIL");function c(){navigator.clipboard.writeText((o.value[0]+o.value[1]).toLowerCase()),n.value="EMAIL COPIED !",setTimeout(()=>{n.value="CLICK TO COPY EMAIL"},2e3)}return d(()=>{m(()=>{const a=["Привет!","Hello!","Hola!","Bonjour!","Hallo!","Ciao!","สวัสดี!"];let t=0;const s=document.getElementById("hola");s&&h(function(){t=(t+1)%a.length,s.style.opacity=0,setTimeout(()=>{s.textContent=a[t],s.style.opacity=1},500)},1500)})}),(a,t)=>(u(),p("section",y,[e("div",O,[t[2]||(t[2]=e("div",{class:"hello-contacts tracking-in-contract"},"Hi there! Happy to see your interest in working with us!",-1)),t[3]||(t[3]=e("div",{class:"form-container"},[e("div",{class:"formdescr"},[e("p",{class:"contacth"},"Let's TALK ABOUT YOU, YOUR COMPANY, YOUR PRODUCT, AND YOUR GOALS.")]),e("form",{id:"contactForm",action:"https://formspree.io/f/myzgogwj",method:"POST"},[e("input",{type:"text",name:"name",placeholder:"YOUR NAME",required:""}),e("input",{type:"email",name:"email",placeholder:"EMAIL",required:""}),e("input",{name:"company",placeholder:"COMPANY",required:""}),e("textarea",{name:"message",placeholder:"YOUR MESSAGE",required:""}),e("button",{class:"custom-btn btn-13 btn-send",type:"submit"},[e("span",null,"Send")]),e("p",{class:"success-message"},"Your message has been sent successfully"),e("p",{class:"error-message"},"Error. Try again or send a message directly from the mail site")])],-1)),e("div",f,[e("div",C,[e("div",_,[t[1]||(t[1]=e("div",{class:"hola-container"},null,-1)),e("div",g,[e("p",null,l(n.value),1)]),e("div",{onClick:t[0]||(t[0]=v(s=>c(),["prevent"])),class:"email"},[e("h2",null,l(o.value[1]),1)])])])])])]))}},L=r(x,[["__scopeId","data-v-2b019e45"]]);export{L as C};
