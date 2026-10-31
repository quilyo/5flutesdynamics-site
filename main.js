(function(){
  var t=document.querySelector('.nav-toggle'),n=document.getElementById('nav');
  t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o)});
  n.addEventListener('click',function(e){if(e.target.tagName==='A'){n.classList.remove('open');t.setAttribute('aria-expanded',false)}});
  var f=document.getElementById('quote-form'),s=document.getElementById('form-status');
  var mail='mailto:yolquin@5flutesdynamics.com?subject=Quote%20request';
  f.addEventListener('submit',function(e){
    e.preventDefault();
    var b=f.querySelector('button[type=submit]');b.disabled=true;s.className='form-status';s.textContent='Sending…';
    fetch(f.action,{method:'POST',headers:{'Accept':'application/json'},body:new FormData(f)})
      .then(function(r){return r.json()})
      .then(function(d){
        if(d.success){f.reset();s.className='form-status ok';s.textContent='Thanks! Your request was sent. We\'ll get back to you shortly. Remember to email your drawings or CAD files.';}
        else throw new Error(d.message);
      })
      .catch(function(){s.className='form-status err';s.innerHTML='Sorry, something went wrong. Please <a href="'+mail+'">email us directly</a>.';})
      .finally(function(){b.disabled=false});
  });
})();

(function(){
  var tr=document.getElementById('track'); if(!tr) return;
  var g=document.getElementById('gallery'),paused=false,reduce=window.matchMedia&&matchMedia('(prefers-reduced-motion: reduce)').matches;
  function step(d){var w=tr.firstElementChild.getBoundingClientRect().width+14;
    var max=tr.scrollWidth-tr.clientWidth;
    if(d>0&&tr.scrollLeft>=max-4){tr.scrollTo({left:0});}
    else if(d<0&&tr.scrollLeft<=4){tr.scrollTo({left:max});}
    else{tr.scrollBy({left:d*w});}}
  g.querySelector('.g-prev').addEventListener('click',function(){step(-1)});
  g.querySelector('.g-next').addEventListener('click',function(){step(1)});
  ['mouseenter','focusin','touchstart'].forEach(function(e){g.addEventListener(e,function(){paused=true})});
  ['mouseleave','focusout'].forEach(function(e){g.addEventListener(e,function(){paused=false})});
  if(!reduce){setInterval(function(){if(!paused&&!document.hidden)step(1)},3500);}
})();
