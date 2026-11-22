(function(){
  var t=document.querySelector('.nav-toggle'),n=document.getElementById('nav');
  t.addEventListener('click',function(){var o=n.classList.toggle('open');t.setAttribute('aria-expanded',o)});
  n.addEventListener('click',function(e){if(e.target.tagName==='A'){n.classList.remove('open');t.setAttribute('aria-expanded',false)}});
  var f=document.getElementById('quote-form'),s=document.getElementById('form-status');
  var fi=document.getElementById('attachment'),fl=document.getElementById('file-list');
  var MAX=10*1024*1024;
  function total(){var t=0;for(var i=0;i<fi.files.length;i++)t+=fi.files[i].size;return t}
  fi.addEventListener('change',function(){
    var n=[];for(var i=0;i<fi.files.length;i++)n.push(fi.files[i].name);
    var t=total();
    if(t>MAX){fl.className='file-list err';fl.textContent='Files are '+(t/1048576).toFixed(1)+' MB. Please keep it under 10 MB total, or email larger files.';}
    else{fl.className='file-list muted';fl.textContent=n.length?'Attached: '+n.join(', '):'';}
  });
  f.addEventListener('submit',function(e){
    if(total()>MAX){e.preventDefault();fi.focus();return;}
    var b=f.querySelector('button[type=submit]');b.disabled=true;s.className='form-status';s.textContent='Sending…';
  });
  if(/[?&]sent=1/.test(location.search)){
    document.getElementById('sent-msg').hidden=false;
    history.replaceState(null,'',location.pathname+'#quote');
  }
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
