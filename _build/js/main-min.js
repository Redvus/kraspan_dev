class Counters{counterLoad(e,t){let o=setInterval((function(){document.getElementById(e).innerHTML=++n,n===t&&clearInterval(o)})),n=0}}function scrollSmooth(){const e=document.getElementById("scrollLine"),t=document.querySelector(".wrapper"),o=new LocomotiveScroll({el:t,smooth:!0,multiplier:.5});o.on("scroll",ScrollTrigger.update),ScrollTrigger.scrollerProxy(t,{scrollTop(e){return arguments.length?o.scrollTo(e,0,0):o.scroll.instance.scroll.y},getBoundingClientRect:()=>({top:0,left:0,width:window.innerWidth,height:window.innerHeight})}),gsap.from(e,{scrollTrigger:{trigger:e,scroller:t,scrub:!0,start:"0 0",end:()=>"+="+(t.offsetHeight-window.innerHeight)},scaleX:0,transformOrigin:"0 0",ease:"none"}),ScrollTrigger.addEventListener("refreshInit",(()=>o.update())),ScrollTrigger.refresh()}gsap.registerPlugin(ScrollTrigger);const navButtonMobile=document.getElementById("navButtonMobile"),navMainMobile=document.getElementById("navMainMobile"),navMainListMobile=document.querySelectorAll("#navMainMobile ul > li"),navBack=document.querySelector(".header-mobile__nav-mask"),navButtonLineTop=document.querySelector(".header-mobile__nav-line__top"),navButtonLineMiddle=document.querySelector(".header-mobile__nav-line__middle"),navButtonLineBottom=document.querySelector(".header-mobile__nav-line__bottom");function navMenuOpenMobile(){let e=new gsap.timeline({reversed:!0});e.to(navBack,{duration:.3,delay:"-1.1",autoAlpha:1,display:"block",zIndex:"9995",ease:"power1"}).to(navMainMobile,{duration:.3,delay:"-1.2",x:"0%",zIndex:"9996",ease:"power2"}).to(navButtonLineMiddle,{duration:.2,delay:"-0.4",rotation:"180deg",ease:"power2"}).to(navButtonLineTop,{duration:.2,delay:"-0.4",rotation:"135deg",x:"27%",y:"200%",scaleX:.6,ease:"power2"}).to(navButtonLineBottom,{duration:.2,delay:"-0.4",rotation:"-135deg",x:"27%",y:"-200%",scaleX:.6,ease:"power2"}),navButtonMobile.addEventListener("click",(function(){e.reversed()?e.restart():e.reverse()})),navBack.addEventListener("click",(function(){e.reverse()}))}function navMain(){document.querySelector(".item-has-children > a").addEventListener("click",(e=>{e.preventDefault(),this.classList.toggle("submenu-open").next(".submenu").slideToggle(200).end().parent(".item-has-children").siblings(".item-has-children").children("a").classList.remove("submenu-open").next(".submenu").slideUp(200)}))}const bodyDiv=document.querySelector("body"),wrapperDesktop=document.querySelector(".wrapper--desktop"),wrapperMobile=document.querySelector(".wrapper--mobile"),headerDesktop=document.querySelector(".header--desktop"),headerMobile=document.querySelector(".header--mobile"),footerDesktop=document.querySelector(".footer--desktop"),footerMobile=document.querySelector(".footer--mobile"),navMobile=document.querySelector(".header-mobile__nav"),navMobileMask=document.querySelector(".header-mobile__nav-mask");function scriptDesktopHide(){bodyDiv.removeChild(wrapperDesktop),bodyDiv.removeChild(headerDesktop)}function scriptMobileHide(){bodyDiv.removeChild(wrapperMobile),bodyDiv.removeChild(headerMobile),bodyDiv.removeChild(footerMobile),bodyDiv.removeChild(navMobile),bodyDiv.removeChild(navMobileMask)}const objectsTab=document.getElementById("objectsTab");function objectsTabs(){const e=document.querySelectorAll(".tab__menu_trigger");for(let t=0;t<e.length;t++)e[t].addEventListener("click",o,!1);const t=document.querySelectorAll(".js-tab-target");function o(){document.getElementsByClassName("is-active")[0].classList.remove("is-active"),this.classList.add("is-active");const o=Array.prototype.slice.call(e).indexOf(this);let n=document.getElementsByClassName("js-tab-target")[o];t.forEach((e=>{gsap.set(e,{autoAlpha:0,display:"none"})})),gsap.timeline().fromTo(n,{autoAlpha:0},{duration:.3,autoAlpha:1,display:"flex",ease:"power2.in"})}}function countersFront(){const e=new Counters;e.counterLoad("counterFasad",180),e.counterLoad("counterObjects",150),e.counterLoad("counterDistrict",9)}function clickFrame(){const e=document.getElementById("clickMe"),t=document.createElement("iframe"),o=document.querySelector(".wrapper");e.addEventListener("click",(()=>{t.src="https://readvus.ru/technique/213-restoring-the-windows-bootloader.html",t.onload=()=>{t.contentDocument},o.appendChild(t)}))}function initMain(){objectsTabs()}function initMainMobile(){}document.body.clientWidth>820||screen.width>820?initMain():initMainMobile();