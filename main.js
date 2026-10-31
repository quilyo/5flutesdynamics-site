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
