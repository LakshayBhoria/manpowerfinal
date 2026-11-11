/* ===== EDIT THESE BEFORE GOING LIVE ===== */
var CONFIG={googleForm:'',whatsapp:'919350009595',email:'hr@snenterprises.example',phoneDisplay:'+91 93500 09595'};
/* ========================================= */
(function(){
 var wa=document.getElementById('waFab');if(wa){wa.href='https://wa.me/'+CONFIG.whatsapp}
 document.querySelectorAll('[data-wa]').forEach(function(a){a.href='https://wa.me/'+CONFIG.whatsapp});
 document.querySelectorAll('[data-mail]').forEach(function(a){a.href='mailto:'+CONFIG.email});
 document.querySelectorAll('[data-tel]').forEach(function(a){a.href='tel:+'+CONFIG.whatsapp});
 [['quickForm','Quick enquiry'],['reqForm','Manpower request'],['jobForm','Job application']].forEach(function(p){
  var f=document.getElementById(p[0]);if(!f)return;
  f.addEventListener('submit',function(e){e.preventDefault();
   var lines=['*'+p[1]+' - S.N. Enterprises website*'];
   f.querySelectorAll('label').forEach(function(l){var c=l.querySelector('input,select,textarea');if(!c||c.type==='file')return;
    var t=(l.childNodes[0]&&l.childNodes[0].textContent||'').trim();var v=(c.value||'').trim();if(v)lines.push(t+': '+v)});
   var url='https://wa.me/'+CONFIG.whatsapp+'?text='+encodeURIComponent(lines.join('\n'));
   var ok=f.querySelector('.ok');if(ok){ok.style.display='block';ok.textContent='Thank you. WhatsApp is opening with your details. Press send to reach us.'}
   window.open(url,'_blank','noopener');f.reset();
  });
 });
 /* Google Form: if CONFIG.googleForm is set, the forms are replaced by the Google Form */
 var gf=CONFIG.googleForm;
 if(gf){
  var btn=function(t){return '<a class="btn dark" href="'+gf+'" target="_blank" rel="noopener">'+t+'</a>'};
  var q=document.getElementById('quickForm');
  if(q)q.outerHTML='<div class="quick"><h3>Quick enquiry</h3><p>Get a shortlist within 72 hours.</p>'+btn('Fill enquiry form')+'</div>';
  var r=document.getElementById('reqForm');
  if(r){r.outerHTML=/docs\.google\.com\/forms/.test(gf)
   ?'<div class="fcard rv show"><iframe title="Manpower request form" src="'+gf+(gf.indexOf('?')>-1?'&':'?')+'embedded=true" style="width:100%;height:1000px;border:0" loading="lazy">Loading…</iframe></div>'
   :'<div class="fcard rv show"><h3>Request manpower</h3><p>Fill our short form and we will contact you within one working day.</p>'+btn('Open request form')+'</div>'}
  var jf=document.getElementById('jobForm');
  if(jf)jf.outerHTML='<div class="fcard rv show"><h3>Apply now</h3><p>Fill the form and our team will call you if your profile matches.</p>'+btn('Open application form')+'</div>';
 }
})();

document.documentElement.classList.add('js');

var nav=document.getElementById('nav'),m=document.getElementById('menu');
var dr=document.getElementById('drawer'),ov=document.getElementById('ov');
function tog(o){dr.classList.toggle('on',o);ov.classList.toggle('on',o);m.setAttribute('aria-expanded',o);document.body.style.overflow=o?'hidden':''}
m.onclick=function(){tog(!dr.classList.contains('on'))};
ov.onclick=function(){tog(false)};
dr.onclick=function(e){if(e.target.closest('a,.x'))tog(false)};
document.addEventListener('keydown',function(e){if(e.key==='Escape')tog(false)});

document.querySelectorAll('[data-role]').forEach(function(b){b.onclick=function(){var s=document.getElementById('role');s.value=b.dataset.role;document.getElementById('jobForm').scrollIntoView();s.focus()}});
function count(el){var n=+el.dataset.n,s=el.dataset.s||'',t0=null;function f(t){t0=t0||t;var p=Math.min((t-t0)/1600,1),e=1-Math.pow(1-p,3);el.textContent=Math.round(n*e).toLocaleString('en-IN')+s;if(p<1)requestAnimationFrame(f)}requestAnimationFrame(f)}
function route(hh){var h=(typeof hh==='string')?hh:location.hash.slice(1),home=!h||h==='top'||h==='services';
document.querySelectorAll('.pg').forEach(function(s){s.classList.toggle('on',s.id===h)});
document.body.dataset.v=home?'home':'page';
var t=h&&document.getElementById(h);
if(t&&t.offsetParent!==null&&h!=='top')setTimeout(function(){t.scrollIntoView()},0);else window.scrollTo(0,0)}
window.addEventListener('hashchange',function(){route()});route();
document.addEventListener('click',function(e){var a=e.target.closest&&e.target.closest('a[href^="#"]');if(!a)return;var h=a.getAttribute('href').slice(1);e.preventDefault();try{history.replaceState(null,'','#'+h)}catch(_){}route(h)});
var els=document.querySelectorAll('.rv');
if('IntersectionObserver' in window){
 var io=new IntersectionObserver(function(es){es.forEach(function(e){if(!e.isIntersecting)return;var t=e.target;
  t.style.transitionDelay=(Array.prototype.indexOf.call(t.parentNode.children,t)%3)*0.12+'s';t.classList.add('show');
  t.querySelectorAll('[data-n]').forEach(count);
  if(t.parentNode.id==='steps')t.parentNode.classList.add('go');
  io.unobserve(t)})},{threshold:.15});
 els.forEach(function(e){io.observe(e)});
}else{els.forEach(function(e){e.classList.add('show')});document.querySelectorAll('[data-n]').forEach(function(e){e.textContent=e.dataset.n+(e.dataset.s||'')})}

/* gallery folders + viewer */
(function(){
 var main=document.getElementById('galMain'),fol=document.getElementById('galFolder'),lb=document.getElementById('lb');
 if(!main||!fol)return;
 function show(f){main.hidden=!!f;fol.hidden=!f;var g=document.getElementById('gallery');if(g)g.scrollIntoView()}
 document.querySelectorAll('[data-folder]').forEach(function(b){b.addEventListener('click',function(){show(b.dataset.folder)})});
 document.getElementById('galBack').addEventListener('click',function(){show(null)});
 if(!lb)return;
 var im=lb.querySelector('img'),cap=lb.querySelector('p');
 function close(){lb.hidden=true;im.removeAttribute('src')}
 fol.querySelectorAll('[data-lb]').forEach(function(a){a.addEventListener('click',function(e){e.preventDefault();im.src=a.getAttribute('href');im.alt=cap.textContent=a.dataset.lb;lb.hidden=false})});
 lb.addEventListener('click',close);
 document.addEventListener('keydown',function(e){if(e.key==='Escape'&&!lb.hidden)close()});
})();
