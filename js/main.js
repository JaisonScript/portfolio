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
function list(a,f,d){return(a||[]).map(function(x,i){return f(x,'style="--d:'+(i*(d||.08))+'s"')}).join("")}

document.title=P.firstName+" "+P.lastName+" — Portfolio";
$("#name").innerHTML="Hi, I’m <span class=\"grad\">"+P.firstName+" "+P.lastName+"</span>";
$("#headline").textContent=P.headline;
$("#fname").textContent=P.firstName+" "+P.lastName;
$("#yr").textContent=new Date().getFullYear();
$("#photo").innerHTML='<img src="'+P.photo+'" alt="'+P.firstName+'" onerror="this.outerHTML=\'<div>'+P.firstName[0]+P.lastName[0]+'</div>\'">';
$("#heroBtns").innerHTML=btn("w",wa,I.wa,"Chat on WhatsApp",1)+btn("",S.linkedin,I.li,"LinkedIn",1)+btn("m",mail,I.ml,"Email me");
$("#ctaBtns").innerHTML=btn("w",wa,I.wa,S.whatsapp.display,1)+btn("m",mail,I.ml,S.email)+btn("",S.linkedin,I.li,"Connect on LinkedIn",1);
$("#socLine").innerHTML='Personal side? <a href="'+S.instagram+'" target="_blank" rel="noopener">Instagram '+S.instagramHandle+'</a>'+(S.blog?' · Writing: <a href="'+S.blog+'" target="_blank" rel="noopener">'+S.blogName+'</a>':'');
$("#fab").href=wa;$("#fab").innerHTML=I.wa;
$("#aboutTxt").innerHTML=P.about.map(function(p){return"<p>"+p+"</p>"}).join("");
$("#skills").innerHTML=P.skills.map(function(s){return"<span>"+s+"</span>"}).join("");
var m=P.skills.concat(P.skills).map(function(s){return"<span>"+s+" ✦</span>"}).join("");$("#mq").innerHTML=m+m;
$("#stats").innerHTML=list(P.stats,function(s,d){return'<div class="card stat rv tilt" '+d+'><b data-n="'+s.value+'" data-s="'+s.suffix+'">0</b><span>'+s.label+'</span></div>'});
$("#expList").innerHTML=list(window.EXPERIENCE,function(e,d){return'<article class="card rv exp-company" '+d+'><header class="exp-company-head"><h3>'+e.company+'</h3>'+(e.location?'<small>'+e.location+'</small>':'')+(e.roles.length>1?'<span class="exp-progression">Role progression</span>':'')+'</header><div class="exp-roles">'+e.roles.map(function(r){return'<div class="exp-role"><small>'+r.period+(r.type?' · '+r.type:'')+'</small><h4>'+r.title+'</h4><p>'+r.description+'</p>'+(r.tags&&r.tags.length?'<div class="tags pj">'+r.tags.map(function(t){return"<span>"+t+"</span>"}).join("")+'</div>':'')+'</div>'}).join("")+'</div></article>'},.1);
$("#eduList").innerHTML=list(window.EDUCATION,function(e,d){return'<div class="card rv" '+d+'><small>'+e.period+'</small><h3>'+e.degree+' · '+e.school+'</h3><p>'+e.description+'</p></div>'},.1);
$("#projList").innerHTML=list(window.PROJECTS,function(p,d){return'<div class="card pj rv tilt" '+d+'><div class="ic">✦</div><h3>'+p.title+'</h3><p>'+p.description+'</p><div class="tags">'+(p.tags||[]).map(function(t){return"<span>"+t+"</span>"}).join("")+'</div>'+(p.link?'<a class="lk" href="'+p.link+'" target="_blank" rel="noopener">View project →</a>':'')+'</div>'});
$("#certList").innerHTML=list(window.CERTIFICATIONS,function(c,d){return'<div class="card rv tilt" '+d+'><div class="ic">✓</div><h3>'+c.name+'</h3><p>'+c.issuer+' · '+c.year+'</p>'+(c.link?'<a class="lk" href="'+c.link+'" target="_blank" rel="noopener">Verify →</a>':'')+'</div>'});

var ti=0,ci=0,del=false,el=$("#typed");
(function t(){var w=P.roles[ti];ci+=del?-1:1;el.textContent=w.slice(0,ci);var d=del?40:85;
if(!del&&ci===w.length){del=true;d=1400}else if(del&&ci===0){del=false;ti=(ti+1)%P.roles.length;d=300}setTimeout(t,d)})();

var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;e.target.classList.add("in");
var n=e.target.querySelector("[data-n]");if(n){var T=+n.dataset.n,s=n.dataset.s,st=performance.now();
(function f(x){var p=Math.min((x-st)/1400,1);n.textContent=Math.round(T*(1-Math.pow(1-p,3)))+s;if(p<1)requestAnimationFrame(f)})(st)}
io.unobserve(e.target)})},{threshold:.15});
document.querySelectorAll(".rv").forEach(function(e){io.observe(e)});

var links=document.querySelectorAll("nav a"),secs=[].map.call(links,function(a){return $(a.getAttribute("href"))});
addEventListener("scroll",function(){var h=document.documentElement;$("#bar").style.width=(h.scrollTop/(h.scrollHeight-h.clientHeight)*100)+"%";
var y=scrollY+innerHeight/3;secs.forEach(function(s,i){links[i].classList.toggle("on",s.offsetTop<=y&&s.offsetTop+s.offsetHeight>y)})},{passive:true});

if(matchMedia("(hover:hover)").matches){var g=$("#glow");addEventListener("pointermove",function(e){g.style.transform="translate("+e.clientX+"px,"+e.clientY+"px)"},{passive:true});
document.querySelectorAll(".tilt").forEach(function(c){c.addEventListener("pointermove",function(e){var r=c.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;c.style.transform="perspective(700px) rotateY("+x*8+"deg) rotateX("+-y*8+"deg) translateY(-3px)"});
c.addEventListener("pointerleave",function(){c.style.transform=""})})}
$("#th").onclick=function(){var r=document.documentElement,d=r.dataset.theme?r.dataset.theme==="dark":matchMedia("(prefers-color-scheme:dark)").matches;r.dataset.theme=d?"light":"dark"};
})();
