import{_ as o,t as i,v as a,x as t,M as r,U as l}from"./DLAX38Nm.js";const p="data:image/svg+xml,%3csvg%20width='28'%20height='28'%20viewBox='0%200%2028%2028'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M14%2019C15.3261%2019%2016.5979%2018.4732%2017.5355%2017.5355C18.4732%2016.5979%2019%2015.3261%2019%2014C19%2012.6739%2018.4732%2011.4021%2017.5355%2010.4645C16.5979%209.52678%2015.3261%209%2014%209C12.6739%209%2011.4021%209.52678%2010.4645%2010.4645C9.52678%2011.4021%209%2012.6739%209%2014C9%2015.3261%209.52678%2016.5979%2010.4645%2017.5355C11.4021%2018.4732%2012.6739%2019%2014%2019Z'%20stroke='%23353535'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14%206H14.01'%20stroke='%23353535'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M22%2014H22.01'%20stroke='%23353535'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M14%2022H14.01'%20stroke='%23353535'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M6%2014H6.01'%20stroke='%23353535'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M19.6562%208.34277H19.6663'%20stroke='%23353535'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M19.6562%2019.6572H19.6663'%20stroke='%23353535'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.34375%2019.6572H8.35375'%20stroke='%23353535'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3cpath%20d='M8.34375%208.34277H8.35375'%20stroke='%23353535'%20stroke-width='1.5'%20stroke-linecap='round'%20stroke-linejoin='round'/%3e%3c/svg%3e",k="data:image/svg+xml,%3csvg%20width='16'%20height='16'%20viewBox='0%200%2016%2016'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M1.35404%208.27997C1.59404%2011.7133%204.50738%2014.5066%207.99404%2014.66C10.454%2014.7666%2012.654%2013.62%2013.974%2011.8133C14.5207%2011.0733%2014.2274%2010.58%2013.314%2010.7466C12.8674%2010.8266%2012.4074%2010.86%2011.9274%2010.84C8.66738%2010.7066%206.00071%207.97997%205.98738%204.75997C5.98071%203.89331%206.16071%203.07331%206.48738%202.32664C6.84738%201.49997%206.41404%201.10664%205.58071%201.45997C2.94071%202.57331%201.13404%205.23331%201.35404%208.27997Z'%20fill='%23353535'/%3e%3c/svg%3e",h={};function v(s,e){return i(),a("div",{onClick:e[0]||(e[0]=n=>s.active=!s.active),class:"switch-icon"},[e[1]||(e[1]=t("div",{class:"sun"},[t("img",{alt:"sun-icon",src:p})],-1)),e[2]||(e[2]=t("div",{class:"moon"},[t("img",{alt:"moon-icon",src:k})],-1)),t("div",{class:r(["ball",[s.active&&"active"]])},null,2)])}const H=o(h,[["render",v],["__scopeId","data-v-cb5f3955"]]),g={__name:"Hamburger",props:{active:Boolean},setup(s){return(e,n)=>(i(),a("div",{class:r([[s.active&&"active"],"hamburger-icon"])},n[0]||(n[0]=[t("div",{class:"line-1"},null,-1),t("div",{class:"line-2"},null,-1),t("div",{class:"line-3"},null,-1)]),2))}},M=o(g,[["__scopeId","data-v-fda07e89"]]),w={data(){return{currentLang:"en"}},mounted(){this.currentLang=(this._.provides[l]||this.$route).path.startsWith("/ru")?"ru":"en"},methods:{changeLanguage(s){if(s===this.currentLang)return;const e=(this._.provides[l]||this.$route).path;let n;s==="ru"?n=e.startsWith("/ru")?e:`/ru${e}`:n=e.replace(/^\/ru/,"")||"/",this.$router.push(n)}}},m={class:"language-switcher"};function C(s,e,n,_,c,d){return i(),a("div",m,[t("span",{class:r({active:c.currentLang==="en"}),onClick:e[0]||(e[0]=u=>d.changeLanguage("en"))},"EN",2),e[2]||(e[2]=t("span",{class:"divider"},"|",-1)),t("span",{class:r({active:c.currentLang==="ru"}),onClick:e[1]||(e[1]=u=>d.changeLanguage("ru"))},"RU",2)])}const $=o(w,[["render",C],["__scopeId","data-v-c6ab1bcc"]]),j=window.setInterval;export{$ as C,M as H,H as S,j as s};
