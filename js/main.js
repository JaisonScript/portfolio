(function(){
var $=function(s){return document.querySelector(s)},P=window.PROFILE,S=window.SOCIAL;
var I={
wa:'<svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm5.5 14.2c-.2.6-1.3 1.2-1.8 1.2-.5.1-1 .2-3.3-.7-2.8-1.1-4.6-4-4.7-4.2-.1-.2-1.1-1.5-1.1-2.8s.7-2 1-2.3c.2-.3.5-.3.7-.3h.5c.2 0 .4 0 .6.5l.8 2c.1.2.1.3 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.3.8 1.3 1.7 2.1 1.1 1 2.1 1.3 2.4 1.5.3.1.5.1.7-.1l.9-1.1c.2-.3.4-.2.7-.1l1.9.9c.3.1.5.2.5.4.1.1.1.7-.1 1.2z"/></svg>',
li:'<svg viewBox="0 0 24 24"><path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5zM3 9.5h4V21H3zM9.5 9.5h3.8v1.6h.1c.5-1 1.8-1.9 3.7-1.9 4 0 4.7 2.600 4.700 6V21h-4v-5c0-1.2 0-2.8-1.700-2.800s-2 1.300-2 2.700V21h-4z"/></svg>',
ml:'<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 8L4.5 7.5v.1L12 13l7.5-5.4v-.1z"/></svg>',
ig:'<svg viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3zm5 3.500a4.500 4.500 0 1 1 0 9 4.500 4.500 0 0 1 0-9zm0 2a2.500 2.500 0 1 0 0 5 2.500 2.500 0 0 0 0-5zM17.500 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/></svg>'};
var wa="https://wa.me/"+S.whatsapp.number+"?text="+encodeURIComponent(S.whatsapp.message);
var mail="mailto:"+S.email+"?subject="+encodeURIComponent("Hello "+P.firstName);
function btn(c,h,ic,t,ext){return'<a class="btn '+c+'" href="'+h+'"'+(ext?' target="_blank" rel="noopener"':'')+'>'+ic+t+'</a>'}
function list(a,f,d){return(a||[]).map(function(x,i){return f(x,'style="--d:'+Math.min(i*(d||.08),.48)+'s"',i)}).join("")}

document.title=P.firstName+" "+P.lastName+" | Senior Software Engineer & Full-Stack Developer";
$("#name").innerHTML="Hi, I’m <span class=\"grad\">"+P.firstName+" "+P.lastName+"</span>";
$("#headline").textContent=P.headline;
$("#fname").textContent=P.firstName+" "+P.lastName;
$("#yr").textContent=new Date().getFullYear();
$("#heroLocation").textContent=P.location;
$("#heroProof").innerHTML=P.stats.slice(0,3).map(function(s){return'<div class="hero-proof-item"><strong>'+s.value+s.suffix+'</strong><span>'+s.label+'</span></div>'}).join("");
$("#photo").innerHTML='<img src="'+P.photo+'" alt="'+P.firstName+'" onerror="this.outerHTML=\'<div>'+P.firstName[0]+P.lastName[0]+'</div>\'">';
$("#heroBtns").innerHTML=btn("w",wa,I.wa,"Chat on WhatsApp",1)+btn("",S.linkedin,I.li,"LinkedIn",1)+btn("m",mail,I.ml,"Email me");
$("#ctaBtns").innerHTML=btn("w",wa,I.wa,S.whatsapp.display,1)+btn("m",mail,I.ml,S.email)+btn("",S.linkedin,I.li,"Connect on LinkedIn",1);
$("#socLine").innerHTML='Personal side? <a href="'+S.instagram+'" target="_blank" rel="noopener">Instagram '+S.instagramHandle+'</a>'+(S.blog?' · Writing: <a href="'+S.blog+'" target="_blank" rel="noopener">'+S.blogName+'</a>':'');
$("#fab").href=wa;$("#fab").innerHTML=I.wa;
$("#aboutTxt").innerHTML=P.about.map(function(p){return"<p>"+p+"</p>"}).join("");
$("#skills").innerHTML=P.skills.map(function(s){return"<span>"+s+"</span>"}).join("");
var m=P.skills.concat(P.skills).map(function(s){return"<span>"+s+" ✦</span>"}).join("");$("#mq").innerHTML=m+m;
$("#stats").innerHTML=list(P.stats,function(s,d){return'<div class="card stat rv tilt" '+d+'><b data-n="'+s.value+'" data-s="'+s.suffix+'">0</b><span>'+s.label+'</span></div>'});
$("#expList").innerHTML=list(window.EXPERIENCE,function(e,d){var latest=e.roles[0];return'<details class="card rv exp-company" '+d+'><summary class="exp-company-summary"><span class="exp-company-name"><strong>'+e.company+'</strong>'+(e.location?'<small>'+e.location+'</small>':'')+'</span><span class="exp-summary-role">'+latest.title+'<small>'+latest.period+'</small></span></summary><div class="timeline-disclosure"><div><div class="exp-roles">'+e.roles.map(function(r,i){return'<div class="exp-role">'+(i?'<small>'+r.period+(r.type?' · '+r.type:'')+'</small><h4>'+r.title+'</h4>':'')+'<p>'+r.description+'</p>'+(r.tags&&r.tags.length?'<div class="tags pj">'+r.tags.map(function(t){return"<span>"+t+"</span>"}).join("")+'</div>':'')+'</div>'}).join("")+'</div></div></div></details>'},.1);
$("#eduList").innerHTML=list(window.EDUCATION,function(e,d){return'<details class="card rv education-entry" '+d+'><summary><small>'+e.period+'</small><h3>'+e.degree+'</h3><span class="education-school">'+e.school+'</span></summary><div class="timeline-disclosure"><div><p>'+e.description+'</p></div></div></details>'},.1);
function projectGroup(hidden){return'<div class="project-group"'+(hidden?' aria-hidden="true"':'')+'>'+list(window.PROJECTS,function(p,d,i){var tab=hidden?' tabindex="-1"':'';return'<article class="card pj rv project-card" data-project-index="'+i+'" '+d+'><button class="project-spine" type="button" aria-expanded="false"'+tab+'>'+p.title+'</button><div class="project-content"><h3>'+p.title+'</h3><p class="project-description">'+p.description+'</p><div class="tags">'+(p.tags||[]).map(function(t){return"<span>"+t+"</span>"}).join("")+'</div>'+(p.link?'<a class="lk" href="'+p.link+'" target="_blank" rel="noopener"'+tab+'>View project →</a>':'')+'</div></article>'})+'</div>'}
$("#projList").innerHTML='<div class="project-track">'+projectGroup(false)+projectGroup(true)+'</div>';
$("#certList").innerHTML=list(window.CERTIFICATIONS,function(c,d){return'<article class="card rv cert-card" '+d+'><header class="cert-meta"><span class="cert-mark" aria-hidden="true">✓</span>'+(c.year?'<span class="cert-year">'+c.year+'</span>':'')+'</header><h3>'+c.name+'</h3><p class="cert-issuer">'+c.issuer+'</p>'+(c.link?'<a class="cert-link" href="'+c.link+'" target="_blank" rel="noopener">Verify credential <span aria-hidden="true">↗</span></a>':'<span class="cert-completed">Completed</span>')+'</article>'});

var ti=0,ci=0,del=false,el=$("#typed");
(function t(){var w=P.roles[ti];ci+=del?-1:1;el.textContent=w.slice(0,ci);var d=del?40:85;
if(!del&&ci===w.length){del=true;d=1400}else if(del&&ci===0){del=false;ti=(ti+1)%P.roles.length;d=300}setTimeout(t,d)})();

var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;e.target.classList.add("in");
var n=e.target.querySelector("[data-n]");if(n){var T=+n.dataset.n,s=n.dataset.s,st=performance.now();
(function f(x){var p=Math.min((x-st)/1400,1);n.textContent=Math.round(T*(1-Math.pow(1-p,3)))+s;if(p<1)requestAnimationFrame(f)})(st)}
io.unobserve(e.target)})},{threshold:.12,rootMargin:"0px 0px -32px 0px"});
document.querySelectorAll(".rv").forEach(function(e){io.observe(e)});

var shelf=$("#projList"),shelfCards=shelf.querySelectorAll(".project-card");
shelfCards.forEach(function(c){var spine=c.querySelector(".project-spine"),pair=shelf.querySelectorAll('[data-project-index="'+c.dataset.projectIndex+'"]');
function syncPair(){var hovered=Array.prototype.some.call(pair,function(card){return card.matches(":hover")}),focused=Array.prototype.some.call(pair,function(card){return card.contains(document.activeElement)});pair.forEach(function(card){card.classList.toggle("is-hovered",hovered);card.classList.toggle("is-focused",focused);card.querySelector(".project-spine").setAttribute("aria-expanded",hovered||focused?"true":"false")})}
spine.addEventListener("pointerdown",function(e){if(e.pointerType==="mouse")e.preventDefault()});
c.addEventListener("pointerdown",function(e){if(e.pointerType==="mouse"&&Array.prototype.some.call(pair,function(card){return card.contains(document.activeElement)})){document.activeElement.blur();syncPair()}});
c.addEventListener("pointerenter",syncPair);
c.addEventListener("pointerleave",function(){requestAnimationFrame(syncPair)});
c.addEventListener("focusin",syncPair);
c.addEventListener("focusout",function(){requestAnimationFrame(syncPair)})});

var timelineCards=document.querySelectorAll(".tl>details");
timelineCards.forEach(function(card){var summary=card.querySelector("summary"),disclosure=card.querySelector(".timeline-disclosure"),closeTimer;
function closeCard(){if(!card.open||card.classList.contains("timeline-closing"))return;if(matchMedia("(prefers-reduced-motion: reduce)").matches){card.open=false;return}card.classList.add("timeline-closing");closeTimer=setTimeout(function(){card.open=false;card.classList.remove("timeline-closing")},700)}
function openCard(){clearTimeout(closeTimer);card.classList.remove("timeline-closing");timelineCards.forEach(function(other){if(other!==card)closeCard()});card.open=true}
summary.addEventListener("click",function(e){e.preventDefault()});
card.addEventListener("pointerenter",openCard);
card.addEventListener("pointerleave",function(){if(!card.contains(document.activeElement))closeCard()});
card.addEventListener("focusin",openCard);
card.addEventListener("focusout",function(e){if(!card.contains(e.relatedTarget)&&!card.matches(":hover"))closeCard()});
disclosure.addEventListener("transitionend",function(e){if(e.target===disclosure&&e.propertyName==="grid-template-rows"&&card.classList.contains("timeline-closing")){clearTimeout(closeTimer);card.open=false;card.classList.remove("timeline-closing")}})});
if(!matchMedia("(prefers-reduced-motion: reduce)").matches){
var lastFrame=0,manualPauseUntil=0,hasHover=matchMedia("(hover: hover)").matches,pointerOnShelf=false,firstGroup=shelf.querySelector(".project-group");
function pauseShelf(){manualPauseUntil=performance.now()+5000}
shelf.addEventListener("wheel",pauseShelf,{passive:true});
shelf.addEventListener("touchstart",pauseShelf,{passive:true});
shelf.addEventListener("pointerdown",function(e){if(e.pointerType==="touch")pauseShelf()});
shelf.addEventListener("pointerenter",function(e){if(e.pointerType!=="touch")pointerOnShelf=true});
shelf.addEventListener("pointerleave",function(e){if(e.pointerType!=="touch")pointerOnShelf=false});
(function scrollShelf(now){var r=shelf.getBoundingClientRect(),visible=r.bottom>0&&r.top<innerHeight,interacting=(hasHover&&(pointerOnShelf||shelf.matches(":hover")))||shelf.contains(document.activeElement)||now<manualPauseUntil,distance=firstGroup.getBoundingClientRect().width;
if(lastFrame&&visible&&!interacting&&distance>shelf.clientWidth){shelf.scrollLeft+=(now-lastFrame)*.028;if(shelf.scrollLeft>=distance)shelf.scrollLeft-=distance}lastFrame=now;requestAnimationFrame(scrollShelf)})(performance.now());
}

var links=document.querySelectorAll("nav a"),secs=[].map.call(links,function(a){return $(a.getAttribute("href"))});
addEventListener("scroll",function(){var h=document.documentElement;$("#bar").style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+"%";
var y=scrollY+innerHeight/3;secs.forEach(function(s,i){links[i].classList.toggle("on",s.offsetTop<=y&&s.offsetTop+s.offsetHeight>y)})},{passive:true});

if(matchMedia("(hover:hover)").matches){var g=$("#glow");addEventListener("pointermove",function(e){g.style.transform="translate("+e.clientX+"px,"+e.clientY+"px)"},{passive:true});
document.querySelectorAll(".tilt").forEach(function(c){c.addEventListener("pointermove",function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform="perspective(700px) rotateY("+x*8+"deg) rotateX("+-y*8+"deg) translateY(-3px)"});
c.addEventListener("pointerleave",function(){c.style.transform=""})})}
$("#th").onclick=function(){var r=document.documentElement,d=r.dataset.theme?r.dataset.theme==="dark":matchMedia("(prefers-color-scheme:dark)").matches;r.dataset.theme=d?"light":"dark"};
})();
