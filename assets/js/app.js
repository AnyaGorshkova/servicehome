document.addEventListener("DOMContentLoaded",function(){PubSub.publish("init");for(var e=document.querySelectorAll(".button-order"),t=document.querySelectorAll(".order-modal"),o=document.querySelectorAll(".close"),n=document.querySelectorAll("video"),c=document.querySelectorAll(".staff__video-play"),l=0;l<e.length;l++)e[l].addEventListener("click",function(e){e.preventDefault(),t[0].classList.add("visible")});for(l=0;l<o.length;l++)o[l].addEventListener("click",function(){this.parentNode.parentNode.classList.remove("visible")});c[0].addEventListener("click",function(e){e.stopPropagation(),n[0].paused?n[0].play():n[0].pause()});var r=document.querySelectorAll(".rewiews__item"),i=document.querySelectorAll(".page-pagination__item");for(l=0;l<i.length;l++)i[l].addEventListener("click",function(){for(var e=0;e<i.length;e++)i[e].classList.remove("page-pagination__item--active"),r[e].classList.remove("rewiews__item--active");this.classList.add("page-pagination__item--active"),r[this.dataset.number].classList.add("rewiews__item--active")});var s=document.querySelectorAll(".rewiews__detil");for(l=0;l<s.length;l++)s[l].addEventListener("click",function(){var e=document.querySelectorAll(".abs");console.log(e);for(var t=0;t<e.length;t++)e[t].classList.remove("abs--active");this.children[0].classList.add("abs--active")});var a=document.querySelectorAll(".questions__item");for(document.querySelectorAll(".questions__answers"),l=0;l<a.length;l++)a[l].addEventListener("click",function(){console.log(window.getComputedStyle(this.children[1],null).height),this.children[0].classList.toggle("questions__text--active"),this.children[1].classList.toggle("questions__answers--active")})});var Counter=function(){function e(e){var t=document.querySelector("#days"),o=document.querySelector("#minutes"),n=document.querySelector("#hours"),l=document.querySelector("#sec"),r={days:Math.floor(c/864e5),hours:Math.floor(c%864e5/1e3/60/60),minutes:Math.floor(c%864e5%36e5/1e3/60),sec:Math.floor(c%864e5%36e5%6e4/1e3)};l.textContent=r.sec<10?"0"+r.sec:r.sec,o.textContent=r.minutes,n.textContent=r.hours,t.textContent=r.days}var t,o=new Date,n=new Date(2017,11,7),c=n-o;PubSub.subscribe("init",function(){t=setInterval(function(){(c=Math.round(n-Date.now()))<0?clearInterval(t):e()},1e3)})}(),Calc=function(){var e=document.querySelectorAll(".calc-button")[0],t=document.querySelectorAll(".calc-modal")[0],o=document.querySelectorAll(".slideValue"),n=document.querySelectorAll(".slider"),c=n[0].value,l=document.querySelectorAll(".rooms-count__item--active")[0],r=document.querySelectorAll(".price-offers__item--active")[0],i=document.querySelectorAll(".rooms-count__item"),s=document.querySelectorAll(".price-offers__item");n[0].addEventListener("input",function(){c=n[0].value,o[0].innerHTML=c+" м <sup>2</sup>"});for(var a=0;a<i.length;a++)i[a].addEventListener("click",function(){for(var e=0;e<i.length;e++)i[e].classList.remove("rooms-count__item--active");this.classList.add("rooms-count__item--active"),l=document.querySelectorAll(".rooms-count__item--active")[0]});for(a=0;a<s.length;a++)s[a].addEventListener("click",function(){for(var e=0;e<s.length;e++)s[e].classList.remove("price-offers__item--active");this.classList.add("price-offers__item--active"),r=document.querySelectorAll(".price-offers__item--active")[0]});PubSub.subscribe("init",function(){e.addEventListener("click",function(e){e.preventDefault(),document.querySelectorAll(".calc-modal__rooms")[0].innerHTML=l.innerHTML,document.querySelectorAll(".calc-modal__repair")[0].innerHTML=r.children[1].innerHTML.split(" ")[0],document.querySelectorAll(".calc-modal__sq")[0].innerHTML=c+" м <sup>2</sup>",t.classList.add("visible")})})}();